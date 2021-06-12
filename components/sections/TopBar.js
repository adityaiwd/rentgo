import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../styles/theme.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

const TopBar = ({title, cartOnly, withBackButton, noIcons, name, auth}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {withBackButton && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" color="#fff" size={25} />
        </TouchableOpacity>
      )}
      <View>{title && <Text style={styles.title}>{title}</Text>}</View>
      <View style={styles.icons}>
        {noIcons ? (
          <></>
        ) : (
          <>
            {cartOnly ? (
              <></>
            ) : (
              <>
                <TouchableOpacity style={styles.icon}>
                  <MaterialCommunityIcons
                    name="bell-outline"
                    color="#fff"
                    size={25}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                  <MaterialIcons
                    name="chat-bubble-outline"
                    color="#fff"
                    size={25}
                  />
                </TouchableOpacity>
              </>
            )}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  auth.isAuthenticated
                    ? name.is_verified
                      ? 'Cart'
                      : 'NotVerified'
                    : 'NotAuth',
                )
              }>
              <MaterialCommunityIcons
                name="cart-outline"
                color="#fff"
                size={25}
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  backButton: {
    marginRight: 20,
  },
  title: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    color: theme.BACKGROUND_COLOR_LIGHT,
    fontSize: 18,
    letterSpacing: 2,
  },
  icon: {
    marginRight: 20,
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
});

const mapStateToProps = state => {
  return {name: state.name, auth: state.auth};
};

export default connect(mapStateToProps, {})(TopBar);
