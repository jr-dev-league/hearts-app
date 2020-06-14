import { Card, Value, Suit } from "../types";

const suits: Suit[] = ["Spades", "Diamonds", "Clubs", "Hearts"];
const values: Value[] = [
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

export const allCards: Card[][] = suits.map((suit) =>
	values.map((value) => ({
		suit,
		value,
	}))
);
