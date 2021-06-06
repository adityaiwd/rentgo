import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../styles/theme.style';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const CategoryCard = ({colors, icon, title, product}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Category', {title})}>
      <LinearGradient colors={colors} style={styles.linearGradient}>
        <View style={styles.content}>
          <MaterialCommunityIcons name={icon} color="#fff" size={20} />
        </View>
        <Text style={styles.buttonText}>{title}</Text>
        <Text style={styles.productText}>{product} Produk</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '32%',
  },
  buttonText: {
    fontSize: 10,
    fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  productText: {
    fontSize: 8,
    color: '#ffffff',
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    marginTop: 5,
  },
  linearGradient: {
    width: '100%',
    height: 90,
    paddingLeft: 9,
    paddingRight: 9,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
});

export default CategoryCard;
