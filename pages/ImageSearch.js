/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import UserSection from '../components/sections/UserSection';
import TopBar from '../components/sections/TopBar';
import ProfileItem from '../components/ui/ProfileItem';
import theme from '../styles/theme.style';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import BackgroundShape from '../assets/images/shapes.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import BottomButton from '../components/ui/BottomButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DocumentPicker from 'react-native-document-picker';
import {RNCamera} from 'react-native-camera';

const ImageSearchScreen = () => {
  const navigation = useNavigation();
  let camera;
  const takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    console.log(data.uri);
  };
  const handleUploadImage = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar title="Image Search" withBackButton noIcons />
        <View style={styles.content}>
          <View
            style={{
              height: '30%',
              width: '100%',
              marginTop: 30,
            }}>
            <RNCamera
              ref={ref => {
                camera = ref;
              }}
              style={styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.off}
              ratio={'1:1'}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}>
              <View style={{width: '100%'}}>
                <Text style={{color: 'transparent'}}>test</Text>
              </View>
            </RNCamera>
          </View>
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => takePicture(camera)}
              style={styles.capture}>
              <MaterialCommunityIcons
                name="image-search-outline"
                color={theme.PRIMARY_COLOR}
                size={30}
              />
            </TouchableOpacity>
          </View>
          <BottomButton color="2" onPress={handleUploadImage}>
            Upload Image
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
  content: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  preview: {
    width: '100%',
    position: 'relative',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 58,
    padding: 25,
  },
  shape: {
    width: '100%',
    height: '100%',
  },
});

export default ImageSearchScreen;
