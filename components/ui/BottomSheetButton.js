import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

const BottomSheetButton = ({children, onPress, danger}) => {
  return (
    <TouchableOpacity
      style={!danger ? styles.container : styles.dangerContainer}
      onPress={onPress}>
      <Text style={!danger ? styles.text : styles.dangerText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 20,
    width: 170,
    alignItems: 'center',
    paddingVertical: 10,
  },
  dangerContainer: {
    backgroundColor: '#FCFCFC',
    borderRadius: 20,
    width: 170,
    alignItems: 'center',
    paddingVertical: 10,
  },
  text: {
    color: '#fff',
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  dangerText: {
    color: '#F28F8F',
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
  },
});

export default BottomSheetButton;
