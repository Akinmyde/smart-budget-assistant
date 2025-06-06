import React from "react";
import { View, StyleSheet  } from "react-native";
import { Transaction } from "../types/transaction";
import { COLORS } from "../constants/theme";
import { dateFormatter } from "../utils";
import { BodyText } from "./StyledText";
import { commonStyles } from "../styles/commonStyles";
interface TransactionDetailsProps {
    transactions: Transaction[];
}

const TransactionDetails = ({ transactions }: TransactionDetailsProps) => {
    return (
      <View style={styles.transactionList}>
        {transactions.map((transaction) => (
          <View key={transaction.id} style={[styles.transactionRow, commonStyles.row, commonStyles.spaceBetween, commonStyles.alignCenter]}>
            <BodyText variant="body" style={styles.transactionDesc}>{transaction.description}</BodyText>
            <BodyText variant="body" style={styles.transactionDate}>{dateFormatter(transaction.date)}</BodyText>
            <BodyText variant="body" style={styles.transactionAmount}>${transaction.amount.toFixed(2)}</BodyText>
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

      paddingVertical: 4,
    },
    transactionDesc: {
      flex: 1,
      color: COLORS.primary.main,
    },
    transactionDate: {
      color: COLORS.neutral.text.secondary,
      fontSize: 13,
      marginLeft: 8,
      marginRight: 8,
    },
    transactionAmount: {
      color: COLORS.primary.main,
      fontWeight: "500",
    },
});

export default TransactionDetails;
