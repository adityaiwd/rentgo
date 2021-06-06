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
import CheckBox from '@react-native-community/checkbox';
import theme from '../styles/theme.style';
import BackgroundShape from '../assets/images/shapes.png';
import FormInput from '../components/ui/FormInput';
import AuthButton from '../components/ui/AuthButton';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundShape} style={styles.flexOne}>
        <KeyboardAvoidingView style={styles.flexOne} behavior="position">
          <Text style={styles.textLogo}>RentGO</Text>
          <View style={styles.form}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>Let's start the journey</Text>
            <FormInput
              label="Name"
              value={name}
              onChangeText={text => setName(text)}
            />
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
            <View style={styles.checkTerms}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={styles.agreeText}>I agree with the </Text>
              <TouchableOpacity>
                <Text style={styles.TermsText}>terms & conditions</Text>
              </TouchableOpacity>
            </View>
            <AuthButton disabled={!email || !password || !name}>
              Sign Up
            </AuthButton>
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
  checkTerms: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  agreeText: {
    color: theme.BACKGROUND_COLOR_LIGHT,
    fontFamily: theme.FONT_WEIGHT_MEDIUM,
  },
  TermsText: {
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
    marginTop: 130,
    marginBottom: 75,
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

export default RegisterScreen;
