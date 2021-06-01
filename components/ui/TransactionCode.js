import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

const TransactionCode = ({code, date}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.code}>{code}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  code: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_LARGE,
    marginBottom: 10,
  },
  date: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: theme.FONT_SIZE_SMALL,
  },
});

export default TransactionCode;
