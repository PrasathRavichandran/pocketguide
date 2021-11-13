import React from "react";
import { Image, ImageResizeMode, ImageSourcePropType } from "react-native";

type Props = {
  source: ImageSourcePropType;
  style: any;
  mode: ImageResizeMode;
};

const CustomImage = ({ source, style, mode }: Props) => {
  return <Image source={source} style={style} resizeMode={mode} />;
};

export default CustomImage;
