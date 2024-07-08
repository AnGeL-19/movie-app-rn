
import React, { useEffect, useRef, useState } from 'react'

import * as UseCases from '../../core/use-cases/index';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { Movie } from '../../core/entities/movie.entity';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const [popular, setPopular] = useState<Movie[]>([])
    const [upcoming, setUpcoming] = useState<Movie[]>([])
    const [topRated, setTopRated] = useState<Movie[]>([])

    const pagePopular = useRef(1);

    useEffect(() => {
        initalLoad()
    }, [])

    const initalLoad = async () => {

        const [
            nowPlayingNowRes,
            upcomingRes,
            topRatedRes,
            popularRes, 
        ] = await Promise.all([
            await UseCases.moviesNowPlayingUseCase(movieDBFetcher),
            await UseCases.moviesUpcomingUseCase(movieDBFetcher),
            await UseCases.moviesTopRatedUseCase(movieDBFetcher),
            await UseCases.moviesPopularUseCase(movieDBFetcher),
        ])

        setNowPlaying(nowPlayingNowRes)
        setPopular(popularRes)
        setUpcoming(upcomingRes)
        setTopRated(topRatedRes)

        setIsLoading(false)
        
    }

    const nextPagePopular = async () => {
        pagePopular.current++;

        const morePupular = await UseCases.moviesPopularUseCase(movieDBFetcher, {
            page: pagePopular.current
        }); 

        if (morePupular.length === 0) return;

        setPopular(prev => [...prev, ...morePupular])

    }
     

  return {
    isLoading,
    nowPlaying,
    popular,
    upcoming,
    topRated,

    nextPagePopular
  }
}
