import React from "react";
import "./GamesList.css";
import { GameListEntry } from "../../types";
import { Segment, SegmentGroup } from "semantic-ui-react";

interface GamesListProps {
	games: GameListEntry[];
}

interface ListEntryProps {
    game: GameListEntry;
}

const ListEntry: React.FC<ListEntryProps> = ( {game} ) => {
    return (
    <SegmentGroup>
        <Segment>{game.gameID}</Segment>
        <Segment children={game.playerNames}/>
    </SegmentGroup>)
};

const GamesList: React.FC<GamesListProps> = ( {games} ) => {
    return (<SegmentGroup> {games.map((game) => {
        return <ListEntry game={game}/>
    })}</SegmentGroup>)
};
export default GamesList;