import React from "react";
import { FlatList, Image, StyleSheet } from "react-native";

const ImageList = ({ images }) => {
  const _renderItem = ({ item }) => (
    <Image style={styles.image} source={{ uri: item.image }} />
  );

  return <FlatList data={images} renderItem={_renderItem} />;
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
});

export default ImageList;
