import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import CustomImage from "./CustomImage";
import { colors } from "../themes/colors";
import { List } from "../types/List";

type Props = {
  item: List;
};

const CustomCard = ({ item }: Props) => {
  return (
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
      <CustomImage
        source={item.image}
        style={[
          styles.listImage,
          parseInt(item.id) % 2 === 0 ? { left: 0 } : { right: 0 },
        ]}
        mode={"contain"}
      />
    </TouchableOpacity>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 160,
    marginVertical: 20,
    position: "relative",
  },
  innerCard: {
    maxWidth: "80%",
    height: "100%",
    shadowColor: colors.black,
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
    fontSize: 24,
    fontWeight: "500",
    color: colors.black,
    marginBottom: 5,
  },
  cardsubHeading: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.gray,
    marginBottom: 5,
    maxWidth: 220,
  },
  arrow: {
    marginLeft: 8,
  },
});
