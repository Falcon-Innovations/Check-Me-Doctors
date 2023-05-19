import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Home } from '../screens/main';

export type RootStackParamList = {
  Home: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
