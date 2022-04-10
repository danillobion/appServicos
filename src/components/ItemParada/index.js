import React from 'react';
import { Area, InfoArea, TitleLinha, TitleEmpresaDeOnibus, ContainerEsquerdo, ContainerDireita, TitleNumeroDaLinha, ContainerIcone  } from '../ItemParada/style';
import { useNavigation } from '@react-navigation/native';

import IconMapa from '../../assets/icon_mapa_amarelo.svg';
import IconDireita from '../../assets/icon_direita.svg';

export default ({data}) => {
    const navigation = useNavigation();
    // console.log(data);
    const handlerClick = () => {
        navigation.push("OutrasLinhas", {
            id: data.id, //id da parada
            rua: data.rua, //rua da parada
        });
    }
    return (
        <Area onPress={handlerClick}>
            <ContainerEsquerdo>
                <ContainerIcone>
                    <IconMapa width="36" height="36"/>
                </ContainerIcone>
                <InfoArea>
                    <TitleLinha>{data.rua}</TitleLinha>
                </InfoArea>
            </ContainerEsquerdo>
            <ContainerDireita>
                <IconDireita width="16" height="16"/>
            </ContainerDireita>
        </Area>
    );
}