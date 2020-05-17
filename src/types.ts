export interface Opponent {
	cards: number;
	name: string;
	score: number;
}

export interface Hand {
	cards: Card[];
}

export interface Card {
	suit: string;
	value: string;
}
