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

const NotAuthScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <View style={styles.bodyContainer}>
          <Image
            source={require('../assets/images/stop.png')}
            style={{width: 200, height: 200}}
          />
          <Text style={styles.mainText}>Not Authenticated</Text>
          <Text style={styles.description}>
            Oops, looks like your account is not logged in! Please login with
            your existing account or create an account to proceed with this
            step.
          </Text>
        </View>
        <View style={{marginHorizontal: 30, marginBottom: 30}}>
          <BottomButton color="2" onPress={() => navigation.navigate('Login')}>
            Login to Account
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

export default NotAuthScreen;
