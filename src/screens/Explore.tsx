import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Layout from "../components/Layout";
import { colors } from "../themes/colors";
import { Header } from "../types/Header";
import { ExploreListData } from "../utils/Data";

const Explore = () => {
  const [header] = useState<Header[]>([
    { id: "1", title: "Restaurants" },
    { id: "2", title: "Landscapes" },
    { id: "3", title: "Accomodate" },
  ]);

  const [activeHeader, setActiveHeader] = useState<Header>();

  useEffect(() => {
    settingActiveHeader("2");
  }, []);

  const settingActiveHeader = (id: string) => {
    const initActiveHeader = header?.find((item) => item?.id === id);
    setActiveHeader(initActiveHeader);
  };

  const toggleActiveHeader = (item: Header) => {
    settingActiveHeader(item?.id);
  };

  return (
    <Layout>
      <View style={[styles.container, styles.padding]}>
        <TouchableOpacity style={styles.backArrow}>
          <Ionicons name="chevron-back" size={32} color="black" />
        </TouchableOpacity>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            Explore{"\n"}the best{"\n"}of Kotagiri
          </Text>
        </View>
        <Image
          source={require("../../assets/app/explore.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
      </View>
      <View style={{ flexDirection: "row", left: -18 }}>
        <View style={{ marginTop: 24 }}>
          {header?.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => toggleActiveHeader(item)}
                activeOpacity={1}
              >
                <Text
                  style={[
                    styles.linkText,
                    {
                      color:
                        activeHeader?.id === item?.id
                          ? colors.red
                          : colors.gray,
                    },
                  ]}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ marginTop: 64, left: -14 }}>
          <FlatList
            data={ExploreListData}
            keyExtractor={(_) => _.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 50 }}
            renderItem={({ item }) => (
              <View style={styles.imageWrapper}>
                <Image
                  source={item.image}
                  style={{ width: "100%", height: "100%", borderRadius: 20 }}
                  resizeMode="cover"
                />
                <View style={styles.overlay} />
                <View style={styles.overlayTextContainer}>
                  <Text style={styles.overlayText}>{item.description}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
    backgroundColor: colors.orange,
    justifyContent: "center",
  },
  padding: {
    paddingHorizontal: 20,
  },
  backArrow: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  headingContainer: {
    marginLeft: 10,
  },
  heading: {
    fontSize: 34,
    color: colors.black,
    fontWeight: "600",
  },
  image: {
    width: 280,
    height: 280,
    position: "absolute",
    right: 0,
    bottom: -40,
  },
  linkText: {
    transform: [{ rotate: "-90deg" }],
    marginTop: 90,
    marginBottom: 36,
    fontSize: 16,
    fontWeight: "500",
  },
  imageWrapper: {
    width: 240,
    height: 420,
    marginRight: 20,
    borderRadius: 20,
  },
  overlay: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  overlayTextContainer: {
    position: "absolute",
    left: 20,
    bottom: 30,
    width: 150,
  },
  overlayText: {
    color: colors.white,
    lineHeight: 22,
    fontSize: 16,
    fontWeight: "600",
  },
});
