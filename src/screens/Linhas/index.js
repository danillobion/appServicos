import React, {useEffect, useState } from 'react';
import { Button, Text, BackHandler,Alert, StatusBar   } from 'react-native';
import { Container, HeaderTitle,HeaderAreaLegenda } from '../../style/global';
import { Scroller, SearchButton, HeaderArea, ListArea, HeaderSubTitle } from '../Linhas/style';

import SearchIcon from '../../assets/icon_pesquisar.svg'
import ItemArea from '../../components/ItemArea/index'
import Api from '../../Api';
import { useNavigation, useRoute } from '@react-navigation/native';

import getRealm from '../../services/realm';

export default () => {

    const [list, setList] = useState([]);
    
    const navigation = useNavigation();
    const route = useRoute();
    const getLinhas = async () => {
        const realm = await getRealm();
        const linhas = realm.objects('Linhas');
        // list.forEach(item => {
        //     console.log(item.linha);
        // });
        setList([]);
        setList(linhas);
    }
    // const backAction = () => {
    //     if(route.name === "Linhas"){
    //         Alert.alert("Sair do APP", "Você deseja sair do APP?", [
    //         {
    //             text: "Cancelar",
    //             onPress: () => null,
    //             style: "cancel"
    //         },
    //         { text: "SIM", onPress: () => BackHandler.exitApp() }
    //         ]);
    //         return true;
    //     }else{
    //         BackHandler.removeEventListener("hardwareBackPress", navigation.goBack(null));
    //     }
    // };
      
    //assim que a tela for carregada eu chamo a funcao getLinhas
    useEffect(() => {
        getLinhas();

            // const backHandler = BackHandler.addEventListener(
            //     "hardwareBackPress",
            //     backAction
            //     );
            // return () => backHandler.remove();
        
    }, []);

    return (
        <Container>
            <StatusBar backgroundColor="transparent" translucent  barStyle='light-content'/>
                <HeaderArea>
                    <HeaderTitle>Linhas</HeaderTitle>
                    <SearchButton>
                        <SearchIcon width="26" height="26"/>
                    </SearchButton>
                </HeaderArea>
                <HeaderAreaLegenda>
                    <HeaderSubTitle>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. </HeaderSubTitle>
                </HeaderAreaLegenda>
            <Scroller>

                <ListArea>
                    {list.map((item, k) => (
                        <ItemArea key={k} data={item} />
                    ))}
                </ListArea>

            </Scroller>
        </Container>
    );
}
