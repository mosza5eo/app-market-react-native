import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

 export default function Navbar({ navigation }) {
   const goToAbout = () => {
     navigation.navigate("เกี่ยวกับเรา"); // เชื่อมโยงไปยังหน้า "เกี่ยวกับเรา" (About)
   };
   const goToFirstPage = () =>{
    navigation.navigate("หน้าแรก")
   }
   const goToProduct = () =>{
    navigation.navigate("สินค้าทั้งหมด")
   }
   return (
     <View style={styles.container}>
       <View style={styles.logo}>
         <TouchableOpacity onPress={goToFirstPage}>
           <Image
             source={require("../Image/logo.png")}
             style={styles.logoImage}
             resizeMode="contain"
           />
         </TouchableOpacity>
       </View>
       <TouchableOpacity onPress={goToFirstPage}>
         <Text style={styles.link}>หน้าแรก</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={goToAbout}>
         <Text style={styles.link}>เกี่ยวกับเรา</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={goToProduct}>
         <Text style={styles.link}>สินค้าทั้งหมด</Text>
       </TouchableOpacity>
     </View>
   );
 };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // จัดวางองค์ประกอบในแนวนอน
    alignItems: "center", // จัดให้องค์ประกอบอยู่กลางแนวตั้ง
    justifyContent: "space-between", // กระจายองค์ประกอบให้มีช่องว่างเท่ากันระหว่างแต่ละองค์ประกอบ
    paddingHorizontal: 16, // เพิ่มระยะห่างแนวนอนด้านซ้ายและขวาของคอนเทนเนอร์
    height: 40, // กำหนดความสูงของ Navbar
    width:"auto",
    backgroundColor: "#f7f7f7", // กำหนดสีพื้นหลังของ Navbar
  },
  logo: {
    marginRight: 16, // เพิ่มระยะห่างด้านขวาของโลโก้
  },
  logoImage: {
    width: 40, // กำหนดความกว้างของรูปภาพโลโก้
    height: 30, // กำหนดความสูงของรูปภาพโลโก้
  },
  link: {
    marginHorizontal: 10, // เพิ่มระยะห่างแนวนอนด้านซ้ายและขวาของข้อความลิงก์
    fontSize: 16, // กำหนดขนาดตัวอักษรของข้อความลิงก์
    fontWeight: "bold", // กำหนดความหนาของตัวอักษรของข้อความลิงก์
    color: "#000", // กำหนดสีข้อความลิงก์
  },
});

