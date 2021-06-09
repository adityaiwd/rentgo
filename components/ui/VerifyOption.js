import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const VerifyOption = ({icon, option, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialIcons name={icon} color={theme.PRIMARY_BLACK} size={25} />
      <Text style={styles.option}>{option}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  option: {
    color: theme.PRIMARY_BLACK,
    fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
    marginLeft: 30,
  },
});

export default VerifyOption;
