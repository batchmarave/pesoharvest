import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'myApp',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // Show for 3 seconds
      launchAutoHide: true,
      backgroundColor: "#ffffffff", // Hex code for background
      androidScaleType: "CENTER_CROP",
    },
  },
};

export default config;
