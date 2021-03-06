import React from 'react';
import {TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import theme from '../../styles/theme.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const SearchBar = ({
  onFocus,
  ref,
  onBlur,
  onChangeText,
  value,
  onSubmitEditing,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Search')}
      style={styles.searchBar}>
      <MaterialIcons name="search" color={theme.PRIMARY_COLOR} size={25} />
      <TextInput
        placeholder="Search Here"
        placeholderTextColor="#828282"
        onFocus={onFocus}
        onBlur={onBlur}
        ref={ref}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        onSubmitEditing={onSubmitEditing}
      />
    </TouchableOpacity>
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
