import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CustomImage from "../components/CustomImage";
import Layout from "../components/Layout";

import { colors } from "../themes/colors";

const Home = () => {
  return (
    <Layout>
      <View style={[styles.header, styles.padding]}>
        <View style={{ flex: 2 }}>
          <Text style={styles.heading}>Hey Avneet</Text>
          <Text style={styles.subheading}>
            Start Planning {"\n"}your trip today!
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <CustomImage
            source={require("../../assets/app/notebook.png")}
            style={styles.image}
            mode={"cover"}
          />
        </View>
      </View>
      <View style={[styles.body, styles.padding]}></View>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    flex: 1,
    backgroundColor: colors.orange,
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 12,
    color: colors.gray,
  },
  subheading: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.black,
  },
  image: {
    width: "90%",
    height: "90%",
  },
  body: {
    flex: 3.5,
    backgroundColor: colors.white,
  },
});
