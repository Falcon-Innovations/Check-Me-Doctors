import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Register,Login,ForgotPassword,ResetPassword } from '../screens/auth';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined
  onBoarding:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigation = () => {


  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

