import React, {useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';


import Navigation from './src/navigation/Navigation';


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulating the authentication process
  const authenticateUser = () => {
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 2000);
  };

  // Simulating the logout process
  const logoutUser = () => {
    setIsAuthenticated(false);
  };

  // Render the navigation based on the authentication status
  return (
    <PaperProvider>
      <Navigation isAuthenticated={isAuthenticated} />
    </PaperProvider>
  );
  
}
