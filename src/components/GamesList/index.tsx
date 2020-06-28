import React from "react";
import "./GamesList.css";
import UserInfo from "../UserInfo"
import { GameListEntry } from "../../types";
import { Button, Segment, SegmentGroup } from "semantic-ui-react";

interface GamesListProps {
	games: GameListEntry[];
}

interface ListEntryProps {
    game: GameListEntry;
}

const MAX_PLAYERS = 4;
const GAME_NAME = "Hearts";

const ListEntry: React.FC<ListEntryProps> = ( {game} ) => {
    const emptySlotName = "Slot Empty"
    let full = true;
    const playerNames = game.playerNames;
    if (playerNames.includes(emptySlotName)) {
        full = false;
    }
    if (MAX_PLAYERS > playerNames.length) {
        full = false;
        const emptySpots = MAX_PLAYERS - playerNames.length
        for (let i = 0; i < emptySpots; i++) {
            playerNames.push(emptySlotName)
        }
    }

    const playerAvatars = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/A_Shiba_Inu.jpg/64px-A_Shiba_Inu.jpg",
    ]

    return (
        <SegmentGroup>

            <SegmentGroup horizontal>
                <Segment inverted color="black">
                    <h3>{`${GAME_NAME} Game ${game.gameID}`}</h3>
                </Segment>
                <Segment inverted color="black" textAlign="right">
                    {
                        full ? <Button disabled inverted>Game Full</Button>
                         : <Button inverted color='red'>Join Game</Button>
                    }
                </Segment>
            </SegmentGroup>

            <SegmentGroup horizontal>
                
                <Segment compact>
                <h4>Slots</h4>
                </Segment>

                {   
                    playerNames.map((name) => {
                        return (
                            <Segment>
                                <UserInfo userName={name} userAvatar={playerAvatars[0]}/>
                            </Segment>
                        )
                    })
                }
                
            </SegmentGroup>
        </SegmentGroup>
    )
};

const GamesList: React.FC<GamesListProps> = ( {games} ) => {
    return (<SegmentGroup> {games.map((game) => {
        return <ListEntry game={game}/>
    })}</SegmentGroup>)
};

export default GamesList;
