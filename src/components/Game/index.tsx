import React, { useState } from "react";
import Table from "../Table";
import Trick from "../Trick";
import { Card, Hand, Opponent } from "../../types";
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

const Game: React.FC<{}> = () => {
	const [trick, setTrick] = useState([
		// null,
		// null,
		// null,
		// null,
	] as Array<Card | null>);

	return (
		<>
			<Trick trick={trick} />
			<PlayerHand
				onPlayCard={(cards: Card[]) => setTrick([...trick, cards[0]])}
				trick={trick}
				hand={playerHandMock}
			/>
		</>
	);
};

export default Game;
