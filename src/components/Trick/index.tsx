import React from "react";
import PlayingCard from "../PlayingCard";
import { Card } from "../../types";
import "./Trick.css";

interface Props {
	trick: Array<Card | null>;
}

const setRotation = (base: number): string => {
	const jitter = (Math.random() - 0.5) * 30;
	return `rotate(${base + jitter}deg)`;
};

const Trick: React.FC<Props> = ({ trick }) => {
	console.log(trick);
	return (
		<div className="trick">
			<div className="trick-across">
				{trick[2] ? (
					<PlayingCard
						active
						className="in-trick"
						suit={trick[2].suit}
						value={trick[2].value}
						styleVars={{ rotation: setRotation(0) }}
					/>
				) : null}
			</div>
			<div className="trick-sides">
				<div className="trick-left">
					{trick[1] ? (
						<PlayingCard
							active
							className="in-trick"
							suit={trick[1].suit}
							value={trick[1].value}
							styleVars={{ rotation: setRotation(270) }}
						/>
					) : null}
				</div>
				<div className="trick-right">
					{trick[3] ? (
						<PlayingCard
							active
							className="in-trick"
							suit={trick[3].suit}
							value={trick[3].value}
							styleVars={{ rotation: setRotation(90) }}
						/>
					) : null}
				</div>
			</div>
			<div className="trick-me">
				{trick[0] ? (
					<PlayingCard
						active
						className="in-trick"
						suit={trick[0].suit}
						value={trick[0].value}
						styleVars={{ rotation: setRotation(180) }}
					/>
				) : null}
			</div>
		</div>
	);
};

export default Trick;
