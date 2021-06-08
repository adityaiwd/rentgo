import React from 'react';
import {StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import theme from '../../styles/theme.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BankTransferButton = ({bank}) => {
  const switchLogo = x => {
    switch (x) {
      case 'BCA':
        return require('../../assets/images/bca.png');
      case 'BNI':
        return require('../../assets/images/bni.png');
      case 'Mandiri':
        return require('../../assets/images/mandiri.png');
      case 'default':
        return '';
    }
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={switchLogo(bank)} style={styles.logo} />
      <Text style={styles.text}>Bank {bank}</Text>
      <MaterialIcons
        name="arrow-forward-ios"
        color={theme.PRIMARY_BLACK}
        size={20}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingBottom: 20,
    borderBottomColor: '#f6f6f6',
  },
  logo: {
    width: 101,
    height: 32,
    marginRight: 20,
  },
  text: {
    marginRight: 'auto',
    fontSize: 16,
  },
});

export default BankTransferButton;
