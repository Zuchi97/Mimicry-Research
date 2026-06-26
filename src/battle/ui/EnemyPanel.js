import Phaser from "phaser";
import Layout from "../../core/layout";

/**
 * ===========================================
 * Mimicry Research
 * File : EnemyPanel.js
 * Version : 0.1.0
 * Sprint : 1
 * Issue : PR002
 * -------------------------------------------
 * 功能：
 * 顯示敵人資訊。
 *
 * 負責：
 * - 名稱
 * - HP
 * - Intent
 *
 * 不負責：
 * - 戰鬥計算
 * - AI
 * ===========================================
 */

export default class EnemyPanel {

    constructor(scene) {

        this.scene = scene;

        this.enemyData = null;

        this.nameText = null;
        this.hpText = null;
        this.intentText = null;

    }

    /**
     * 建立 Enemy Panel
     * @param {Object} enemyData 敵人資料
     */
    create(enemyData) {

        const x = Layout.screen.width - Layout.safeArea.right;
        const y = Layout.safeArea.top;

        this.enemyData = enemyData;

        this.nameText = this.scene.add.text(
            x,
            y,
            enemyData.name,
            {
                fontSize: "24px",
                color: "#ffffff"
            }
        ).setOrigin(1, 0);

        this.hpText = this.scene.add.text(
            x,
            y + 36,
            `HP ${enemyData.hp} / ${enemyData.maxHp}`,
            {
                fontSize: "20px",
                color: "#ffffff"
            }
        ).setOrigin(1, 0);

        this.intentText = this.scene.add.text(
            x,
            y + 68,
            ` ${enemyData.intent}`,
            {
                fontSize: "18px",
                color: "#cccccc"
            }
        ).setOrigin(1, 0);

    }

    updateHP(enemyData) {

        this.hpText.setText(
            `HP ${enemyData.hp} / ${enemyData.maxHp}`
        );

    }

}