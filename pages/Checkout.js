import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TopBar from '../components/sections/TopBar';
import theme from '../styles/theme.style';
import BackgroundShape from '../assets/images/shapes.png';
import CartItem from '../components/ui/CartItem';
import CheckoutSubtitle from '../components/ui/CheckoutSubtitle';
import CheckoutCost from '../components/ui/CheckoutCost';
import AddressSection from '../components/sections/AddressSection';
import {useNavigation} from '@react-navigation/native';
import {fetchCart} from '../actions';
import {connect} from 'react-redux';

const itemData = [
  {
    name: 'Canon EOS 90 D',
    price: 200000,
    period: 2,
    image: require('../assets/images/product-camera.jpg'),
  },
  {
    name: 'Lensa Fix Canon',
    price: 75000,
    period: 2,
    image: require('../assets/images/product-lens.jpg'),
  },
];

const CheckoutScreen = ({route, cart, name}) => {
  const navigation = useNavigation();
  const total = cart.reduce((prev, cur) => prev + Number(cur.product_price), 0);
  const handleToPayment = () => {
    navigation.navigate('Payment', {
      checkOutData: route.params,
      totalPrice: total,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar title="Checkout" noIcons withBackButton />
        <View style={styles.content}>
          <ScrollView>
            <CheckoutSubtitle title="Address" sideButton="Change" />
            <AddressSection
              receiver={name.name}
              phoneNumber="081228302018"
              location="Home"
              address="Perum Bumi Mangli Permai Blok BD 18, Mangli, Kaliwates, Jember, Jawa Timur, 68136"
            />
            <CheckoutSubtitle title="Purchases" />
            <View style={styles.purchasesContainer}>
              {cart &&
                cart.map(item => (
                  <CartItem
                    key={item.cart_id}
                    image={require('../assets/images/product-camera.jpg')}
                    itemName={item.product_name}
                    vendor={item.product_vendor}
                    itemPrice={item.product_price}
                    amount={item.product_quantity}
                  />
                ))}
            </View>
            <CheckoutSubtitle title="Shipping" />
            <TouchableOpacity style={styles.shippingButton}>
              <Text style={styles.shippingButtonText}>JNE REG</Text>
            </TouchableOpacity>
            <Text style={styles.shipTextTitle}>Cost</Text>
            <Text style={styles.shipTextSubtitle}>Rp 10.000</Text>
            <View style={styles.flexRow}>
              <Text style={styles.shipTextTitle}>Esitmated Time Arrival</Text>
              <Text style={styles.greyed}>1 day</Text>
            </View>
            <Text style={styles.shipTextSubtitle}>20 May 2021</Text>
            <CheckoutSubtitle title="Subtotal" sideButton="Redeem Voucher" />
            <CheckoutCost title="Total" cost={total} />
            <CheckoutCost title="Shipping Cost" cost={10000} />
            <CheckoutCost title="Insurance" cost={2000} />
            <CheckoutCost bold title="Grand Total" cost={total + 12000} />
            <TouchableOpacity
              style={styles.paymentButton}
              onPress={handleToPayment}>
              <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
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
  purchasesContainer: {
    marginBottom: 20,
  },
  shippingButton: {
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 2,
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 20,
  },
  shippingButtonText: {
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_WEIGHT_BOLD,
  },
  shipTextSubtitle: {
    color: theme.PRIMARY_COLOR,
    marginBottom: 20,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greyed: {
    color: '#888',
  },
  paymentButton: {
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical: 25,
  },
  paymentButtonText: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    color: '#fff',
  },
});

const mapStateToProps = state => {
  return {cart: state.cart, name: state.name};
};

export default connect(mapStateToProps, {fetchCart})(CheckoutScreen);
