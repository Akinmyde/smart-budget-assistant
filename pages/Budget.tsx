import React, { useMemo, useState } from "react";
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
import { COLORS } from "../constants/theme";
import Header from "../components/Header";
import { Heading } from "../components/StyledText";
import transactionsDummyData from "../data/transactions.json";
import { getCategorySpending, getUniqueCategories } from "../utils";

const initialCategories = getUniqueCategories(transactionsDummyData).map((category) => ({
    name: category,
    spent: getCategorySpending(transactionsDummyData, category),
    budget: 0,
}));


const Budget = () => {
  const [categories, setCategories] = useState(initialCategories);

  const totalBudget = useMemo(() => categories.reduce((acc, cat) => acc + cat.budget, 0), [categories]);

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
        <Heading variant="heading">Monthly Budget</Heading>
        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.label}>Total Budget</Text>
              <Text style={styles.subLabel}>
                Total budget for your categories
              </Text>
            </View>
            <Text style={styles.totalBudget}>
              ${totalBudget.toLocaleString()}
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
                  {
                    width: `${
                      Math.min(category.spent / category.budget, 1) * 100
                    }%`,
                  },
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
    color: COLORS.primary.main,
    marginTop: 12,
    marginBottom: 18,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary.main,
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
    color: COLORS.primary.main,
  },
  subLabel: {
    color: COLORS.neutral.text.secondary,
    fontSize: 14,
  },
  totalBudget: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary.main,
  },
  categoryBlock: {
    marginBottom: 0,
    paddingTop: 8,
    backgroundColor: "transparent",
  },
  catName: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary.main,
  },
  catDesc: {
    color: COLORS.neutral.text.secondary,
    fontSize: 13,
  },
  catBudget: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary.main,
  },
  progressBarBg: {
    height: 8,
    backgroundColor: COLORS.neutral.border,
    borderRadius: 8,
    marginVertical: 8,
    overflow: "hidden",
  },
  progressBarFill: {
    height: 8,
    backgroundColor: COLORS.primary.main,
    borderRadius: 8,
  },
  catSpent: {
    fontSize: 15,
    color: COLORS.neutral.text.secondary,
  },
  inputLabel: {
    fontSize: 14,
    color: COLORS.primary.main,
    marginBottom: 4,
    marginTop: 2,
  },
  input: {
    borderWidth: 1,
    height: 40,
    borderColor: COLORS.neutral.border,
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    color: COLORS.primary.main,
    backgroundColor: COLORS.neutral.white,
    marginBottom: 2,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.neutral.border,
    marginTop: 18,
    marginBottom: 8,
    marginHorizontal: -16,
  },
  saveButton: {
    backgroundColor: COLORS.secondary.dark,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 24,
    shadowColor: COLORS.primary.dark,
    shadowOpacity: 0.13,
    shadowRadius: 8,
    elevation: 2,
  },
  saveButtonText: {
    color: COLORS.neutral.white,
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 0.5,
  },
});

export default Budget;
