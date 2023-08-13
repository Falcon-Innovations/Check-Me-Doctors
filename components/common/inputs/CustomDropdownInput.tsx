import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';


interface Option {
  label: string;
  value: string;
}

interface Props {
  placeholder?: string;
  label?: string;
  data: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}


const CustomDropdownInput: React.FC<Props> = ({
  placeholder,
  label,
  data,
  onChange,
  selectedValue,
}) => {
  const [isFocus, setIsFocus] = useState(false);

   const dropdownData = data.map(option => option.value);

  return (
    <Dropdown
      style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? placeholder || 'Select item' : '...'}
      searchPlaceholder="Search..."
      value={selectedValue}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        onChange(item.value);
        setIsFocus(false);
      }}
      // renderLeftIcon={() => (
      //   <AntDesign
      //     style={styles.icon}
      //     color={isFocus ? 'blue' : 'black'}
      //     name="Safety"
      //     size={20}
      //   />
      // )}
    />
  );
};

export default CustomDropdownInput;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
