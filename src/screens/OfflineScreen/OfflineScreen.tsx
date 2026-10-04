import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OfflineScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}>📡</Text>

        <Text style={styles.title}>
          No Internet Connection
        </Text>

        <Text style={styles.message}>
          Please check your internet connection.
        </Text>

        <ActivityIndicator
          size="small"
          style={styles.loader}
        />

        <Text style={styles.waiting}>
          Waiting for connection...
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  icon: {
    fontSize: 60,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },

  message: {
    fontSize: 15,
    color: '#666666',
    textAlign: 'center',
  },

  loader: {
    marginTop: 25,
  },

  waiting: {
    marginTop: 10,
    fontSize: 13,
    color: '#777777',
  },
});