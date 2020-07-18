import React from "react";
import PlayerHand from ".";
import { Card } from "../../types";
import "semantic-ui-css/semantic.min.css";

export default {
	title: "Player Hand",
	component: PlayerHand,
};

const playerHandMock: Card[] = [
	{ suit: "Spades", value: "King" },
	{ suit: "Spades", value: "Ace" },
	{ suit: "Hearts", value: "10" },
	{ suit: "Hearts", value: "Jack" },
];

export const HandStory = (): JSX.Element => (
	<PlayerHand onPlayCard={() => true} hand={playerHandMock}></PlayerHand>
);
