import { GET_WEATHER } from '../actions/index';

export default function (state = [], action) {
	switch(action.type) {
		case GET_WEATHER:
			// returns a new version of state with the new city at the front of the array
			return [action.payload.data, ...state];
		default:
			return state;
	}
}