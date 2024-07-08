import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoritesScreen } from '../screens/favorites/FavoritesScreen';
import { StackNavigation } from './StackNavigation';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Tab.Screen name="Movies" 
        options={{ 
          title: 'Peliculas',
          tabBarIcon: ({color}) => <Icon name="movie" size={30} color={color} /> 
        }} 
        component={StackNavigation} 
      />
      <Tab.Screen 
        name="Favorites" 
        options={{ 
          title: 'Favoritos',
          tabBarIcon: ({color}) => <Icon name="star" size={30} color={color} />

        }} 
        component={FavoritesScreen} 
      />
    </Tab.Navigator>
  )
}
