/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from '../ui/ProductCard';

const LatestSection = ({data}) => {
  return (
    <View style={styles.container}>
      <SectionTitle title="Latest" />
      <FlatList
        data={data}
        horizontal
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<View style={{width: 50}}></View>}
        key={'#'}
        keyExtractor={data => '#' + data.id}
        renderItem={({item}) => (
          <ProductCard
            id={item.id}
            name={item.name}
            vendor={item.vendor}
            price={item.price}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  scroll: {
    marginTop: -10,
    paddingLeft: 30,
  },
});

export default LatestSection;
