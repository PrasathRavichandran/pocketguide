import React from "react";
import { Image } from "react-native";

const CustomImage = ({ source, style, mode }: any) => {
  return <Image source={source} style={style} resizeMode={mode} />;
};

export default CustomImage;
