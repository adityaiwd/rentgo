import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import theme from '../../styles/theme.style';

const MiniButton = ({children, onPress, title, outlined}) => {
  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}
      <TouchableOpacity
        onPress={onPress}
        style={outlined ? styles.outlinedContainer : styles.container}>
        <Text style={outlined ? styles.outlinedText : styles.text}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  outlinedText: {
    textAlign: 'center',
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  outlinedContainer: {
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },
  container: {
    backgroundColor: theme.PRIMARY_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },
  title: {
    textAlign: 'right',
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    color: '#888',
    fontSize: 10,
    marginBottom: 10,
    marginRight: 10,
  },
});

export default MiniButton;
