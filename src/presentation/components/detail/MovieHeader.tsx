import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useMoviesStore } from '../../store/movie-store';
import type { FullMovie } from '../../../core/entities/movie.entity';


interface Props {
    movie: FullMovie;
}

export const MovieHeader = ({movie}: Props) => {

    const addFavoriteMovie = useMoviesStore(state => state.addFavoriteMovie)
    const existMovieById = useMoviesStore(state => state.existMovieById)
    const removeFavoriteMovie = useMoviesStore(state => state.removeFavoriteMovie)

    const [exist, setExist] = useState(existMovieById(movie.id))

    const { height: screenHeight } = useWindowDimensions()
    const navigation = useNavigation()

    
    const onFavorite = (fullMovie: FullMovie) => {

      if (exist) {
        removeFavoriteMovie(movie.id)
      }else{
  
        addFavoriteMovie(fullMovie)
      }
      setExist(prev => !prev)

    } 

  return (
    <>
        <View style={{ ...styles.imageContainer, height: screenHeight * 0.7 }}>
            <View style={styles.imageBorder}>
                <Image 
                    style={styles.posterImage}
                    source={{uri: movie.poster || ''}}
                />
            </View>
        </View>

        <View style={styles.marginContainer}>
            <Text style={styles.subTitle}>{movie.originalTitle}</Text>
            <Text style={styles.title}>{movie.title}</Text>
        </View>

        <View 
            style={{...styles.containerButtons}}
        >
           <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
           >
              	<Pressable
                  onPress={() => navigation.goBack()}
                  style={{...styles.backButton, backgroundColor: 'white',}}
              >
                  <Icon
                  style={{
                    marginLeft: 10
                  }} 
                  name="arrow-back-ios" 
                  size={30} 
                  color="rgb(227, 227, 227)" 
                  />
              </Pressable>

              <Pressable
                  onPress={() => onFavorite(movie)}
                  style={{...styles.backButton, backgroundColor: '#767676' }}
              >
                  <Icon
                  
                  name={exist ? "star" : "star-outline" }
                  size={30} 
                  color="rgb(255, 244, 184)"
                 
                  />
              </Pressable>

           </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
      width: '100%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
  
      elevation: 9,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
  
    imageBorder: {
      flex: 1,
      overflow: 'hidden',
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
    posterImage: {
      flex: 1,
    },
  
    marginContainer: {
      marginHorizontal: 20,
      marginTop: 20,
    },

    subTitle: {
      fontSize: 16,
      opacity: 0.8,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    containerButtons: {
      width: '100%',
      position: 'absolute',
      padding: 10,
      zIndex: 999,
    },
    backButton: {
      width: 50,
      height: 50,
      borderRadius: 100,
      elevation: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });