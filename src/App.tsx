import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './pages/Home';
import PageA from './pages/PageA';

const Stack = createStackNavigator<any>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PageA" component={PageA} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
