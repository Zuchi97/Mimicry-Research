/**
 * ===========================================
 * Mimicry Research
 * File : CommandButton.js
 * Version : 0.1.0
 * Sprint : 1
 * Issue : PR009
 * -------------------------------------------
 * 功能：
 * 戰鬥指令按鈕。
 *
 * 負責：
 * - 顯示文字
 * - Hover
 * - Click
 *
 * 不負責：
 * - 戰鬥邏輯
 * ===========================================
 */

export default class CommandButton {

    /**
     * @param {Phaser.Scene} scene
     * @param {number} x
     * @param {number} y
     * @param {string} label
     * @param {Function} onClick
     */
    constructor(scene, x, y, label, onClick) {

        this.scene = scene;

        this.x = x;
        this.y = y;

        this.label = label;
        this.onClick = onClick;

        this.text = null;

        // 顏色（之後 Theme 接手）
        this.normalColor = "#BBBBBB";
        this.hoverColor = "#FFFFFF";

    }

    /**
     * 建立按鈕
     */
    create() {

        this.createText();

        this.registerEvents();

    }

    /**
     * 建立文字
     */
    createText() {

        this.text = this.scene.add.text(

            this.x,
            this.y,

            this.label,

            {

                fontSize: "28px",

                color: this.normalColor

            }

        ).setOrigin(0.5);

    }

    /**
     * 註冊滑鼠事件
     */
    registerEvents() {

        this.text
            .setInteractive({

                useHandCursor: true

            })

            .on("pointerover", () => {

                this.text.setColor(this.hoverColor);

            })

            .on("pointerout", () => {

                this.text.setColor(this.normalColor);

            })

            .on("pointerdown", () => {

                if (this.onClick) {

                    this.onClick();

                }

            });

    }

}