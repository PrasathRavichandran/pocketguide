import React, { useEffect, useRef, useState } from "react";
import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import CustomCard from "../components/CustomCard";

import CustomHeader from "../components/CustomHeader";
import CustomImage from "../components/CustomImage";
import Layout from "../components/Layout";

import { colors } from "../themes/colors";
import { Header } from "../types/Header";
import { ListData } from "../utils/Data";

const Home = () => {
  const [header] = useState<Header[]>([
    { id: "1", title: "Popular" },
    { id: "2", title: "Nearby" },
    { id: "3", title: "Blog" },
  ]);

  const [activeHeader, setActiveHeader] = useState<Header>();

  useEffect(() => {
    settingActiveHeader("1");
    pageEnterAnimation();
  }, []);

  const settingActiveHeader = (id: string) => {
    const initActiveHeader = header?.find((item) => item?.id === id);
    setActiveHeader(initActiveHeader);
  };

  const toggleActiveHeader = (item: Header) => {
    settingActiveHeader(item?.id);
  };

  const text1 = useRef(new Animated.Value(0)).current;
  const text2 = useRef(new Animated.Value(0)).current;
  const bookImag = useRef(new Animated.Value(0)).current;
  const headerListAnimation = useRef(new Animated.Value(0)).current;

  const pageEnterAnimation = () => {
    text1.setValue(-300);
    text2.setValue(-300);
    bookImag.setValue(-400);
    headerListAnimation.setValue(0);

    let options = {
      toValue: 1,
      delay: 100,
      useNativeDriver: true,
    };

    let springOptions = {
      toValue: 1,
      speed: 24,
      bounciness: 10,
      useNativeDriver: true,
    };

    Animated.sequence([
      Animated.timing(text1, options),
      Animated.timing(text2, options),
      Animated.spring(bookImag, springOptions),
      Animated.timing(headerListAnimation, options),
    ]).start();
  };

  return (
    <Layout>
      <View style={[styles.header, styles.padding]}>
        <View style={{ flex: 2 }}>
          <Animated.Text
            style={[styles.heading, { transform: [{ translateX: text1 }] }]}
          >
            Hey Avneet
          </Animated.Text>
          <Animated.Text
            style={[styles.subheading, { transform: [{ translateX: text2 }] }]}
          >
            Start Planning {"\n"}your trip today!
          </Animated.Text>
        </View>
        <Animated.View
          style={{ flex: 1, transform: [{ translateY: bookImag }] }}
        >
          <CustomImage
            source={require("../../assets/app/notebook.png")}
            style={styles.image}
            mode={"cover"}
          />
        </Animated.View>
      </View>
      <Animated.View style={[styles.body, { opacity: headerListAnimation }]}>
        <CustomHeader
          data={header}
          active={activeHeader as Header}
          toggleActiveHeader={toggleActiveHeader}
        />
        {/* List of card */}
        <FlatList
          data={ListData}
          contentContainerStyle={{
            paddingBottom: 50,
          }}
          keyExtractor={(_) => _.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CustomCard item={item} />}
        />
      </Animated.View>
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
