import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieResponse } from "../../../infrestruture/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrestruture/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";


export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {

    try {
        const data = await fetcher.get<MovieResponse>(`/${movieId}`);

        return MovieMapper.fromFullMovietToEntity(data);

    } catch (error) {
        throw new Error(`Cannont get movie by id ${movieId}`);
        
    }

}