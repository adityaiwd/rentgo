/* eslint-disable no-shadow */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  View,
} from 'react-native';
import TopBar from '../components/sections/TopBar';
import ToPaySection from '../components/sections/ToPaySection';
import OnGoingSection from '../components/sections/OnGoingSection';
import CompletedSection from '../components/sections/CompletedSection';
import theme from '../styles/theme.style';
import BackgroundShape from '../assets/images/shapes.png';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {connect} from 'react-redux';
import {
  fetchInvoiceAccepted,
  fetchInvoiceOnGoing,
  fetchInvoiceCompleted,
} from '../actions';

const ManageScreen = ({
  fetchInvoiceAccepted,
  fetchInvoiceOnGoing,
  fetchInvoiceCompleted,
  auth,
  accepted,
  onGoing,
  completed,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    fetchInvoiceAccepted(auth.token);
    fetchInvoiceOnGoing(auth.token);
    fetchInvoiceCompleted(auth.token);
  }, [
    fetchInvoiceAccepted,
    auth.token,
    fetchInvoiceOnGoing,
    selectedIndex,
    fetchInvoiceCompleted,
  ]);
  const renderSwitch = index => {
    switch (index) {
      case 0:
        return <ToPaySection data={accepted} />;
      case 1:
        return <OnGoingSection data={onGoing} />;
      case 2:
        return <CompletedSection data={completed} />;
      default:
        return <></>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.shape}>
        <TopBar title="Manage" />
        <View style={styles.content}>
          <SegmentedControlTab
            values={['Order', 'On Going', 'Completed']}
            borderRadius={20}
            tabTextStyle={{
              fontFamily: theme.FONT_WEIGHT_MEDIUM,
              borderRightWidth: 0,
              color: theme.PRIMARY_BLACK,
            }}
            firstTabStyle={{
              borderRightWidth: 0,
            }}
            activeTabStyle={{
              backgroundColor: 'rgba(251, 139, 36, 0.75)',
              borderRadius: 20,
            }}
            activeTabTextStyle={{
              borderRightWidth: 0,
              fontFamily: theme.FONT_WEIGHT_SEMIBOLD,
              color: theme.BACKGROUND_COLOR_LIGHT,
            }}
            tabStyle={styles.tabStyle}
            tabsContainerStyle={{
              borderRightWidth: 0,
              marginHorizontal: 30,
              marginVertical: 20,
            }}
            selectedIndex={selectedIndex}
            onTabPress={index => setSelectedIndex(index)}
          />
          <ScrollView>{renderSwitch(selectedIndex)}</ScrollView>
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
    paddingTop: 5,
    marginTop: 15,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  tabStyle: {
    borderWidth: 0,
  },
});

const mapStateToProps = state => {
  return {
    auth: state.auth,
    accepted: state.accepted,
    onGoing: state.onGoing,
    completed: state.completed,
  };
};

export default connect(mapStateToProps, {
  fetchInvoiceAccepted,
  fetchInvoiceOnGoing,
  fetchInvoiceCompleted,
})(ManageScreen);
