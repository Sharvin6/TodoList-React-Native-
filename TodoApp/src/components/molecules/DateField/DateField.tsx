import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

type DateFieldProps = {
  label: string;
  value: Date;
  onChangeDate: (date: Date) => void;
};

export default function DateField({ label, value, onChangeDate }: DateFieldProps) {

  const [show, setShow] = useState(false);
  const handleChange = (_: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) {
      onChangeDate(selectedDate);
    };
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Pressable style={styles.input} onPress={() => setShow(true)}>
        <Text>{value.toDateString()}</Text>
      </Pressable>
      {show && (
        <DateTimePicker
          value={value}
          mode="date"
          display="default"
          onChange={handleChange} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontWeight: 'bold', marginBottom: 4 },
  input: { borderWidth: 1, padding: 10, borderRadius: 6 },
})
