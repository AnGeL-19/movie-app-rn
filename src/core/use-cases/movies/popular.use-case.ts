import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrestruture/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrestruture/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

interface Options {
    page: number;
    limit?: number;
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {

    try {
        
        const data = await fetcher.get<NowPlayingResponse>('/popular', {
            params: {
                page: options?.page
            }
        })

        return data.results.map( MovieMapper.fromMovieDBResultToEntity )
        

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - popular')
    }

}