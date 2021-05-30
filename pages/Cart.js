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

const CartScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar title="Cart" noIcons withBackButton />
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
    paddingTop: 5,
    marginTop: 15,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  tabStyle: {
    borderWidth: 0,
  },
});

export default CartScreen;
