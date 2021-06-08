/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import theme from './styles/theme.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {setAuthorizationToken} from './actions';

const store = createStore(reducers, applyMiddleware(thunk));
const {isAuthenticated} = store.getState().auth;

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
        component={ManageScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="basket-fill"
              color={color}
              size={size}
            />
          ),
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
        component={isAuthenticated ? ProfileScreen : LoginScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="person-outline" color={color} size={size} />
          ),
          tabBarVisible: isAuthenticated,
        }}
      />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

if (AsyncStorage.getItem('token')) {
  setAuthorizationToken(AsyncStorage.getItem('token'));
  store.dispatch({
    type: 'LOGIN_USER',
    payload: AsyncStorage.getItem('token'),
  });
}

export default function App() {
  console.log(isAuthenticated);

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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
