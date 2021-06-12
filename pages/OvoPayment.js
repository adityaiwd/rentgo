/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import TopBar from '../components/sections/TopBar';
import theme from '../styles/theme.style';
import BackgroundShape from '../assets/images/shapes.png';
import DigiPaymentButton from '../components/ui/DigiPaymentButton';
import BottomButton from '../components/ui/BottomButton';
import NumberFormat from 'react-number-format';
import PaymentInstruction from '../components/ui/PaymentInstruction';
import {useNavigation} from '@react-navigation/native';
import {checkOut} from '../actions';
import {connect} from 'react-redux';

const OvoPaymentScreen = ({route, auth, checkOut}) => {
  const navigation = useNavigation();
  const {checkOutData, token, totalPrice} = route.params;
  console.log(route.params);
  const handlePayForRent = () => {
    const data = {checkOutData, token};
    checkOut(data);
    navigation.navigate('SuccessPayment');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar title="Payment" noIcons withBackButton />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Total Payment</Text>
            <NumberFormat
              value={totalPrice + 12000}
              renderText={text => <Text style={styles.headerText}>{text}</Text>}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rp '}
            />
          </View>
          <View style={styles.digiPayment}>
            <DigiPaymentButton logo="ovo" />
            <Text
              style={{
                color: '#797F83',
                fontFamily: theme.FONT_WEIGHT_MEDIUM,
                marginLeft: 20,
              }}>
              Automatically Checked
            </Text>
          </View>
          <Text style={[styles.headerText, {marginBottom: 15}]}>
            Phone Number to Transfer
          </Text>
          <View style={styles.numberContainer}>
            <Text
              style={{
                color: theme.PRIMARY_COLOR,
                fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
                fontSize: theme.FONT_SIZE_LARGE,
              }}>
              081232114765
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#E9F6EC',
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 5,
                marginLeft: 15,
              }}>
              <Text
                style={{
                  color: theme.PRIMARY_COLOR,
                  fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
                }}>
                COPY
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: theme.FONT_WEIGHT_LIGHT,
              textAlign: 'justify',
              marginBottom: 20,
            }}>
            Pay within{' '}
            <Text
              style={{
                fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
                color: theme.PRIMARY_COLOR,
              }}>
              1x24 hours
            </Text>
            . If you wouldn’t pay, the transaction will be forfeited.
          </Text>
          <Text style={[styles.headerText, {marginBottom: 15}]}>
            Instructions
          </Text>
          <PaymentInstruction
            number="1"
            text="Open the OVO application then select the Transfer menu."
          />
          <PaymentInstruction number="2" text="Select To Fellow OVO." />
          <PaymentInstruction
            number="3"
            text="Input the recipient's OVO phone number, then input the amount of money to be sent. If everything is filled, tap Continue."
          />
          <PaymentInstruction
            number="4"
            text="Then check again whether the recipient number and the amount sent is correct or not, if correct, tap the Transfer button."
          />
          <View style={{marginTop: 'auto'}}>
            <BottomButton onPress={handlePayForRent}>Done</BottomButton>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  digiPayment: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center',
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
  headerText: {
    fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

const mapStateToProps = state => {
  return {auth: state.auth};
};

export default connect(mapStateToProps, {checkOut})(OvoPaymentScreen);
