// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { Button, Image, StyleSheet, Text, View } from "react-native";
// import Navbar from "./components/Navbar";

// export default function App() {
//   return (
//     <View className="flex-auto items-center justify-start mt-12 bg-slate-200 ">
//       <View>
//         <Navbar />
//       </View>
//       <View className="">
//         <Image
//           source={require("../my-app/Image/shopping.png")}
//           resizeMode="contain"
//           style={styles.Img}
//         />
//       </View>
//       <Text className="text-gray-950">ยินดีตอนรับเข้าสู่ร้านค้าแห่งนี้</Text>
//       <StatusBar style="auto" />
//       <View className="mt-5">
//         <Button className="" title="ดูสินค้าทั้งหมด" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   Img: {
//     width: 400,
//     height: 400,
//   },
//   btn: {},
// });
// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "./components/Navbar";
import About from "./page/about";
import FirstPage from "./page/firstPage";
import Product from "./page/product";
import Test1 from "./page/test";
import ProductDetail from "./components/[id]";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navbar">
        <Stack.Screen name="หน้าแรก" component={FirstPage} />
        <Stack.Screen name="เกี่ยวกับเรา" component={About} />
        <Stack.Screen name="สินค้าทั้งหมด" component={Product} />
        <Stack.Screen name="รายละเอียดสินค้า" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
