import React from 'react';
import {View, StyleSheet} from 'react-native';
import TransactionCode from './TransactionCode';
import MiniButton from './MiniButton';

const TransactionHeader = ({
  code,
  date,
  buttonTitle,
  buttonText,
  outlinedButton,
  onButtonPress,
}) => {
  return (
    <View style={styles.container}>
      <TransactionCode code={code} date={date} />
      <MiniButton
        onPress={onButtonPress}
        title={buttonTitle}
        outlined={outlinedButton}>
        {buttonText}
      </MiniButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
});

export default TransactionHeader;
