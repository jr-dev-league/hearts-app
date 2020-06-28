import React from "react";
import "./GamesList.css";
import UserInfo from "../UserInfo"
import { GameListEntry } from "../../types";
import { Button, Container, Segment, SegmentGroup } from "semantic-ui-react";

interface GamesListProps {
	games: GameListEntry[];
}

interface ListEntryProps {
    game: GameListEntry;
}

const MAX_PLAYERS = 4;
const GAME_NAME = "Hearts";

const ListEntry: React.FC<ListEntryProps> = ( {game} ) => {
    let full = true;
    const playerNames = game.playerNames;
    if (MAX_PLAYERS > game.playerNames.length) {
        full = false;
        const emptySpots = MAX_PLAYERS - game.playerNames.length
        for (let i = 0; i < emptySpots; i++) {
            playerNames.push("Slot empty")
        }
    }

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
                                <UserInfo userName={name}/>
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
