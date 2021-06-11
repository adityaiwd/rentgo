import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import theme from '../../styles/theme.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const SearchButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Search')}
      style={styles.container}>
      <MaterialIcons name="search" color={theme.PRIMARY_COLOR} size={25} />
      <Text style={styles.input}>Search Here</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BADDDD',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  input: {
    width: '90%',
    color: '#828282',
  },
});

export default SearchButton;
