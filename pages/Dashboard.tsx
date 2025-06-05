import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PageWrapper from "../components/PageWrapper";
import { colors } from "../constants/colors";

const Dashboard = () => {
  return (
    <PageWrapper>
    {/* Header */}  
    <View style={styles.headerRow}>
      <View></View>
      <Text style={styles.headerTitle}>Overview</Text>
      <Ionicons name="sparkles-outline" size={24} color={colors.primary.main} />
    </View>

    {/* Spending this month */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Spending this month</Text>
      <View style={styles.spentRow}>
        <Text style={styles.spentLabel}>Spent</Text>
        <Text style={styles.spentValue}>1200</Text>
      </View>
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: '60%' }]} />
      </View>
      <Text style={styles.budgetText}>of $2,000 budget</Text>
    </View>

    {/* Key indicators */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Key indicators</Text>
      <View style={styles.indicatorRow}>
        <View style={styles.indicatorCard}>
          <Text style={styles.indicatorLabel}>Net worth</Text>
          <Text style={styles.indicatorValue}>$15,000</Text>
          <Text style={styles.indicatorChange}>+5%</Text>
        </View>
        <View style={styles.indicatorCard}>
          <Text style={styles.indicatorLabel}>Savings</Text>
          <Text style={styles.indicatorValue}>$5,000</Text>
          <Text style={styles.indicatorChange}>+2%</Text>
        </View>
      </View>
    </View>
  </PageWrapper>
  );
};

const styles = StyleSheet.create({
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 10,
    },
    headerTitle: { fontSize: 22, fontWeight: 'bold', color: colors.primary.main },
    section: { marginBottom: 18, marginTop: 28 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: colors.primary.main },
    spentRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    spentLabel: { fontSize: 16, color: colors.neutral.text.secondary },
    spentValue: { fontSize: 16, color: colors.primary.main, fontWeight: 'bold' },
    progressBarBg: {
      height: 8,
      backgroundColor: colors.ui.progress.background,
      borderRadius: 8,
      marginVertical: 8,
      overflow: 'hidden',
    },
    progressBarFill: {
      height: 8,
      backgroundColor: colors.ui.progress.fill,
      borderRadius: 8,
    },
    budgetText: { color: colors.neutral.text.secondary, fontSize: 14 },
    indicatorRow: { flexDirection: 'row', gap: 16 },
    indicatorCard: {
      flex: 1,
      backgroundColor: colors.ui.card.background,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.ui.card.border,
      padding: 18,
      alignItems: 'flex-start',
      shadowColor: colors.ui.card.shadow,
      shadowOpacity: 0.03,
      shadowRadius: 4,
      elevation: 2,
      marginRight: 0,
    },
    indicatorLabel: { color: colors.neutral.text.secondary, fontSize: 15, marginBottom: 4 },
    indicatorValue: { fontSize: 22, fontWeight: 'bold', color: colors.primary.main },
    indicatorChange: { color: colors.success.main, fontWeight: 'bold', fontSize: 15, marginTop: 2 },
  });

export default Dashboard;

