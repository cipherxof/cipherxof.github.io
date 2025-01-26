---
layout: post
title:  "Ladders Leviathan"
date:   2025-01-25 11:37:00 -0700
categories: reverse engineering
tag:
  - Reverse Engineering
  - MGS4
usemathjax: false
---

### Introduction

This post outlines one of the more interesting issues that I had to solve when working on custom maps for <a href="https://en.wikipedia.org/wiki/Metal_Gear_Online" target="_blank" rel="noopener">Metal Gear Online 2</a> (MGO2). 

First, a bit of backstory. There was a spinoff game for MGO2 called <a href="https://metalgear.fandom.com/wiki/Metal_Gear_Arcade" target="_blank" rel="noopener">Metal Gear Arcade</a> (MGAC), which as the name implies was intended to be played in actual arcades instead of at home on consoles. There are a lot of differences between MGAC and MGO2, but they do in fact run on the exact same game engine. Despite that, they were developed for vastly different hardware - MGAC running on x86 arcade systems while MGO2 ran on the PlayStation 3’s CELL processor. 

The arcade version actually has two maps that never made it officially to the console version. One of those maps is called Lethal Leviathan, and it ended up being ported to MGO2 by <a href="https://github.com/Jayveer" target="_blank" rel="noopener">Jayveer</a> in 2021. At the time, it was probably the largest update the MGO2 community had seen since the original servers were taken down. However, there were some issues with the map. Most notably, the entire second level could only be accessed via ladders that required a special side-stepping animation to reach the ledge. This was a problem because the game didn't include this animation *and* the netcode didn't support synchronizing this animation state. No other map in the game used this feature, so it makes sense as to why it wasn't supported. 

During this time, the game was still supporting players on the PS3's Official Firmware, which meant patching the game was out of the question, so the map was decided to be released without any ladders rendering the entire second level inaccessible.

### Experimenting

Looking through the game files, we can find an older unused animation file that actually does include the side stepping animation, but the animation only existed for male characters. This makes sense as MGS4 makes use of these animations in the story mode for Old Snake. Attempts were made to try and force the game to use this animation, but as you can see in the following video, the animation state isn't synchronized properly.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/uK5CjQ8MnV4" frameborder="0" allowfullscreen></iframe>

Funny enough, the arcade game has a version of the map with ladders and it has these same issues.

### Patching

The MGO2 revival project ditched support for official firmwares in 2022 so that we could focus on expanding the game even further. This eventually led me back to investigating the ladder issue. The first step was getting the animation working locally, which had been partially done before by swapping the latest animation file with the old one that had the side stepping animation. This led to a <a href="https://youtu.be/fdTa2c5Y3fU?t=15" target="_blank" rel="noopener">bunch of other issues</a> though, as the animation indices weren't a match for the latest animation file. Fortunately, <a href="https://github.com/Zoft123" target="_blank" rel="noopener">Zoft</a> eventually found a way to transpose animations, allowing us to inject the side stepping animation - which luckily also worked for female characters.

<figure>
<img src="/assets/img/ladder.gif" alt="custom content">
<figcaption>The side stepping ladder animation</figcaption>
</figure>

Now with the animations working locally, we still have one major issue. Desyncs. The animation works for you, but other players see you falling off the ladder and teleporting to the top. In order to solve this, I needed a way to find the code responsible for handling the ladder states locally and then synchronize it for all of the players. Looking at the games scripting engine (GCL), we can quickly find some functions responsible for dealing with ladders and look them up in the binary.

{% highlight cpp %}
int PL_CMD_StartLadder(void)
{
  player = FUN_002f7d70();
  piVar1 = (int *)PL_Player::GetPlugin(player,0x975d91);
  uVar7 = 0;
  if (piVar1 != (int *)0x0) {
    pbVar2 = GCL_GetOptionCodeValue(0x439df0,(byte *)0x0);
    pbVar3 = (byte *)GM_TrapGetRegion();
    pbVar3 = GCL_GetOptionCodeValue(0x853338,pbVar3);
    pbVar4 = GCL_GetOptionCodeValue(0x3b5d10,(byte *)0x5);
    pbVar5 = GCL_GetOptionCodeValue(0x52454c,&DAT_000003e8);
    dVar8 = (double)(longlong)(int)pbVar5;
    pbVar5 = GCL_GetOptionCodeValue(0xb9aa8a,(byte *)0x2000);
    pbVar6 = GCL_GetOptionCode(0x3491ec);
    if (pbVar6 == (byte *)0x0) {
      uVar7 = (***(code ***)(*piVar1 + 0xc0))(dVar8,piVar1,pbVar2,pbVar3,pbVar4);
      return uVar7;
    }
    uVar7 = (***(code ***)(*piVar1 + 0xc0))
                      (dVar8,piVar1,pbVar2,pbVar3,0xffffffffffffffff,*(code ***)(*piVar1 + 0xc0),
                       (short)pbVar5,0,1);
  }
  return uVar7;
}
{% endhighlight %}

Here we can see the game loads a plugin with the hash `0x975d91`, which we can infer is probably the ladder plugin. By searching the binary for references to this hash and through subsequent debugging and testing, I eventually located the following piece of code.

{% highlight cpp %}
/* ladder id */
iVar9 = NT_MSGBUF::Read(param_2,(undefined *)&local_7c,1);
if (iVar9 != 0) {
    iVar9 = PL_Player::GetPlugin(param_1,0x975d91);
    /* step */
    NT_MSGBUF::Read(param_2,(undefined *)&local_7e,1);
    *(int *)(iVar9 + 0x128) = (int)local_7c._0_1_;
    *(ushort *)(iVar9 + 0x82) = (ushort)local_7e._0_1_;
}
{% endhighlight %}

Every time another player climbed a ladder, my breakpoint would trigger. After hopping around various pointers, I discovered that the side-stepping animation ID was actually being stored in memory for other networked players, though the game wasn't processing it for some reason. This was a good sign – it meant we wouldn't need to modify any network packets.

After going through all the addresses reading from our ladder plugin's current step value (offset `0x128`), I finally landed on the folllowing function:

{% highlight cpp %}
int ReadLadderMotion(int param_1)
{
  undefined *puVar1;
  int iVar2;
  int iVar3;
  
  puVar1 = PTR_PTR_s_NULL_tochu-sousinzumi_TIME_06_0121b89c;
  iVar3 = *(int *)(param_1 + 0x1c);
  if (-1 < *(int *)(param_1 + 0x128)) {
    iVar2 = FUN_002bcb38(0,(longlong)*(int *)(param_1 + 0x128));
    if (iVar2 != 0) {
      *(int *)(param_1 + 0x5c) = iVar2;
      iVar3 = *(int *)(iVar3 + 0x824);
      if (iVar3 - 0x9aU < 0x1d) {
        // dispatching happens here
        iVar3 = (*(code *)(*(int *)((iVar3 + -0x9a) * 4 + *(int *)(puVar1 + -0x7fc0)) +
                          *(int *)(puVar1 + -0x7fc0)))();
        return iVar3;
      }
    }
  }
  return 0;
}
{% endhighlight %}

This function is responsible for dispatching the proper state handler for the current ladder animation. Great, so what function is called when our side step animation is triggered? Looking at the code in Ghidra, we can see it's using a branch table - effectively a giant switch statement - for handling different ladder states.

```
00 00 01 40     addr      FUN_0084c98c            [0]                                                                                                              
00 00 01 40     addr      FUN_0084c98c            [1]
00 00 01 98     addr      FUN_0084c9e4            [2]
00 00 01 98     addr      FUN_0084c9e4            [3]
ff ff ff c0     addr      FUN_0084c80c            [4]
ff ff ff c0     addr      FUN_0084c80c            [5]
ff ff ff c0     addr      FUN_0084c80c            [6]
ff ff ff c0     addr      FUN_0084c80c            [7]
ff ff ff c0     addr      FUN_0084c80c            [8]
ff ff ff c0     addr      FUN_0084c80c            [9]
00 00 00 dc     addr      FUN_0084c928            [10]
00 00 01 40     addr      FUN_0084c98c            [11]
...
```

What a surprise, our side step animation is triggering code which does nothing.

{% highlight cpp %}
int FUN_0084c80c()
{
  return 0;
}
{% endhighlight %}

Now, how do we get it to do *something*? We patch the table to point to a function that we can hook.

{% highlight cpp %}
PatchAddress(0x84c864, new uint32_t[1]{ 0x00000140 }, 4); // step off left
PatchAddress(0x84c868, new uint32_t[1]{ 0x00000140 }, 4); // step off right
PatchAddress(0x84c860, new uint32_t[1]{ 0x00000140 }, 4); // stop on left
PatchAddress(0x84c85c, new uint32_t[1]{ 0x00000140 }, 4); // stop on right
{% endhighlight %}

With this patch, all side step ladder animations will call `FUN_0084c98c`. However, since this function doesn't support our animations, we'll need to hook it.

{% highlight cpp %}
void FUN_0084c98C_Hook(int ladderPlugin)
{
  // large unknown structure
  int iVar1 = *(int*)(ladderPlugin + 0x1c);

  // the current animation id
  int id = *(int*)(iVar1 + 0x824);

  // the state machine function to call next
  int* pNextStateFunc = (int*)(ladderPlugin + 0x40);

  // the current and next step on the ladder
  uint16_t* pCurrentStep = (uint16_t*)(ladderPlugin + 0x80);
  uint16_t* pAimStep = (uint16_t*)(ladderPlugin + 0x82);

  switch (id)
  {
    case 0x9E:
      *pCurrentStep = *pAimStep;
      *pNextStateFunc = &State_StepOnRight;
      break;
    case 0x9F:
      *pCurrentStep = *pAimStep;
      *pNextStateFunc = &State_StepOnLeft;
      break;
    case 0xA0:
      *pCurrentStep = *pAimStep;
      *pNextStateFunc = &State_StepOffLeft;
      break;
    case 0xA1:
      *pCurrentStep = *pAimStep;
      *pNextStateFunc = &State_StepOffRight;
      break;
  }

  FUN_0084c98C(ladderPlugin);
}
{% endhighlight %}

When a side stepping animation is detected, the state machine is updated to point to the correct handler. 

Voila, we now have fully functional ladders in Lethal Leviathan! 🎉