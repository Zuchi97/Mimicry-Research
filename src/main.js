import Phaser from "phaser";
import BattleScene from "./battle/BattleScene";

const config = {

    type: Phaser.AUTO,

    width: 1280,

    height: 720,

    backgroundColor: "#202020",

    scene: [
        BattleScene
    ]
};

new Phaser.Game(config);