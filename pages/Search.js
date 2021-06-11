/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import BackgroundShape from '../assets/images/shapes.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../components/ui/SearchBar';
import ProductPageCard from '../components/ui/ProductPageCard';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const handleSearch = () => {
    console.log(query);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <View style={{marginHorizontal: 30, marginTop: 20, marginBottom: 10}}>
          <SearchBar
            autoFocus={true}
            onChangeText={text => setQuery(text)}
            onSubmitEditing={handleSearch}
          />
        </View>
        <View style={styles.content}>
          <Text style={{fontFamily: theme.FONT_WEIGHT_BOLD}}>
            Search Result
          </Text>
          <View style={styles.productContainer}>
            <ProductPageCard style={styles.product} />
            <ProductPageCard style={styles.product} />
            <ProductPageCard style={styles.product} />
            <ProductPageCard style={styles.product} />
            <ProductPageCard style={styles.product} />
            <ProductPageCard style={styles.product} />
            <ProductPageCard style={styles.product} />
            <ProductPageCard style={styles.product} />
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
    paddingHorizontal: 25,
    marginTop: 15,
    height: '100%',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  tabStyle: {
    borderWidth: 0,
  },
  productContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    height: '100%',
  },
  product: {
    width: '46%',
    marginHorizontal: '2%',
    aspectRatio: 1,
  },
});

export default SearchScreen;
