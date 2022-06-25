import { Icon, Input } from "react-native-elements";
import styled from "styled-components";

export const Buscador = styled(Input).attrs({
    leftIcon: <Icon name='search' color='black' size={29}/>,
    containerStyle: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        height: 47,
    },
    inputContainerStyle: {
        borderBottomWidth:0,
    },
})``;

export const CateBox = styled.View`
    padding: 15px;
    height: 140px;
`

export const RecenteBox = styled.View`
    padding: 15px;
    height: 200px;
`

export const DestaqueBox = styled.View`
    padding: 15px;
    height: 350px;
    margin-bottom: 70px;
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
    background-color: white;
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

export const DestaqueImageBox = styled.View`
    width: 100%;
    height: 80%;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
`

export const RecenteTextBox = styled.View`
    padding: 15px;
    width: 100%;
    height: 40%;
    justify-content: space-between;
`

export const DestaqueTextBox = styled.View`
    width: 100%;
    height: 20%;
    flex-direction: row;
    background-color: white;
    border: 2px solid black;
`

export const DestaqueTituloDescBox = styled.View`
    width: 65%;
    height: 100%;
    padding: 5px;
`

export const DestaqueStarBox = styled.View`
    width: 35%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const CateName = styled.Text`
    font-size: 20px;
`

export const RecenteTitulo = styled.Text`
    font-size: 15px;
`

export const RecenteDesc = styled.Text`
    font-size: 15px;
`

export const Titulo = styled.Text`
    font-size: 30px;
    color: white;
    margin-top: 25px;
`
