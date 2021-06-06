import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import theme from '../styles/theme.style';
import BackgroundShape from '../assets/images/shapes.png';
import FormInput from '../components/ui/FormInput';
import AuthButton from '../components/ui/AuthButton';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.flexOne}>
        <KeyboardAvoidingView style={styles.flexOne} behavior="position">
          <Text style={styles.textLogo}>RentGO</Text>
          <View style={styles.form}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Let's start the journey</Text>
            <FormInput
              label="email"
              value={email}
              keyboardType="email-address"
              onChangeText={text => setEmail(text)}
            />
            <FormInput
              password
              value={password}
              label="password"
              onChangeText={text => setPassword(text)}
            />
            <AuthButton disabled={!email || !password}>Login</AuthButton>
            <View style={styles.toSignUp}>
              <Text style={styles.noAccountText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.PRIMARY_COLOR,
    flex: 1,
  },
  toSignUp: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  noAccountText: {
    color: theme.BACKGROUND_COLOR_LIGHT,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
  },
  signUpText: {
    color: '#FE7F2D',
    fontFamily: theme.FONT_WEIGHT_BOLD,
  },
  flexOne: {
    flex: 1,
  },
  logo: {
    marginHorizontal: 'auto',
  },
  textLogo: {
    fontSize: 40,
    fontFamily: 'Sen-ExtraBold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 170,
    marginBottom: 100,
  },
  form: {
    marginHorizontal: 30,
  },
  title: {
    color: theme.BACKGROUND_COLOR_LIGHT,
    fontFamily: theme.FONT_WEIGHT_BOLD,
    fontSize: 28,
  },
  subtitle: {
    color: theme.BACKGROUND_COLOR_LIGHT,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginBottom: 20,
  },
});

export default LoginScreen;
