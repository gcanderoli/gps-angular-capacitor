import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gcanderoli.app',
  appName: 'gps-app',
  webDir: 'dist/gps-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
