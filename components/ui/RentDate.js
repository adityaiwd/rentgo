import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RentDate = ({value, endDate, startDate}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dateContainer}
        onPress={startDate}
        disabled={value === 1}>
        <MaterialCommunityIcons
          name="calendar-range"
          color={theme.PRIMARY_COLOR}
          size={25}
        />
        <Text style={styles.dateText}>Date</Text>
      </TouchableOpacity>
      <View style={styles.countContainer}>
        <Text style={styles.count}>to</Text>
      </View>
      <TouchableOpacity
        style={styles.dateContainer}
        onPress={endDate}
        disabled={value === 1}>
        <MaterialCommunityIcons
          name="calendar-range"
          color={theme.PRIMARY_COLOR}
          size={25}
        />
        <Text style={styles.dateText}>Date</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 10,
  },
  countContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  count: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    color: theme.PRIMARY_COLOR,
    fontSize: 10,
  },
});

export default RentDate;
