import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import PlayingCard from "../PlayingCard";
import { Card } from "../../types";
import "./PlayerHand.css";

interface Props {
	hand: Card[];
	onPlayCard: (playedCard: Card[]) => void;
}

interface HandCard extends Card {
	active: boolean;
}

const convertToHandCard = (playingCard: Card) => {
	return { active: false, ...playingCard };
};

const convertToPlayingCard = ({ suit, value }: HandCard) => {
	return { suit, value };
};

const PlayerHand: React.FC<Props> = ({ hand, onPlayCard }) => {
	const [playable, setPlayable] = useState(false);
	const [handCards, setHandCards] = useState(
		hand.map((card) => convertToHandCard(card))
	);

	const handleCardClick = (idx: number) => {
		const cards = handCards.map((card, i) => {
			if (idx === i) {
				setPlayable(!card.active);
				return { ...card, active: !card.active };
			}

			return { ...card, active: false };
		});

		setHandCards(cards);
	};

	const handlePlayCards = () => {
		const { held, played } = handCards.reduce(
			(cards, card) => {
				if (card.active) {
					return {
						held: cards.held,
						played: [...cards.played, convertToPlayingCard(card)],
					};
				}

				return {
					held: [...cards.held, card],
					played: cards.played,
				};
			},
			{ held: [] as HandCard[], played: [] as Card[] }
		);

		setHandCards(held);
		onPlayCard(played);
		setPlayable(false);
	};

	return (
		<>
			<div className="hand">
				{handCards.map((card, idx) => (
					<PlayingCard
						key={idx}
						onClick={() => handleCardClick(idx)}
						className={`in-hand ${card.active ? "card-selected" : ""}`}
						{...card}
					/>
				))}
			</div>
			<div className="actions">
				{playable ? (
					<Button className="primary" onClick={handlePlayCards}>
						Play Card
					</Button>
				) : null}
			</div>
		</>
	);
};

export default PlayerHand;
