import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";

export default function About({ navigation }) {
  return (
    <>
      <View>
        <Navbar navigation={navigation} />
      </View>
      <View>
        <View>
          <Image
            source={require("../Image/about.png")}
            resizeMode="contain"
            style={styles.Img}
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  Img: {
    width: 400,
    height: 400,
  },
});
