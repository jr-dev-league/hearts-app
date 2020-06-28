import React from "react";
import GamesList from ".";
import { GameListEntry } from "../../types"
import { Segment, Modal, ModalContent } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default {
	title: "Games List Story",
	component: GamesList,
};

const gamesListMock: GameListEntry[] = [
    {   gameID: 2,
        playerNames: [
            "Pumpkin",
            "Ol' Yeller",
            "Ol' Smelly",
            "Lassie"
        ]
    },
    {   gameID: 5,
        playerNames: [
            "Mr. Peanutbutter",
        ]
   }
];

const onJoinMock = () => {
    return (
        <Modal>
            <ModalContent text>
                <p>We've found the following gravatar image associated with your e-mail address.</p>
            </ModalContent>
        </Modal>
    )
}

export const GameListStory = () => (
    <Segment>
	    <GamesList games={gamesListMock} onJoin={onJoinMock}></GamesList>
    </Segment>
);
