import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import theme from '../../styles/theme.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const ProductPageCard = ({...rest}) => {
  const navigation = useNavigation();

  return (
    <View {...rest}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.push('ProductDetail')}>
        <Image
          resizeMode="cover"
          style={{width: '100%', height: 150}}
          source={require('../../assets/images/product-camera.jpg')}
        />
        <View style={styles.description}>
          <Text style={styles.name}>Canon EOS 90 D</Text>
          <Text style={styles.vendor}>Kameravest</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>Rp 75.000</Text>
            <Text style={styles.day}> / day</Text>
          </View>
          <View style={styles.rate}>
            <MaterialIcons name="star" color={theme.PRIMARY_COLOR} size={10} />
            <MaterialIcons name="star" color={theme.PRIMARY_COLOR} size={10} />
            <MaterialIcons name="star" color={theme.PRIMARY_COLOR} size={10} />
            <MaterialIcons name="star" color={theme.PRIMARY_COLOR} size={10} />
            <MaterialIcons name="star" color="#aaa" size={10} />
            <Text style={styles.rateText}>4.0 (20)</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 0.5,
    // borderColor: '#CCCCCC',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
    paddingBottom: 10,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    // elevation: 1,
  },
  description: {
    // padding: 10,
    alignSelf: 'stretch',
  },
  name: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  vendor: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    color: '#aaa',
    fontSize: 10,
  },
  priceContainer: {flexDirection: 'row', marginTop: 5},
  price: {
    fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
    fontSize: 10,
  },
  day: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: 10,
  },
  rate: {
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rateText: {
    color: theme.PRIMARY_BLACK,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: 10,
    marginLeft: 5,
  },
});

export default ProductPageCard;
