import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { COLORS } from "../constants/theme";
import { BodyText } from "./StyledText";

interface InputProps {
    value: string;
    onChangeText: (value: string) => void;
    placeholder: string;
    label: string;  
}

const Input = ({ value, onChangeText, placeholder, label }: InputProps) => {
    return (
        <View>
            <BodyText variant="subheading" style={styles.inputLabel}>{label}</BodyText>
            <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            keyboardType={'numeric'}
            placeholder={placeholder}
        />
    </View>
  );
};

export default Input;   

const styles = StyleSheet.create({
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
  inputLabel: {
    color: COLORS.primary.main,
    marginBottom: 4,
  },
});