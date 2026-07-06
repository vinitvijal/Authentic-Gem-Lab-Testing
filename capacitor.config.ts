import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.authenticgemlab.testing',
  appName: 'Authentic Gem Lab',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
