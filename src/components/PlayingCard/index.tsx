import React, { useState } from "react";
import * as cardFaces from "../../cards";
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
		card = `${suit}_${value}`;
	} else {
		card = "Card_Back";
	}

	return (cardFaces as any)[card] as string;
};

const PlayingCard: React.FC<Props> = ({
	active = false,
	className,
	onClick,
	suit,
	styleVars = {},
	value,
}) => {
	const [rotation] = useState(styleVars.rotation);
	const style = {
		width: "6rem",
		marginTop: active ? "0rem" : "3rem",
		transform: rotation,
	};

	return (
		<div style={style} onClick={onClick} className={className}>
			<img alt={"playing card"} src={getCardFace(suit, value)} />
		</div>
	);
};
export default PlayingCard;
