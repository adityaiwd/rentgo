/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  ScrollView,
} from 'react-native';
import TopBar from '../components/sections/TopBar';
import theme from '../styles/theme.style';
import BackgroundShape from '../assets/images/shapes.png';
import UploadItemImage from '../components/ui/UploadItemImage';
import ItemTextInput from '../components/ui/ItemTextInput';
import BottomButton from '../components/ui/BottomButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const VerifyIDScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar title="ID Card" noIcons withBackButton />
        <View style={styles.content}>
          <ScrollView>
            <Text style={styles.titleText}>Identity Card</Text>
            <Text
              style={{
                fontFamily: theme.FONT_WEIGHT_MEDIUM,
                fontSize: theme.FONT_SIZE_SMALL,
                marginBottom: 20,
              }}>
              Acceptable identity cards include{' '}
              <Text style={styles.bold}>KTP</Text>,{' '}
              <Text style={styles.bold}>SIM</Text>, and{' '}
              <Text style={styles.bold}>Passport</Text>.
            </Text>
            <ItemTextInput label="Identity Type" />
            <ItemTextInput label="Identity No" />
            <ItemTextInput label="Full Name" />
            <Text style={styles.titleText}>Upload your ID photo</Text>
            <Text style={styles.linkText}>
              See instructions to avoid rejection of ID photos
            </Text>
            <UploadItemImage />
            <Text style={styles.titleText}>Upload a selfie with your ID</Text>
            <Text style={styles.linkText}>
              See instructions to avoid rejection of ID photos
            </Text>
            <UploadItemImage />
            <BottomButton>Verify</BottomButton>
          </ScrollView>
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
  titleText: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.PRIMARY_BLACK,
    marginBottom: 5,
  },
  bold: {
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_WEIGHT_BOLD,
  },
  linkText: {
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: theme.FONT_SIZE_SMALL,
    marginBottom: 20,
  },
});

export default VerifyIDScreen;
