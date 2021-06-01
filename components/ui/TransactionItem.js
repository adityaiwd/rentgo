import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

const TransactionItem = ({image, name, vendor, price, expiration}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.vendor}>{vendor}</Text>
        <Text style={styles.price}>Rp {price}</Text>
        <Text style={styles.expiration}>Rented until {expiration}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    width: 100,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginRight: 15,
  },
  image: {
    width: '100%',
    borderRadius: 10,
    height: 90,
  },
  name: {
    fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  vendor: {
    fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  price: {
    fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
    fontSize: theme.FONT_SIZE_SMALL,
    marginVertical: 5,
  },
  expiration: {
    backgroundColor: 'rgba(0, 128, 128, 0.5)',
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: 10,
    color: '#fff',
    padding: 5,
    borderRadius: 5,
  },
});

export default TransactionItem;
