import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type RootTabParamList = {
  Home: undefined;
  Budget: undefined;
  Transactions: undefined;
  AskAI: undefined;
};

type NavigationProp = BottomTabNavigationProp<RootTabParamList>;

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.headerRow}>
      <Ionicons
        name="arrow-back-outline"
        size={24}
        color={COLORS.primary.main}
      />
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("AskAI")}>
        <Ionicons
          name="sparkles-outline"
          size={24}
          color={COLORS.primary.main}
        />
      </TouchableOpacity>
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
