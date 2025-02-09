import { View, Text, TextProps } from "react-native";
import React, { FC } from "react";

interface TitleProps extends TextProps {
  color?: string;
}
const Title: FC<TitleProps> = ({
  children,
  style,
  color = "#212529",
  ...others
}) => {
  return (
    <Text
      style={[
        {
          fontSize: 24,
        },
      ]}>
      {children}
    </Text>
  );
};

export default Title;
