import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { RootStackParamList } from '../navigation/RootStackParams';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeDashboardForm from '../components/organisms/HomeScreenForm/HomeDashboardForm';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.headerCard}>
        <Text style={styles.title}>Todo Dashboard 📋</Text>
        <Text style={styles.subtitle}>
          Organize your tasks and stay productive
        </Text>
      </View>

      {/* Dashboard Content */}
      <View style={styles.dashboard}>
        <HomeDashboardForm navigation={navigation} />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EAF4FF',
    padding: 20,
  },

  headerCard: {
    backgroundColor: '#4F46E5',
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  subtitle: {
    fontSize: 14,
    color: '#E0E7FF',
    marginTop: 5,
  },

  dashboard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    elevation: 3,
  },

});