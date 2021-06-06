import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import theme from '../../styles/theme.style';

const StarRate = () => {
  return (
    <View style={styles.rate}>
      <MaterialIcons name="star" color={theme.PRIMARY_COLOR} size={20} />
      <MaterialIcons name="star" color={theme.PRIMARY_COLOR} size={20} />
      <MaterialIcons name="star" color={theme.PRIMARY_COLOR} size={20} />
      <MaterialIcons name="star" color={theme.PRIMARY_COLOR} size={20} />
      <MaterialIcons name="star" color="#aaa" size={20} />
      <Text style={styles.rateText}>4.0 (20)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rateText: {
    color: theme.PRIMARY_BLACK,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: 10,
    marginLeft: 5,
  },
  rate: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default StarRate;
