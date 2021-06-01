import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TransactionHeader from './TransactionHeader';
import TransactionItem from './TransactionItem';
import theme from '../../styles/theme.style';

const TransactionPerVendor = ({
  transactionID,
  transactionDate,
  buttonTitle,
  buttonText,
  outlinedButton,
  items,
  withTotal,
}) => {
  return (
    <View style={styles.container}>
      <TransactionHeader
        code={transactionID}
        date={transactionDate}
        buttonTitle={buttonTitle}
        buttonText={buttonText}
        outlinedButton={outlinedButton}
      />
      {items.map(item => (
        <TransactionItem
          key={item.name}
          image={item.image}
          name={item.name}
          vendor={item.vendor}
          price={item.price}
          expiration={item.expire}
        />
      ))}
      {withTotal && (
        <>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalPrice}>Rp 275.000</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#BDBDBD',
    paddingBottom: 20,
    marginBottom: 20,
  },
  totalText: {
    color: '#888',
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: '400',
  },
  totalPrice: {
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_LARGE,
  },
});

export default TransactionPerVendor;
