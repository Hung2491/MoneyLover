import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const View2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inContainer}>
        <Image
          source={require("../assets/Icon_vip.png")}
          style={styles.icon}
        ></Image>
        <Text style={styles.Text}>
          Mua phiên bản cao cấp
        </Text>
      </View>

      <View style={styles.inContainer}>
        <Text style={{ padding: 6, color: "green" }}>Thay đổi mật khẩu</Text>
      </View>

      <View style={styles.inContainer}>
        <Text style={{ color: "red" }}>Đăng xuất </Text>
      </View>

      <View style={styles.inContainer}>
        <Text style={{ color: "red" }}>Xóa tài khoản</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    margin: 0,
    marginVertical: "60%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#EEEEEE",
  },
  icon: {
    height: 30,
    width: 35,
    marginTop: 4,
  },
  Text: {
    color: "green",
    paddingTop: 6,
    alignItems: "center",

  },
  inContainer: {
    flexDirection: "row",
    borderWidth: 0.8,
    height: 35,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#DDDDDD",
  },
});

export default View2;
