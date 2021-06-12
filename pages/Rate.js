/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';
import TopBar from '../components/sections/TopBar';
import theme from '../styles/theme.style';
import BackgroundShape from '../assets/images/shapes.png';
import CartItem from '../components/ui/CartItem';
import BottomButton from '../components/ui/BottomButton';
import BottomSheetDate from '../components/ui/BottomSheetDate';
import NumberFormat from 'react-number-format';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {sendReview} from '../actions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AirbnbRating, Rating} from 'react-native-ratings';
import moment from 'moment';

const RateScreen = ({auth, route, sendReview}) => {
  const {name, vendor, idInvoiceProduct} = route.params;
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const navigation = useNavigation();
  const handleSubmitReview = () => {
    const reviewData = {
      body: {rating, review},
      id: idInvoiceProduct,
      token: auth.token,
    };
    sendReview(reviewData);
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };
  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={BackgroundShape} style={styles.shape}>
          <TopBar title="Rate Your Experience" noIcons withBackButton />
          <View style={styles.content}>
            <View style={styles.mainContent}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/images/product-camera.jpg')}
                  style={{width: '60%', height: '90%'}}
                />
              </View>
              <Text style={styles.productName}>{name}</Text>
              <Text style={styles.productVendor}>{vendor}</Text>
              <AirbnbRating
                ratingCount={5}
                imageSize={40}
                selectedColor={theme.PRIMARY_COLOR}
                unSelectedColor="#eee"
                reviewSize={0}
                onFinishRating={rating => setRating(rating)}
              />
            </View>
            <Text
              style={{
                fontFamily: theme.FONT_WEIGHT_BOLD,
                fontSize: theme.FONT_SIZE_LARGE,
              }}>
              Review Product
            </Text>
            <Text
              style={{
                fontFamily: theme.FONT_WEIGHT_MEDIUM,
                color: '#797F83',
                fontSize: theme.FONT_SIZE_SMALL,
              }}>
              Please tell us something about this product
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderBottomColor: theme.PRIMARY_COLOR,
                color: theme.PRIMARY_BLACK,
                fontSize: theme.FONT_SIZE_SMALL,
                fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
                paddingBottom: -5,
              }}
              onChangeText={text => setReview(text)}
            />

            <BottomButton onPress={handleSubmitReview}>Submit</BottomButton>
            {/* <View style={{marginTop: 'auto'}}>
            </View> */}
          </View>
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.PRIMARY_COLOR,
    flex: 1,
    height: '100%',
  },
  shape: {
    height: '100%',
    flex: 1,
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
  mainContent: {
    alignItems: 'center',
    marginBottom: 30,
  },
  productName: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: 18,
  },
  productVendor: {
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  imageContainer: {
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {auth: state.auth};
};

export default connect(mapStateToProps, {sendReview})(RateScreen);
