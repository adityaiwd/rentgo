/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import theme from '../../styles/theme.style';

const BottomButton = ({onPress, children}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.PRIMARY_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 15,
        borderRadius: 15,
        marginVertical: 20,
      }}
      onPress={onPress}>
      <Text style={{color: '#fff', fontFamily: theme.FONT_WEIGHT_BOLD}}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default BottomButton;
