import React, {useState, useEffect} from 'react';
import { Button, Text,StyleSheet  } from 'react-native';
import { Container, HeaderTitle } from '../../style/global';
import { BackButton,HeaderArea,InfoArea,Area,HeaderText,Scroller,InfoAreaHorario,TitleLinha,ContainerEsquerdo,ContainerDireita,ContainerAba,ContainerAbaHorarios,ContainerText, Aba,AbaHorarios,ButtonAba1,ButtonAba2,ButtonAbaUtil,ButtonAbaSabado,ButtonAbaDomingo,TitleAba1,TitleAba2,TitleAbaUtil,TitleAbaSabado,TitleAbaDomingo,ContainerParadas,ContainerHorarios,ContainerUtil,ContainerSabado,ContainerDomingo,AbaText,ListArea, } from '../Paradas/style';
import { useNavigation, useRoute } from '@react-navigation/native';
import IconEsquerda from '../../assets/icon_esquerda_amarelo.svg';

import ItemParada from '../../components/ItemParada/index'
import ItemHorario from '../../components/ItemHorario/index'

import getRealm from '../../services/realm';

import IconBairro from '../../assets/icon_bairro.svg';
import IconCentro from '../../assets/icon_centro.svg';

export default () => {
    const [listParadas, setListParadas] = useState([]);
    const [listHorarioUtil, setListHorarioUtil] = useState([]);
    const [listHorarioSabado, setListHorarioSabado] = useState([]);
    const [listHorarioDomingo, setListHorarioDomingo] = useState([]);
    const [status1, setStatus1] = useState([]);
    const [status2, setStatus2] = useState([]);
    const [statusUtil, setStatusUtil] = useState([]);
    const [statusSabado, setStatusSabado] = useState([]);
    const [statusDomingo, setStatusDomingo] = useState([]);
    const [statusButtonAba1, setButtonAba1] = useState([]);
    const [statusButtonAba2, setButtonAba2] = useState([]);
    const [statusTituloAba1, setTituloAba1] = useState([]);
    const [statusTituloAba2, setTituloAba2] = useState([]);
    const [statusTituloUtil, setTituloUtil] = useState([]);
    const [statusTituloSabado, setTituloSabado] = useState([]);
    const [statusTituloDomingo, setTituloDomingo] = useState([]);
    const [statusButtonUtil, setStatusButtonUtil] = useState([]);
    const [statusButtonSabado, setStatusButtonSabado] = useState([]);
    const [statusButtonDomingo, setStatusButtonDomingo] = useState([]);
    const state = {
        visibleStatus: false
     };
    const navigation = useNavigation();
    const route = useRoute();

    const [userInfo, setUserInfo] = useState({
        id: route.params.id,
        empresa: route.params.empresa,
        linha: route.params.linha,
        numero: route.params.numero,
        tempoDeEspera: route.params.tempoDeEspera,
        valor: route.params.valor
    });
    const handlerClick = () => {
        navigation.navigate("Linhas");
    }
    const handlerClickButtonAba1 = () => {
        setStatus1(true);
        setStatus2(true);
        setButtonAba1(false);
        setButtonAba2(false);
        setTituloAba1(false);
        setTituloAba2(false);
    }
    const handlerClickButtonAba2 = () => {
        setStatus1(false);
        setStatus2(false);
        setButtonAba1(true);
        setButtonAba2(true);
        setTituloAba1(true);
        setTituloAba2(true);
        
        setStatusUtil(true);
        setStatusSabado(false);
        setStatusDomingo(false);
        setStatusButtonUtil(true);
        setStatusButtonSabado(true);
        setStatusButtonDomingo(true);
        setTituloUtil(true);
        setTituloSabado(true);
        setTituloDomingo(true);
    }
    const handlerClickButtonAbaUtil = () => {
        setStatusUtil(true);
        setStatusSabado(false);
        setStatusDomingo(false);
        setStatusButtonUtil(true);
        setStatusButtonSabado(true);
        setStatusButtonDomingo(true);
        setTituloUtil(true);
        setTituloSabado(true);
        setTituloDomingo(true);
    }
    const handlerClickButtonAbaSabado = () => {
        setStatusUtil(false);
        setStatusSabado(true);
        setStatusDomingo(false);
        setStatusButtonUtil(false);
        setStatusButtonSabado(false);
        setStatusButtonDomingo(true);
        setTituloUtil(false);
        setTituloSabado(false);
        setTituloDomingo(true);
    }
    const handlerClickButtonAbaDomingo = () => {
        setStatusUtil(false);
        setStatusSabado(false);
        setStatusDomingo(true);
        setStatusButtonUtil(false);
        setStatusButtonSabado(true);
        setStatusButtonDomingo(false);
        setTituloUtil(false);
        setTituloSabado(true);
        setTituloDomingo(false);
    }
    const getParadas = async () => {
        const realm = await getRealm();
        const paradas = realm.objects('Paradas').filtered("linha_id == "+route.params.id);
        setListParadas([]);
        setListParadas(paradas);
    }
    const getHorarios = async () => {
        const realm = await getRealm();
        //util
        const horarioUtil = realm.objects('Horarios').filtered("linha_id == "+route.params.id).filtered("dia == 0");
        setListHorarioUtil([]);
        setListHorarioUtil(horarioUtil);
        //sabado
        const horarioSabado = realm.objects('Horarios').filtered("linha_id == "+route.params.id).filtered("dia == 1");
        setListHorarioSabado([]);
        setListHorarioSabado(horarioSabado);
        //domingo
        const horarioDomingo = realm.objects('Horarios').filtered("linha_id == "+route.params.id).filtered("dia == 2");
        setListHorarioDomingo([]);
        setListHorarioDomingo(horarioDomingo);
    }

      //assim que a tela for carregada eu chamo a funcao
      useEffect(() => {
        // handlerClickButtonAba1();
        getParadas();
        getHorarios();
    }, []);

    return (
        <Container>
            <HeaderArea>
                <BackButton  onPress={handlerClick}>
                    <IconEsquerda width="25" height="25" 
                        style={{
                            margin:10,
                            marginLeft:-10,
                        }}/>
                    <HeaderTitle>{userInfo.linha}</HeaderTitle>
                </BackButton>
            </HeaderArea>
            <Scroller>
            {/* <Text>Linha: {userInfo.linha}</Text> */}
                <InfoArea>
                    <HeaderText>Empresa</HeaderText>
                    <HeaderText>ABC</HeaderText>
                </InfoArea>
                <InfoArea>
                    <HeaderText>Número da linha</HeaderText>
                    <HeaderText>{userInfo.numero}</HeaderText>
                </InfoArea>
                <InfoArea>
                    <HeaderText>Valor da passagem</HeaderText>
                    <HeaderText>R$ {userInfo.valor}</HeaderText>
                </InfoArea>
                <InfoArea>
                    <HeaderText>Tempo de espera</HeaderText>
                    <HeaderText>{userInfo.tempoDeEspera} min</HeaderText>
                </InfoArea>
                <ContainerAba>
                    <Aba>
                        <ButtonAba1 style={ statusButtonAba1  == true? {backgroundColor:"#3b3b3b"} : {backgroundColor:"#ccc"}} onPress={handlerClickButtonAba1}>
                            <TitleAba1 style={statusTituloAba1  == true? {color:'#C4C4C4'} : {color:'#3B3B3B'}}>Paradas</TitleAba1>
                        </ButtonAba1>
                        <ButtonAba2 style={statusButtonAba2 == false? {backgroundColor:"#3b3b3b"} : {backgroundColor:"#ccc"}} onPress={handlerClickButtonAba2}>
                            <TitleAba2 style={statusTituloAba2  == false? {color:'#C4C4C4'} : {color:'#3B3B3B'}}>Horários</TitleAba2>
                        </ButtonAba2>
                    </Aba>
                </ContainerAba>
                <ContainerParadas  style={status1 ? null : { display: "none" }}>
                    <ContainerText>
                        <AbaText>Paradas O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. </AbaText>
                    </ContainerText>
                    <ListArea>
                        {listParadas.map((item, k) => (
                            <ItemParada key={k} data={item} />
                        ))}
                    </ListArea>
                </ContainerParadas>
                <ContainerHorarios style={status2 ?{ display: "none" } : null }>
                    <ContainerText>
                        <AbaText>Horário O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. </AbaText>
                    </ContainerText>
                    <ContainerAbaHorarios>
                        <AbaHorarios>
                            <ButtonAbaUtil  style={statusButtonUtil == true? {backgroundColor:"#ccc"} : {backgroundColor:"#3b3b3b"}} onPress={handlerClickButtonAbaUtil}>
                                <TitleAbaUtil style={statusTituloUtil  == true? {color:'#3b3b3b'} : {color:'#C4C4C4'}}>Útil</TitleAbaUtil>
                            </ButtonAbaUtil>
                            <ButtonAbaSabado  style={statusButtonSabado == true? {backgroundColor:"#3b3b3b"} : {backgroundColor:"#ccc"}} onPress={handlerClickButtonAbaSabado}>
                                <TitleAbaSabado style={statusTituloSabado  == true? {color:'#C4C4C4'} : {color:'#3b3b3b'}}>Sábado</TitleAbaSabado>
                            </ButtonAbaSabado>
                            <ButtonAbaDomingo  style={statusButtonDomingo == true? {backgroundColor:"#3b3b3b"} : {backgroundColor:"#ccc"}} onPress={handlerClickButtonAbaDomingo}>
                                <TitleAbaDomingo style={statusTituloDomingo  == true? {color:'#C4C4C4'} : {color:'#3b3b3b'}}>Domingo</TitleAbaDomingo>
                            </ButtonAbaDomingo>
                        </AbaHorarios>
                    </ContainerAbaHorarios>
                    <ContainerUtil  style={statusUtil ? null : { display: "none" }}>
                        <Area>
                            <ContainerEsquerdo>
                                <InfoAreaHorario>
                                    <IconBairro width="28" height="28"/>
                                    <TitleLinha style={{color:"#FFC700"}}>Bairro</TitleLinha>
                                </InfoAreaHorario>
                            </ContainerEsquerdo>
                            <ContainerDireita>
                                <InfoAreaHorario>
                                    <IconCentro width="28" height="28"/>
                                    <TitleLinha style={{color:"#26A7D0"}}>Centro</TitleLinha>
                                </InfoAreaHorario>
                            </ContainerDireita>
                        </Area>
                        <ListArea>
                            {listHorarioUtil.map((item, k) => (
                                <ItemHorario key={k} data={item} />
                            ))}
                        </ListArea>
                    </ContainerUtil>
                    <ContainerUtil  style={statusSabado ? null : { display: "none" }}>
                        <Area>
                            <ContainerEsquerdo>
                                <InfoAreaHorario>
                                    <IconBairro width="28" height="28"/>
                                    <TitleLinha style={{color:"#FFC700"}}>Bairro</TitleLinha>
                                </InfoAreaHorario>
                            </ContainerEsquerdo>
                            <ContainerDireita>
                                <InfoAreaHorario>
                                    <IconCentro width="28" height="28"/>
                                    <TitleLinha style={{color:"#26A7D0"}}>Centro</TitleLinha>
                                </InfoAreaHorario>
                            </ContainerDireita>
                        </Area>
                        <ListArea>
                            {listHorarioSabado.map((item, k) => (
                                <ItemHorario key={k} data={item} />
                            ))}
                        </ListArea>
                    </ContainerUtil>
                    <ContainerUtil  style={statusDomingo ? null : { display: "none" }}>
                        <Area>
                            <ContainerEsquerdo>
                                <InfoAreaHorario>
                                    <IconBairro width="28" height="28"/>
                                    <TitleLinha style={{color:"#FFC700"}}>Bairro</TitleLinha>
                                </InfoAreaHorario>
                            </ContainerEsquerdo>
                            <ContainerDireita>
                                <InfoAreaHorario>
                                    <IconCentro width="28" height="28"/>
                                    <TitleLinha style={{color:"#26A7D0"}}>Centro</TitleLinha>
                                </InfoAreaHorario>
                            </ContainerDireita>
                        </Area>
                        <ListArea>
                            {listHorarioDomingo.map((item, k) => (
                                <ItemHorario key={k} data={item} />
                            ))}
                        </ListArea>
                    </ContainerUtil>
                </ContainerHorarios>
            </Scroller>
        </Container>
    );
}