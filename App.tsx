/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useRef} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Keyboard,
  Alert,
} from 'react-native';

import LeftIcon from 'react-native-vector-icons/Feather';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS, SIZES} from './constants';
import {AppButton} from './components';
import {ButtonType} from './components/common/buttons/AppButton';
import {CustomInput, CustomPhoneInput} from './components/common/inputs';
import {KeyboadType} from './components/common/inputs/CustomInput';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const phoneInput = useRef(null);

  const [inputs, setInputs] = useState({
    fullname: '',
    phone: '',
    password: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    fullname: '',
    phone: '',
    password: '',
    email: '',
  });

  const handleInputChange = (value: string, input: any) => {
    setInputs(prevState => ({...prevState, [input]: value}));
  };

  const handleErrors = (errorMessage: string, input: any) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };



  const handleValidation = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs?.email) {
      handleErrors('This field is required', 'email');
      isValid = false;
    } else if (
      inputs?.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)
    ) {
      handleErrors('Invalid email address', 'email');
      isValid = false;
    }

    if (
      inputs.password &&
      !/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{8,}/.test(
        inputs.password,
      )
    ) {
      isValid = false;
      handleErrors(
        'Password must contain at least 8 characters including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character',
        'password',
      );
    } else if (!inputs.password) {
      isValid = false;
      handleErrors('This field is required', 'password');
    }

    if (!inputs?.fullname) {
      handleErrors('This field is required', 'fullname');
      isValid = false;
    }
    if (inputs?.phone.length < 9) {
      isValid = false;
      handleErrors('Enter valid phone number', 'phone');
    }

    if (isValid) {
      Alert.alert(
        'Valid',
        `Your email is ${inputs.email} password ${inputs.password} ${inputs.phone} `,
      );
    } else {
      Alert.alert('Invalid');
    }
  };

  return (
    <PaperProvider>
      <SafeAreaView
        style={[backgroundStyle, {paddingHorizontal: 12, paddingVertical: 20}]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <View>
          <CustomInput
            onChangeText={text => handleInputChange(text, 'fullname')}
            value={inputs?.fullname}
            placeholder="Full Name"
          />
          <CustomInput
            onChangeText={text => handleInputChange(text, 'email')}
            value={inputs?.email}
            placeholder="Email Address"
            email
            keyboard={KeyboadType.EMAIL_ADDRESS}
          />
          <CustomInput
            onChangeText={text => handleInputChange(text, 'password')}
            value={inputs?.password}
            password
            secureTextEntry
            placeholder="Password"
          />
          <CustomPhoneInput
          phoneInput={phoneInput}
            error={errors?.phone}
            value={inputs?.phone}
            onChangeText={text => handleInputChange(text, 'phone')}
            placeholder="673 993 113"
          />
        </View>
        <AppButton
          type={ButtonType.OUTLINED}
          label="Continue"
          onPress={handleValidation}
        />
      </SafeAreaView>
    </PaperProvider>
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
    color: COLORS.success.success_700,
    fontFamily: 'Poppins-Italic',
  },
});

export default App;
