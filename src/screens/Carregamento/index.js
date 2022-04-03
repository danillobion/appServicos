import React, {useEffect } from 'react';
import { Container, StyledText } from '../../style/global';
import { Loading } from '../../screens/Carregamento/style';
import { LoadingIcon } from './style';
import { useNavigation } from '@react-navigation/native';
import getRealm from '../../services/realm';
import Api from '../../Api';
import Realm from "realm";

import Logo from '../../assets/logo.svg';

export default () => {
    const navigation = useNavigation();

    const carregarBD =  async () => {
        let list = await Api.getTransporteUrbanoMunicipal(); // trocar essa consulta a API pela Realm
        // console.log("carregarBD", list.dados.linhas);

        apagarBancoDeDados(); //resetar banco
        empresa(list.dados.empresas);
        linhas(list.dados.linhas);
        paradas(list.dados.paradas);
        horarios(list.dados.horario);
        // visualizarBD(list.dados.empresas);
        
        const realm = await getRealm();
        // const tasks = realm.objects("Linhas");
        // console.log(tasks.map((task) => task.linha));

        realm.close(); //fechar banco
        return true;
    }
    /*
    * Funcao responsavel por povoar a tabela empresa
    */
    const empresa = async(value) => {
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
        value.forEach(obj => {
            realm.write(() => {
                realm.create('Linhas', {
                    empresa_id: obj.empresa_id,
                    linha: obj.linha,
                    numero: obj.numero,
                    tempoDeEspera: obj.tempoDeEspera,
                    valor:obj.valor,
                });
            });
        });
    }
    /*
    * Funcao responsavel por povoar a tabela paradas
    */
    const paradas = async(value) => {
        const realm = await getRealm();
        value.forEach(obj => {
            realm.write(() => {
                realm.create('Paradas', {
                    linha_id: obj.linha_id,
                    rua: obj.rua,
                    latitude: obj.latitude,
                    longitude: obj.longitude,
                });
            });
        });
    }
    /*
    * Funcao responsavel por povoar a tabela horarios
    */
    const horarios = async(value) => {
        const realm = await getRealm();
        value.forEach(obj => {
            realm.write(() => {
                realm.create('Horarios', {
                    linha_id: obj.linha_id,
                    dia: obj.dia,
                    horarioBairro: obj.horarioBairro,
                    horarioCentro: obj.horarioCentro,
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
        const realm = await getRealm();
         //mostrar
        let item = realm.objects('Empresas');
        list.forEach(item => {
            console.log(item.nome);
        });
    }

    //funcao responsavel por iniciar uma acao toda vez que a pagina for carregada
    useEffect(() => {
        if(carregarBD()){
             setTimeout(() => {
                navigation.reset({
                    routes:[{name:'MainStack'}]
                });
            }, 3000)
        };
        // if(carregarBD()){
        //      setTimeout(() => {
        //         navigation.navigate("Linhas");
        //     }, 3000)
        // };

    });
    return (
        <Container>
            <Loading>
                <Logo width="100%" height="100" />
                <LoadingIcon size="large" color="#fff"/>
                <StyledText>Carregando</StyledText>
            </Loading>
        </Container>
    );
}

