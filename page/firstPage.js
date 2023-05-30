import { Button, Image, StyleSheet, Text, View } from "react-native";
import Navbar from "../components/Navbar";

export default function FirstPage({ navigation }) {
    const goToProduct = () => {
      navigation.navigate("Product");
    };
  return (
    <>
      <View>
        <Navbar navigation={navigation} />
      </View>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../Image/shopping.png")}
            resizeMode="contain"
            style={styles.Img}
          />
        </View>
        <View>
          <Text style={styles.text}>ยินดีตอนรับเข้าสู่ร้านค้าแห่งนี้</Text>

          <View style={styles.buttonContainer}>
            <Button title="ดูสินค้าทั้งหมด" onPress={goToProduct} />
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f2f2f2",
  },
  Img: {
    width: 400,
    height: 400,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "gray",
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
    
  },
});
