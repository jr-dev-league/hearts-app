import React, { useState } from "react";
import cardFaces from "../../cards";
import "./PlayingCard.css";

interface Props {
	active?: boolean;
	className?: string;
	onClick?: React.UIEventHandler;
	suit: string;
	styleVars?: { rotation: string };
	value: string;
}

// TODO: Sort this whole type mess out.
const getCardFace = (suit: string, value: string): string => {
	let card;
	if (suit && value) {
		card = suit + value;
	} else {
		card = "CardBack";
	}

	return cardFaces[card];
};

const PlayingCard: React.FC<Props> = ({
	active = false,
	onClick,
	suit,
	styleVars = {},
	value,
	...rest
}) => {
	const [rotation] = useState(styleVars.rotation);
	const style = {
		transform: rotation,
	};
	const getClassName = () => {
		let cardClassName = `card ${active ? "card-active" : ""}`;

		if (rest.className) {
			cardClassName = `${rest.className} ${cardClassName}`;
		}

		return cardClassName;
	};

	return (
		<div style={style} onClick={onClick} className={getClassName()}>
			<img
				alt={"playing card"}
				src={getCardFace(suit, value)}
				className={"card-face"}
			/>
		</div>
	);
};

export default PlayingCard;
