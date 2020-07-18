import React from "react";
import { GameListEntry } from "./index";
import GamesList from ".";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default {
	title: "Games List Story",
	component: GamesList,
};

const gamesListMock: GameListEntry[] = [
	{ gameID: 2, playerNames: ["Pumpkin", "Ol' Yeller", "Ol' Smelly", "Lassie"] },
	{ gameID: 5, playerNames: ["Mr. Peanutbutter"] },
];

const handleJoinMock = () => {
	alert("handleJoin succeeded");
};

export const GameListStory = () => (
	<Container>
		<GamesList games={gamesListMock} onJoin={handleJoinMock}></GamesList>
	</Container>
);
