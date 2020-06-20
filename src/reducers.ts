import { combineReducers } from "redux";
import { FETCH_GAMES } from "./actions";

const defaultState = [
	{
		ID: 0,
	},
];

const games = (state = defaultState, action: { type: string; action: any }) => {
	switch (action.type) {
		case FETCH_GAMES:
			break;

		default:
			return state;
	}
};

const reducers = combineReducers(games);

export default reducers;
