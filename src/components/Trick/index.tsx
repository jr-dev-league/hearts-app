import React from "react";
import PlayingCard from "../PlayingCard";
import { Card } from "../../types";
import "./Trick.css";

interface Props {
	trick: (Card | null)[];
}

const positions = ["left", "across", "right", "in-front"];

const Trick: React.FC<Props> = ({ trick }) => (
	<div className="trick" style={{ display: "flex" }}>
		{trick.reduce((cards: JSX.Element[], card, idx) => {
			if (card === null) return cards;
			return [
				...cards,
				<PlayingCard
					key={idx}
					className={`trick-card ${positions[idx]}`}
					suit={card.suit}
					value={card.value}
				/>,
			];
		}, [])}
	</div>
);

export default Trick;
