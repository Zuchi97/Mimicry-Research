# Mimicry Research
## Game Design Document (GDD)

Version: 0.1

---

# 1. Game Overview

## 專案代號

Mimicry Research

> 正式名稱於上架前決定。

---

## 遊戲類型

- 回合制戰鬥
- 魔物娘養成
- 研究模擬
- Roguelite（暫定）

---

## 開發目標

製作一款以「魔物娘研究」為核心的獨立遊戲。

玩法簡單易上手，但具有持續探索與收集的樂趣。

目標平台：

- DLsite
- Steam（後續評估）

---

# 2. Design Pillars

## ① Character First

角色永遠是畫面的主角。

所有 UI 都必須服務角色立繪。

如果 UI 搶走角色的視覺焦點，就代表設計失敗。

---

## ② Research Before Combat

玩家不是勇者。

玩家是研究員。

戰鬥的目的：

不是擊敗敵人。

而是理解敵人。

---

## ③ Simple but Deep

操作保持簡單。

系統逐步展開。

玩家能快速上手，但有足夠深度持續遊玩。

---

## ④ Every Encounter Matters

每一次遭遇，

都應該帶來新的研究成果。

玩家應該期待：

"這次又能發現什麼？"

---

# 3. Core Gameplay Loop

探索

↓

遭遇魔物娘

↓

觀察

↓

戰鬥

↓

取得研究資料

↓

解鎖圖鑑

↓

強化能力

↓

再次探索

---

# 4. Battle Design

採用回合制戰鬥。

戰鬥重點：

- 觀察
- 研究
- 收集資訊

而非大量數值計算。

---

## 玩家資訊

目前：

- HP

未來：

- Sanity
- Energy

---

## 敵人資訊

顯示：

- 名稱
- HP
- Observation（觀察狀態）

不顯示大量數值。

---

# 5. Battle UI Philosophy

立繪是畫面的核心。

UI 是研究工具。

畫面優先順序：

1.

Portrait（立繪）

2.

Command（操作）

3.

Research Info（研究資訊）

4.

Battle Log

---

# 6. Monster Design

所有敵人皆為：

魔物娘。

風格：

偏人形。

例如：

✔

史萊姆擬態少女

✔

植物少女

✔

幽靈少女

避免：

過度異形化。

例如：

蜘蛛腳、

巨大昆蟲下半身。

---

# 7. Research System

玩家可逐步：

- 解鎖圖鑑
- 解鎖資料
- 發現弱點
- 收集樣本

研究程度將影響：

- 劇情
- 對話
- 可互動內容

---

# 8. Visual Direction

整體風格：

研究設施

Sci-Fi

神祕研究機構

HUD 介面

UI 應保持：

簡潔

科技感

不喧賓奪主。

---

# 9. Art Direction

角色立繪：

畫面最大元素。

未來預留：

- Live2D
- 表情
- 呼吸動畫
- 特效

Portrait Area

是整個遊戲最重要的區域。

---

# 10. MVP

第一版完成：

- Battle Scene
- Enemy Panel
- Player Panel
- Battle Log
- Skill Panel
- Battle System
- Monster Data

即可形成可遊玩的 Prototype。

---

# 11. Current Progress

Sprint 0

✅ Project Foundation

Sprint 1

✅ Layout

✅ BattleContext

✅ EnemyPanel

✅ BattleUI

⬜ BattleLayout

⬜ PlayerPanel

⬜ SkillPanel

---

# 12. Future Systems

- Battle AI
- Monster Encyclopedia
- Research Facility
- Event System
- Story
- Save / Load
- Gallery

---

# 13. Development Philosophy

Build for the next 12 months,
not just today.

所有程式設計都應：

可讀

可維護

可擴充

避免過度設計。

---

# 14. Success Criteria

玩家第一眼：

"這個魔物娘好吸引人。"

玩家遊玩十分鐘：

"研究玩法好像很有趣。"

玩家完成一輪：

"我想再研究下一隻魔物娘。"