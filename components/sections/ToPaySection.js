import React from 'react';
import {View, StyleSheet} from 'react-native';
import TransactionPerVendor from '../ui/TransactionPerVendor';

const RentedItems = [
  {
    name: 'Canon EOS 90 D',
    vendor: 'Kameravest',
    price: 200000,
    expire: '20 May 2021',
    image: require('../../assets/images/product-camera.jpg'),
  },
  {
    name: 'Lensa Fix Canon',
    vendor: 'Kameravest',
    price: 75000,
    expire: '20 May 2021',
    image: require('../../assets/images/product-lens.jpg'),
  },
];

const ToPaySection = () => {
  return (
    <View style={styles.container}>
      <TransactionPerVendor
        transactionID="QZK023"
        transactionDate="19 May 2021 10:19 PM"
        buttonTitle="Payment Method"
        buttonText="Bank Transfer"
        items={RentedItems}
        withTotal
      />
      <TransactionPerVendor
        transactionID="QZK022"
        transactionDate="17 May 2021 08:20 PM"
        buttonTitle="Payment Method"
        buttonText="Digital Payment"
        items={RentedItems}
        withTotal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 30},
});

export default ToPaySection;
