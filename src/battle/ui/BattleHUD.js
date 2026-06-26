import EnemyPanel from "./EnemyPanel";

/**
 * BattleHUD
 *
 * 負責管理所有戰鬥 HUD。
 */
export default class BattleHUD {

    constructor(scene) {

        this.scene = scene;

        this.enemyPanel = new EnemyPanel(scene);

    }

    create(context) {

        this.enemyPanel.create(context.enemy);

    }

    /**
     * 更新敵人 HP
     * @param {Object} enemyData
     */
    updateHP(enemyData) {

        this.enemyPanel.updateHP(enemyData);

    }

}

