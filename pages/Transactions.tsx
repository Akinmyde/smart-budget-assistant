import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from "react-native";
import PageWrapper from "../components/PageWrapper";
import { colors } from "../constants/colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import transactionsDummyData from "../data/transactions.json";
import { Transaction } from "../types/transactions";
import { groupTransactionsByCategory, getTotalSpending } from "../utils";
import TransactionDetails from "../components/TransactionDetails";
import Header from "../components/Header";

const transactions: Transaction[] = transactionsDummyData;
const totalSpending = getTotalSpending(transactions);
const groupedTransactions = groupTransactionsByCategory(transactions);

const Transactions = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

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
              <View style={styles.categoryRow}>
                <View style={styles.iconBox}>
                  <MaterialIcons
                    name="category"
                    size={24}
                    color={colors.primary.main}
                  />
                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={styles.categoryName}>{item.category}</Text>
                  <Text style={styles.transactionCount}>
                    {item.data.length}{" "}
                    {item.data.length === 1 ? "transaction" : "transactions"}
                  </Text>
                </View>
                <Text style={styles.amount}>
                  $
                  {item.data.reduce((sum, tx) => sum + tx.amount, 0).toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
            {expanded === item.category && (
              <TransactionDetails transactions={item.data} />
            )}
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
        ListFooterComponent={
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Spending</Text>
            <Text style={styles.totalAmount}>${totalSpending.toFixed(2)}</Text>
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
    color: colors.primary.main,
    marginBottom: 20,
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    minHeight: 56,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.neutral.background,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.primary.main,
  },
  transactionCount: {
    fontSize: 15,
    color: colors.secondary.dark,
    marginTop: 2,
    textDecorationLine: "underline",
    fontWeight: "400",
  },
  amount: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.primary.main,
    marginLeft: 12,
    alignSelf: "center",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.neutral.border,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary.main,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary.main,
  },
});

export default Transactions;
