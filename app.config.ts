import 'dotenv/config';

export default {
  expo: {
    name: 'snackbay',
    slug: 'snackbay',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: 'com.oskarjankowiak.snackbay',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      LOCATION_API_URL: process.env.LOCATION_API_URL,
      LOCATION_API_ACCESS_KEY: process.env.LOCATION_API_ACCESS_KEY,
      PLACE_API_KEY: process.env.PLACE_API_KEY,
      PLACE_API_BASE_URL: process.env.PLACE_API_BASE_URL,
    },
  },
};
