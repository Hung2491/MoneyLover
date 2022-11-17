import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Form = ({ label, img }) => {
  return (
    <View style={{backgroundColor:'white'}}>
      <View style={styles.inContainer}>
        <Image source={img} style={styles.icon}></Image>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    height: 20,
    width: "100%",
    alignItems: "center",
    marginTop: 7,
    marginHorizontal: 15,
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 15,
    marginTop: 5,
    padding: 13,
  },
  inContainer: {
    height: 40,
    flexDirection: "row",
    borderWidth: 0.5,
    paddingHorizontal: 15,
    margin: 0,
    borderColor:'#DDDDDD'
  },
});

export default Form;
