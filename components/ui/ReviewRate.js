import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import theme from '../../styles/theme.style';

const ReviewRate = () => {
  return (
    <View style={styles.rate}>
      <MaterialIcons name="star" color={theme.PRIMARY_COLOR_LIGHT} size={13} />
      <MaterialIcons name="star" color={theme.PRIMARY_COLOR_LIGHT} size={13} />
      <MaterialIcons name="star" color={theme.PRIMARY_COLOR_LIGHT} size={13} />
      <MaterialIcons name="star" color={theme.PRIMARY_COLOR_LIGHT} size={13} />
      <MaterialIcons name="star" color="#aaa" size={13} />
      <Text style={styles.rateText}>4.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rateText: {
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: 10,
    marginLeft: 5,
  },
  rate: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    alignSelf: 'flex-end',
  },
});

export default ReviewRate;
