import { View, Text, TextProps } from "react-native";
import React, { FC } from "react";

interface ParagraphProps extends TextProps {
  color?: string;
}

const Paragraph: FC<ParagraphProps> = ({
  children,
  style,
  color = "#B1B1B1",
  ...other
}) => {
  return (
    <Text
      style={[
        {
          fontSize: 14,
          color: color,
        },
        style,
      ]}
      {...other}>
      {children}
    </Text>
  );
};

export default Paragraph;
