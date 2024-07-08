import 'react-native-gesture-handler';
import React from 'react'
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigation } from './presentation/routes/StackNavigation';
import { TabNavigation } from './presentation/routes/TabNavigation';

const App = () => {
  return (
    <NavigationContainer>

        <TabNavigation />
  
    </NavigationContainer>
    
  )
}

export default App;