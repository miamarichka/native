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
} from "react-native";
import useCustomFonts from "../hooks/useFonts";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");

  const navigation = useNavigation();

  const fonts = useCustomFonts();
  if (!fonts) null;

const handleChange = (text, setStateData)=>{
  setStateData(text)
}

  const SubmitHandler = () => {
    if (email.trim() && psw.trim()) {
      console.log({
        email,
        psw,
      });
      setEmail("");
      setPsw("");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Увійти</Text>
        <TextInput
          placeholder="Адреса електронної пошти"
          keyboardType="email-address"
          autoCompleteType="email"
          style={styles.input}
          value={email}
          onChangeText={(t)=>handleChange(t, setEmail)}
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
            onChangeText={(t)=>handleChange(t, setPsw)}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={SubmitHandler}
        >
          <Text style={styles.textButton}>Увійти</Text>
        </TouchableOpacity>
        <Text 
        style={styles.innerText}
        onPress={()=> navigation.navigate('Registration')}
        >Немає акаунту? Зареєструватися</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 490,
    width: "100%",
    direction: "row",
    justifyContent: "flex-start",
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
    marginTop:32,
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
