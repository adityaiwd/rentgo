import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

const AuthButton = ({children, onPress, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={!disabled ? styles.container : styles.disabledContainer}
      onPress={onPress}>
      <Text style={!disabled ? styles.buttonText : styles.disabledButtonText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FE7F2D',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 20,
  },
  disabledContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 20,
  },
  buttonText: {
    color: theme.PRIMARY_COLOR_LIGHT,
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_LARGE,
  },
  disabledButtonText: {
    color: '#ccc',
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_LARGE,
  },
});

export default AuthButton;
