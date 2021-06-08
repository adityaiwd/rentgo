import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import theme from '../../styles/theme.style';

const ProfileItem = ({icon, name, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialIcons name={icon} color={theme.PRIMARY_BLACK} size={25} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
    color: theme.PRIMARY_BLACK,
    marginLeft: 25,
    letterSpacing: 1.5,
  },
});

export default ProfileItem;
