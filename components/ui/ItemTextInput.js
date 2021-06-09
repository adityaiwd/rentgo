import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
const ItemTextInput = ({
  label,
  onChangeText,
  value,
  multiline,
  numberOfLines,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    paddingTop: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
    letterSpacing: 0.5,
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: '#000',
  },
});

export default ItemTextInput;
