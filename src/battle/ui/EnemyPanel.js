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

        this.enemyData = enemyData;

        this.nameText = this.scene.add.text(
            Layout.enemy.x,
            Layout.enemy.y,
            enemyData.name
        );

        this.hpText = this.scene.add.text(
            Layout.enemy.x,
            Layout.enemy.y + 40,
            `HP ${enemyData.hp} / ${enemyData.maxHp}`
        );

        this.intentText = this.scene.add.text(
            Layout.enemy.x,
            Layout.enemy.y + 80,
            enemyData.intent
        );

    }

}