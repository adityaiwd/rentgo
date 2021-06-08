import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

const PaymentSubtitle = ({name, amount}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    color: theme.PRIMARY_BLACK,
  },
  amount: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    color: '#fff',
    backgroundColor: '#F7CC8C',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
});

export default PaymentSubtitle;
