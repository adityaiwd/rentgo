import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../styles/theme.style';

const CheckoutSubtitle = ({title, sideButton, onSideButtonPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {sideButton && (
        <TouchableOpacity style={styles.sideButton} onPress={onSideButtonPress}>
          <Text style={styles.sideButtonText}>{sideButton}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
  },
  sideButton: {
    backgroundColor: theme.SECONDARY_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  sideButtonText: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    color: '#fff',
    fontSize: theme.FONT_SIZE_SMALL,
  },
});

export default CheckoutSubtitle;
