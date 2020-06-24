import React from "react";
import "./GamesList.css";
import { GameListEntry } from "../../types";
import { Table } from "semantic-ui-react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";


interface GamesListProps {
	games: GameListEntry[];
}

const GamesListBody: React.FC<GamesListProps> = ( games ) => (
    <Table.Body>
            
    </Table.Body>
);

const GamesList: React.FC<GamesListProps> = ( games ) => (
    <Table celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Game ID</Table.HeaderCell>
                <Table.HeaderCell>Spot 1</Table.HeaderCell>
                <Table.HeaderCell>Spot 2</Table.HeaderCell>
                <Table.HeaderCell>Spot 3</Table.HeaderCell>
                <Table.HeaderCell>Spot 4</Table.HeaderCell>
                <Table.HeaderCell>Join Game</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <GamesListBody games={games}></GamesListBody>
    </Table>
);
export default GamesList;