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

const CheckoutScreen = ({}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar title="Checkout" noIcons withBackButton />
        <View style={styles.content}>
          <ScrollView>
            <CheckoutSubtitle title="Address" sideButton="Change" />
            <AddressSection
              receiver="Safira Eldi"
              phoneNumber="081228302018"
              location="Home"
              address="Perum Bumi Mangli Permai Blok BD 18, Mangli, Kaliwates, Jember, Jawa Timur, 68136"
            />
            <CheckoutSubtitle title="Purchases" />
            <View style={styles.purchasesContainer}>
              {itemData &&
                itemData.map((item, idx) => (
                  <CartItem
                    key={idx}
                    image={item.image}
                    itemName={item.name}
                    itemPrice={item.price}
                    timePeriod={item.period}
                    noCheckBox
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
            <CheckoutCost title="Total" cost={275000} />
            <CheckoutCost title="Shipping Cost" cost={10000} />
            <CheckoutCost title="Insurance" cost={2000} />
            <CheckoutCost bold title="Grand Total" cost={287000} />
            <TouchableOpacity
              style={styles.paymentButton}
              onPress={() => navigation.navigate('Payment')}>
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

export default CheckoutScreen;
