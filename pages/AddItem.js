/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TopBar from '../components/sections/TopBar';
import theme from '../styles/theme.style';
import BackgroundShape from '../assets/images/shapes.png';
import UploadItemImage from '../components/ui/UploadItemImage';
import ItemTextInput from '../components/ui/ItemTextInput';
import BottomButton from '../components/ui/BottomButton';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

const AddItemScreen = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar title="Add Item" noIcons withBackButton />
        <View style={styles.content}>
          <ScrollView>
            <UploadItemImage />
            <ItemTextInput label="Item Name" />
            <ItemTextInput
              label="Item Description"
              multiline
              numberOfLines={3}
            />
            <ItemTextInput label="Category" />
            <ItemTextInput label="Subcategory (if any)" />
            <ItemTextInput label="stock availability" />
            <ItemTextInput label="Price / day" />
            <View style={styles.tncContainer}>
              <CheckBox
                tintColors={{
                  true: theme.PRIMARY_COLOR,
                  false: '#ccc',
                }}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text
                style={{fontFamily: theme.FONT_WEIGHT_MEDIUM, marginLeft: 10}}>
                I agree with the{' '}
              </Text>
              <Text
                style={{
                  fontFamily: theme.FONT_WEIGHT_BOLD,
                  color: theme.PRIMARY_COLOR,
                }}>
                terms & conditions
              </Text>
            </View>
            <BottomButton>Add Item</BottomButton>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.PRIMARY_COLOR,
    flex: 1,
  },
  shape: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingTop: 20,
    marginTop: 15,
    paddingHorizontal: 30,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    position: 'relative',
  },
  tncContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addItemButton: {
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical: 20,
  },
  addItemText: {
    color: '#fff',
    fontFamily: theme.FONT_WEIGHT_BOLD,
  },
});

export default AddItemScreen;
