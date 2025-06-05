import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral.background,
  },  
  content: {
    flex: 1,
    marginHorizontal: 20,
  },
});

export default PageWrapper;
