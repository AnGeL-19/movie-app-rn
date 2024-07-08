import React from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { useMoviesStore } from '../../store/movie-store'
import { MoviePoster } from '../../components/movies/MoviePoster'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FavoriteMovie } from '../../components/favorites/FavoriteMovie';

export const FavoritesScreen = () => {

  const totalMovies = useMoviesStore(state => state.totalMovies)
  
  const movies = useMoviesStore(state => state.movies)

  return (
    <View style={{
      flex: 1,
      padding: 10
    }}>
        <Text style={{
          fontSize: 30,
          fontWeight: 500,
          marginBottom: 10
        }}>Favoritos</Text>

        <FlatList
          data={movies}
          ListEmptyComponent={() => <Text style={{fontSize: 20}}>No hay favoritos asignados :c</Text>}
          renderItem={({item})=>(
            <FavoriteMovie movie={item}  />
          )}
          keyExtractor={({id}) => id.toString()}
        />
        
    </View>
  )
}
