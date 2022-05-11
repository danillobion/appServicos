import React, {useEffect, useState } from 'react';
import { Button, Text, BackHandler,Alert, StatusBar   } from 'react-native';
import { Container, HeaderTitle,HeaderAreaLegenda } from '../../style/global';
import { Scroller, SearchButton, HeaderArea, ListArea,BackButton, HeaderSubTitle } from '../OutrasLinhas/style';

import SearchIcon from '../../assets/icon_pesquisar.svg'
import ItemArea from '../../components/ItemArea/index'
import Api from '../../Api';
import { useNavigation, useRoute } from '@react-navigation/native';
import IconEsquerda from '../../assets/icon_esquerda_amarelo.svg';

import getRealm from '../../services/realm';

export default () => {

    const [list, setList] = useState([]);
    
    const navigation = useNavigation();
    const route = useRoute();
    const [userInfo, setUserInfo] = useState({
        id: route.params.id,
        rua: route.params.rua,
    });
    const getLinhas = async () => {
        const realm = await getRealm();
        const linhasEParada = realm.objects('Linhas_Parada');
        setList([]);
        let arrayTemp = [];
        linhasEParada.map((obj,index) => {
            if(obj.parada_id ===  userInfo.id){
                let linhas = realm.objects('Linhas').filtered("id == "+obj.linha_id);
                arrayTemp.push(linhas[0]);
            }
        });
        setList(arrayTemp);
    }      
    //assim que a tela for carregada eu chamo a funcao getLinhas
    useEffect(() => {
        getLinhas();        
    }, []);

    return (
        <Container>
            <StatusBar backgroundColor="transparent" translucent  barStyle='light-content'/>
                <HeaderArea>
                <BackButton onPress={() => navigation.goBack()}>
                    <IconEsquerda width="25" height="25" 
                            style={{
                                margin:10,
                                marginLeft:-10,
                            }}/>
                    <HeaderTitle>{userInfo.rua}</HeaderTitle>
                    </BackButton >
                    <SearchButton>
                        <SearchIcon width="26" height="26"/>
                    </SearchButton>
                </HeaderArea>
                <HeaderAreaLegenda>
                    <HeaderSubTitle>Já sabe qual motô vai passar por essa parada? Veja a lista de ônibus.</HeaderSubTitle>
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
