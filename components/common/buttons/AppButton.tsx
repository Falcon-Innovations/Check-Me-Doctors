import React, {useState} from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import {COLORS, SIZES} from '../../../constants';

export enum ButtonType {
  SOLID = 'solid',
  OUTLINED = 'outlined',
  TEXT = 'text',
}


type ButtonProps = {
  type?: ButtonType;
  label?: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  pressed?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  bgColor?:string;
  borderColor?:string;
  pressedColor?:string;
  textColors?:string;
  padding?:number;
  height?:number;
};

const AppButton: React.FC<ButtonProps> = ({
  type = ButtonType.SOLID,
  label,
  leftIcon,
  rightIcon,
  onPress,
  loading,
  pressed,
  disabled,
  bgColor,
  pressedColor,
  borderColor,
  textColors,
  padding,
  height,
}) => {

  const backGroundColor = bgColor ? bgColor : COLORS.primary_400;
  const borderColors = borderColor ? borderColor : COLORS.primary_400; 
  const textColor = textColors ? textColors : COLORS.primary_400;
  const paddingHorizontal = leftIcon || rightIcon? 10 : 2
  const btnHeight = height ? height : 48
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.button,{height: btnHeight},
          type === ButtonType.SOLID
            ? [styles.solid,{backgroundColor: backGroundColor}]
            : type === ButtonType.OUTLINED
            ? [{borderColor: borderColors}, styles.outlined]
            : [styles.text,{backgroundColor: backGroundColor}], loading && [styles.disabledButton,{backgroundColor:backGroundColor}],
          disabled && [styles.disabled,{backgroundColor:backGroundColor}],
        ]}
        disabled={disabled}>
            {leftIcon}
        <Text style={[styles.buttonText,{color:textColor, paddingHorizontal:paddingHorizontal}]}>{label}</Text>
        {rightIcon}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    
  },
  disabledButton: {
    
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily:'Poppins-Medium',
  },

  solid: {
    backgroundColor: COLORS.primary_400,
  },
  outlined: {
    borderColor: COLORS.primary_400,
    backgroundColor: 'transparent',
    borderWidth: 1,
  },

  text: {

  },
  disabled:{
  },
});

export default AppButton;
