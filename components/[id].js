import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import StarRating from "react-native-star-rating-widget";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const route = useRoute();
  const { productId } = route.params;

  useEffect(() => {
    // ดึงข้อมูลสินค้าจาก API โดยใช้ productId
    fetchProduct(productId);
  }, [productId]);

  const fetchProduct = async (productId) => {
    try {
      // เรียกใช้ API ในการดึงข้อมูลสินค้าจาก server โดยใช้ productId
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };

  if (!product) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: product.thumbnail }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.CRed}>$</Text>
        <Text style={styles.CRedPrice}>{product.price.toFixed(2)}</Text>
        <View style={styles.containerRadius}>
          <Text style={styles.CRedDiscountPercentage}>
            $
            {product.price -
              (product.price * (product.discountPercentage / 100)).toFixed(2)}
          </Text>
          <Image
            source={require("../Image/coupon.png")}
            style={{ height: 22, width: 30 }}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.boldText}>{product.description}</Text>
        </View>
        <View style={{ marginTop: 8, flexDirection: "row" }}>
          <StarRating rating={product.rating} starSize={15} />
          <View style={{ margin: 0, flexDirection: "row" }}>
            <Text style={{ color: "#757575", fontSize: 12 }}>
              {product.rating} |
            </Text>
            <Text style={{ color: "#757575", fontSize: 12 }}>
              {" "}
              {product.stock} ขายแล้ว
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
  },
  image: {
    height: 350,
  },
  flexRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 15,
    marginLeft: 20,
  },
  CRed: {
    color: "#ee4d2d",
    margin: 3,
    fontSize: 20,
  },
  CRedPrice: {
    color: "#ee4d2d",
    margin: 0,
    fontSize: 23,
  },
  CRedDiscountPercentage: {
    color: "#fff",
    fontSize: 18,
  },
  containerRadius: {
    backgroundColor: "#ee4d2d",
    borderRadius: 20,
    marginLeft: 8,
    padding: 4,
    flexDirection: "row",
  },
  boldText: {
    fontWeight: "bold",
  },
});
