import { create } from 'zustand'
import { FullMovie, Movie } from '../../core/entities/movie.entity';

interface MoviesStore {
  movies: FullMovie[];
  totalMovies: number;
  addFavoriteMovie: (movie: FullMovie) => void;
  removeFavoriteMovie: (movieId: number) => void;
  existMovieById: (movieId: number) => boolean;
  getMovieById: (movieId: number) => FullMovie | undefined;
}

export const useMoviesStore = create<MoviesStore>()((set, get) => ({
    movies: [],
    totalMovies: 0,
    addFavoriteMovie: (movie) => set((state) => { 

        return {
            ...state,
            movies: [movie,...state.movies],
            totalMovies: state.totalMovies+1
        }
     }),
    removeFavoriteMovie: (movieId) => set((state) => {
        return { 
            ...state,
            movies: state.movies.filter( movie => movie.id !== movieId),
            totalMovies: state.totalMovies-1
        }
    }),
    existMovieById: (movieId: number): boolean => {
        return !!get().movies.find( movie => movie.id === movieId );
    },
    getMovieById: (movieId: number): FullMovie | undefined => {
        return get().movies.find( movie => movie.id === movieId)
    }
}))