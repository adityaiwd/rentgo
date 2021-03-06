/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './pages/Home';
import ManageScreen from './pages/Manage';
import ProfileScreen from './pages/Profile';
import CartScreen from './pages/Cart';
import CategoryScreen from './pages/Category';
import ProductDetailScreen from './pages/ProductDetail';
import LoginScreen from './pages/Login';
import RegisterScreen from './pages/Register';
import ImageSearchScreen from './pages/ImageSearch';
import CheckoutScreen from './pages/Checkout';
import PaymentScreen from './pages/Payment';
import AddItemScreen from './pages/AddItem';
import VerifyAccountScreen from './pages/VerifyAccount';
import VerifyIDScreen from './pages/VerifyID';
import NotVerifiedScreen from './pages/NotVerified';
import SearchScreen from './pages/Search';
import OvoPaymentScreen from './pages/OvoPayment';
import SuccessPaymentScreen from './pages/SuccessPayment';
import RateScreen from './pages/Rate';
import SuccessVerifyScreen from './pages/SuccessVerify';
import NotAuthScreen from './pages/NotAuth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import theme from './styles/theme.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {setAuthorizationToken} from './actions';
import Toast from 'react-native-toast-message';

const store = createStore(reducers, applyMiddleware(thunk));

function ScannerScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Scanner screen!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function HomeTabScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.PRIMARY_COLOR,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Manage"
        component={
          store.getState().auth.isAuthenticated
            ? store.getState().name.is_verified
              ? ManageScreen
              : NotVerifiedScreen
            : NotAuthScreen
        }
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="basket-fill"
              color={color}
              size={size}
            />
          ),
          tabBarVisible: store.getState().name.is_verified,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ImageSearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                position: 'absolute',
                bottom: 10, // space from bottombar
                height: 70,
                width: 70,
                borderRadius: 58,
                backgroundColor: theme.PRIMARY_COLOR,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="image-search-outline"
                color="#fff"
                size={size}
              />
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ScannerScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="calculator"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={
          store.getState().auth.isAuthenticated ? ProfileScreen : LoginScreen
        }
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="person-outline" color={color} size={size} />
          ),
          tabBarVisible: store.getState().auth.isAuthenticated,
        }}
      />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const getExistingToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        setAuthorizationToken(token);
        store.dispatch({
          type: 'LOGIN_USER',
          payload: token,
        });
        console.log(token);
      } catch (error) {
        console.log(error);
      }
    };
    getExistingToken();
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeTabScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ImageSearch" component={ImageSearchScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
          <Stack.Screen name="AddItem" component={AddItemScreen} />
          <Stack.Screen name="VerifyAccount" component={VerifyAccountScreen} />
          <Stack.Screen name="VerifyID" component={VerifyIDScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="OvoPayment" component={OvoPaymentScreen} />
          <Stack.Screen name="Rate" component={RateScreen} />
          <Stack.Screen name="NotVerified" component={NotVerifiedScreen} />
          <Stack.Screen name="SuccessVerify" component={SuccessVerifyScreen} />
          <Stack.Screen name="NotAuth" component={NotAuthScreen} />
          <Stack.Screen
            name="SuccessPayment"
            component={SuccessPaymentScreen}
          />
        </Stack.Navigator>
        <Toast ref={ref => Toast.setRef(ref)} style={{zIndex: 99}} />
      </NavigationContainer>
    </Provider>
  );
}
