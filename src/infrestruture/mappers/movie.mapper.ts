import { FullMovie, Movie } from "../../core/entities/movie.entity";
import { MovieResponse, Result } from "../interfaces/movie-db.responses";


export class MovieMapper {

    static fromMovieDBResultToEntity(result:Result): Movie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: new Date(result.release_date),
            rating: result.vote_average,
            backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
        }
    }

    static fromFullMovietToEntity(result: MovieResponse): FullMovie {

        const baseImg = 'https://image.tmdb.org/t/p/w500';

        const backdropPath = baseImg+result.backdrop_path;

        const posterPath = baseImg+result.poster_path;
        

        return {
            id: result.id,
            title: result.title,
            originalTitle: result.original_title || '',
            budget: result.budget || 0,
            description: result.overview || '',
            genres: result.genres ? result.genres.map( genre => genre.name) : [],
            releaseDate: new Date(result.release_date),
            productionCompanies: result.production_companies ? result.production_companies.map( pro => pro.name ) : [],
            rating: result.vote_average || 0,
            duration: result.runtime || 0,
            backdrop: backdropPath || '',
            poster: posterPath || ''
        }
    }

}