import React, { useEffect, useState } from 'react'
import * as UseCase from '../../core/use-cases'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter'
import { FullMovie } from '../../core/entities/movie.entity'
import { Cast } from '../../core/entities/cast.entity'
import { useMoviesStore } from '../store/movie-store'


export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState<FullMovie>();
    const [cast, setCast] = useState<Cast[]>();
    const getMovieById = useMoviesStore(state => state.getMovieById)

    useEffect(() => {
        setIsLoading(true)
        loadMovie()
    }, [movieId])
    

    const loadMovie = async () => {
        
        const findMovie = getMovieById(movieId);

        const castRes = await UseCase.getMovieCastUseCase(movieDBFetcher, movieId);

        if (!!findMovie) {
          setMovie(findMovie);  
        }else{
          const fullMovieRes = await UseCase.getMovieByIdUseCase(movieDBFetcher, movieId) 
          setMovie(fullMovieRes);
        }

        setCast(castRes)

        setIsLoading(false)

    }

  return {
    isLoading,
    movie,
    cast
  }
}
