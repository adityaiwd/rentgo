import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
} from 'react-native';
import TopBar from '../components/sections/TopBar';
import theme from '../styles/theme.style';
import {useNavigation} from '@react-navigation/native';
import BackgroundShape from '../assets/images/shapes.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../components/ui/SearchBar';

const CategoryScreen = ({route}) => {
  const navigation = useNavigation();
  const {title} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar
          title={title.length > 15 ? title.substring(0, 15) + ' ...' : title}
          cartOnly
          withBackButton
        />
        <View style={styles.content}>
          <SearchBar />
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
    paddingHorizontal: 25,
    marginTop: 15,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  tabStyle: {
    borderWidth: 0,
  },
});

export default CategoryScreen;
