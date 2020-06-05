import React from "react";
import PlayerHand from "./index";
import { Hand } from "../../types";
import "semantic-ui-css/semantic.min.css";

export default {
	title: "Player hand",
	component: PlayerHand,
};

const playerHandMock: Hand = {
	cards: [
		{ suit: "Spades", value: "King" },
		{ suit: "Spades", value: "Ace" },
		{ suit: "Hearts", value: "10" },
		{ suit: "Hearts", value: "Jack" },
	],
};

export const HandStory = () => (
	<PlayerHand
		onPlayCard={() => {}}
		trick={[]}
		hand={playerHandMock}
	></PlayerHand>
);
