import { Icon, Input } from "react-native-elements";
import styled from "styled-components";

export const MainBox = styled.View`
    flex: 1;
    background-color: #192734;
    padding: 15px;
`

export const Buscador = styled(Input).attrs({
    leftIcon: <Icon name='search' color='black' size={29}/>,
    containerStyle: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        height: "8%",
        justifyContent: "start",
    },
    inputContainerStyle: {
        borderBottomWidth:0,
    },
})``;

export const CateBox = styled.View`
    padding: 15px;
    height: 25%;
`

export const RecenteBox = styled.View`
    padding: 15px;
    height: 30%;
`

export const DestaqueBox = styled.View`
    padding: 15px;
    height: 30%;
    border: 1px solid red;
`

export const CateCard = styled.View`
    border: 1px solid black;
    background-color: #4a6a87;
    width: 130px;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`

export const RecenteCard = styled.View`
    border: 1px solid black;
    border-radius: 10px;
    background-color: #4a6a87;
    width: 110px;
    height: 100%;
    margin-right: 15px;
`

export const RecenteImageBox = styled.View`
    background-color: white;
    border-top-left-radius: 10px; 
    border-top-right-radius: 10px; 
    width: 100%;
    height: 60%;
`

export const RecenteTextBox = styled.View`
    padding: 15px;
    width: 100%;
    height: 40%;
`

export const CateName = styled.Text`
    font-size: 20px;
`

export const RecenteTitulo = styled.Text`
    font-size: 20px;
`

export const RecenteDesc = styled.Text`
    font-size: 15px;
`



export const Titulo = styled.Text`
    font-size: 30px;
    color: white;
`
