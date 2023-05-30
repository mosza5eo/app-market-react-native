import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  RefreshControl,
} from "react-native";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

//////////
export default function Product({ navigation }) {
  const [products, setProducts] = useState([]); //เก็บproductทั้งหมดที่เรียกจากapi
  const [searchTerm, setSearchTerm] = useState(""); //เก็บsearchTermที่ผู้ใช้ใส่ในช่องค้นหา
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("lowPrice");
  const [refreshing, setRefreshing] = React.useState(false);
  

  useEffect(() => {
    fetchProducts();
    handleSearch();
    sortedProducts;
    console.log(filteredProducts);
  }, [searchTerm, sortOrder, sortedProducts]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=30");
      const data = await response.json();
      const productList = data.products;
      // console.log(productList);
      setProducts(productList);
      handleSearch();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const sortedProducts = products.slice().sort((a, b) => {
    if (sortOrder === "lowPrice") {
      //ถ้าน้อย
      return a.price - b.price;
    } else {
      return b.price - a.price; // ดำเนินการเรียงลำดับราคาของสินค้า
    }
  });

  const handleSearch = () => {
    const filteredProducts = sortedProducts.filter((product) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase(); //
      const lowerCaseTitle = product.title.toLowerCase();
      const lowerCaseCategory = product.category.toLowerCase();
      return (
        lowerCaseTitle.includes(lowerCaseSearchTerm) ||
        lowerCaseCategory.includes(lowerCaseSearchTerm)
      );
    });
    setFilteredProducts(filteredProducts);
  };

  const handleSearchChange = (text) => {
    setSearchTerm(text);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Navbar navigation={navigation} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="ป้อนข้อมูล"
            value={searchTerm}
            onChangeText={handleSearchChange}
          />
          <TouchableOpacity style={{ margin: 2 }}>
            <Image
              source={require("../Image/search.png")}
              resizeMode="contain"
              style={styles.imageSearch}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.containerProducts}>
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} products={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerProducts: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
    justifyContent: "space-around",
  },

  imageSearch: {
    width: 20,
    height: 20,
  },
  input: {
    width: 310,
    height: 40,
    borderWidth: 1,
    borderColor: "#FF6600",
    borderRadius: 5,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eff0f5",
    borderRadius: 5,
    margin: 5,
  },
});
