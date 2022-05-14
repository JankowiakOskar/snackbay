import Navigation from '@navigation/Navigation';
import { theme } from '@styles/theme';
import { registerRootComponent } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

registerRootComponent(App);
