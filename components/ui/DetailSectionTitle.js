import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../styles/theme.style';

const DetailSectionTitle = ({
  title,
  onSeeAllPress,
  seeAllValue,
  withoutSeeAll,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {!withoutSeeAll && (
        <TouchableOpacity onPress={onSeeAllPress}>
          <Text style={{color: theme.PRIMARY_COLOR}}>
            {!seeAllValue ? 'Show all' : 'Show less'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  title: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_BLACK,
  },
});

export default DetailSectionTitle;
