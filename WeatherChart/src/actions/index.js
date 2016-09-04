// like jquery
import axios from 'axios';

const API_KEY = 'a4aee62a7c5daf482e88a320334dd864';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


// console.log(ROOT_URL);

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	// console.log('Request: ', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}

