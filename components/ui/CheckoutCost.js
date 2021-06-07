import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NumberFormat from 'react-number-format';
import theme from '../../styles/theme.style';

const CheckoutCost = ({title, cost, bold}) => {
  return (
    <View style={styles.container}>
      <Text style={bold ? styles.titleBold : styles.title}>{title}</Text>
      <NumberFormat
        value={cost}
        renderText={text => (
          <Text style={bold ? styles.costBold : styles.cost}>{text}</Text>
        )}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'Rp '}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  title: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
  },
  cost: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    color: '#2D2D2D',
  },
  titleBold: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
  },
  costBold: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    color: theme.PRIMARY_COLOR,
  },
});

export default CheckoutCost;
