import React, {useEffect, useState } from 'react';
import { Area, InfoArea, TitleLinha, TitleEmpresaDeOnibus, ContainerEsquerdo, ContainerDireita, TitleNumeroDaLinha, ContainerIcone  } from '../ItemArea/style';
import { useNavigation } from '@react-navigation/native';
import getRealm from '../../services/realm';

import IconOnibus from '../../assets/icon_bus.svg';
import IconDireita from '../../assets/icon_direita.svg';

export default ({data}) => {
    var navigation = useNavigation();

    const handlerClick = async () => {
        const realm = await getRealm();
        const empresas = realm.objects('Empresas').filtered("id =="+data.empresa_id)[0];
            navigation.push("Paradas", {
                id: data.id,
                empresa_id: data.empresa_id,
                nome: empresas.nome,
                linha: data.linha,
                numero: data.numero,
                tempoDeEspera: data.tempoDeEspera,
                valor: data.valor,
            });;
    ;}

    return (
        <Area onPress={handlerClick}>
            {/* icone do bus */}
            <ContainerEsquerdo>
                <ContainerIcone>
                    <IconOnibus width="36" height="36"/>
                    <TitleNumeroDaLinha>{data.numero}</TitleNumeroDaLinha>
                </ContainerIcone>
                <InfoArea>
                    <TitleLinha>{data.linha}</TitleLinha>
                    <TitleEmpresaDeOnibus>R$ {data.valor}</TitleEmpresaDeOnibus>
                </InfoArea>
            </ContainerEsquerdo>
            <ContainerDireita>
                <IconDireita width="16" height="16"/>
            </ContainerDireita>
        </Area>
    );
}