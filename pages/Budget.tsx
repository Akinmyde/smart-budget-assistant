import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import PageWrapper from "../components/PageWrapper";
import { colors } from "../constants/colors";
import Header from "../components/Header";

// Dummy categories and spending for demonstration
const initialCategories = [
  { name: "Groceries", spent: 300, budget: 500 },
  { name: "Dining Out", spent: 240, budget: 300 },
  { name: "Transportation", spent: 100, budget: 200 },
];

const initialTotalBudget = 2500;

const Budget = () => {
  const [totalBudget, setTotalBudget] = useState(initialTotalBudget.toString());
  const [categories, setCategories] = useState(initialCategories);

  const handleCategoryBudgetChange = (idx: number, value: string) => {
    setCategories((prev) =>
      prev.map((cat, i) =>
        i === idx ? { ...cat, budget: parseInt(value) || 0 } : cat
      )
    );
  };

  const handleSave = () => {
    Alert.alert("Budgets saved!");
  };

  return (
    <PageWrapper>
      <Header title="Budget" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32, paddingHorizontal: 0 }}
      >
        <Text style={styles.header}>Monthly Budget</Text>
        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.label}>Total Budget</Text>
              <Text style={styles.subLabel}>
                Total budget for your categories
              </Text>
            </View>
            <Text style={styles.totalBudget}>
              ${parseInt(totalBudget).toLocaleString()}
            </Text>
          </View>
        </View>
        <Text style={styles.header}>Categories</Text>
        {categories.map((category, idx) => (
          <View key={category.name} style={styles.categoryBlock}>
            <View style={styles.rowBetween}>
              <View>
                <Text style={styles.catName}>{category.name}</Text>
                <Text style={styles.catDesc}>
                  Set a budget for your spending
                </Text>
              </View>
              <Text style={styles.catBudget}>${category.budget}</Text>
            </View>
            <View style={styles.progressBarBg}>
              <View
                style={[
                  styles.progressBarFill,
                  { width: `${Math.min(category.spent / category.budget, 1) * 100}%` },
                ]}
              />
            </View>
            <View style={styles.rowEnd}>
              <Text style={styles.catSpent}>{category.spent}</Text>
            </View>
            <Text style={styles.inputLabel}>Set Budget</Text>
            <TextInput
              style={styles.input}
              value={category.budget.toString()}
              onChangeText={(value) => handleCategoryBudgetChange(idx, value)}
              keyboardType="numeric"
              placeholder="$0"
            />
            {idx !== categories.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSave}
          activeOpacity={0.85}
        >
          <Text style={styles.saveButtonText}>Save Budgets</Text>
        </TouchableOpacity>
      </ScrollView>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary.main,
    marginTop: 12,
    marginBottom: 18,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary.main,
    marginTop: 18,
    marginBottom: 10,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  label: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.primary.main,
  },
  subLabel: {
    color: colors.neutral.text.secondary,
    fontSize: 14,
  },
  totalBudget: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary.main,
  },
  categoryBlock: {
    marginBottom: 0,
    paddingTop: 8,
    backgroundColor: "transparent",
  },
  catName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary.main,
  },
  catDesc: {
    color: colors.neutral.text.secondary,
    fontSize: 13,
  },
  catBudget: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary.main,
  },
  progressBarBg: {
    height: 8,
    backgroundColor: colors.neutral.border,
    borderRadius: 8,
    marginVertical: 8,
    overflow: "hidden",
  },
  progressBarFill: {
    height: 8,
    backgroundColor: colors.primary.main,
    borderRadius: 8,
  },
  catSpent: {
    fontSize: 15,
    color: colors.neutral.text.secondary,
  },
  inputLabel: {
    fontSize: 14,
    color: colors.primary.main,
    marginBottom: 4,
    marginTop: 2,
  },
  input: {
    borderWidth: 1,
    height: 40,
    borderColor: colors.neutral.border,
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    color: colors.primary.main,
    backgroundColor: colors.neutral.white,
    marginBottom: 2,
  },
  divider: {
    height: 1,
    backgroundColor: colors.neutral.border,
    marginTop: 18,
    marginBottom: 8,
    marginHorizontal: -16,
  },
  saveButton: {
    backgroundColor: colors.secondary.dark,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 24,  
    shadowColor: colors.primary.dark,
    shadowOpacity: 0.13,
    shadowRadius: 8,
    elevation: 2,
  },
  saveButtonText: {
    color: colors.neutral.white,
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 0.5,
  },
});

export default Budget;
