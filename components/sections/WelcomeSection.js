import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import SearchButton from '../ui/SearchButton';

const WelcomeSection = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLargeStyle}>
        {name ? `Hi ${name},` : 'Welcome'}
      </Text>
      <Text style={styles.textSmallStyle}>What items do you want to rent?</Text>
      <SearchButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 35,
  },
  input: {
    width: '90%',
    color: '#828282',
  },
  searchBar: {
    backgroundColor: '#BADDDD',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  textLargeStyle: {
    color: '#fff',
    fontSize: 26,
    fontFamily: theme.FONT_WEIGHT_BOLD,
  },
  textSmallStyle: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: '#fff',
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    marginBottom: 35,
  },
});

export default WelcomeSection;
