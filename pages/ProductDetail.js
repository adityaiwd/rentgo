import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  View,
  Text,
} from 'react-native';
import TopBar from '../components/sections/TopBar';
import theme from '../styles/theme.style';
import BackgroundShape from '../assets/images/shapes.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const ProductDetailScreen = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar cartOnly title="Product Detail" withBackButton />
        <View style={styles.content}>
          <View style={styles.product}>
            <Image
              resizeMode="cover"
              style={styles.productImage}
              source={require('../assets/images/product-camera.jpg')}
            />
            <View style={styles.description}>
              <Text style={styles.name}>Canon EOS 90 D</Text>
              <Text style={styles.vendor}>Kameravest</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>Rp 75000</Text>
                <Text style={styles.day}> / day</Text>
              </View>
              <View style={styles.rate}>
                <MaterialIcons
                  name="star"
                  color={theme.PRIMARY_COLOR}
                  size={20}
                />
                <MaterialIcons
                  name="star"
                  color={theme.PRIMARY_COLOR}
                  size={20}
                />
                <MaterialIcons
                  name="star"
                  color={theme.PRIMARY_COLOR}
                  size={20}
                />
                <MaterialIcons
                  name="star"
                  color={theme.PRIMARY_COLOR}
                  size={20}
                />
                <MaterialIcons name="star" color="#aaa" size={20} />
                <Text style={styles.rateText}>4.0 (20)</Text>
              </View>
            </View>
          </View>
          <SegmentedControlTab
            values={['Details', 'Reviews (12)']}
            borderRadius={0}
            tabTextStyle={{
              fontFamily: theme.FONT_WEIGHT_MEDIUM,
              borderRightWidth: 0,
              color: '#888',
            }}
            firstTabStyle={{
              borderRightWidth: 0,
            }}
            activeTabStyle={{
              backgroundColor: 'transparent',
              borderColor: theme.PRIMARY_COLOR,
            }}
            activeTabTextStyle={{
              borderRightWidth: 0,
              fontFamily: theme.FONT_WEIGHT_BOLD,
              color: theme.PRIMARY_COLOR,
            }}
            tabStyle={styles.tabStyle}
            tabsContainerStyle={{
              borderRightWidth: 0,
              marginHorizontal: 30,
              marginVertical: 20,
            }}
            selectedIndex={selectedIndex}
            onTabPress={index => setSelectedIndex(index)}
          />
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
  product: {
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  productImage: {width: '35%', height: 120},
  content: {
    flex: 1,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingTop: 30,
    marginTop: 20,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  description: {
    // padding: 10,
    alignSelf: 'stretch',
    marginLeft: 15,
  },
  name: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  vendor: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  priceContainer: {flexDirection: 'row', marginVertical: 5},
  price: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  day: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  rate: {
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rateText: {
    color: theme.PRIMARY_BLACK,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: 10,
    marginLeft: 5,
  },
  tabStyle: {
    borderColor: '#EBE9E9',
    paddingVertical: 15,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 3,
  },
});

export default ProductDetailScreen;
