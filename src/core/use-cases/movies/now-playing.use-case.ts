import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrestruture/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrestruture/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";


export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        
        const data = await fetcher.get<NowPlayingResponse>('/now_playing')

        return data.results.map( MovieMapper.fromMovieDBResultToEntity )
        

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - now playing')
    }

}
