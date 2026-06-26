# Mimicry Research
# Battle System

Version : 0.1.0

---

# Design Philosophy

Mimicry Research 並非傳統 RPG。

戰鬥並不是擊敗敵人，而是與 Mimic 進行一場「研究互動」。

玩家需要透過觀察、分析、調整互動方式，
逐步完成研究目標。

因此：

> Battle = Research Process

而不是：

> Battle = Combat

---

# Core Gameplay Loop

Observe

↓

Analyze

↓

Choose Skill

↓

Attack

↓

Observe Again

↓

Adjust Strategy

↓

Attack

↓

Research Complete

---

# Command Definition

## Observe

目的：

取得目前最重要的資訊。

Observe 不造成任何研究進度。

功能：

- 分析目前狀態
- 發現敏感點
- 判斷目前節奏
- 發現特殊機制
- 提供 Battle Log 資訊

Observe 是整個遊戲最重要的策略來源。

---

## Skill

Skill 不直接造成任何研究進度。

Skill 的作用只有一個：

> 改變 Attack。

Skill 可以理解成：

目前的互動方式。

例如：

- Rapid Rhythm
- Power Rhythm
- Gentle Rhythm

玩家一次只能維持一種 Skill。

切換 Skill 後，

Attack 將使用新的模式。

---

## Attack

Attack 永遠只有一個按鈕。

Attack 並不是技能。

Attack 是：

執行目前 Skill 的互動。

例如：

Normal Attack

↓

造成一次互動

Rapid Rhythm

↓

Attack

↓

三次快速互動

Power Rhythm

↓

Attack

↓

一次強力互動

Attack 本身沒有任何特殊效果。

真正決定效果的是：

目前 Skill。

---

## Item

Item 提供額外策略。

例如：

- 恢復自身狀態
- 提高互動效率
- 暫停對方反擊
- 增加下一次 Attack 效果

---

# Win Condition

玩家成功完成研究。

目前 Prototype：

Enemy HP = 0

↓

Battle End

正式版本：

使 Mimic 完成本次互動。

Research Complete

---

# Lose Condition

目前 Prototype：

無

正式版本：

玩家因受到 Mimic 的影響而提前結束研究。

（賢者模式）

---

# Battle Flow

Battle Start

↓

Observe

↓

Skill

↓

Attack

↓

Enemy Reaction

↓

Observe

↓

Attack

↓

Research Complete

---

# Future Systems

## Tempo

不同 Skill 對應不同互動節奏。

Observe 可分析目前最適合的節奏。

---

## Weak Point

每位 Mimic 擁有不同敏感點。

Observe 可以逐步揭露。

不同 Skill 對不同弱點有不同效率。

---

## Enemy Reaction

Mimic 將根據目前狀態改變反應。

例如：

- 害羞
- 主動
- 忍耐
- 反擊

玩家需要重新 Observe。

---

# Design Principle

玩家真正遊玩的不是：

Attack

而是：

Observe

↓

Analyze

↓

Choose Skill

↓

Execute Attack

↓

Observe Again

Mimicry Research 的核心樂趣，

來自閱讀對方反應並調整策略，

而不是重複點擊 Attack。

# Golden Rule

如果某個新功能無法強化：

Observe
↓

Analyze
↓

Choose Skill
↓

Attack

這個循環，

則代表它不應加入 Battle System。