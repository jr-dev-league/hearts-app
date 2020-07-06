import React from "react";
import PlayingCard from "../PlayingCard";
import { Card } from "../../types";
import "./Trick.css";

interface Props {
	trick: (Card | null)[];
}

const positions = ["left-trick-card", "across-trick-card", "right-trick-card", "in-front-trick-card"];

const Trick: React.FC<Props> = ({ trick }) => (
	<div className="trick" style={{ display: "flex" }}>
		{trick.reduce((cards: JSX.Element[], card, index) => {
			if (card === null) return cards;
			return [
				...cards,
				<PlayingCard
					className={`trick-card ${positions[index]}`}
					suit={card.suit}
					value={card.value}
				/>,
			];
		}, [])}
	</div>
);

export default Trick;
