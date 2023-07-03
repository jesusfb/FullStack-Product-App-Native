import React, { useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Dimensions, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Register } from '../../interfaces';
import { useForm } from '../../hooks/useForm';

import { AuthContext } from '../../context/auth';

import { styles } from '../../theme/LoginTheme';

import { RootStackParams } from '../../navigation/Navigation';
interface Props extends StackScreenProps<RootStackParams> { }

const { height: windowHeight } = Dimensions.get('window');

export const RegisterScreen = ({ navigation }: Props) => {

  const { authRegister } = useContext(AuthContext);
  const { form, onChange } = useForm<Register>({
    username: '',
    email: '',
    name: '',
    lastname: '',
    password: '',
  });

  const onRegister = () => {
    Keyboard.dismiss();
    authRegister(form);
  }

  return (
    <>
      <KeyboardAvoidingView behavior={(Platform.OS === 'ios') ? 'padding' : 'height'} >
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={{ ...styles.globalAuth, height: windowHeight }}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Register Account</Text>
              </View>

              <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>User Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    autoCorrect={false}
                    keyboardType="default"
                    selectionColor='#1F1F1F'
                    onChangeText={(value) => onChange(value, 'username')}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>E-mail Adress</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your e-mail adress"
                    autoCorrect={false}
                    keyboardType="email-address"
                    selectionColor='#1F1F1F'
                    onChangeText={(value) => onChange(value, 'email')}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    autoCorrect={false}
                    autoCapitalize="words"
                    selectionColor='#1F1F1F'
                    onChangeText={(value) => onChange(value, 'name')}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Last Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    autoCorrect={false}
                    autoCapitalize="words"
                    selectionColor='#1F1F1F'
                    onChangeText={(value) => onChange(value, 'lastname')}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Password</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    autoCorrect={false}
                    selectionColor='#1F1F1F'
                    secureTextEntry={true}
                    onChangeText={(value) => onChange(value, 'password')}
                  />
                </View>
              </View>

              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.buttonAuth}
                  onPress={onRegister}
                  activeOpacity={0.5}
                >
                  <Text style={styles.buttonAuthText}>
                    SIGN UP
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.divider}></View>

              <View style={styles.linkContainer}>
                <Text>Already have an account?</Text>
                <TouchableOpacity
                  style={styles.buttonLink}
                  activeOpacity={0.5}
                  onPress={() => navigation.replace('LoginScreen')}
                >
                  <Text style={styles.buttonLinkText}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}