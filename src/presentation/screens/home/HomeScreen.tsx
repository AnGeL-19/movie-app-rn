import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies'
import { PosterCarousel } from '../../components/movies/PosterCarousel'
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FullScreenLoader } from '../../components/loader/FullSreenLoader'

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()
    const { 
      isLoading , 
      nowPlaying, 
      popular, 
      topRated, 
      upcoming, 
      nextPagePopular 
    }  = useMovies()

    if (isLoading) {
      return <FullScreenLoader />
    }

  return (
    <ScrollView>
        <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
          <PosterCarousel movies={nowPlaying} />

          <HorizontalCarousel title='Popular' movies={popular} loadNextPage={nextPagePopular} />

          <HorizontalCarousel title='Mejores valoradas' movies={topRated} />

          <HorizontalCarousel title='Proximamente' movies={upcoming} />
        </View>
    </ScrollView>
  )
}
