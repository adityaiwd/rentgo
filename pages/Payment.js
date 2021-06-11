import React, {useState} from 'react';
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
import PaymentSubtitle from '../components/ui/PaymentSubtitle';
import DigiPaymentButton from '../components/ui/DigiPaymentButton';
import BankTransferButton from '../components/ui/BankTransferButton';
import NumberFormat from 'react-number-format';
import CheckoutCost from '../components/ui/CheckoutCost';
import AddressSection from '../components/sections/AddressSection';
import {useNavigation} from '@react-navigation/native';
import {checkOut} from '../actions';
import {connect} from 'react-redux';

const PaymentScreen = ({route, auth, checkOut}) => {
  const navigation = useNavigation();
  const {checkOutData, totalPrice} = route.params;
  const handlePayForRent = () => {
    const data = {checkOutData, token: auth.token};
    checkOut(data);
    navigation.reset({routes: [{name: 'Home'}]});
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar title="Payment Method" noIcons withBackButton />
        <View style={styles.content}>
          <PaymentSubtitle name="Digital Payment" amount={3} />
          <View style={styles.digiPayment}>
            <DigiPaymentButton logo="ovo" onPress={handlePayForRent} />
            <DigiPaymentButton logo="gopay" />
            <DigiPaymentButton logo="dana" />
          </View>
          <PaymentSubtitle name="Bank Transfer" amount={3} />
          <BankTransferButton bank="BCA" />
          <BankTransferButton bank="BNI" />
          <BankTransferButton bank="Mandiri" />
          <View style={styles.totalDetail}>
            <CheckoutCost title="Total" cost={totalPrice} />
            <CheckoutCost title="Shipping Cost" cost={10000} />
            <CheckoutCost title="Micro Insurance" cost={2000} />
            <Text style={styles.primaryText}>Grand Total</Text>
            <NumberFormat
              value={totalPrice + 12000}
              renderText={text => <Text style={styles.cost}>{text}</Text>}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rp '}
            />
          </View>
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
  digiPayment: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  totalDetail: {
    marginTop: 'auto',
    borderTopWidth: 2,
    paddingTop: 20,
    borderTopColor: '#f6f6f6',
    paddingBottom: 30,
  },
  primaryText: {
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: theme.FONT_SIZE_SMALL,
    marginVertical: 10,
  },
  cost: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: 20,
  },
});

const mapStateToProps = state => {
  return {auth: state.auth};
};

export default connect(mapStateToProps, {checkOut})(PaymentScreen);
