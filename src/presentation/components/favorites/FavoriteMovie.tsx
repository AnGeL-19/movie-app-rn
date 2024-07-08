import React from 'react'
import { useMoviesStore } from '../../store/movie-store'
import { Pressable, Text, View } from 'react-native'
import { MoviePoster } from '../movies/MoviePoster'
import { FullMovie, Movie } from '../../../core/entities/movie.entity'
import Icon  from 'react-native-vector-icons/MaterialIcons'

interface Props {
    movie: FullMovie
}

export const FavoriteMovie = ({movie}:Props) => {

    const removeFavoriteMovie = useMoviesStore(state => state.removeFavoriteMovie)

  return (
    <View style={{
        flexDirection: 'row',
        gap: 10,
      }}>
        <MoviePoster movie={movie} width={150} height={200}  />
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: 15
          }}
        >
          <View>
            <Text >{movie.releaseDate.toLocaleDateString()}</Text>
            <Text style={{fontSize: 20, fontWeight: 500}}>{movie.title}</Text>
            <Text style={{fontSize: 18}}>{movie.duration} min</Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 5
              }}
            >
              <Icon 
                name="star-rate"
                size={20} 
                color="rgb(96, 96, 96)"
                />
                <Text style={{fontSize: 15}}>{movie.rating}</Text>
            </View>
          </View>
          <View>
            <Pressable
              onPress={() => removeFavoriteMovie(movie.id)}
            >

              <Icon 
                    name="delete"
                    size={40} 
                    color="rgb(255, 149, 149)"
                    />
            </Pressable>
            
          </View>
          
        </View>
      </View>
  )
}
