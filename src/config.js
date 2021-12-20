const API_KEY_OMBD = "ec27679d"; //process.env.REACT_APP_API_KEY_OMDB;
const API_URL_OMBD = `https://www.omdbapi.com/?apikey=${API_KEY_OMBD}`;
const API_KEY_FORTNITE = "637b5e65-37b70c11-9ca171ae-989095c8"; //process.env.REACT_APP_API_KEY_FORTNITE;
const API_URL_FORTNITE = "https://fortniteapi.io/v2/shop?lang=ru";
const API_KEY_MEAL = "1";
const API_URL_MEAL = `https://www.themealdb.com/api/json/v1/${API_KEY_MEAL}/`;

export { API_URL_OMBD, API_KEY_FORTNITE, API_URL_FORTNITE, API_URL_MEAL };
