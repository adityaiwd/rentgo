import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import DetailSectionTitle from '../ui/DetailSectionTitle';
import ProductCard from '../ui/ProductCard';

const RelatedProductsSection = () => {
  return (
    <>
      <DetailSectionTitle title="Related Products" withoutSeeAll />
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
    </>
  );
};

const styles = StyleSheet.create({
  scroll: {
    paddingLeft: 20,
    marginBottom: 100,
  },
});

export default RelatedProductsSection;
