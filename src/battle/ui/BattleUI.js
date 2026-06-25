/**
 * ===========================================
 * BattleUI
 * ===========================================
 * 管理戰鬥畫面 UI。
 */

export default class BattleUI {

    constructor(scene) {

        this.scene = scene;

    }

    /**
     * 建立整個 Battle UI
     *
     * 建立順序：
     * 1. Enemy Panel
     * 2. Player Panel
     * 3. Skill Buttons
     * 4. Battle Log
     */
    create() {

        this.createEnemyPanel();

        this.createPlayerPanel();

        this.createSkillButtons();

        this.createBattleLog();

    }

    /**
     * 建立敵人資訊區
     */
    createEnemyPanel() {

    }

}