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
import CartPerVendor from '../components/ui/CartPerVendor';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

const vendor1 = [
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

const vendor2 = [
  {
    name: 'Jas Pria',
    price: 100000,
    period: 1,
    image: require('../assets/images/product-camera.jpg'),
  },
];

const CartScreen = () => {
  const navigation = useNavigation();

  const [toggleSelectAll, setToggleSelectAll] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar title="Cart" noIcons withBackButton />
        <View style={styles.content}>
          <ScrollView>
            <CartPerVendor
              vendorName="Kameravest"
              startDate="20/05/2021"
              endDate="22/05/2021"
              itemData={vendor1}
            />
            <CartPerVendor
              vendorName="Event Clothing"
              startDate="22/05/2021"
              endDate="22/05/2021"
              itemData={vendor2}
            />
          </ScrollView>
          <View style={styles.footer}>
            <View style={styles.footerHead}>
              <View style={styles.selectAll}>
                <CheckBox
                  tintColors={{
                    true: '#BCCF84',
                    false: '#ccc',
                  }}
                  disabled={false}
                  value={toggleSelectAll}
                  onValueChange={newValue => setToggleSelectAll(newValue)}
                />
                <Text style={styles.selectAllText}>Select All</Text>
              </View>
              <Text style={styles.itemAmount}>2 items</Text>
            </View>
            <Text style={styles.subTotalText}>Subtotal</Text>
            <Text style={styles.totalText}>Rp 275,000</Text>
            <TouchableOpacity
              style={styles.checkOutButton}
              onPress={() => navigation.navigate('Checkout')}>
              <Text style={styles.checkOutText}>Checkout</Text>
            </TouchableOpacity>
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
});

export default CartScreen;
