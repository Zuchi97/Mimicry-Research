import Phaser from "phaser";
import BattleScene from "./battle/BattleScene";
import Layout from "./core/layout";

const config = {

    type: Phaser.AUTO,

    width: Layout.screen.width,

    height: Layout.screen.height,

    backgroundColor: "#202020",

    scene: [
        BattleScene
    ]
};

new Phaser.Game(config);