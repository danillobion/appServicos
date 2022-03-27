import React from 'react';
import { Area, InfoArea, TitleLinha, TitleEmpresaDeOnibus, ContainerEsquerdo, ContainerDireita, TitleNumeroDaLinha, ContainerIcone  } from '../ItemParada/style';
import { useNavigation } from '@react-navigation/native';

import IconMapa from '../../assets/icon_mapa_amarelo.svg';

export default ({data}) => {
    return (
        <Area >
                <ContainerIcone>
                    <IconMapa width="36" height="36"/>
                </ContainerIcone>
                <InfoArea>
                    <TitleLinha>{data.rua}</TitleLinha>
                </InfoArea>
        </Area>
    );
}