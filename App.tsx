import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Pokemon from './android/components/Pokemon';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="default" />
      <Pokemon />
    </SafeAreaView>
  );
};

export default App;
