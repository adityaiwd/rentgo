import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from '../ui/ProductCard';

const TrendingSection = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="Trending" />
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
    marginTop: 20,
    marginBottom: 30,
  },
  scroll: {
    marginTop: -10,
    paddingLeft: 30,
  },
});

export default TrendingSection;
