import React, {useState, useRef} from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {CustomInput, CustomPhoneInput, TopHeader,CustomDropdownInput} from '../../../../components';
import {COLORS, SIZES} from '../../../../constants';
import {RootStackParamList} from '../../../navigation/AuthNavigation';
import { KeyboadType } from '../../../../components/common/inputs/CustomInput';

type Props = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const PeronalDetails = () => {
    const phoneInput = useRef(null);

const [inputs, setInputs] = useState({
  fullName: '',
  emailAddress: '',
  phoneNumber: '',
  country:'',
  region:'',
  quarter:'',

});

  const handleInputChange = (value: string | number, input: any) => {
    setInputs(prevState => ({...prevState, [input]: value}));
  };

  return (
    <>
      <TopHeader screenTitle="Specialist Registration" />
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAwareScrollView
          extraHeight={100}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}>
          <Text
            style={{
              color: COLORS.neutral.neutral_400,
              fontSize: 12,
              fontFamily: 'Poppins-Medium',
            }}>
            {' '}
            Step 1 of 3
          </Text>
          <View style={{marginTop: 8}}>
            <Text style={styles.textHeader}>Peronal Details</Text>
            <Text style={styles.text}>
              Please enter the requested information below.
            </Text>
          </View>
          <View>
            <CustomInput
              onChangeText={text => handleInputChange(text, 'fullName')}
              value={inputs?.fullName}
              placeholder="Full Name e.g John Smith"
            />
            <CustomInput
              onChangeText={text => handleInputChange(text, 'emailAddress')}
              value={inputs?.emailAddress}
              placeholder="Email address"
              keyboard={KeyboadType.EMAIL_ADDRESS}
            />
            <CustomPhoneInput
                 phoneInput={phoneInput}
              onChangeText={text => handleInputChange(text, 'phoneNumber')}
              value={inputs?.phoneNumber}
            />
            {/* <CustomDropdownInput /> */}
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default PeronalDetails;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
    paddingHorizontal: SIZES.screenPaddingHorizontal,
    paddingTop: 10,
  },
  textHeader: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: COLORS.neutral.neutral_400,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: COLORS.neutral.neutral_300,
  },
});
