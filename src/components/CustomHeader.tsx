import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colors } from "../themes/colors";
import { Header } from "../types/Header";

type Props = {
  data: Header[];
  toggleActiveHeader: (item: Header) => void;
  active: Header;
};

const CustomHeader = ({ data, toggleActiveHeader, active }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 46,
        paddingVertical: 14,
      }}
    >
      {data?.map((item: any) => (
        <TouchableOpacity
          key={item?.id}
          style={{ paddingTop: 10 }}
          onPress={() => toggleActiveHeader(item)}
        >
          <Text
            style={[
              styles.headerTitle,
              active?.id === item?.id
                ? { color: colors.black }
                : {
                    color: colors.gray,
                    marginBottom: 13,
                  },
            ]}
          >
            {item?.title}
          </Text>
          {active?.id === item?.id && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  activeIndicator: {
    width: 26,
    height: 5,
    backgroundColor: colors.red,
    borderRadius: 10,
    marginTop: 8,
    alignSelf: "center",
  },
});
