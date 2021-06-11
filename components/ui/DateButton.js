import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../styles/theme.style';

const DateButton = ({date, onPress}) => {
  return (
    <TouchableOpacity style={styles.date} onPress={onPress}>
      <MaterialCommunityIcons
        name="calendar-range"
        color={theme.PRIMARY_COLOR}
        size={25}
      />
      <Text style={styles.dateText}>{date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.PRIMARY_COLOR_LIGHT,
    padding: 5,
    borderRadius: 5,
  },
  dateText: {
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: 10,
  },
});

export default DateButton;
