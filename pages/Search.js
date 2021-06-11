/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import TopBar from '../components/sections/TopBar';
import theme from '../styles/theme.style';
import {useNavigation} from '@react-navigation/native';
import BackgroundShape from '../assets/images/shapes.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../components/ui/SearchBar';
import ProductPageCard from '../components/ui/ProductPageCard';
import {connect} from 'react-redux';
import {searchProduct} from '../actions';

const SearchScreen = ({searchProduct, search}) => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const handleSearch = () => {
    searchProduct(query);
  };
  useEffect(() => {
    search && setResult(search);
  }, [search]);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <View style={{marginHorizontal: 30, marginTop: 20, marginBottom: 10}}>
          <SearchBar
            autoFocus={true}
            value={query}
            onChangeText={text => setQuery(text)}
            onSubmitEditing={handleSearch}
          />
        </View>
        <View style={styles.content}>
          <Text style={{fontFamily: theme.FONT_WEIGHT_BOLD, marginBottom: 10}}>
            Search result
          </Text>
          <FlatList
            data={result}
            key={'#'}
            keyExtractor={result => '#' + result.id}
            style={{paddingBottom: 20}}
            numColumns={2}
            renderItem={({item}) => (
              <View style={styles.product}>
                <ProductPageCard
                  id={item.id}
                  name={item.name}
                  vendor={item.vendor}
                  price={item.price}
                />
              </View>
            )}
          />
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
    height: 500,
    marginBottom: 90,
  },
});

const mapStateToProps = state => {
  return {search: state.search};
};

export default connect(mapStateToProps, {searchProduct})(SearchScreen);
