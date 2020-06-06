import React from "react";
import PlayerCard from ".";
import { Card } from "../../types";
import "semantic-ui-css/semantic.min.css";

export default {
	title: "All Cards",
	component: PlayerCard,
};

const suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
const values = [
	"Ace",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"Jack",
	"Queen",
	"King",
];

const allCards = suits.map((suit) =>
	values.map((value) => ({
		suit,
		value,
	}))
);

export const CardStory = () => (
	<>
		<h1>Spades</h1>
		<div style={{ display: "flex" }}>
			{allCards[0].map(({ suit, value }) => (
				<PlayerCard suit={suit} value={value} />
			))}
		</div>
		<h1>Diamonds</h1>
		<div style={{ display: "flex" }}>
			{allCards[1].map(({ suit, value }) => (
				<PlayerCard suit={suit} value={value} />
			))}
		</div>
		<h1>Clubs</h1>
		<div style={{ display: "flex" }}>
			{allCards[2].map(({ suit, value }) => (
				<PlayerCard suit={suit} value={value} />
			))}
		</div>
		<h1>Hearts</h1>
		<div style={{ display: "flex" }}>
			{allCards[3].map(({ suit, value }) => (
				<PlayerCard suit={suit} value={value} />
			))}
		</div>
	</>
);
