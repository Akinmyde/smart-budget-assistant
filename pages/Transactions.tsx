import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from "react-native";
import PageWrapper from "../components/PageWrapper";
import { COLORS, SPACING } from "../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { groupTransactionsByCategory } from "../utils";
import TransactionDetails from "../components/TransactionDetails";
import Header from "../components/Header";
import { BodyText, Subheading } from "../components/StyledText";
import { commonStyles } from "../styles/commonStyles";
import { useAppContext } from "../context/AppContext";

const Transactions = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { transactions, totalSpending } = useAppContext();
  const groupedTransactions = groupTransactionsByCategory(transactions);

  const handleToggle = (category: string) => {
    setExpanded(expanded === category ? null : category);
  };

  return (
    <PageWrapper>
      <Header title="Transactions" />
      <SectionList
        sections={[
          {
            title: "This month",
            data: groupedTransactions,
          },
        ]}
        keyExtractor={(item) => item.category}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => handleToggle(item.category)}
              activeOpacity={0.7}
            >
              <View style={[styles.categoryRow, commonStyles.row, commonStyles.spaceBetween, commonStyles.alignCenter]}>
                <View style={[styles.iconBox, commonStyles.alignCenter, commonStyles.justifyCenter]}>
                  <MaterialIcons
                    name="category"
                    size={24}
                    color={COLORS.primary.main}
                  />
                </View>
                <View style={[commonStyles.grow, commonStyles.justifyCenter]}>
                  <BodyText variant="subheading" style={styles.categoryName}>{item.category}</BodyText>
                  <BodyText variant="body" style={styles.transactionCount}>
                    {item.data.length}{" "}
                    {item.data.length === 1 ? "transaction" : "transactions"}
                  </BodyText>
                </View>
                <BodyText variant="body" style={styles.amount}>
                  $
                  {item.data.reduce((sum, tx) => sum + tx.amount, 0).toFixed(2)}
                </BodyText>
              </View>
            </TouchableOpacity>
            {expanded === item.category && (
              <TransactionDetails transactions={item.data} />
            )}
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <BodyText variant="body" style={styles.sectionTitle}>{title}</BodyText>
        )}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
        ListFooterComponent={
          <View style={styles.totalRow}>
            <Subheading variant="subheading" style={styles.footerText}>Total Spending</Subheading>
            <BodyText variant="body" style={styles.footerText}>${totalSpending.toFixed(2)}</BodyText>
          </View>
        }
      />
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary.main,
    marginBottom: SPACING.md,
  },
  categoryRow: {
    marginBottom: 24,
    minHeight: 56,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.neutral.background,
    marginRight: SPACING.sm,
  },
  categoryName: {
    color: COLORS.primary.main,
  },
  transactionCount: {
    color: COLORS.secondary.dark,
    textDecorationLine: "underline",
  },
  amount: {
    color: COLORS.primary.main,
    marginLeft: SPACING.sm,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.neutral.border,
  },
  footerText: {
    fontWeight: "bold",
    color: COLORS.primary.main,
  },
});

export default Transactions;
