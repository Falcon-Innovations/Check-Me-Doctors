
import {NavigationContainer} from '@react-navigation/native';
import React from 'react'
import MainNavigation from './MainNavigation';
import AuthNavigation from './AuthNavigation';



const Navigation = ({isAuthenticated}: {isAuthenticated: boolean}) => {
  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation

