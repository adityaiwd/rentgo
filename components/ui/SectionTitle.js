import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../styles/theme.style';

const SectionTitle = ({title, onSeeAllPress, seeAllValue}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onSeeAllPress}>
        <Text style={{color: theme.PRIMARY_COLOR}}>
          {!seeAllValue ? 'Show all' : 'Show less'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 30,
  },
  title: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_LARGE,
  },
});

export default SectionTitle;
