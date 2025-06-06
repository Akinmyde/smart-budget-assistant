import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import PageWrapper from "../components/PageWrapper";
import { COLORS } from "../constants/theme";
import Header from "../components/Header";
import { BodyText, Heading } from "../components/StyledText";
import Input from "../components/Input";
import { commonStyles } from "../styles/commonStyles";
import { useAppContext } from "../context/AppContext";

const Budget = () => {
  const { categories, updateCategoryBudget } = useAppContext();

  const totalBudget = useMemo(() => categories.reduce((acc, cat) => acc + cat.budget, 0), [categories]);

  const handleCategoryBudgetChange = (categoryName: string, value: string) => {
    updateCategoryBudget(categoryName, parseInt(value) || 0);
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
        <Heading variant="heading" style={styles.header}>Monthly Budget</Heading>
        <View style={styles.section}>
          <View style={[commonStyles.row, commonStyles.spaceBetween, commonStyles.alignCenter]}>
            <View>
              <BodyText variant="subheading" style={styles.label}>Total Budget</BodyText>
              <BodyText variant="body" style={styles.subLabel}>
                Total budget for your categories
              </BodyText>
            </View>
            <BodyText variant="subheading" style={styles.totalBudget}>
              ${totalBudget.toLocaleString()}
            </BodyText>
          </View>
        </View>
        <Heading variant="heading" style={styles.header}>Categories</Heading>
        {categories.map((category) => (
          <View key={category.name} style={styles.categoryBlock}>
            <View style={[commonStyles.row, commonStyles.spaceBetween, commonStyles.alignCenter]}>
              <View>
                <BodyText variant="subheading" style={styles.catName}>{category.name}</BodyText>
                <BodyText variant="body" style={styles.catDesc}>
                  Set a budget for your spending
                </BodyText>
              </View>
              <BodyText variant="subheading" style={styles.catBudget}>${category.budget}</BodyText>
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
            <View style={[commonStyles.row, commonStyles.justifyEnd]}>
              <BodyText variant="body" style={styles.catSpent}>{category.spent}</BodyText>
            </View>
            <Input
              value={category.budget.toString()}
              onChangeText={(value) => handleCategoryBudgetChange(category.name, value)}
              placeholder="$0"
              label="Set Budget"
            />  
            {category !== categories[categories.length - 1] && <View style={styles.divider} />}
          </View>
        ))}
      </ScrollView>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    color: COLORS.primary.main,
    marginBottom: 18,
  },
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary.main,
    marginTop: 18,
    marginBottom: 10,
  },
  rowEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  label: {
    color: COLORS.primary.main,
  },
  subLabel: {
    color: COLORS.neutral.text.secondary,
  },
  totalBudget: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary.main,
  },
  categoryBlock: {
    marginBottom: 0,
    backgroundColor: "transparent",
  },
  catName: {
    color: COLORS.primary.main,
  },
  catDesc: {
    color: COLORS.neutral.text.secondary,
    fontSize: 13,
  },
  catBudget: {
    color: COLORS.primary.main,
  },
  progressBarBg: {
    height: 6,
    backgroundColor: COLORS.neutral.border,
    borderRadius: 8,
    marginVertical: 8,
    overflow: "hidden",
  },
  progressBarFill: {
    height: 8,
    backgroundColor: COLORS.secondary.dark,
    borderRadius: 8,
  },
  catSpent: {
    color: COLORS.neutral.text.secondary,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.neutral.border,
    marginTop: 18,
    marginBottom: 8,
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
