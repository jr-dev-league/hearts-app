import React from "react";
import GamesList from ".";
import { GameListEntry } from "../../types"
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default {
	title: "Games List Story",
	component: GamesList,
};

const gamesListMock: GameListEntry[] = [
    {   gameID: 2,
        playerNames: [
            "Fido",
            "Sparky",
            "Ol' Smelly",
            "Lassie"
        ]
    },
    {   gameID: 5,
        playerNames: [
            "Mr. Peanutbutter",
            "empty",
            "empty",
            "empty"
        ]
   }
];

export const GameListStory = () => (
    <Container>
	<GamesList games={gamesListMock}></GamesList>
    </Container>
);
