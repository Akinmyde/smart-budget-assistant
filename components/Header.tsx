import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SPACING } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../types/navigation";
import { commonStyles } from "../styles/commonStyles";
import { Heading } from "./StyledText";

type NavigationProp = BottomTabNavigationProp<RootTabParamList>;

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const isAskAI = route.name === "AskAI";
  return (
    <View style={[styles.headerRow, commonStyles.row, commonStyles.spaceBetween, commonStyles.alignCenter]}>
      <View />
      <Heading variant="heading">{title}</Heading>
      <TouchableOpacity onPress={() => navigation.navigate("AskAI")}>
        <Ionicons
          name="sparkles-outline"
          size={24}
          color={isAskAI ? COLORS.secondary.dark : COLORS.neutral.text.secondary}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    paddingVertical: SPACING.md,
  },
});

export default Header;
