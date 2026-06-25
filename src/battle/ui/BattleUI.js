import EnemyPanel from "./EnemyPanel";
import BattleLog from "./BattleLog";


/**
 * ===========================================
 * Mimicry Research
 * File : BattleUI.js
 * Version : 0.1.0
 * Sprint : 1
 * Issue : PR003
 * -------------------------------------------
 * 功能：
 * 管理所有戰鬥 UI。
 *
 * 目前包含：
 * - EnemyPanel
 * - BattleLog
 *
 * 未來：
 * - PlayerPanel
 * - SkillPanel
 * ===========================================
 */

export default class BattleUI {

    /**
     * 建立 BattleUI
     * @param {Phaser.Scene} scene
     */
    constructor(scene) {

        this.scene = scene;

        this.enemyPanel = new EnemyPanel(scene);
        this.battleLog = new BattleLog(scene);

    }

    /**
     * 建立所有 UI
     */
    create(context)  {

        this.enemyPanel.create(context.enemy);

        this.battleLog.create();

        this.battleLog.add("Battle Start!");

    }

}