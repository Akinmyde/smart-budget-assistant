// Common flex patterns
import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    // For container elements
    row: {
      flexDirection: 'row',
    },
    column: {
      flexDirection: 'column',
    },
    centered: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    spaceBetween: {
      justifyContent: 'space-between',
    },
    spaceAround: {
      justifyContent: 'space-around',
    },
    // For child elements
    grow: {
      flex: 1,
    },
    noGrow: {
      flex: 0,
    },
    // Alignment
    alignStart: {
      alignItems: 'flex-start',
    },
    alignEnd: {
      alignItems: 'flex-end',   
    },
    alignCenter: {
      alignItems: 'center',
    },
    justifyCenter: {
      justifyContent: 'center',
    },
    justifyStart: {
      justifyContent: 'flex-start',
    },
    justifyEnd: {
      justifyContent: 'flex-end',
    },
  });
  