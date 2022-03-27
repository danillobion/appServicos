import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Carregamento from '../screens/Carregamento/index'
import Linhas from '../screens/Linhas/index'
import Paradas from '../screens/Paradas/index'
import MainStack from './MainStack'

const Stack = createNativeStackNavigator();

//funcao responsavel por carregar o stack navigation
export default () => (
    <Stack.Navigator 
        initialRouteName = "Carregamento" //tela inicial padrao
        screenOptions={{headerShown: false}} //remove o header
    >
        <Stack.Screen name='Carregamento' component={Carregamento} />
        <Stack.Screen name='MainStack' component={MainStack} />
    </Stack.Navigator>
  );