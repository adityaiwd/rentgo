/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import FormData from 'form-data';
import {connect} from 'react-redux';
import {sendVerifyRequest} from '../actions';

const VerifyIDScreen = ({sendVerifyRequest, auth}) => {
  const navigation = useNavigation();
  let verifyData = new FormData();

  const [idType, setIdType] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [storeName, setStoreName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [photoId, setPhotoId] = useState({
    uri: '',
    type: '',
    name: '',
  });
  const [photoIDName, setPhotoIDName] = useState('');
  const [selfieIDName, setSelfieIDName] = useState('');
  var options = {
    title: 'Select Image',
    customButtons: [
      {
        name: 'customOptionKey',
        title: 'Choose file from Custom Option',
      },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const handlePhotoIDUpload = () => {
    try {
      launchImageLibrary(options, res => {
        const {uri, fileName} = res.assets[0];
        const uriParts = uri.split('.');
        const fileType = uriParts[uriParts.length - 1];

        setPhotoId({
          uri,
          type: `image/${fileType}`,
          name: fileName,
        });
        setPhotoIDName(fileName);
      });
    } catch (err) {}
  };
  const handleSelfie = () => {
    try {
      launchImageLibrary(options, res => {
        const {fileName} = res.assets[0];
        setSelfieIDName(fileName);
      });
    } catch (err) {}
  };
  const handleVerify = () => {
    verifyData.append('identity_type', idType);
    verifyData.append('identity_number', idNumber);
    verifyData.append('identity_image', photoId);
    verifyData.append('store_name', storeName);
    verifyData.append('store_phone', phoneNumber);

    const data = {body: verifyData, token: auth.token};
    sendVerifyRequest(data);
    navigation.navigate('SuccessVerify');
  };

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
            <ItemTextInput
              onChangeText={text => setIdType(text)}
              value={idType}
              label="Identity Type"
            />
            <ItemTextInput
              onChangeText={text => setIdNumber(text)}
              value={idNumber}
              label="Identity No"
            />
            <ItemTextInput
              onChangeText={text => setStoreName(text)}
              value={storeName}
              label="Store Name"
            />
            <ItemTextInput
              onChangeText={text => setPhoneNumber(text)}
              value={phoneNumber}
              label="Phone Number"
            />
            <Text style={styles.titleText}>Upload your ID photo</Text>
            <Text style={styles.linkText}>
              See instructions to avoid rejection of ID photos
            </Text>
            <UploadItemImage
              uploadedName={photoIDName}
              onPress={handlePhotoIDUpload}
            />
            <Text style={styles.titleText}>Upload a selfie with your ID</Text>
            <Text style={styles.linkText}>
              See instructions to avoid rejection of ID photos
            </Text>
            <UploadItemImage
              uploadedName={selfieIDName}
              onPress={handleSelfie}
            />
            <BottomButton onPress={handleVerify}>Verify</BottomButton>
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

const mapStateToProps = state => {
  return {auth: state.auth};
};

export default connect(mapStateToProps, {sendVerifyRequest})(VerifyIDScreen);
