import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Linhas from '../screens/Linhas/index';
import Paradas from '../screens/Paradas/index';
import OutrasLinhas from '../screens/OutrasLinhas/index';

const Stack = createNativeStackNavigator();

//funcao responsavel por carregar o stack navigation
export default () => (
    <Stack.Navigator 
        initialRouteName = "Linhas" //tela inicial padrao
        screenOptions={{headerShown: false}} //remove o header
    >
        {/* <Stack.Screen name='Carregamento' component={Carregamento} /> */}
        <Stack.Screen name='Linhas' component={Linhas} />
        <Stack.Screen name='Paradas' component={Paradas} />
        <Stack.Screen name='OutrasLinhas' component={OutrasLinhas} />
    </Stack.Navigator>
  );