/**
 * ===========================================
 * Mimicry Research
 * BattleScene
 * -------------------------------------------
 * 功能：
 *  - 遊戲戰鬥主要 Scene
 *  - 負責建立 BattleUI
 *  - 接收玩家輸入
 *  - 不負責戰鬥計算
 *
 * 作者：蔡宇軒
 * ===========================================
 */
import Phaser from "phaser";
import BattleLog from "./ui/BattleLog";

export default class BattleScene extends Phaser.Scene {

    constructor() {
        super("BattleScene");
    }

    create() {

        this.battleLog = new BattleLog(this);

        this.battleLog.create();

        this.battleLog.add("Mimicry Research");
        this.battleLog.add("Prototype v0.1");
        this.battleLog.add("Battle Start!");

    }

}