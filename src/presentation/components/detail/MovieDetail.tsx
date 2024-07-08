

import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Formatter } from '../../../config/helpers/formatters';
import { Cast } from '../../../core/entities/cast.entity';
import { CastActor } from '../cast/CastActor';

interface Props {
    rating: number;
    genres: string[];
    description: string;
    budget: number;
    cast: Cast[];
}

export const MovieDetail = ({ rating, genres, description, budget, cast }: Props) => {
  return (
    <>
        <View style={{
            marginHorizontal: 20
        }}>
            <View style={{
                flexDirection: 'row'
            }}>
                <Text>{rating}</Text>
                <Text style={{marginLeft: 5}}>-{genres.join(', ')}</Text>
            </View>
            <Text style={{
                fontSize: 23,
                marginTop: 10,
                fontWeight: 'bold'
            }}>Historia</Text>
            <Text style={{fontSize: 16}}>{description}</Text>

            <Text style={{
                fontSize: 23,
                marginTop: 10,
                fontWeight: 'bold'
            }}>Presupuesto</Text>
            <Text style={{fontSize: 16}}>{Formatter.currency(budget)}</Text>
        </View>
    
        <View 
            style={{
                marginTop: 10,
                marginBottom: 20
            }}
        >
            <Text
                style={{
                    fontSize: 23,
                    marginVertical:10,
                    fontWeight: 'bold',
                    marginHorizontal: 20
                }}
            >
                Actores
            </Text>

            <FlatList 
                data={ cast }
                keyExtractor={ (item) => item.id.toString() }
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={ ({item}) => <CastActor actor={ item } /> }
            />

        </View>
    </>
    
  )
}
