import { API_KEY_MOVIE } from '@env';
import { AxiosAddapter } from "./http/axios.adapter";


export const movieDBFetcher = new AxiosAddapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: API_KEY_MOVIE,
        language: 'es'
    }
})