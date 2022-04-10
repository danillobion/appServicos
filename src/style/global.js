// Arquivo JS - contem o estilo global do projeto

import * as React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #262628;
    flex: 1;
    justifyContent:center;
`;
export const StyledText = styled.Text`
    color: #fff;
    font-size:18px;
`
export const HeaderTitle = styled.Text`
    font-size:25px;
    font-weight:bold;
    color:#FFC700;
    margin-top: 5.9px;
`;
export const HeaderAreaLegenda = styled.View`
    flex-direction:row
    justify-content: space-between;
    padding-left:20px;
    padding-right:20px;
    padding-bottom:5px;
`;