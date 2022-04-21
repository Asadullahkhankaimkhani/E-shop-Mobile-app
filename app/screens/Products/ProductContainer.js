import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import data from "../../assets/data/products.json";
import ProductList from "./ProductList";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <View>
      <Text>Product Container</Text>
      <View style={{ margin: 100 }}>
        <FlatList
          horizontal
          data={products}
          renderItem={(item) => <ProductList key={item.id} item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default ProductContainer;
