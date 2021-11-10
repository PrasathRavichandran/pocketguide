import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../themes/colors";

const GettingStartedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
        <Image
          source={require("../../assets/app/intro.png")}
          style={styles.image}
          resizeMode={"contain"}
        />
      </View>
    </SafeAreaView>
  );
};

export default GettingStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
    padding: 20,
  },
  logoHeading: {
    color: colors.purple,
    fontSize: 15,
    fontWeight: Platform.OS === "ios" ? "500" : "bold",
  },
  headingContainer: {
    marginTop: 34,
  },
  heading: {
    fontSize: 44,
    color: colors.red,
    fontWeight: Platform.OS === "ios" ? "500" : "bold",
    lineHeight: 44,
  },
  buttonContainer: {
    backgroundColor: colors.purple,
    width: "50%",
    maxWidth: "45%",
    paddingVertical: 12,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 14,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: Platform.OS === "ios" ? "500" : "bold",
    color: colors.white,
  },
  imageContainer: {
    position: "absolute",
    right: -18,
    bottom: 0,
  },
  image: {
    width: 350,
    height: 350,
  },
});
