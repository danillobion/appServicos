import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStackLoading from './src/stacks/MainStackLoading';
export default function App(){
  return (
    <NavigationContainer>
      <MainStackLoading />
    </NavigationContainer>
  );
}