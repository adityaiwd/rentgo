import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReviewRate from './ReviewRate';

const ReviewCard = ({name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profpic}
          source={require('../../assets/images/review-avatar.png')}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>14 days ago</Text>
        </View>
        <ReviewRate />
      </View>
      <Text style={styles.review}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  profpic: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  name: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  time: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  review: {
    fontWeight: '300',
    fontSize: theme.FONT_SIZE_SMALL,
    textAlign: 'justify',
    marginTop: 10,
  },
});

export default ReviewCard;
