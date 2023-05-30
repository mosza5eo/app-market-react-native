import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ products }) {
  const navigation = useNavigation();

  const handleProductPress = () => {
    navigation.navigate("รายละเอียดสินค้า", { productId: products.id });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleProductPress} style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: products.thumbnail }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>
          {products.description}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price} key={products.category}>
            $
          </Text>
          <Text style={styles.price}>{products.price}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.priceContainer}>
        <Text style={{margin:2}}>⭐</Text>
        <Text style={styles.rating}>{products.rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 248,
    margin: 5,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderRadius: 4,
  },
  card: {
    background: "#eff0f5",
  },
  imageContainer: {
    alignItems: "center",
    
  },
  image: {
    width: 180,
    height: 150,
  },
  description: {
    margin: 3,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    color: "#990F02",
    margin: 3,
    fontSize: 16,
  },
  rating: {
    color: "#FF9933",
  },
});
