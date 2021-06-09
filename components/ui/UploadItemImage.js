import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const UploadItemImage = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name="camera"
        color={theme.PRIMARY_COLOR}
        size={25}
      />
      <Text style={styles.title}>Upload Photo</Text>
      <Text style={styles.subtitle}>JPEG, JPG, or PNG file only</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#797F83',
    borderStyle: 'dashed',
    marginBottom: 20,
  },
  title: {
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  subtitle: {
    color: theme.PRIMARY_BLACK,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: 10,
  },
});

export default UploadItemImage;
