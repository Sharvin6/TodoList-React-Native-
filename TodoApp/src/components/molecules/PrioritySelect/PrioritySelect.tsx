import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type PrioritySelectProps = {
  value: 'High' | 'Low';
  onChange: (value: 'High' | 'Low') => void;
};


export default function PrioritySelect({ value, onChange }: PrioritySelectProps) {

  return (
  <View style={styles.container}>
    <Text style={styles.label}>Priority</Text>
    <View style={styles.row}>
      <Pressable style={[styles.option, value === 'High' && styles.selectedHigh,]}
        onPress={() => onChange('High')}>
        <Text style={styles.text}>High</Text>
      </Pressable>

      <Pressable style = {[styles.option, value === 'Low' && styles.selectedLow,]}
        onPress = {() => onChange('Low')}>
        <Text style = {styles.text}>Low</Text>
      </Pressable>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  label: { fontWeight: 'bold' , marginBottom: 6 },
  row: { flexDirection: 'row', gap: 10 },
  option: { flex: 1, padding: 10, borderWidth: 1, borderRadius: 6 , alignItems: 'center'},
  selectedHigh: { backgroundColor: 'red'},
  selectedLow: { backgroundColor: 'green'},
  text: { fontWeight: 'bold' },
});

