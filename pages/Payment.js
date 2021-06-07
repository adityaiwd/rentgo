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
import CheckoutSubtitle from '../components/ui/CheckoutSubtitle';
import CheckoutCost from '../components/ui/CheckoutCost';
import AddressSection from '../components/sections/AddressSection';
import {useNavigation} from '@react-navigation/native';

const PaymentScreen = ({}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar title="Payment Method" noIcons withBackButton />
        <View style={styles.content}></View>
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

export default PaymentScreen;
