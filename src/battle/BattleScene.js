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

        const context = new BattleContext();

        context.enemy = slime;

        // 建立 Battle UI
        this.battleUI = new BattleUI(this);

        console.log(this.battleUI);

        // 建立所有 UI
        this.battleUI.create(context);

    }

}
