import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import Pokemon from './android/components/Pokemon';
import DemoIcon from './buoi2/Demoicon';
import { PaperProvider, Text } from 'react-native-paper';
import DemoTheme from './buoi2/DemoTheme';
import DemoAppBar from './buoi2/DemoAppbar';

import { Image } from 'react-native';
import Login from './exercise2/Login';
import Register from './exercise2/Register';
import ForgetPassword from './exercise2/ForgetPassword';

const App = () => { 
  return (
//chạy từng cái
      // <DemoIcon/>
      <PaperProvider>
        {/* <Pokemon/> */}
        {/* <DemoTheme/> */}
        {/* <DemoAppBar/> */}
        {/* <Login/> */}
        {/* <Register/> */}
        <ForgetPassword/>
     

      </PaperProvider>
  );
};

export default App;
