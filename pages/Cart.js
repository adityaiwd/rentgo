/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import TopBar from '../components/sections/TopBar';
import theme from '../styles/theme.style';
import BackgroundShape from '../assets/images/shapes.png';
import CartItem from '../components/ui/CartItem';
import DateButton from '../components/ui/DateButton';
import BottomSheetDate from '../components/ui/BottomSheetDate';
import NumberFormat from 'react-number-format';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {fetchCart} from '../actions';
import moment from 'moment';

const CartScreen = ({cart, auth, fetchCart}) => {
  const navigation = useNavigation();
  const refRBSheetStart = useRef();
  const refRBSheetEnd = useRef();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  useEffect(() => {
    fetchCart(auth.token);
  }, [fetchCart, auth.token]);
  const handleCheckout = () => {
    navigation.navigate('Checkout', {
      cart_ids: cart.map(item => item.cart_id),
      start_date: moment(startDate).format('YYYY-MM-DD 00:00:00'),
      finish_date: moment(endDate).format('YYYY-MM-DD 00:00:00'),
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar title="Cart" noIcons withBackButton />
        <View style={styles.content}>
          <FlatList
            data={cart}
            key={'#'}
            keyExtractor={cart => '#' + cart.cart_id}
            renderItem={({item}) => (
              <CartItem
                image={require('../assets/images/product-camera.jpg')}
                itemName={item.product_name}
                vendor={item.product_vendor}
                itemPrice={item.product_price}
                amount={item.product_quantity}
              />
            )}
          />
          <View style={styles.footer}>
            <Text
              style={{fontFamily: theme.FONT_WEIGHT_BOLD, marginBottom: 10}}>
              Rent period
            </Text>
            <View style={styles.footerHead}>
              <View style={styles.timePeriodContainer}>
                <DateButton
                  onPress={() => refRBSheetStart.current.open()}
                  date={moment(startDate).format('DD/MM/YYYY')}
                />
                <Text style={styles.toText}>to</Text>
                <DateButton
                  onPress={() => refRBSheetEnd.current.open()}
                  date={moment(endDate).format('DD/MM/YYYY')}
                />
              </View>
              <Text style={styles.itemAmount}>
                {cart
                  ? cart.length + ' ' + cart.length > 1
                    ? 'items'
                    : 'item'
                  : 'no items'}
              </Text>
            </View>
            <Text style={styles.subTotalText}>Subtotal</Text>
            <NumberFormat
              value={
                cart
                  ? cart.reduce(
                      (prev, cur) => prev + Number(cur.product_price),
                      0,
                    )
                  : 0
              }
              renderText={text => <Text style={styles.totalText}>{text}</Text>}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rp '}
            />
            <TouchableOpacity
              style={styles.checkOutButton}
              onPress={handleCheckout}>
              <Text style={styles.checkOutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <BottomSheetDate
        innerRef={refRBSheetStart}
        onDateChange={setStartDate}
        date={startDate}
      />
      <BottomSheetDate
        innerRef={refRBSheetEnd}
        onDateChange={setEndDate}
        date={endDate}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.PRIMARY_COLOR,
    flex: 1,
  },
  shape: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingTop: 20,
    marginTop: 15,
    paddingHorizontal: 30,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    position: 'relative',
  },
  tabStyle: {
    borderWidth: 0,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    marginHorizontal: 30,
    width: '100%',
    marginBottom: 30,
  },
  footerHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  selectAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectAllText: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    color: '#888',
  },
  itemAmount: {
    color: '#fff',
    fontSize: theme.FONT_SIZE_SMALL,
    fontFamily: theme.FONT_WEIGHT_BOLD,
    backgroundColor: '#FB8B24',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  subTotalText: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: theme.FONT_SIZE_SMALL,
    color: '#888',
  },
  totalText: {
    color: theme.PRIMARY_BLACK,
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: 18,
  },
  checkOutButton: {
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 20,
  },
  checkOutText: {
    color: '#fff',
    fontFamily: theme.FONT_WEIGHT_BOLD,
  },
  timePeriodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toText: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: 10,
    marginHorizontal: 10,
    color: theme.PRIMARY_BLACK,
  },
});

const mapStateToProps = state => {
  return {cart: state.cart, auth: state.auth};
};

export default connect(mapStateToProps, {fetchCart})(CartScreen);
