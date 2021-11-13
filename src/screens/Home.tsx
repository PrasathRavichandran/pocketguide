import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import CustomHeader from "../components/CustomHeader";
import CustomImage from "../components/CustomImage";
import Layout from "../components/Layout";

import { colors } from "../themes/colors";
import { ListData } from "../utils/Data";

const Home = () => {
  const [header] = useState([
    { id: "1", title: "Popular" },
    { id: "2", title: "Nearby" },
    { id: "3", title: "Blog" },
  ]);

  const [activeHeader, setActiveHeader] = useState<any>(null);

  useEffect(() => {
    settingActiveHeader("1");
  }, []);

  const settingActiveHeader = (id: any) => {
    const initActiveHeader = header?.find((item) => item?.id === id);
    setActiveHeader(initActiveHeader);
  };

  const toggleActiveHeader = (item: any) => {
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
          active={activeHeader}
          toggleActiveHeader={toggleActiveHeader}
        />
        {/* List of card */}
        <FlatList
          data={ListData}
          keyExtractor={(_) => _.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5} style={styles.card}>
              <View
                style={[
                  styles.innerCard,
                  parseInt(item.id) % 2 === 0 ? styles.right : styles.left,
                ]}
              >
                <View>
                  <Text style={styles.cardHeading}>{item.heading}</Text>
                  <Text style={styles.cardsubHeading}>{item.description}</Text>
                  <FontAwesome
                    name="long-arrow-right"
                    size={24}
                    color={colors.purple}
                    style={styles.arrow}
                  />
                </View>
              </View>
              <Image
                source={item.image}
                style={[
                  styles.listImage,
                  parseInt(item.id) % 2 === 0 ? { left: 0 } : { right: 0 },
                ]}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
          )}
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
  card: {
    width: "100%",
    height: 160,
    marginVertical: 20,
    position: "relative",
  },
  innerCard: {
    maxWidth: "80%",
    height: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    justifyContent: "center",
  },

  left: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    paddingLeft: 20,
    backgroundColor: colors.lightpurple,
  },

  right: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    paddingRight: 20,
    alignItems: "flex-end",
    marginLeft: "20%",
    backgroundColor: colors.lightorange,
  },

  listImage: {
    position: "absolute",
    width: 180,
    height: 180,
    bottom: 0,
  },

  cardHeading: {
    fontSize: 28,
    fontWeight: "500",
    color: colors.black,
    marginBottom: 10,
  },
  cardsubHeading: {
    fontSize: 15,
    fontWeight: "400",
    color: colors.gray,
    marginBottom: 5,
    maxWidth: 220,
  },
  arrow: {
    marginLeft: 8,
  },
});
