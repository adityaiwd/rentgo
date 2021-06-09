import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartItem from './CartItem';
import RBSheet from 'react-native-raw-bottom-sheet';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const CartPerVendor = ({vendorName, itemData}) => {
  const refRBSheet1 = useRef();
  const refRBSheet2 = useRef();
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  console.log(date1);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.vendorName}>
          {vendorName.length > 14
            ? vendorName.substring(0, 13) + '...'
            : vendorName}
        </Text>
        <View style={styles.timePeriodContainer}>
          <TouchableOpacity
            style={styles.date}
            onPress={() => refRBSheet1.current.open()}>
            <MaterialCommunityIcons
              name="calendar-range"
              color={theme.PRIMARY_COLOR}
              size={25}
            />
            <Text style={styles.dateText}>
              {moment(date1).format('DD/MM/YYYY')}
            </Text>
          </TouchableOpacity>
          <Text style={styles.toText}>to</Text>
          <TouchableOpacity
            style={styles.date}
            onPress={() => refRBSheet2.current.open()}>
            <MaterialCommunityIcons
              name="calendar-range"
              color={theme.PRIMARY_COLOR}
              size={25}
            />
            <Text style={styles.dateText}>
              {moment(date2).format('DD/MM/YYYY')}
            </Text>
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
      <RBSheet
        ref={refRBSheet1}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(50, 51, 52, 0.3)',
          },
          container: {
            paddingHorizontal: 30,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <DatePicker date={date1} onDateChange={setDate1} mode="date" />
      </RBSheet>
      <RBSheet
        ref={refRBSheet2}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(50, 51, 52, 0.3)',
          },
          container: {
            paddingHorizontal: 30,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <DatePicker date={date2} onDateChange={setDate2} mode="date" />
      </RBSheet>
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
