import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  addItemToCart,
  deleteMyCartItem,
  removeItemToCart,
} from "../redux/slice/CartSlice";
import { decreaseQty, increaseQty } from "../redux/slice/ProductSlice";

const Cart = ({ navigation }) => {
  const MyCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function setText(txt) {
    if (txt?.length > 20) {
      return txt.substring(0, 20) + "...";
    } else {
      return txt;
    }
  }

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: "90%",
          height: 120,
          borderRadius: 10,
          alignSelf: "center",
          backgroundColor: "#ffffff",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{ width: 75, height: 90, borderRadius: 10 }}
          //   resizeMode="contain"
        />
        <View
          style={{
            width: "70%",
            height: 100,
            paddingHorizontal: 10,
            justifyContent: "space-evenly",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            {setText(item?.name)}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500", color: "grey" }}>
            {setText(item?.brand)}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "green" }}>
            ₹{item?.price}
          </Text>
          <View style={styles.addcartBtn}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.counterBtn}
              onPress={() => {
                if (item.qty > 1) {
                  dispatch(removeItemToCart(item));
                  dispatch(decreaseQty(item.id));
                } else {
                  dispatch(deleteMyCartItem(item));
                  dispatch(decreaseQty(item.id));
                }
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 20, color: "white" }}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: "600", fontSize: 20 }}>{item?.qty}</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.counterBtn}
              onPress={() => {
                dispatch(addItemToCart(item));
                dispatch(increaseQty(item.id));
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 20, color: "white" }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={MyCart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
      />
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#f2f2f2",
  },
  addcartBtn: {
    flexDirection: "row",
    width: "48%",
    height: 30,
    borderRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  counterBtn: {
    height: 25,
    width: 30,
    backgroundColor: "green",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
