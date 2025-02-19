import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

interface DecisionModalProps {
  visible: boolean;
  result: string | null;
  onClose: () => void;
}

const DecisionModal: React.FC<DecisionModalProps> = ({ visible, result, onClose }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Your Decision: {result}</Text>
          <TouchableOpacity onPress={onClose} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#1e1e1e',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: { fontSize: 24, color: '#ffeb3b', fontWeight: 'bold' },
  modalButton: {
    marginTop: 15,
    padding: 12,
    backgroundColor: '#ff9800',
    borderRadius: 8,
    width: '60%',
    alignItems: 'center',
  },
  modalButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default DecisionModal;
