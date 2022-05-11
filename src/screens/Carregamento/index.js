import React, {useEffect } from 'react';
import { Container, StyledText } from '../../style/global';
import { Loading } from '../../screens/Carregamento/style';
import { LoadingIcon } from './style';
import { useNavigation } from '@react-navigation/native';
import getRealm from '../../services/realm';
import Api from '../../Api';
import Realm from "realm";
import {StatusBar} from "react-native";
import {useNetInfo} from '@react-native-community/netinfo';

import Logo from '../../assets/logo.svg';

export default () => {
    const navigation = useNavigation();
    const netInfo = useNetInfo();
    
    const carregarBD =  async () => {
        const realm = await getRealm();
        // if(netInfo.isConnected){
            let list = await Api.getDados();
            if(list.status == true){
                apagarBancoDeDados(); //resetar banco
                empresas(list.dados.empresas);
                linhas(list.dados.linhas);
                linha_parada(list.dados.linha_parada);
                paradas(list.dados.paradas);
                horarios(list.dados.horarios);
                // visualizarBD(list.dados.empresas);
            }
        // }
        // const element = realm.objects("Empresas");
        // console.log(tasks.map((task) => task.nome));
        // console.log(element.length);

        //realm.close(); //fechar banco
        return true;
    }
    /*
    * Funcao responsavel por povoar a tabela empresa
    */
    const empresas = async(value) => {
        const realm = await getRealm();
        value.forEach(obj => {
            realm.write(() => {
                realm.create('Empresas', {
                    id: obj.id,
                    nome: obj.nome,
                });
            });
        });
    }
    /*
    * Funcao responsavel por povoar a tabela linhas
    */
    const linhas = async(value) => {
        const realm = await getRealm();
        value.map((obj,index) => {
            realm.write(() => {
                realm.create('Linhas', {
                    id: obj.id,
                    empresa_id: obj.empresa_id,
                    linha: obj.nome,
                    numero: obj.numero,
                    tempoDeEspera: parseInt(obj.tempo_de_espera),
                    valor:obj.valor,
                });
            });
        });
    }
    /*
    * Funcao responsavel por povoar a tabela linha_parada
    */
    const linha_parada = async(value) => {
        const realm = await getRealm();
        value.map((obj,index) => {
            realm.write(() => {
                realm.create('Linhas_Parada', {
                    linha_id: obj.linha_id,
                    parada_id: obj.parada_id,
                });
            });
        });
        
        // let item = realm.objects('Linhas_Parada');
        // item.forEach(item => {
        //     console.log("opa", item.parada_id);
        // });
    }
    /*
    * Funcao responsavel por povoar a tabela paradas
    */
    const paradas = async(value) => {
        const realm = await getRealm();
        value.map((obj,index) => {
            realm.write(() => {
                realm.create('Paradas', {
                    id: obj.id,
                    rua: obj.rua,
                    latitude: obj.latitude,
                    longitude: obj.longitude,
                });
            });
        });
        // let item = realm.objects('Paradas');
        // item.forEach(item => {
        //     console.log("opa", item.rua);
        // });
    }
    /*
    * Funcao responsavel por povoar a tabela horarios
    */
    const horarios = async(value) => {
        const realm = await getRealm();
        value.map((obj,index) => {
            realm.write(() => {
                realm.create('Horarios', {
                    id: index,
                    linha_id: obj.linha_id,
                    dia: obj.dia,
                    horarioBairro: obj.horario_bairro,
                    horarioCentro: obj.horario_centro,
                });
            });
        });
    }
    //funcao responsavel por apago todo o banco de dados RealmDB
    const apagarBancoDeDados = async() =>{
        const realm = await getRealm();
        realm.write(() => {realm.deleteAll()});
    }
    /*
    * funcao responsavel por listar o conteudo da tabela realmDB
    */
    const visualizarBD = async(list) => {
        // const realm = await getRealm();
        //  //mostrar
        // let item = realm.objects('Empresas');
        // list.forEach(item => {
        //     console.log(item.nome);
        // });
    }
    /*
    * Funcao responsavel por fechar o banco apos o carregamento
    */
    const fecharbanco = async() =>{
        const realm = await getRealm();
        realm.close();
    }

    //funcao responsavel por iniciar uma acao toda vez que a pagina for carregada
    useEffect(() => {
        if(carregarBD()){
            setTimeout(() => {
                fecharbanco();
                navigation.reset({
                    routes:[{name:'MainStack'}]
                });
            }, 4000)
        };
    },[]);

    return (
        <Container>
            <StatusBar backgroundColor="transparent" translucent hidden/>
            <Loading>
                <Logo width="100%" height="100" />
                <LoadingIcon size="large" color="#fff"/>
                <StyledText>Carregando</StyledText>
            </Loading>
        </Container>
    );
}

