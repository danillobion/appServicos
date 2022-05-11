import styled from 'styled-components/native';

export const Scroller = styled.ScrollView`
    flex: 1;
`;
export const HeaderArea = styled.View`
    flex-direction:row
    justify-content: space-between;
    padding-left:20px;
    padding-right:20px;
    padding-top:5px;
`;
export const SearchButton = styled.TouchableOpacity`
    width:36px;
    height:36px;
    margin-top:12px;
    display:none;
`;
export const ListArea = styled.View`
     margin-top: 20px;
     margin-bottom:20px;
`;
export const HeaderSubTitle = styled.Text`
    color:#ccc;
`;
export const HeaderMenu = styled.View`
    flex-direction:row;
    justify-content: space-between;
    align-Items:center;
    margin-top:40px;
    `;
export const ContainerItem = styled.View`
    margin-left:20px;
    margin-right:20px;
`;
export const LinkAcesso = styled.TouchableOpacity`
`;