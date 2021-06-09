/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
} from 'react-native';
import TopBar from '../components/sections/TopBar';
import theme from '../styles/theme.style';
import BackgroundShape from '../assets/images/shapes.png';
import VerifyOption from '../components/ui/VerifyOption';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const VerifyAccountScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar title="Verify Account" noIcons withBackButton />
        <View style={styles.content}>
          <Text
            style={{
              fontFamily: theme.FONT_WEIGHT_BOLD,
              fontSize: theme.FONT_SIZE_LARGE,
              color: theme.PRIMARY_BLACK,
              marginBottom: 40,
            }}>
            Let's verify your account
          </Text>
          <VerifyOption option="Email Verification" icon="email" />
          <VerifyOption option="Phone Number" icon="smartphone" />
          <VerifyOption
            option="Identity Card"
            icon="credit-card"
            onPress={() => navigation.navigate('VerifyID')}
          />
          <View style={styles.verifyInfo}>
            <View style={styles.infoHeader}>
              <Text style={styles.infoTitle}>
                Why verification is mandatory?
              </Text>
              <MaterialIcons
                name="info"
                color={theme.PRIMARY_COLOR}
                size={25}
              />
            </View>
            <Text style={styles.infoText}>
              Verification is needed for you to proceed with transaction. This
              allows for safer transation
            </Text>
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
  verifyInfo: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 15,
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoTitle: {
    fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.PRIMARY_BLACK,
  },
  infoText: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.PRIMARY_BLACK,
    textAlign: 'justify',
  },
});

export default VerifyAccountScreen;
