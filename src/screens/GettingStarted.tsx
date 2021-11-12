import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomImage from "../components/CustomImage";
import Layout from "../components/Layout";
import { colors } from "../themes/colors";

const GettingStartedScreen = () => {
  return (
    <Layout customStyle={styles.container}>
      <Text style={styles.logoHeading}>
        Pocket<Text style={{ color: colors.red }}>Guide</Text>
      </Text>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          Find all about your next trip with Pocket Guide!
        </Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <CustomImage
          source={require("../../assets/app/intro.png")}
          style={styles.image}
          mode={"cover"}
        />
      </View>
    </Layout>
  );
};

export default GettingStartedScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
  },
  logoHeading: {
    color: colors.purple,
    fontSize: 15,
    fontWeight: Platform.OS === "ios" ? "500" : "bold",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headingContainer: {
    marginTop: 40,
  },
  heading: {
    fontSize: 48,
    color: colors.red,
    fontWeight: "bold",
    lineHeight: 48,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    backgroundColor: colors.purple,
    width: "50%",
    maxWidth: "45%",
    paddingVertical: 16,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 3 / 3,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    right: -40,
  },
});
