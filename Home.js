import React from "react";
import { Text, StyleSheet, ImageBackground } from "react-native"; 

export default function Home() { 
  return (
  <ImageBackground source={require("./../../assets/home.png")} style={styles.image}></ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  }
);
