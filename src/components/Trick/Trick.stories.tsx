import React, { useState } from "react";
import Trick from ".";
import { Button } from "semantic-ui-react";
import { Card } from "../../types";
import PlayerHand from "../PlayerHand";
import { allCards } from "../../utils/storybook";
import "semantic-ui-css/semantic.min.css";

export default {
	title: "Trick Story",
	component: Trick,
};

const getOpenSlotIdx = (cards: (Card | null)[]) => {
	const openSlot = cards.findIndex((card) => card === null);
	return openSlot;
};

const handleAdd = (
	cards: (Card | null)[],
	setCards: (cards: (Card | null)[]) => void
) => {
	const openSlot = getOpenSlotIdx(cards);

	if (openSlot !== -1) {
		cards[openSlot] = randomCard();
	}

	// console.log("cards", cards, openSlot);

	setCards([...cards]);
};

const handleRemove = (
	cards: (Card | null)[],
	setCards: (cards: (Card | null)[]) => void
) => {
	const lastCard = cards.reverse().findIndex((card) => card !== null);

	cards[lastCard] = null;

	setCards(cards.reverse());
};

const randomCard = () => {
	const suitIdx = Math.floor(Math.random() * 4);
	const valueIdx = Math.floor(Math.random() * 13);

	return allCards[suitIdx][valueIdx];
};

export const TrickStory = () => {
	const [cards, setCards] = useState<(Card | null)[]>([null, null, null, null]);

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

export const PlayCardTrick = () => {
	const [trickCards, setCards] = useState<(Card | null)[]>([
		null,
		null,
		null,
		null,
	]);

	const hand = [];
	for (let i = 0; i < 13; i++) {
		hand.push(randomCard());
	}

	const handleTrickCard = (cards: Card[]) => {
		const nextOpenSlot = getOpenSlotIdx(trickCards);

		if (nextOpenSlot !== -1) {
			trickCards[nextOpenSlot] = cards[0];
			setCards([...trickCards]);
			return true;
		}

		return false;
	};

	return (
		<div>
			<Trick trick={trickCards} />
			<PlayerHand hand={hand} onPlayCard={handleTrickCard} />
		</div>
	);
};
