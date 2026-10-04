import { useEffect, useState } from "react";
import { BackHandler, Platform } from "react-native";
import { WebView } from "react-native-webview";
export function useWebViewNavigation(
  webViewRef: React.RefObject<WebView | null>,
) {
  const [canGoBack, setCanGoBack] = useState(false);
  useEffect(() => {
    if (Platform.OS !== "android") {
      return;
    }
    const handleBackPress = () => {
      if (canGoBack) {
        webViewRef.current?.goBack();
        return true;
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress,
    );
    return () => {
      backHandler.remove();
    };
  }, [canGoBack, webViewRef]);
  return { canGoBack, setCanGoBack };
}
