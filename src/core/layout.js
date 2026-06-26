/**
 * ===========================================
 * Mimicry Research
 * File : layout.js
 * -------------------------------------------
 * 功能：
 * 管理所有畫面區域。
 *
 * Stage：
 * 角色演出的舞台。
 *
 * HUD：
 * 浮動資訊，不限制位置。
 *
 * CommandBar：
 * 玩家操作區。
 * ===========================================
 */

const Layout = {

    screen: {

        width: 1280,
        height: 720

    },

    /**
     * 新增：角色舞台
     */
    stage: {

        x: 0,
        y: 0,

        width: 1280,
        height: 600

    },

    /**
     * 保留（EnemyPanel 還會用）
     */
    enemy: {

        x: 32,
        y: 32,
        width: 1216,
        height: 320

    },

    safeArea: {

        left: 32,
        right: 32,
        top: 24,
        bottom: 24

    },

    /**
     * 保留
     */
    player: {

        x: 32,
        y: 368,
        width: 1216,
        height: 120

    },

    /**
     * 保留
     */
    battleLog: {

        x: 40,
        y: 455,
        width: 320,
        height: 140

    },

    /**
     * 新增
     */
   commandBar: {

        x: 0,
        y: 600,

        width: 1280,
        height: 120

    }
};

export default Layout;