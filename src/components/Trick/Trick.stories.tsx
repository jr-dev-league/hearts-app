import React, { useState } from "react";
import Trick from ".";
import { Button } from "semantic-ui-react";
import { Card } from "../../types";
import { allCards } from "../../utils/storybook";
import "semantic-ui-css/semantic.min.css";

export default {
	title: "Trick Story",
	component: Trick,
};

const handleAdd = (
	cards: (Card | null)[],
	setCards: (cards: (Card | null)[]) => void
) => {
	const suitIdx = Math.floor(Math.random() * 4);
	const valueIdx = Math.floor(Math.random() * 13);

	const card = allCards[suitIdx][valueIdx];

	const openSlot = cards.findIndex((card) => card === null);

	if (openSlot !== -1) {
		cards[openSlot] = card;
	}

	console.log("cards", cards, openSlot);

	setCards(cards);
};

const handleRemove = (
	cards: (Card | null)[],
	setCards: (cards: (Card | null)[]) => void
) => {
	const lastCard = cards.reverse().findIndex((card) => card !== null);

	cards[lastCard] = null;

	setCards(cards.reverse());
};

export const TrickStory = () => {
	const [cards, setCards] = useState([
		null,
		null,
		null,
		null,
	] as (Card | null)[]);

	return (
		<div style={{ margin: "2rem" }}>
			<Button
				className="negative"
				onClick={() => handleRemove([...cards], setCards)}
			>
				Remove Card
			</Button>
			<Button
				className="positive"
				onClick={() => handleAdd([...cards], setCards)}
			>
				Add Card
			</Button>
			<Trick trick={cards} />
		</div>
	);
};
