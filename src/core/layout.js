/**
 * ===========================================
 * Mimicry Research
 * File : layout.js
 * Version : 0.1.0
 * Sprint : 1
 * -------------------------------------------
 * 功能：
 * 統一管理畫面配置。
 *
 * 所有 UI 元件都必須透過 Layout
 * 取得位置與尺寸。
 * ===========================================
 */

const Layout = {

    /**
     * 遊戲解析度
     */
    screen: {

        width: 1280,
        height: 720

    },

    /**
     * 畫面邊距
     */
    padding: 32,

    /**
     * 敵人資訊區
     */
    enemy: {

        x: 32,
        y: 32,
        width: 1216,
        height: 320

    },

    /**
     * 玩家資訊區
     */
    player: {

        x: 32,
        y: 368,
        width: 1216,
        height: 120

    },

    /**
     * 戰鬥紀錄區
     */
    battleLog: {

        x: 32,
        y: 504,
        width: 1216,
        height: 184

    }

};

export default Layout;