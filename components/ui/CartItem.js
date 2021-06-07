import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import NumberFormat from 'react-number-format';
import CartCounter from './CartCounter';
import CheckBox from '@react-native-community/checkbox';

const CartItem = ({image, itemName, itemPrice, timePeriod, noCheckBox}) => {
  const [Counter, setCounter] = useState(1);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      {!noCheckBox && (
        <CheckBox
          tintColors={{
            true: '#BCCF84',
            false: '#ccc',
          }}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
      )}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View>
        <Text style={styles.name}>{itemName}</Text>
        <View style={styles.priceAndTime}>
          <NumberFormat
            value={itemPrice}
            renderText={text => <Text style={styles.price}>{text}</Text>}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Rp '}
          />
          <Text style={styles.period}>for {timePeriod} days</Text>
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
    marginTop: 10,
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
});

export default CartItem;
