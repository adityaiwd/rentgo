import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartItem from './CartItem';

const CartPerVendor = ({vendorName, startDate, endDate, itemData}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.vendorName}>
          {vendorName.length > 14
            ? vendorName.substring(0, 13) + '...'
            : vendorName}
        </Text>
        <View style={styles.timePeriodContainer}>
          <TouchableOpacity style={styles.date}>
            <MaterialCommunityIcons
              name="calendar-range"
              color={theme.PRIMARY_COLOR}
              size={25}
            />
            <Text style={styles.dateText}>{startDate}</Text>
          </TouchableOpacity>
          <Text style={styles.toText}>to</Text>
          <TouchableOpacity style={styles.date}>
            <MaterialCommunityIcons
              name="calendar-range"
              color={theme.PRIMARY_COLOR}
              size={25}
            />
            <Text style={styles.dateText}>{endDate}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {itemData &&
        itemData.map((item, idx) => (
          <CartItem
            key={idx}
            image={item.image}
            itemName={item.name}
            itemPrice={item.price}
            timePeriod={item.period}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {borderBottomWidth: 1, borderColor: '#F7F7F7', marginBottom: 20},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  vendorName: {
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  timePeriodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.PRIMARY_COLOR_LIGHT,
    padding: 5,
    borderRadius: 5,
  },
  toText: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: 10,
    marginHorizontal: 10,
  },
  dateText: {
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: 10,
  },
});

export default CartPerVendor;
