import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Form from "../component/Form";

const View1 = () => {
  return (
    <View style={styles.container}>
      <Form
        img={require("../assets/Icon_wallet.png")}
        label="Ví của tôi"
      ></Form>
      <Form img={require("../assets/Icon_link.png")} label="Liên Kết"></Form>
      <View>
        <Form img={require("../assets/Icon_loan.png")} label="Sổ nợ"></Form>
        <Form img={require("../assets/Icon_tools.png")} label="Công cụ"></Form>
        <Form
          img={require("../assets/Icon_travel.jpg")}
          label="Chế độ du lịch"
        ></Form>
      </View>
      <Form img={require("../assets/Icon_shop.png")} label="Cửa hàng"></Form>
      <View>
        <Form
          img={require("../assets/Icon_discover.png")}
          label="Khám phá MoneyLover"
        ></Form>
        <Form img={require("../assets/Icon_support.png")} label="Hỗ trợ"></Form>
        <Form
          img={require("../assets/Icon_setting.png")}
          label="Cài đặt"
        ></Form>
        <Form
          img={require("../assets/Icon_introduce.jpg")}
          label="Giới thiệu"
        ></Form>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    margin: 0,
    marginVertical:115,
    backgroundColor:'#EEEEEE'
  },
});

export default View1;
