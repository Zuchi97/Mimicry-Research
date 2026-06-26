import Phaser from "phaser";
import Layout from "../../core/layout";

/**
 * ===========================================
 * Mimicry Research
 * File : BattleCommandBar.js
 * Version : 0.1.0
 * Sprint : 1
 * Issue : PR006
 * -------------------------------------------
 * 功能：
 * 管理戰鬥指令列。
 *
 * 目前：
 * - 顯示背景
 *
 * 未來：
 * - Attack
 * - Observe
 * - Skill
 * - Item
 * ===========================================
 */

export default class BattleCommandBar {

    /**
     * @param {Phaser.Scene} scene
     */
    constructor(scene) {

        this.scene = scene;

    }

    /**
     * 建立 Command Bar
     */
    create() {

        const graphics = this.scene.add.graphics();

        // 深色背景
        graphics.fillStyle(0x1B1B1F);

        graphics.fillRect(

            Layout.commandBar.x,
            Layout.commandBar.y,

            Layout.commandBar.width,
            Layout.commandBar.height

        );

        // 上方分隔線
        graphics.lineStyle(2, 0x555555);

        graphics.beginPath();

        graphics.moveTo(
            Layout.commandBar.x,
            Layout.commandBar.y
        );

        graphics.lineTo(
            Layout.commandBar.width,
            Layout.commandBar.y
        );

        graphics.strokePath();

    }

}