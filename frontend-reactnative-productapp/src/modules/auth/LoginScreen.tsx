import React, { useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Dimensions, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Login } from '../../interfaces';
import { useForm } from '../../hooks/useForm';

import { AuthContext } from '../../context/auth';

import { styles } from '../../theme/LoginTheme';

import { RootStackParams } from '../../navigation/Navigation';
interface Props extends StackScreenProps<RootStackParams> { }

const { height: windowHeight } = Dimensions.get('window');

export const LoginScreen = ({ navigation }: Props) => {

  const { authLogin } = useContext(AuthContext);
  const { form, username, password, onChange } = useForm<Login>({
    username: '',
    password: '',
  });

  const onLogin = () => {
    Keyboard.dismiss();
    authLogin(form)
  }

  return (
    <>
      <KeyboardAvoidingView behavior={(Platform.OS === 'ios') ? 'padding' : 'height'} >
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={{ ...styles.globalAuth, height: windowHeight }}>
              <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('./../../img/app-logo.png')} />
              </View>

              <View style={styles.titleContainer}>
                <Text style={styles.title}>Welcome back!</Text>
              </View>

              <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Username</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    autoCorrect={false}
                    keyboardType="default"
                    selectionColor='#1F1F1F'
                    onChangeText={(value) => onChange(value, 'username')}
                    value={username}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Password</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    autoCorrect={false}
                    secureTextEntry={true}
                    selectionColor='#1F1F1F'
                    onChangeText={(value) => onChange(value, 'password')}
                    value={password}
                  />
                </View>
              </View>

              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.buttonAuth}
                    onPress={onLogin}
                    activeOpacity={0.5}
                  >
                    <Text style={styles.buttonAuthText}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.buttonChange}
                    activeOpacity={0.5}
                    onPress={() => navigation.replace('RegisterScreen')}
                  >
                    <Text style={styles.buttonChangeText}>
                      Create Account
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}