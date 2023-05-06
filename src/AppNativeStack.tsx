import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './pages/Home';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// const Stack = createStackNavigator<any>();
const Stack = createNativeStackNavigator<any>();

function AppNativeStack(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PageA" component={PageA} />
          <Stack.Screen name="PageB" component={PageB} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default AppNativeStack;
