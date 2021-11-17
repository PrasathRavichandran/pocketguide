import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import CustomImage from "../components/CustomImage";
import Layout from "../components/Layout";
import { colors } from "../themes/colors";

type Props = NativeStackScreenProps<RootStackParamsList, "gettingStarted">;

const GettingStartedScreen = ({ navigation }: Props) => {
  const text1 = useRef(new Animated.Value(0)).current;
  const text2 = useRef(new Animated.Value(0)).current;
  const btn = useRef(new Animated.Value(0)).current;

  const banner = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    pageEnterAnimation();
  }, []);

  const pageEnterAnimation = () => {
    text1.setValue(-300);
    text2.setValue(-500);
    btn.setValue(-500);
    banner.setValue(400);

    let options = {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    };

    Animated.sequence([
      Animated.timing(text1, options),
      Animated.timing(text2, options),
      Animated.timing(btn, options),
      Animated.spring(banner, {
        toValue: 1,
        speed: 20,
        bounciness: 12,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Layout customStyle={styles.container}>
      <Animated.Text
        style={[styles.logoHeading, { transform: [{ translateX: text1 }] }]}
      >
        Pocket<Text style={{ color: colors.red }}>Guide</Text>
      </Animated.Text>
      <View style={styles.headingContainer}>
        <Animated.Text
          style={[styles.heading, { transform: [{ translateX: text2 }] }]}
        >
          Find all about your next trip with Pocket Guide!
        </Animated.Text>

        <Pressable onPress={() => navigation.navigate("tab")}>
          <Animated.View
            style={[
              styles.buttonContainer,
              { transform: [{ translateX: btn }] },
            ]}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </Animated.View>
        </Pressable>
      </View>
      <Animated.View
        style={[styles.imageContainer, { transform: [{ translateY: banner }] }]}
      >
        <CustomImage
          source={require("../../assets/app/intro.png")}
          style={styles.image}
          mode={"cover"}
        />
      </Animated.View>
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
  },
  headingContainer: {
    marginTop: 36,
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
    marginTop: 20,
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
