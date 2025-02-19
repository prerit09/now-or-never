import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface DecisionButtonProps {
  onPress: () => void;
  disabled: boolean;
}

const DecisionButton: React.FC<DecisionButtonProps> = ({ onPress, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, disabled && styles.buttonDisabled]}
      disabled={disabled}
      accessible={true}
      accessibilityLabel="Make decision"
    >
      <Text style={styles.buttonText}>Decide Now!</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff9800",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: "#888",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DecisionButton;
