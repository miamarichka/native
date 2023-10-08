import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Pressable,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { 
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile
} from 'firebase/auth';
import { auth } from './config';


const authStateChanged = async (onChange = () => {}) => {
		onAuthStateChanged((user) => {
				onChange(user);
		});
};


export const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");

  const navigation = useNavigation();

  const handleChange = (text, setStateData) => {
    setStateData(text)
  }

  const registerDB = async ({ email, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  };

  const SubmitHandler = () => {
    if (name.trim() && email.trim() && psw.trim()) {
      console.log({
        name,
        email,
        psw,
      });
      setEmail("");
      setName("");
      setPsw("");
    }
  };

  const addImgHandler = ()=>{

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.imgUploader}>
        <Pressable onPress={addImgHandler} style={styles.icon}>
          <Icon
            name="add-circle-outline"
            backgroundColor='transparent'
            color='#FF6C00'
            size={25}
          />
          </Pressable>
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <TextInput
          placeholder="Логін"
          autoCompleteType="name"
          style={styles.input}
          value={name}
          onChangeText={(t) => handleChange(t, setName)}
        />
        <TextInput
          placeholder="Адреса електронної пошти"
          keyboardType="email-address"
          autoCompleteType="email"
          style={styles.input}
          value={email}
          onChangeText={(t) => handleChange(t, setEmail)}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            placeholder="Пароль"
            secureTextEntry
            autoCompleteType="new password"
            style={styles.input}
            value={psw}
            onChangeText={(t) => handleChange(t, setPsw)}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={SubmitHandler}
        >
          <Text style={styles.textButton}>Зареєструватися</Text>
        </TouchableOpacity>
        <Text
          style={styles.innerText}
          onPress={() => navigation.navigate('Login')}
        >Вже є акаунт? Увійти
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 550,
    width: "100%",
    direction: "row",
    justifyContent: "center",
  },
  imgUploader:{
    position:"absolute",
    top: 0,
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    width: 120,
    height: 120,
    backgroundColor:"#F6F6F6",
    borderRadius: 16,
  },
  icon: {
    position:'absolute',
    right:0,
    bottom:0,
    transform: [{ translateX: 13 },{ translateY: -10 }],
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  button: {
    height: 51,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginTop: 27,
    marginBottom: 16,
  },
  textButton: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 16,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 5,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
  },
  innerText: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
  },
});
