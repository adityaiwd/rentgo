import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

const DigiPaymentButton = ({logo, onPress}) => {
  const switchStyle = x => {
    switch (x) {
      case 'ovo':
        return styles.logoovo;
      case 'gopay':
        return styles.logogopay;
      case 'dana':
        return styles.logodana;
      case 'default':
        return '';
    }
  };

  const switchLogo = x => {
    switch (x) {
      case 'ovo':
        return require('../../assets/images/ovo.png');
      case 'gopay':
        return require('../../assets/images/gopay.png');
      case 'dana':
        return require('../../assets/images/dana.png');
      case 'default':
        return '';
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={switchLogo(logo)} style={switchStyle(logo)} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#F2F2F2',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 10,
  },
  logogopay: {
    width: 95,
    height: 21,
  },
  logoovo: {
    width: 60,
    height: 21,
  },
  logodana: {
    width: 70,
    height: 21,
  },
});

export default DigiPaymentButton;
