import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
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
      <View style={styles.body}>
        <CustomHeader
          data={header}
          active={activeHeader as Header}
          toggleActiveHeader={toggleActiveHeader}
        />
        {/* List of card */}
        <FlatList
          data={ListData}
          contentContainerStyle={{ paddingBottom: 50 }}
          keyExtractor={(_) => _.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CustomCard item={item} />}
        />
      </View>
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
