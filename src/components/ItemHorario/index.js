import React from 'react';
import { Area, InfoArea, TitleLinha, TitleEmpresaDeOnibus, ContainerEsquerdo, ContainerDireita, TitleNumeroDaLinha, ContainerIcone  } from '../ItemHorario/style';
import { useNavigation } from '@react-navigation/native';

import IconBairro from '../../assets/icon_bairro.svg';
import IconCentro from '../../assets/icon_centro.svg';

export default ({data}) => {
    return (
        <Area>
            <ContainerEsquerdo>
                <InfoArea>
                    <TitleLinha style={{color:"#FFC700"}}>{data.horarioBairro}</TitleLinha>
                </InfoArea>
            </ContainerEsquerdo>
            <ContainerDireita>
                <InfoArea>
                    <TitleLinha style={{color:"#26A7D0"}}>{data.horarioCentro}</TitleLinha>
                </InfoArea>
            </ContainerDireita>
        </Area>
    );
}