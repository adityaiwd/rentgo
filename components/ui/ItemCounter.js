import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemCounter = ({value, increment, decrement}) => {
  return (
    <View style={styles.itemCounter}>
      <TouchableOpacity onPress={decrement} disabled={value === 1}>
        <MaterialCommunityIcons
          name="minus-circle"
          color={value === 1 ? '#C4C4C4' : theme.PRIMARY_COLOR}
          size={25}
        />
      </TouchableOpacity>
      <View style={styles.countContainer}>
        <Text style={styles.count}>{value}</Text>
      </View>
      <TouchableOpacity onPress={increment}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={theme.PRIMARY_COLOR}
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemCounter: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  countContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
    width: 25,
  },
  count: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});

export default ItemCounter;
