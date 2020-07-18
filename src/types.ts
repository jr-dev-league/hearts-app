export interface Opponent {
	cards: number;
	name: string;
	score: number;
}

export interface Card {
	suit: Suit;
	value: Value;
}

export type Suit = "Spades" | "Diamonds" | "Clubs" | "Hearts";
export type Value =
	| "Ace"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "10"
	| "Jack"
	| "Queen"
	| "King";
<<<<<<< HEAD
=======

export interface GameListEntry {
	gameID: number,
	key: number,
	playerNames: {
		1: string;
		2: string;
		3: string;
		4: string;
	}
}
>>>>>>> createGamesList
