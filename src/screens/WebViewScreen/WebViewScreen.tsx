import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

import LoadingScreen from '../LoadingScreen/LoadingScreen';
import OfflineScreen from '../OfflineScreen';

import { useNetworkStatus } from '../../hooks/useNetworkStatus';
import { useWebViewNavigation } from '../../hooks/useWebViewNavigation';

import {
  WEBVIEW_SETTINGS,
  WEBVIEW_URL,
} from '../../constants/webview.constants';

export default function WebViewScreen() {
  const webViewRef = useRef<WebView>(null);

  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const initialLoadDone = useRef(false);

  const isConnected = useNetworkStatus();

  const { setCanGoBack } =
    useWebViewNavigation(webViewRef);

  const handleInitialLoad = () => {
    if (initialLoadDone.current) {
      return;
    }

    initialLoadDone.current = true;
    setIsInitialLoading(false);
  };

  if (!isConnected) {
    return <OfflineScreen />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <WebView
          ref={webViewRef}
          source={{
            uri: WEBVIEW_URL,
          }}
          style={styles.webview}

          {...WEBVIEW_SETTINGS}

          onNavigationStateChange={(navState) => {
            setCanGoBack(navState.canGoBack);
          }}

          onLoad={handleInitialLoad}
        />

        {isInitialLoading && <LoadingScreen />}
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
    backgroundColor: '#ffffff',
  },

  webview: {
    flex: 1,
  },
});