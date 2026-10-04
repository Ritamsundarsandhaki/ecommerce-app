import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <WebView
          source={{
            uri: 'https://ecom.cloudwent.com',
          }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={() => (
            <View style={styles.loading}>
              <ActivityIndicator size="large" />
            </View>
          )}
          allowsBackForwardNavigationGestures={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  container: {
    flex: 1,
    paddingTop: 8,
  },

  webview: {
    flex: 1,
  },

  loading: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});