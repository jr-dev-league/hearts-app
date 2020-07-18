import React from "react";
import PlayerCard from ".";
import { allCards } from "../../utils/storybook";
import "semantic-ui-css/semantic.min.css";

export default {
	title: "All Cards",
	component: PlayerCard,
};

export const CardStory = (): JSX.Element => (
	<>
		<h1>Spades</h1>
		<div style={{ display: "flex" }}>
			{allCards[0].map(
				({ suit, value }, idx): JSX.Element => (
					<PlayerCard key={idx} suit={suit} value={value} />
				)
			)}
		</div>
		<h1>Diamonds</h1>
		<div style={{ display: "flex" }}>
			{allCards[1].map(
				({ suit, value }, idx): JSX.Element => (
					<PlayerCard key={idx} suit={suit} value={value} />
				)
			)}
		</div>
		<h1>Clubs</h1>
		<div style={{ display: "flex" }}>
			{allCards[2].map(
				({ suit, value }, idx): JSX.Element => (
					<PlayerCard key={idx} suit={suit} value={value} />
				)
			)}
		</div>
		<h1>Hearts</h1>
		<div style={{ display: "flex" }}>
			{allCards[3].map(
				({ suit, value }, idx): JSX.Element => (
					<PlayerCard key={idx} suit={suit} value={value} />
				)
			)}
		</div>
	</>
);
