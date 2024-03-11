import { StatusBar } from 'expo-status-bar';
import { Router } from './routes';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <Router />
      <StatusBar style="auto" />
    </>
  );
}

