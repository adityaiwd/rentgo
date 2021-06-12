import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../styles/theme.style';
import NumberFormat from 'react-number-format';
import {useNavigation} from '@react-navigation/native';

const TransactionItem = ({
  image,
  name,
  vendor,
  price,
  expiration,
  idInvoiceProduct,
  withRateButton,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.vendor}>{vendor}</Text>
        <NumberFormat
          value={price}
          renderText={text => <Text style={styles.price}>{text}</Text>}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'Rp '}
        />
        <Text style={styles.expiration}>Rented until {expiration}</Text>
      </View>
      {withRateButton && (
        <TouchableOpacity
          style={styles.rateButton}
          onPress={() =>
            navigation.navigate('Rate', {name, vendor, idInvoiceProduct})
          }>
          <Text style={styles.rateText}>Rate</Text>
        </TouchableOpacity>
      )}
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
  rateButton: {
    backgroundColor: theme.PRIMARY_COLOR,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginLeft: 'auto',
  },
  rateText: {
    fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
    color: '#fff',
    fontSize: theme.FONT_SIZE_SMALL,
  },
});

export default TransactionItem;
