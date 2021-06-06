import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../styles/theme.style';

const RentAction = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cart}>
        <MaterialCommunityIcons name="cart-plus" color="#fff" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkOutButton}>
        <Text style={styles.checkOutText}>Check Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderColor: '#ddd',
  },
  cart: {
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    paddingVertical: 15,
    borderRadius: 20,
  },
  checkOutButton: {
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: '77%',
  },
  checkOutText: {
    fontWeight: '700',
    color: '#fff',
  },
});

export default RentAction;
