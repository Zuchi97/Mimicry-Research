import Phaser from "phaser";
import BattleUI from "./ui/BattleUI";
import slime from "../data/mimics/slime";
import BattleContext from "./BattleContext";

/**
 * ===========================================
 * Mimicry Research
 * BattleScene
 * ===========================================
 */

export default class BattleScene extends Phaser.Scene {

    constructor() {

        super("BattleScene");

    }

    create() {

        // 建立 Battle UI
        this.battleUI = new BattleUI(this);

        // 建立戰鬥資料
        const context = new BattleContext();
        context.enemy = slime;

        // 初始化 UI
        this.battleUI.create(context);

    }

}
