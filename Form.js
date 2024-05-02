
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'; 

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigation = useNavigation(); 

  const handleLogin = () => {
    if (password.trim() === "") {
      setErrorMessage("Você não preencheu o campo de senha!");
      Vibration.vibrate(250);
      return;
    }
    if (email.trim() === "") {
      setErrorMessage("Você não preencheu o campo de email!");
      Vibration.vibrate(250);
      return;
    }
    
    setErrorMessage("");
    navigation.navigate('Home'); 
  };

  return (
    <ImageBackground source={require("../../assets/Login.png")} style={styles.image}>
    <View style={styles.container}>
    
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.text}>Senha</Text>
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} onPress={() => console.log("Sign Up")}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 130,
  },
  inputContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderRadius: 15,
    padding: 10,
    width: 220,
    backgroundColor: "#D9D9D9",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#57D89C",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    width: 120,
    margin:20,
  },
  button2: {
    backgroundColor: "#48B281",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    width: 120,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
});
