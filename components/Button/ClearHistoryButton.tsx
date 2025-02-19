import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ClearHistoryButtonProps {
  onPress: () => void;
}

const ClearHistoryButton: React.FC<ClearHistoryButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.clearButton} accessible={true} accessibilityLabel="Clear decision history">
      <Text style={styles.clearButtonText}>Clear History</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  clearButton: {
    marginTop: 15,
    padding: 12,
    backgroundColor: "#d32f2f",
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  clearButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ClearHistoryButton;
