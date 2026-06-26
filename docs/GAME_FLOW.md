# Mimicry Research

# GAME_FLOW

Version 0.1

---

# Purpose

本文件描述玩家第一次遊玩 Mimicry Research 的完整流程。

目標不是描述故事。

而是描述玩家的體驗。

所有系統設計都應圍繞此流程。

---

# First Play Experience

## Step 1

### Main Menu

玩家：

開始遊戲。

目標：

快速進入遊戲。

玩家期待：

「我要開始遇見第一位魔物娘。」

需要系統：

* Main Menu
* New Game

---

## Step 2

### Exploration

玩家：

探索未知區域。

目標：

尋找新的遭遇。

玩家期待：

不知道下一秒會遇見什麼。

需要系統：

* Exploration
* Encounter Trigger

---

## Step 3

### Encounter

玩家：

第一次遇見魔物娘。

目標：

觀察她。

玩家期待：

第一印象。

角色立繪。

表情。

演出。

需要系統：

* Encounter Scene
* Portrait Display

---

## Step 4

### Interaction

玩家：

開始互動。

目標：

了解角色。

玩家期待：

角色會有什麼反應？

需要系統：

* Command UI
* Observation
* Basic Dialogue（可延後）

---

## Step 5

### Battle

玩家：

透過回合制互動。

目標：

完成研究。

玩家期待：

不同選擇帶來不同結果。

需要系統：

* Battle System
* Battle UI
* HP
* Commands

---

## Step 6

### Research Result

玩家：

取得研究成果。

目標：

了解這位魔物娘更多。

玩家期待：

新的資訊。

新的解鎖。

需要系統：

* Research Result
* Progress

---

## Step 7

### Return

玩家：

回到基地。

目標：

整理成果。

玩家期待：

可以查看剛才得到的新內容。

需要系統：

* Base
* Research Archive

---

# Core Gameplay Loop

Explore

↓

Encounter

↓

Interact

↓

Battle

↓

Research

↓

Unlock

↓

Explore Again

---

# MVP Scope

Vertical Slice 只需要：

✔ Main Menu

✔ Exploration（簡化）

✔ 一位魔物娘

✔ 一場戰鬥

✔ 一次研究

✔ 回到基地

✔ 查看研究結果

即可完成第一版。

---

# Design Principles

每一個流程都應回答：

玩家現在想做什麼？

玩家現在最期待看到什麼？

我們如何讓角色更加吸引人？

如果新增功能無法改善以上三點，

則不應優先開發。

---

# Current Development

Foundation

✓ 完成

Battle UI

✓ 開發中

Battle Prototype

□ 下一階段

Exploration Prototype

□ 待開發

Research Prototype

□ 待開發

Vertical Slice

□ 目標
