import React from "react";
import Table from "../Table";
import { Opponent, Hand } from "../../types";
import PlayerHand from "../PlayerHand";

const playerHandMock: Hand = {
	cards: [
		{ suit: "Spades", value: "King" },
		{ suit: "Spades", value: "Ace" },
		{ suit: "Hearts", value: "10" },
		{ suit: "Hearts", value: "Jack" },
	],
};
const opponentsMock: Opponent[] = [
	{ cards: 2, name: "Little Grace", score: 15 },
	{ cards: 2, name: "Baby Cakes", score: 65 },
	{ cards: 1, name: "Edu", score: 23 },
];

const Game: React.FC<{}> = () => (
	<>
		<Table opponents={opponentsMock} />
		<PlayerHand hand={playerHandMock} />
	</>
);

export default Game;
