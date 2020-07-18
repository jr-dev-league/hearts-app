import React from "react";
import UserInfo from "../UserInfo";
import {
	Button,
	Container,
	Segment,
	SegmentGroup,
	Grid,
	GridRow,
	GridColumn,
} from "semantic-ui-react";

export interface GameListEntry {
	gameID: number;
	playerNames: string[];
}

interface GamesListProps {
	games: GameListEntry[];
	onJoin: () => void;
}

interface ListEntryProps {
	game: GameListEntry;
	onJoin: () => void;
}

interface TopBarProps {
	gameID: number;
	onJoin: () => void;
	full: boolean;
}

const MAX_PLAYERS = 4;
const GAME_NAME = "Hearts";

const GamesList: React.FC<GamesListProps> = ({ games, onJoin }) => {
	let i = 0;
	return (
		<SegmentGroup>
			{" "}
			{games.map((game) => {
				return <ListEntry key={i++} game={game} onJoin={onJoin} />;
			})}
		</SegmentGroup>
	);
};

const TopBar: React.FC<TopBarProps> = ({ gameID, onJoin, full }) => {
	return (
		<SegmentGroup horizontal>
			<Segment inverted color="black">
				<h3>{`${GAME_NAME} Game ${gameID}`}</h3>
			</Segment>
			<Segment inverted color="black" textAlign="right">
				{full ? (
					<Button disabled inverted>
						Game Full
					</Button>
				) : (
					<Button inverted primary onClick={onJoin}>
						Join Game
					</Button>
				)}
			</Segment>
		</SegmentGroup>
	);
};

const ListEntry: React.FC<ListEntryProps> = ({ game, onJoin }) => {
	const emptySlotName = "Slot Empty";
	let full = true;
	const playerNames = game.playerNames;
	if (playerNames.includes(emptySlotName)) {
		full = false;
	}
	if (MAX_PLAYERS > playerNames.length) {
		full = false;
		const emptySpots = MAX_PLAYERS - playerNames.length;
		for (let i = 0; i < emptySpots; i++) {
			playerNames.push(emptySlotName);
		}
	}

	const playerAvatars = [
		"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/A_Shiba_Inu.jpg/64px-A_Shiba_Inu.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2._Mestre_%28Italy%29%2C_the_dog_MILO.jpg/64px-2._Mestre_%28Italy%29%2C_the_dog_MILO.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Dalmapointer.jpg/64px-Dalmapointer.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/A_Shiba_Inu_enjoying_a_sunny_day.jpg/32px-A_Shiba_Inu_enjoying_a_sunny_day.jpg",
	];

	const unknownAvatar =
		"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/64px-Question_Mark.svg.png";

	let count = 0;

	return (
		<SegmentGroup>
			<TopBar gameID={game.gameID} onJoin={onJoin} full={full} />
			<Grid columns={5} padded>
				<GridRow className="game-list-row">
					<GridColumn>
						<Container textAlign="center">
							<h4>Player Slots</h4>
						</Container>
					</GridColumn>
					{playerNames.map((name) => {
						return (
							<GridColumn key={count}>
								<Container>
									{name !== emptySlotName ? (
										<UserInfo
											userName={name}
											userAvatar={playerAvatars[count++]}
										/>
									) : (
										<UserInfo userName={name} userAvatar={unknownAvatar} />
									)}
								</Container>
							</GridColumn>
						);
					})}
				</GridRow>
			</Grid>
		</SegmentGroup>
	);
};

export default GamesList;
