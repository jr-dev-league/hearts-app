import React, { useState } from "react";
import Trick from "../Trick";
import { Card } from "../../types";
import PlayerHand from "../PlayerHand";

const playerHandMock: Card[] = [
	{ suit: "Spades", value: "King" },
	{ suit: "Spades", value: "Ace" },
	{ suit: "Hearts", value: "10" },
	{ suit: "Hearts", value: "Jack" },
];

const Game: React.FC = () => {
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
				onPlayCard={(cards: Card[]) => {
					setTrick([...trick, cards[0]]);
					return true;
				}}
				hand={playerHandMock}
			/>
		</>
	);
};

export default Game;
