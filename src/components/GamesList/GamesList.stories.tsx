import React from "react";
import GamesList from ".";
import { GameListEntry } from "../../types"
import "semantic-ui-css/semantic.min.css";

export default {
	title: "Games List Story",
	component: GamesList,
};

const gamesListMock: GameListEntry[] = [
	{ gameID: 2, key: 0, playerNames: {
            1: "Fido",
            2: "Sparky",
            3: "Ol' Smelly",
            4: "Lassie"
        }
    },
    { gameID: 5, key: 1, playerNames: {
            1: "Mr. Peanutbutter",
            2: "empty",
            3: "empty",
            4: "empty"
        }
   }
];

export const GameListStory = () => (
	<GamesList games={gamesListMock}></GamesList>
);
