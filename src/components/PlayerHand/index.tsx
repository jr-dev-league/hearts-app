import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import PlayingCard from "../PlayingCard";
import { Card, Hand } from "../../types";
import "./PlayerHand.css";

interface Props {
	hand: Hand;
}

const PlayerHand: React.FC<Props> = ({ hand }) => {
	const [trick, setTrick] = useState([] as Card[]);
	const [playable, setPlayable] = useState(true);
	const [passing, setPassing] = useState(false);
	const [handCards, setHandCards] = useState(
		hand.cards.map(({ suit, value }) => ({
			active: false,
			played: false,
			suit,
			value,
		}))
	);

	const handleCardClick = (idx: number) => {
		const cards = handCards
			.map((card, i) => {
				if (idx === i) {
					return { ...card, active: !card.active };
				}

				return { ...card, active: false };
			})
			.filter((card) => !card.played);

		setHandCards(cards);
	};

	const handlePlayClick = () => {
		const idx = handCards.findIndex((c) => c.active);
		const card = { value: handCards[idx].value, suit: handCards[idx].suit };
		const cards = handCards.map((c, i) => {
			if (idx === i) {
				return { ...c, played: true };
			}

			return c;
		});

		setTrick([...trick, card]);
		setHandCards(cards);
	};

	return (
		<>
			<div className="hand">
				{handCards.reduce((cards: JSX.Element[], card, idx) => {
					if (!card.played) {
						cards.push(
							<PlayingCard
								key={idx}
								onClick={() => handleCardClick(idx)}
								{...card}
							/>
						);
					}

					return cards;
				}, [])}
			</div>
			<div className="actions">
				{playable ? <Button onClick={handlePlayClick}>Play Card</Button> : null}
			</div>
		</>
	);
};

export default PlayerHand;
