/* eslint-disable no-shadow */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  View,
  Text,
  ScrollView,
} from 'react-native';
import NumberFormat from 'react-number-format';
import TopBar from '../components/sections/TopBar';
import theme from '../styles/theme.style';
import BackgroundShape from '../assets/images/shapes.png';
import StarRate from '../components/ui/StarRate';
import ItemCounter from '../components/ui/ItemCounter';
import RentDate from '../components/ui/RentDate';
import DetailSectionTitle from '../components/ui/DetailSectionTitle';
import RentAction from '../components/ui/RentAction';
import ReviewsSection from '../components/sections/ReviewsSection';
import RelatedProductsSection from '../components/sections/RelatedProductsSection';
import {connect} from 'react-redux';
import {fetchProductDetail} from '../actions';

const ProductDetailScreen = ({fetchProductDetail, route, detail}) => {
  const {itemId} = route.params;
  const [itemAmount, setItemAmount] = useState(1);
  const {name, vendor, price} = detail;
  useEffect(() => {
    fetchProductDetail(itemId);
  }, [fetchProductDetail, itemId]);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar cartOnly title="Product Detail" withBackButton />
        <View style={styles.content}>
          <ScrollView>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="cover"
                style={styles.productImage}
                source={require('../assets/images/product-camera.jpg')}
              />
            </View>
            <View style={styles.description}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.vendor}>{vendor}</Text>
              <View style={styles.priceContainer}>
                <NumberFormat
                  value={price}
                  renderText={text => <Text style={styles.price}>{text}</Text>}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'Rp '}
                />
                <Text style={styles.day}> / day</Text>
              </View>
              <StarRate />
            </View>
            <View style={styles.rentContainer}>
              <ItemCounter
                value={itemAmount}
                increment={() => setItemAmount(itemAmount + 1)}
                decrement={() => setItemAmount(itemAmount - 1)}
              />
            </View>
            <DetailSectionTitle title="Overview" withoutSeeAll />
            <Text style={styles.overviewDesc}>
              Canon EOS 90D Kit adalah kamera DSLR yang dilengkapi 32.5MP APS-C
              CMOS Sensor, DIGIC 8 Image Processor, dapat melakukan perekaman 4K
              UHD 30p Video, dan juga dilengkapi LCD Touchscreen 3 inci. Kamera
              ini pun memiliki tipe sensor CMOS dengan ukuran 22.3 x 14.8mm.
              Video pada kamera ini beresolusi Full HD dengan minimum ISO 100
              dan maksimal ISO 25600.
            </Text>
            <ReviewsSection />

            <RelatedProductsSection />
          </ScrollView>
          <RentAction />
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
  rentContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginVertical: 20,
  },
  scroll: {
    paddingLeft: 20,
    marginBottom: 50,
  },
  reviews: {
    marginBottom: 20,
  },
  overviewDesc: {
    marginHorizontal: 20,
    textAlign: 'justify',
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  productImage: {width: '55%', height: 220},
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
    marginLeft: 20,
  },
  name: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_BLACK,
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

const mapStateToProps = state => {
  return {detail: state.detail};
};

export default connect(mapStateToProps, {fetchProductDetail})(
  ProductDetailScreen,
);
