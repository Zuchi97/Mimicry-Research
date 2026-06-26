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
import BattleHUD from "./BattleHUD";
import BattleLog from "./BattleLog";
import BattleLayout from "./BattleLayout";
import BattleStage from "./BattleStage";
import BattleCommandBar from "./BattleCommandBar";

export default class BattleUI {

    /**
     * 建立 BattleUI
     * @param {Phaser.Scene} scene
     */
    constructor(scene) {

        this.scene = scene;

        this.layout = new BattleLayout(scene);

        this.stage = new BattleStage(scene);

        this.commandBar = new BattleCommandBar(

            scene,

            (command) => this.handleCommand(command)

        );

        this.hud = new BattleHUD(scene);

        this.battleLog = new BattleLog(scene);

    }

    /**
     * 建立所有 UI
     */
    create(context) {

        // 舞台
        this.stage.create();

        // 底部操作列
        this.commandBar.create();

        // HUD
        this.hud.create(context);

        this.battleLog.create();

        this.battleLog.add("Research Notes");
        this.battleLog.add("----------------");
        this.battleLog.add("Battle Start!");

    }

    updateHP(enemyData) {

        this.hpText.setText(
            `HP ${enemyData.hp} / ${enemyData.maxHp}`
        );

    }

    handleCommand(command) {

        console.log(command);

    }

}