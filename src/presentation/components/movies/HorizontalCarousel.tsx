
import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
    loadNextPage?: () => void;
}

export const HorizontalCarousel = ({ movies, title, loadNextPage }:Props) => {


    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(false)
    }, [movies])
    

    const onMoreData = () => {

        if(!loadNextPage) return setIsLoading(false); 

        if (isLoading) return;

        setIsLoading(true);

        loadNextPage && loadNextPage();


    }


  return (
    <View
        style={{ height: title ? 260 : 220 }}
    >
        {
            title 
            &&
            (
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 300,
                    marginLeft: 10,
                    marginBottom: 10
                }}
                >
                    {title}
            </Text>
            )
        }
        <FlatList 
            data={movies}
            renderItem={({item}) => <MoviePoster movie={item} height={200} width={150}/>}
            keyExtractor={ (item, index) => `${item.id}-${index}` }
            horizontal
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            onEndReached={onMoreData}
            ListFooterComponent={()=>(
                <View 
                    style={{ 
                        width: 150, 
                        height: 200, 
                        flex: 1, 
                        justifyContent: 'center', 
                        alignItems: 'center' 
                    }}>
                        <ActivityIndicator 
                            animating={isLoading}
                            size='large' 
                            color='black' 
                        />
                </View>
            )}
        />
    </View>
  )
}
