import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

const FormInput = ({password, label, onChangeText, value, keyboardType}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={focused ? styles.container : styles.containerUnfocused}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={password}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={focused ? styles.input : styles.inputUnfocused}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderRightWidth: 12,
    borderRightColor: '#FE7F2D',
    marginVertical: 10,
  },
  containerUnfocused: {
    backgroundColor: theme.PRIMARY_COLOR_LIGHT,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 10,
    fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  inputUnfocused: {
    color: '#000',
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    letterSpacing: 1,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  input: {
    color: '#000',
    fontFamily: theme.FONT_WEIGHT_BOLD,
    letterSpacing: 1,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});

export default FormInput;
