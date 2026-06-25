/**
 * ===========================================
 * Mimicry Research
 * File : BattleContext.js
 * Version : 0.1.0
 * Sprint : 1
 * Issue : PR003.5
 * -------------------------------------------
 * 功能：
 * 保存目前戰鬥的所有資料。
 *
 * BattleContext 不包含任何遊戲邏輯，
 * 僅作為 BattleSystem 與 BattleUI 的資料橋樑。
 * ===========================================
 */

export default class BattleContext {

    constructor() {

        /**
         * 玩家資料
         */
        this.player = null;

        /**
         * 敵人資料
         */
        this.enemy = null;

        /**
         * 回合數
         */
        this.turn = 1;

        /**
         * 戰鬥狀態
         */
        this.state = "START";

    }

}