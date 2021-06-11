import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CartCounter = ({value, increment, decrement}) => {
  return (
    <View style={styles.itemCounter}>
      <TouchableOpacity
        style={styles.Button}
        onPress={decrement}
        disabled={value === 1}>
        <MaterialCommunityIcons
          name="minus"
          color={value === 1 ? '#C4C4C4' : theme.PRIMARY_BLACK}
          size={20}
        />
      </TouchableOpacity>
      <View style={styles.countContainer}>
        <Text style={styles.count}>{value}</Text>
      </View>
      <TouchableOpacity style={styles.Button} onPress={increment}>
        <MaterialCommunityIcons
          name="plus"
          color={theme.PRIMARY_BLACK}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemCounter: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  countContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
    width: 30,
  },
  count: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  Button: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 5,
  },
});

export default CartCounter;
