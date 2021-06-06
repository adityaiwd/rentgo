import React from 'react';
import {View, StyleSheet} from 'react-native';
import DetailSectionTitle from '../ui/DetailSectionTitle';
import ReviewCard from '../ui/ReviewCard';

const ReviewsSection = () => {
  return (
    <View style={styles.container}>
      <DetailSectionTitle title="Reviews (12)" withoutSeeAll />
      <View style={styles.reviews}>
        <ReviewCard name="Safira Eldi" />
        <ReviewCard name="Aditya Wicaksono" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginBottom: 25},
});

export default ReviewsSection;
