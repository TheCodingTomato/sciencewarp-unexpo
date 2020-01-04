import "phaser";

import Bootstrap from "./bootstrap";
import Menu from "./scenes/menu";
import DialogBox from "./scenes/hud/dialogbox";
import Interface from "./scenes/hud/interface";

import TestLevel from './scenes/test_level';

const config: Phaser.Types.Core.GameConfig = {
	title: "Science Warp",
	width: 480,
	height: 270,
	parent: "container",
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 600 },
			debug: false
		},
	},
	backgroundColor: "#4da6ff",
	zoom: 2,
	render: {
		pixelArt: true,
		antialias: false
	},
	scene: [
		Bootstrap,
		Menu,
		TestLevel,
		DialogBox,
		Interface
	]
};

export class ScienceWarpGame extends Phaser.Game {
	constructor(config: Phaser.Types.Core.GameConfig) {
		super(config);
	}
}

window.onload = () => {
	const game = new ScienceWarpGame(config);
}
