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

export default class BattleLog {

    /**
     * 建構子
     * @param {Phaser.Scene} scene Battle Scene
     */
    constructor(scene) {

        this.scene = scene;

        // 儲存所有訊息
        this.messages = [];

        // Phaser Text 物件
        this.textObject = null;

    }

    /**
     * 建立 Battle Log UI
     */
    create() {

        this.textObject = this.scene.add.text(
            40,
            500,
            "",
            {
                fontSize: "20px",
                color: "#FFFFFF",
                wordWrap: {
                    width: 1200
                }
            }
        );

    }

    /**
     * 新增一筆戰鬥訊息
     * @param {string} message
     */
    add(message) {

        this.messages.push(message);

        // 最多保留十筆
        if (this.messages.length > 10) {

            this.messages.shift();

        }

        this.textObject.setText(
            this.messages.join("\n")
        );

    }

}