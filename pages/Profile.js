/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import UserSection from '../components/sections/UserSection';
import TopBar from '../components/sections/TopBar';
import ProfileItem from '../components/ui/ProfileItem';
import theme from '../styles/theme.style';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import BackgroundShape from '../assets/images/shapes.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {logoutUser, fetchUserName} from '../actions';
import {connect} from 'react-redux';

const ProfileScreen = ({auth, name, logoutUser, fetchUserName}) => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleLogout = () => {
    logoutUser();
    navigation.reset({routes: [{name: 'Home'}]});
  };
  useEffect(() => {
    fetchUserName(auth.token);
  }, [auth.token, fetchUserName]);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar title="Profile" />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <UserSection name={name} />
          <View style={styles.content}>
            <SegmentedControlTab
              values={['As Renter', 'As Vendor']}
              borderRadius={25}
              tabTextStyle={{
                fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
                color: theme.PRIMARY_COLOR,
              }}
              activeTabStyle={{
                backgroundColor: theme.PRIMARY_COLOR,
              }}
              firstTabStyle={{
                borderRightWidth: 0,
              }}
              tabsContainerStyle={{borderColor: theme.PRIMARY_COLOR}}
              tabStyle={styles.tabStyle}
              selectedIndex={selectedIndex}
              onTabPress={index => setSelectedIndex(index)}
            />
            <View style={styles.verificationContainer}>
              <View style={styles.verifHeader}>
                <Text style={styles.text}>Why verification is mandatory?</Text>
                <MaterialIcons
                  name="info"
                  color={theme.PRIMARY_COLOR}
                  size={25}
                />
              </View>
              <TouchableOpacity
                style={styles.verifyButton}
                onPress={() => navigation.navigate('VerifyAccount')}>
                <Text style={styles.buttonText}>Verify My Account</Text>
              </TouchableOpacity>
            </View>
            {selectedIndex === 1 && (
              <>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => navigation.navigate('AddItem')}>
                  <Text style={styles.addText}>+ Add Item</Text>
                </TouchableOpacity>
                <ProfileItem icon="all-inbox" name="My Items" />
              </>
            )}
            <ProfileItem
              icon="account-balance-wallet"
              name="Bank Information"
            />
            <ProfileItem icon="settings" name="Settings" />
            <ProfileItem icon="help" name="Help Center" />
            <ProfileItem icon="info" name="About RentGo" />
            <ProfileItem icon="logout" name="Logout" onPress={handleLogout} />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.PRIMARY_COLOR,
    flex: 1,
  },
  content: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 25,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: -10,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  shape: {
    width: '100%',
    height: '100%',
  },
  tabStyle: {borderColor: theme.PRIMARY_COLOR, paddingVertical: 15},
  verifHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  verificationContainer: {
    marginVertical: 20,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
  },
  buttonText: {
    fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
    color: theme.BACKGROUND_COLOR_LIGHT,
  },
  addButton: {
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.PRIMARY_COLOR,
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 20,
  },
  addText: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    color: theme.PRIMARY_COLOR,
  },
  verifyButton: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 30,
    marginVertical: 10,
  },
});

const mapStateToProps = state => {
  return {auth: state.auth, name: state.name};
};

export default connect(mapStateToProps, {logoutUser, fetchUserName})(
  ProfileScreen,
);
