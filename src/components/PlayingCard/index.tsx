import React from "react";
import * as cardFaces from "../../cards";
import "./PlayingCard.css";

interface Props {
	active?: boolean;
	onClick: React.UIEventHandler;
	overlap?: boolean;
	suit: string;
	value: string;
}

// TODO: Sort this whole type mess out.
const getCardFace = (suit: string, value: string): string => {
	let card;
	if (suit && value) {
		card = `${suit}_${value}`;
	} else {
		card = "Card_Back";
	}

	return (cardFaces as any)[card] as string;
};

const PlayingCard: React.FC<Props> = ({
	active = false,
	onClick,
	suit,
	value,
}) => (
	<div
		style={{ width: "6rem", marginTop: active ? "0rem" : "3rem" }}
		onClick={onClick}
		className="card-face"
	>
		<img alt={"playing card"} src={getCardFace(suit, value)} />
	</div>
);

export default PlayingCard;
