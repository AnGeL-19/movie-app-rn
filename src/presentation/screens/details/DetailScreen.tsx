import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { RootStackParams } from '../../routes/StackNavigation'
import { useMovie } from '../../hooks/useMovie'
import { MovieHeader } from '../../components/detail/MovieHeader'
import { MovieDetail } from '../../components/detail/MovieDetail'
import { FullScreenLoader } from '../../components/loader/FullSreenLoader'

interface Props extends StackScreenProps<RootStackParams, 'Details'>{};

export const DetailScreen = ({ route }:Props) => {
  
  const id = route.params.movieId

  const { isLoading, movie, cast } = useMovie(id)

  if (isLoading || !movie) {
    return <FullScreenLoader />
  }
  
  return (
    <ScrollView style={{flex: 1}}>
      
            <MovieHeader 
              movie={movie}
            />

          <MovieDetail 
            budget={movie.budget}
            description={movie.description}
            genres={movie.genres}
            rating={movie.rating}
            cast={cast!}
          />

        
    </ScrollView>
  )
}
