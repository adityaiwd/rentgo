import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import theme from '../../styles/theme.style';

const WelcomeSection = ({name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.profilePicture}
          source={require('../../assets/images/profile-picture.jpg')}
        />
      </View>
      <View>
        <Text style={styles.textLargeStyle}>{name}</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.textSmallStyle}>Show my profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginHorizontal: 20,
    flexDirection: 'row',
    marginBottom: 35,
    alignItems: 'center',
  },
  profilePicture: {
    width: '100%',
    height: '100%',
    borderRadius: 58,
  },
  profileButton: {
    backgroundColor: theme.PRIMARY_COLOR_LIGHT,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 58,
    borderColor: '#fff',
    borderWidth: 1,
    marginRight: 30,
    padding: 7,
  },
  textLargeStyle: {
    color: '#fff',
    fontSize: 20,
    fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
    marginBottom: 5,
  },
  textSmallStyle: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.PRIMARY_BLACK,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
  },
});

export default WelcomeSection;
