import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

const PaymentInstruction = ({number, text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  number: {
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
    backgroundColor: '#E9F6EC',
    marginRight: 15,
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  text: {
    fontFamily: theme.FONT_WEIGHT_LIGHT,
    fontSize: theme.FONT_SIZE_SMALL,
    flexWrap: 'wrap',
    flex: 1,
    textAlign: 'justify',
  },
});

export default PaymentInstruction;
