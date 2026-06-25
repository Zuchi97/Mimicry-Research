import Phaser from "phaser";

export default class BattleScene extends Phaser.Scene {

    constructor() {
        super("BattleScene");
    }

    create() {

        this.add.text(
            300,
            150,
            "Mimicry Research",
            {
                fontSize: "42px"
            }
        );

        this.add.text(
            300,
            220,
            "Prototype v0.1",
            {
                fontSize: "24px"
            }
        );

        this.add.text(
            300,
            280,
            "Slime Mimic #001",
            {
                fontSize: "20px"
            }
        );
    }
}