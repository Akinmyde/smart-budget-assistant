import React from "react";
import { View, Text, StyleSheet  } from "react-native";
import { Transaction } from "../types/transactions";
import { colors } from "../constants/colors";
import { dateFormatter } from "../utils";

interface TransactionDetailsProps {
    transactions: Transaction[];
}

const TransactionDetails = ({ transactions }: TransactionDetailsProps) => {
    return (
      <View style={styles.transactionList}>
        {transactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionRow}>
            <Text style={styles.transactionDesc}>{transaction.description}</Text>
            <Text style={styles.transactionDate}>{dateFormatter(transaction.date)}</Text>
            <Text style={styles.transactionAmount}>${transaction.amount.toFixed(2)}</Text>
          </View>
        ))}
      </View>
    );
};

const styles = StyleSheet.create({
    transactionList: {
      marginLeft: 64,
      marginBottom: 12,
    },
    transactionRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 4,
    },
    transactionDesc: {
      flex: 1,
      color: colors.primary.main,
    },
    transactionDate: {
      color: colors.neutral.text.secondary,
      fontSize: 13,
      marginLeft: 8,
      marginRight: 8,
    },
    transactionAmount: {
      color: colors.primary.main,
      fontWeight: "500",
    },
});

export default TransactionDetails;
