import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface ChoiceInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const ChoiceInput: React.FC<ChoiceInputProps> = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#888"
      accessible={true}
      accessibilityLabel={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderBottomWidth: 2,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    color: "#fff",
    fontSize: 18,
    borderBottomColor: "#ff9800",
  },
});

export default ChoiceInput;