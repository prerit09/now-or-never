import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

interface HistoryListProps {
  data: string[];
}

const HistoryList: React.FC<HistoryListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>}
      keyExtractor={(_, index) => index.toString()}
      style={styles.historyList}
    />
  );
};

const styles = StyleSheet.create({
  historyItem: {
    fontSize: 18,
    color: "#ddd",
    marginTop: 8,
    padding: 10,
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    width: "100%",
  },
  historyList: {
    width: "100%",
    marginTop: 10,
  },
});

export default HistoryList;
