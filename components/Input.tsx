import { View, Text, TextInputProps } from "react-native";
import React, { FC } from "react";
import { Octicons } from "@expo/vector-icons";

type InputProps = TextInputProps & {
  leftIcon?: keyof typeof Octicons.glyphMap;
  rightIcon?: keyof typeof Octicons.glyphMap;
};

const Input: FC<InputProps> = ({ leftIcon, rightIcon }) => {
  return (
    <View>
      {leftIcon && <Octicons name={leftIcon} size={16} />}
      {rightIcon && <Octicons name={rightIcon} size={16} />}
    </View>
  );
};

export default Input;
