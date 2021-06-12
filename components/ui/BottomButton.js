/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

const BottomButton = ({onPress, children, color = 1}) => {
  const switchStyle = color => {
    switch (color) {
      case '2':
        return styles.secondary;
      case '3':
        return styles.tertiary;
      default:
        return styles.primary;
    }
  };

  return (
    <TouchableOpacity style={switchStyle(color)} onPress={onPress}>
      <Text
        style={
          color === '3'
            ? {
                color: theme.SECONDARY_COLOR,
                fontFamily: theme.FONT_WEIGHT_MEDIUM,
              }
            : {color: '#fff', fontFamily: theme.FONT_WEIGHT_BOLD}
        }>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primary: {
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical: 20,
  },
  secondary: {
    backgroundColor: theme.SECONDARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical: 20,
  },
  tertiary: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: theme.SECONDARY_COLOR,
  },
});

export default BottomButton;
