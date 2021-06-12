/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Text,
  Image,
} from 'react-native';
import theme from '../styles/theme.style';
import BackgroundShape from '../assets/images/shapes.png';
import BottomButton from '../components/ui/BottomButton';
import {useNavigation} from '@react-navigation/native';

const SuccessPaymentScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <View style={styles.bodyContainer}>
          <Image source={require('../assets/images/success.png')} />
          <Text style={styles.mainText}>Yeah Success!</Text>
          <Text style={styles.description}>
            Your payment was succesful, let’s see and track your order in Manage
            or finish to continue renting
          </Text>
        </View>
        <View style={{marginHorizontal: 30, marginBottom: 30}}>
          <BottomButton
            color="2"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              })
            }>
            Manage
          </BottomButton>
          <BottomButton
            color="3"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              })
            }>
            Finish
          </BottomButton>
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
    paddingBottom: 50,
    marginTop: -10,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  bodyContainer: {
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  mainText: {
    color: '#fff',
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: 24,
    marginBottom: 20,
    marginTop: 30,
  },
  description: {
    fontFamily: theme.FONT_WEIGHT_LIGHT,
    color: '#fff',
    textAlign: 'center',
  },
});

export default SuccessPaymentScreen;
