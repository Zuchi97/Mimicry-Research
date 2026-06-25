# Mimicry Research Architecture

Version: 1.0

---

# 專案架構

本專案採用：

Data Driven + Component Based Architecture

設計原則：

Data

↓

System

↓

UI

---

# Folder Structure

src

├── assets

├── battle

├── core

├── data

└── utils

---

# Battle Architecture

BattleScene

↓

BattleUI

↓

BattleSystem

↓

EnemyAI

↓

Data

---

# BattleScene

負責：

- 建立 Scene
- 初始化 BattleUI
- 初始化 BattleSystem
- 控制流程

不得：

- 計算傷害
- AI
- 修改 Data

---

# BattleUI

負責：

- 建立所有 UI
- 更新畫面
- 顯示資訊

包含：

EnemyPanel

PlayerPanel

SkillPanel

BattleLog

不得：

- 修改 HP
- 計算 Buff
- AI

---

# BattleSystem

負責：

- 傷害計算
- Buff
- Debuff
- Turn
- Skill

不得：

- 畫 UI

---

# EnemyAI

負責：

- 思考下一步
- Intent
- Skill Selection

不得：

- 畫 UI

不得：

- 修改 UI

---

# Data

放置：

Player

Enemy

Skill

Item

Monster

所有 Data：

禁止 Function。

---

# SaveManager

負責：

- Save

- Load

不得：

- Battle

- UI

---

# Layout

所有 UI：

只能透過：

layout.js

取得座標。

不得：

直接使用 Magic Number。

---

# Dependency

BattleScene

↓

BattleUI

↓

BattleSystem

↓

EnemyAI

↓

Data

禁止：

循環依賴。

例如：

BattleUI

↓

BattleSystem

↓

BattleUI

---

# Event Flow

玩家點擊

↓

BattleUI

↓

BattleScene

↓

BattleSystem

↓

EnemyAI

↓

BattleUI 更新

---

# Future Architecture

未來新增：

MenuScene

ResearchScene

WorldScene

ShopScene

皆遵守相同設計。

---

# Architecture Rules

1.

BattleScene 不計算傷害。

2.

BattleUI 不知道 AI。

3.

EnemyAI 不修改 UI。

4.

Data 不包含 Function。

5.

所有畫面使用 Layout。

6.

BattleSystem 是唯一戰鬥規則來源。

7.

BattleLog 只能顯示訊息。

8.

所有新功能皆須符合 Architecture。
