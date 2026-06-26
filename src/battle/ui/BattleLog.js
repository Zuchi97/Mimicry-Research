/**
 * ===========================================
 * Mimicry Research
 * File : BattleLog.js
 * Version : 0.1.0
 * Sprint : 1
 * Issue : #0001
 * -------------------------------------------
 * 功能：
 * 管理戰鬥訊息顯示。
 *
 * 目前版本：
 * - 顯示訊息
 * - 保留最近 10 筆訊息
 *
 * 未來功能：
 * - 訊息顏色
 * - 傷害動畫
 * - 滾動動畫
 * ===========================================
 */

import Phaser from "phaser";
import Layout from "../../core/layout";

export default class BattleLog {

    /**
     * 建構子
     * @param {Phaser.Scene} scene Battle Scene
     */
    constructor(scene) {

        this.scene = scene;

        // Battle Log 訊息
        this.messages = [];

        // 最多保留幾筆
        this.maxMessages = 6;

        // Phaser Text 物件
        this.textObject = null;

    }

    /**
     * 建立 Battle Log UI
     */
    create() {

        this.textObject = this.scene.add.text(

            Layout.battleLog.x,
            Layout.battleLog.y,

            "",

            {
                fontSize: "20px",
                color: "#FFFFFF",
                wordWrap: {
                    width: Layout.battleLog.width
                }
            }

        );

        this.updateText();

    }

    /**
     * 新增一筆戰鬥訊息
     * @param {string} message
     */
    add(message) {

        this.messages.push(message);

        if (this.messages.length > this.maxMessages) {

            this.messages.shift();

        }

        this.updateText();

    }

    /**
     * 更新 Battle Log 顯示
     */
    updateText() {

        this.textObject.setText(

            "Research Notes\n" +
            "--------------\n" +
            this.messages.join("\n")

        );

    }

}