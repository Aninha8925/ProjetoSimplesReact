import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

export default function Consultas() { 
  return (
    <ImageBackground source={require("./../../assets/Consulta.png")} style={styles.image}></ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
