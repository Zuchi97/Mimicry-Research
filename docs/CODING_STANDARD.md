# Mimicry Research Development Motto

> Build for the next 12 months, not just today.

請為一年後的自己寫程式，而不是只為今天能執行。
# Mimicry Research Coding Standard

Version: 1.0

---

# 1. 開發理念 (Development Philosophy)

Mimicry Research 不是 Demo 專案。

本專案目標為：

- 商業作品
- 長期維護
- 容易擴充
- AI 協作開發

所有程式設計皆以：

> 可讀性 > 可維護性 > 開發速度

為最高原則。

---

# 2. 命名規範 (Naming Convention)

## Class

使用 PascalCase。

例如：

BattleScene

BattleSystem

EnemyPanel

PlayerPanel

BattleLog

---

## Function

使用 camelCase。

例如：

create()

createEnemyPanel()

updatePlayerHp()

showIntent()

---

## Variable

使用 camelCase。

例如：

playerHp

enemyData

battleLog

currentTurn

---

## Constant

使用 UPPER_SNAKE_CASE。

例如：

SCREEN_WIDTH

SCREEN_HEIGHT

MAX_LOG_COUNT

---

## File

使用 PascalCase（Class）

BattleScene.js

BattleSystem.js

EnemyPanel.js

BattleLog.js

---

資料(Data)使用小寫。

slime.js

player.js

skills.js

---

# 3. Folder Rule

battle/

只能放 Battle 相關程式。

不得放：

- Save
- World
- Menu

---

core/

放共用核心。

例如：

layout.js

SaveManager.js

GameManager.js

---

data/

只放資料。

禁止任何遊戲邏輯。

---

utils/

放共用工具。

例如：

Random

Math

Color

Helper

---

assets/

只放素材。

不得放程式。

---

docs/

放專案文件。

不得放程式。

---

# 4. Single Responsibility Principle

每個 Class 只負責一件事。

BattleScene

只負責：

- 建立 Scene
- 管理 BattleUI

不得：

- 計算傷害
- AI

---

BattleSystem

只負責：

- 傷害
- Buff
- Debuff
- 回合

不得：

- 畫 UI

---

BattleUI

只負責：

- UI

不得：

- 計算傷害

---

EnemyAI

只負責：

- 敵人思考

不得：

- 修改 UI

---

# 5. Data Driven Design

所有遊戲資料必須放於：

src/data/

例如：

mimics/

player/

skills/

---

資料禁止包含 Function。

正確：

const slime = {

    hp: 100,

    attack: 10

}

錯誤：

const slime = {

    attack(){

    }

}

---

# 6. Dependency Rule

只能：

Data

↓

System

↓

UI

不得反向依賴。

例如：

BattleUI

不得直接修改：

player.hp

只能呼叫：

BattleSystem

---

# 7. Layout Rule

禁止 Magic Number。

錯誤：

this.add.text(381,412,...)

正確：

Layout.enemy.x

Layout.enemy.y

---

所有 UI 座標

皆由：

layout.js

管理。

---

# 8. Comment Rule

所有 Class 必須有 Header。

例如：

/**
 * BattleScene
 *
 * 功能：
 * 建立戰鬥場景。
 */

---

所有 Function

必須有中文用途說明。

例如：

/**
 * 建立敵人資訊面板
 */
createEnemyPanel()

---

不要寫無意義註解。

錯誤：

// 玩家攻擊

player.attack();

正確：

// Intent 必須先更新，避免玩家取得錯誤資訊

---

# 9. Import Rule

所有檔案自行 import。

例如：

import Phaser from "phaser";

不得依賴其他檔案已 import。

---

# 10. Git Rule

每完成一個 Issue：

git add .

git commit

不得累積大量修改。

Commit Message：

feat(battle): create enemy panel

fix(ui): resolve hp display bug

docs(gdd): update battle flow

refactor(system): split battle system

---

# 11. TODO Rule

使用固定格式。

TODO

// TODO(v0.2)
// 加入 Buff Icon

FIXME

// FIXME
// HP 尚未同步 UI

---

# 12. AI Collaboration Rule

所有 AI 皆遵守：

- 不得新增未定義功能
- 不得修改 Architecture
- 不得修改 GDD
- 必須遵守 Coding Standard
- 必須遵守 Folder Rule

---

# 13. Code Review Checklist

提交前請確認：

□ 是否符合命名規範？

□ 是否有中文註解？

□ 是否使用 Layout？

□ 是否有 Magic Number？

□ 是否違反 SRP？

□ 是否修改了不該修改的 Class？

□ 是否測試成功？

□ 是否更新文件？

□ 是否 Commit？

---

# 14. Golden Rules

1.

程式是寫給半年後的自己看的。

2.

不要為了快而犧牲可讀性。

3.

不要重複程式。

4.

不要過度設計。

5.

資料(Data)與系統(System)分離。

6.

系統(System)與畫面(UI)分離。

7.

每個 Sprint 都必須保持可執行。

8.

任何新功能都必須回答：

"它是否讓遊戲更好玩？"

如果不能回答，

請不要加入。