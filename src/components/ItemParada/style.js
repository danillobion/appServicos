//  Area, InfoArea, TitleLinha, TitleEmpresaDeOnibus

import styled from 'styled-components/native';

export const Area = styled.TouchableOpacity`
    margin-bottom:10px;
    padding:10px;
    flex-direction:row;
    border-bottom-width: 1px;
    border-bottom-color:#363636
    justifyContent:space-between;
`;
export const ContainerIcone = styled.View`
    justifyContent:space-between;
    marginTop:-3px;
    margin-left:5px
`;
export const TitleNumeroDaLinha = styled.Text`
    fontSize:16px;
    color:#8c8c8c;
    marginTop:-4px;
    text-align:center;
`;
export const InfoArea = styled.View`
    margin-left:10px;
    margin-right:20px;
    margin-bottom:15px;
    margin-top:-2px;
    justifyContent:space-between;
`;
export const TitleLinha = styled.Text`
    fontSize:20px;
    color:#fff;
    `;
export const TitleEmpresaDeOnibus = styled.Text`
    fontSize:16px;
    color:#C1C1C1;
`;
export const ContainerEsquerdo = styled.View`
    flex-direction:row;
    margin-top:-1px;
    margin-left:10px;
`;
export const ContainerDireita = styled.View`
    margin-top:5px;
    margin-right:5px;
`;