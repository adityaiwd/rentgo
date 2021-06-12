/* eslint-disable no-shadow */
import React, {useEffect} from 'react';
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
import {
  fetchUserName,
  fetchLatestProduct,
  fetchTrendingProduct,
} from '../actions';
import {connect} from 'react-redux';

const HomeScreen = ({
  name,
  auth,
  fetchUserName,
  fetchLatestProduct,
  fetchTrendingProduct,
  latest,
  trending,
}) => {
  useEffect(() => {
    fetchLatestProduct();
    fetchTrendingProduct();
    auth.isAuthenticated && fetchUserName(auth.token);
  }, [
    auth.isAuthenticated,
    auth.token,
    fetchUserName,
    fetchLatestProduct,
    fetchTrendingProduct,
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar />
        <ScrollView showsVerticalScrollIndicator={false}>
          <WelcomeSection name={auth.isAuthenticated && name} />
          <View style={styles.content}>
            <ScrollView>
              <CategorySection />
              <TrendingSection data={trending} />
              <LatestSection data={latest} />
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
    flex: 1,
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

const mapStateToProps = state => {
  return {
    auth: state.auth,
    name: state.name,
    latest: state.latest,
    trending: state.trending,
  };
};

export default connect(mapStateToProps, {
  fetchUserName,
  fetchLatestProduct,
  fetchTrendingProduct,
})(HomeScreen);
