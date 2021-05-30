import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from '../ui/ProductCard';

const LatestSection = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="Latest" />
      <ScrollView
        style={styles.scroll}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>
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
