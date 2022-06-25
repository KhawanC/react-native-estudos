import styled from "styled-components";
import { Icon, Input } from "react-native-elements";

export const Buscador = styled(Input).attrs({
    leftIcon: <Icon name='search' color='black' size={29}/>,
    containerStyle: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        height: 47,
        justifyContent: "start",
    },
    inputContainerStyle: {
        borderBottomWidth:0,
    },
})``;

export const CategoriaBox = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;

    width: 100%;
    height: auto;

    padding: 15px;

    justify-content: space-around;
`

export const CategoriaCard = styled.View`
    width: 150px;
    height: 150px;
    margin: 10px;
    align-items: center;
    justify-content: center;
`