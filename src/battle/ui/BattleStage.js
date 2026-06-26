import Layout from "../../core/layout";

/**
 * ===========================================
 * Mimicry Research
 * File : BattleStage.js
 * -------------------------------------------
 * 功能：
 * 管理戰鬥舞台。
 *
 * BattleStage 不顯示任何 UI，
 * 只負責：
 *
 * - 背景
 * - 角色立繪
 * - 特效
 * ===========================================
 */

export default class BattleStage {

    constructor(scene) {

        this.scene = scene;

    }

    create() {

        const graphics = this.scene.add.graphics();

        // Stage 外框（開發用）
        const portraitWidth = 560;
        const portraitHeight = 580;

        const x = (Layout.stage.width - portraitWidth) / 2;
        const y = 10;

        graphics.lineStyle(2, 0x999999);

        graphics.strokeRect(
            x,
            y,
            portraitWidth,
            portraitHeight
        );

        this.scene.add.text(

            Layout.stage.width / 2,
            Layout.stage.height / 2,

            "Character Stage",
            {
                fontSize: "22px",
                color: "#666666"
            }
        )
        .setOrigin(0.5)
        .setAlpha(0.25);
    }
}