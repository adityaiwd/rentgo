import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

const AddressSection = ({receiver, phoneNumber, location, address}) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.leftHead}>
          <Text style={styles.receiver}>{receiver}</Text>
          <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        </View>
        <Text style={styles.location}>{location}</Text>
      </View>
      <Text style={styles.address}>{address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    padding: 15,
    borderRadius: 15,
    marginBottom: 30,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  receiver: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
  },
  phoneNumber: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  location: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
  },
  address: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    textAlign: 'justify',
    fontSize: theme.FONT_SIZE_SMALL,
  },
});

export default AddressSection;
