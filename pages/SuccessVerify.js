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

const SuccessVerifyScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <View style={styles.bodyContainer}>
          <Image source={require('../assets/images/id-verified.png')} />
          <Text style={styles.mainText}>
            Identity Card Verification Success
          </Text>
          <Text style={styles.description}>
            Thank you for verifying your identity card
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
            Done
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
    textAlign: 'center',
  },
  description: {
    fontFamily: theme.FONT_WEIGHT_LIGHT,
    color: '#fff',
    textAlign: 'center',
  },
});

export default SuccessVerifyScreen;
