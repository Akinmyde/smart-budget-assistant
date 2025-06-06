import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.headerRow}>
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color={COLORS.primary.main}
        />
        <Text style={styles.headerTitle}>{title}</Text>
        <Ionicons name="sparkles-outline" size={24} color={COLORS.primary.main} />
      </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary.main,
  },
});

export default Header;