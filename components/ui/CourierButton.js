import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

const CourierButton = ({courier}) => {
  const switchLogo = x => {
    switch (x) {
      case 'jne':
        return require('../../assets/images/jne.png');
      case 'jnt':
        return require('../../assets/images/jnt.png');
      case 'sicepat':
        return require('../../assets/images/sicepat.png');
      case 'default':
        return '';
    }
  };

  const switchStyle = x => {
    switch (x) {
      case 'jne':
        return styles.jne;
      case 'jnt':
        return styles.jnt;
      case 'sicepat':
        return styles.sicepat;
      case 'default':
        return '';
    }
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={switchLogo(courier)} style={switchStyle(courier)} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginRight: 10,
  },
  jne: {
    width: 50,
    height: 20,
  },
  jnt: {
    width: 95,
    height: 20,
  },
  sicepat: {
    width: 75,
    height: 20,
  },
});

export default CourierButton;
