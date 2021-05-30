import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import theme from '../../styles/theme.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const WelcomeSection = () => {
  return (
    <View style={styles.jumbotron}>
      <Text style={styles.textLargeStyle}>Hai Safira,</Text>
      <Text style={styles.textSmallStyle}>What items do you want to rent?</Text>
      <View style={styles.searchBar}>
        <MaterialIcons name="search" color={theme.PRIMARY_COLOR} size={25} />
        <TextInput
          placeholder="Search Here"
          placeholderTextColor="#828282"
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jumbotron: {
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 20,
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
    marginVertical: 35,
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
  },
});

export default WelcomeSection;
