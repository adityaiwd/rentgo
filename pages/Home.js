import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import CategorySection from '../components/sections/CategorySection';
import TrendingSection from '../components/sections/TrendingSection';
import LatestSection from '../components/sections/LatestSection';
import WelcomeSection from '../components/sections/WelcomeSection';
import TopBar from '../components/sections/TopBar';
import theme from '../styles/theme.style';
import BackgroundShape from '../assets/images/shapes.png';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar />
        <ScrollView showsVerticalScrollIndicator={false}>
          <WelcomeSection />
          <View style={styles.content}>
            <ScrollView>
              <CategorySection />
              <TrendingSection />
              <LatestSection />
            </ScrollView>
          </View>
        </ScrollView>
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
  },
  content: {
    flex: 1,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingBottom: 50,
    marginTop: -10,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
});

export default HomeScreen;
