import axios from 'axios';

const API_KEY = 'a584d0daceb66921b3099e7abd047094';
const rootURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const GET_WEATHER = 'GET_WEATHER';


export function getWeather(cityName) {
	const url = `${rootURL}&q=${cityName},us&cnt=5`;
	const request = axios.get(url);

	return {
		type: GET_WEATHER,
		payload: request
	}
}


