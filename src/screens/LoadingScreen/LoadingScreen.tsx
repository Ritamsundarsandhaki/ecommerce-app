import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/load.app.gif')}
        style={styles.loadingGif}
        resizeMode="contain"
      />

      <Text style={styles.loadingText}>
        Loading...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    elevation: 9999,
  },

  loadingGif: {
    width: 250,
    height: 250,
    marginBottom: 40,
  },

  loadingText: {
    fontSize: 15,
    color: '#666666',
  },
});