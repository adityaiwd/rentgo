import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import CategoryCard from '../ui/CategoryCard';
import SectionTitle from '../ui/SectionTitle';

const CategorySection = () => {
  const [allCategories, setAllCategories] = useState(false);
  return (
    <View style={styles.container}>
      <SectionTitle
        title="Category"
        seeAllValue={allCategories}
        onSeeAllPress={() => setAllCategories(!allCategories)}
      />
      <View style={styles.categoryRow}>
        <CategoryCard
          colors={['rgba(154, 3, 30, 1)', 'rgba(251, 139, 36, 1)']}
          icon="car"
          title="Automotive"
          product={75}
        />
        <CategoryCard
          colors={['#023E7D', '#579AFA']}
          icon="devices"
          title="Electronics and Gadgets"
          product={40}
        />
        <CategoryCard
          colors={['#7251B5', '#F8AD9D']}
          icon="tshirt-crew-outline"
          title="Clothing and Beauty"
          product={125}
        />
      </View>
      <View style={styles.categoryRow}>
        <CategoryCard
          colors={['#007F5F', '#B7E4C7']}
          icon="run-fast"
          title="Sports and Outdoor"
          product={75}
        />
        <CategoryCard
          colors={['#E36414', 'rgba(251, 139, 36, 0.62)']}
          icon="party-popper"
          title="Party and Event"
          product={40}
        />
        <CategoryCard
          colors={['#A44A3F', '#F19C79']}
          icon="camera"
          title="Photography "
          product={50}
        />
      </View>
      {allCategories && (
        <>
          <View style={styles.categoryRow}>
            <CategoryCard
              colors={['#B08968', '#EDE0D4']}
              icon="book-open-outline"
              title="Books"
              product={75}
            />
            <CategoryCard
              colors={['#76C893', '#B5E48C']}
              icon="gamepad-square"
              title="Games and Toys"
              product={40}
            />
            <CategoryCard
              colors={['#E09F3E', '#FFF3B0']}
              icon="tools"
              title="Home and Garden"
              product={50}
            />
          </View>
          <View style={styles.categoryRow}>
            <CategoryCard
              colors={['#FFB5A7', '#FCD5CE']}
              icon="baby-carriage"
              title="Kids and Babies"
              product={75}
            />
            <CategoryCard
              colors={['#9D4EDD', '#E0AAFF']}
              icon="briefcase-variant"
              title="Office and Stationery"
              product={40}
            />
            <CategoryCard
              colors={['#E26D5C', '#FFE1A8']}
              icon="guitar-acoustic"
              title="Music and Audios"
              product={50}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  jumbotron: {
    width: '100%',
    padding: 20,
  },
  categoryRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 10,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  linearGradient: {
    width: '32%',
    paddingLeft: 9,
    paddingRight: 9,
    paddingVertical: 10,
    borderRadius: 10,
  },
  container: {
    marginTop: 20,
  },
  content: {
    flex: 1,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: -10,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  title: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_LARGE,
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

export default CategorySection;
