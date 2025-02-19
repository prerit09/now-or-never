import { View, Text, Animated, Alert, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

import ChoiceInput from "../components/Input/ChoiceInput";
import ClearHistoryButton from "../components/Button/ClearHistoryButton";
import DecisionButton from "../components/Button/DecisionButton";
import DecisionModal from "../components/Modal/DecisionModal";
import HistoryList from "../components/List/HistoryList";


export default function HomeScreen() {
  const [choice1, setChoice1] = useState<string>("");
  const [choice2, setChoice2] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false); 

  useEffect(() => {
    loadHistory();
  }, []);

  const makeDecision = async () => {
    if (isLocked) return;

    if (!choice1.trim() || !choice2.trim()) {
      Alert.alert("Please enter both choices.");
      return;
    }

    setIsLocked(true);
    const randomChoice: string = Math.random() < 0.5 ? choice1 : choice2;
    setResult(randomChoice);

    const newDecision = `${choice1} vs ${choice2} ➝ ${randomChoice}`;
    const updatedHistory = [newDecision, ...history];

    setHistory(updatedHistory);
    await AsyncStorage.setItem("decisionHistory", JSON.stringify(updatedHistory));

    setModalVisible(true);
  };

  const loadHistory = async () => {
    try {
      const savedHistory = await AsyncStorage.getItem("decisionHistory");
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error("Failed to load history from AsyncStorage:", error);
    }
  };

  const clearHistory = async () => {
    Alert.alert("Clear History", "Are you sure you want to delete all past decisions?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Yes, Clear",
        onPress: async () => {
          try {
            await AsyncStorage.removeItem("decisionHistory");
            setHistory([]);
          } catch (error) {
            console.error("Failed to clear history:", error);
          }
        },
      },
    ]);
  };

  return (
      <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Now or Never</Text>
    
    
    
      <ChoiceInput value={choice1} onChangeText={setChoice1} placeholder="Enter first choice" />
      <ChoiceInput value={choice2} onChangeText={setChoice2} placeholder="Enter second choice" />

      <DecisionButton onPress={makeDecision} disabled={isLocked} />

      <Text style={styles.hint}>{isLocked ? "Wait for the result to reset..." : "Tap the button to decide!"}</Text>

      <Text style={styles.historyTitle}>Past Decisions:</Text>

      <HistoryList data={history} />

      {history.length > 0 && <ClearHistoryButton onPress={clearHistory} />}

      <DecisionModal 
        visible={modalVisible} 
        result={result} 
        onClose={() => {
          setModalVisible(false);
          setResult(null);
          setChoice1("");
          setChoice2("");
          setIsLocked(false);
        }} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-start", alignItems: "center", backgroundColor: "#121212" },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 20, color: "#fff", textTransform: "uppercase", letterSpacing: 2 },
  hint: { marginTop: 10, color: "#aaa", fontSize: 14, fontStyle: "italic" },
  historyTitle: { fontSize: 22, color: "#fff", marginTop: 20, fontWeight: "bold", textAlign: "center" },
});
