/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import LeftIcon from 'react-native-vector-icons/Feather';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from './constants';
import {AppButton} from './components';
import {ButtonType} from './components/common/buttons/AppButton';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleButtonPress = () => {
    setIsLoading(true);
    setIsDisabled(true);
 

    setTimeout(() => {
      setIsLoading(false);
      setIsDisabled(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View>
        <AppButton
          onPress={handleButtonPress}
          type={ButtonType.SOLID}
          loading={isLoading}
          disabled={isDisabled}
          label='Solid Button'
          textColors={isDisabled ? COLORS.white : COLORS.white}
          leftIcon={<LeftIcon name="award" color="#ffffff" size={16} />}
          rightIcon={<LeftIcon name="book" color="#ffffff" size={16} />}
          bgColor={
            isPressed
              ? COLORS.primary_800
              : isDisabled
              ? COLORS.neutral_100
              : isLoading
              ? COLORS.primary_50
              : COLORS.primary_400
          }
          pressed={isPressed}
        />
        <AppButton
          onPress={handleButtonPress}
          type={ButtonType.OUTLINED}
          label='Outlined Button'
          loading={isLoading}
          disabled={isDisabled}
          bgColor='transparent'
          borderColor={isDisabled ? COLORS.neutral_100 : COLORS.primary_400}
        />
        <AppButton
          onPress={handleButtonPress}
          label='Text Button'
          type={ButtonType.TEXT}
          loading={isLoading}
          disabled={isDisabled}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    color: COLORS.success_700,
    fontFamily: 'Poppins-Italic',
  },
});

export default App;
