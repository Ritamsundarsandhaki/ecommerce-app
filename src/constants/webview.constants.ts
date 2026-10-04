export const WEBVIEW_URL = 'https://ecom.cloudwent.com';

export const WEBVIEW_SETTINGS = {
  javaScriptEnabled: true,
  domStorageEnabled: true,
  startInLoadingState: false,
  pullToRefreshEnabled: false,

  setBuiltInZoomControls: false,
  setDisplayZoomControls: false,
  scalesPageToFit: false,
  textZoom: 100,

  androidLayerType: 'hardware' as const,

  thirdPartyCookiesEnabled: true,
  cacheEnabled: true,

  allowsInlineMediaPlayback: true,
};