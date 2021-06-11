import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import NumberFormat from 'react-number-format';
import CartCounter from './CartCounter';

const CartItem = ({image, itemName, vendor, itemPrice, amount}) => {
  const [Counter, setCounter] = useState(amount);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View>
        <Text style={styles.name}>{itemName}</Text>
        <Text style={styles.vendor}>{vendor}</Text>
        <View style={styles.priceAndTime}>
          <NumberFormat
            value={itemPrice}
            renderText={text => <Text style={styles.price}>{text}</Text>}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Rp '}
          />
          {/* <Text style={styles.period}>for {timePeriod} days</Text> */}
        </View>
        <CartCounter
          value={Counter}
          increment={() => setCounter(Counter + 1)}
          decrement={() => setCounter(Counter - 1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    borderRadius: 10,
    height: 90,
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
  name: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
  },
  priceAndTime: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  price: {
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  period: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: 10,
    marginLeft: 5,
  },
  vendor: {
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: theme.FONT_SIZE_SMALL,
  },
});

export default CartItem;
