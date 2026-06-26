import Phaser from "phaser";
import Layout from "../../core/layout";

/**
 * ===========================================
 * Mimicry Research
 * File : BattleLayout.js
 * Version : 0.1.0
 * Sprint : 1
 * Issue : PR004
 * -------------------------------------------
 * 功能：
 * 繪製戰鬥畫面版面配置。
 *
 * BattleLayout 只負責畫出 UI 區域，
 * 不負責任何 UI 內容。
 * ===========================================
 */

export default class BattleLayout {

    /**
     * @param {Phaser.Scene} scene
     */
    constructor(scene) {

        this.scene = scene;

    }

    /**
     * 繪製版面
     */
    draw() {

        const graphics = this.scene.add.graphics();

        graphics.lineStyle(2, 0x666666);

        graphics.strokeRect(
            Layout.enemy.x,
            Layout.enemy.y,
            Layout.enemy.width,
            Layout.enemy.height
        );

        graphics.strokeRect(
            Layout.player.x,
            Layout.player.y,
            Layout.player.width,
            Layout.player.height
        );

        graphics.strokeRect(
            Layout.battleLog.x,
            Layout.battleLog.y,
            Layout.battleLog.width,
            Layout.battleLog.height
        );

    }

}