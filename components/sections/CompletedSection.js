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

const CompletedSection = () => {
  return (
    <View style={styles.container}>
      <TransactionPerVendor
        transactionID="QZK023"
        transactionDate="19 May 2021 10:19 PM"
        buttonText="Done"
        outlinedButton
        items={RentedItems}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 30},
});

export default CompletedSection;
