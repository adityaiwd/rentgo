import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import theme from '../../styles/theme.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <MaterialIcons name="search" color={theme.PRIMARY_COLOR} size={25} />
      <TextInput
        placeholder="Search Here"
        placeholderTextColor="#828282"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#BADDDD',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  input: {
    width: '90%',
    color: '#828282',
  },
});

export default SearchBar;
