import React from 'react';
import { TecladoView, Titulo } from './style';
import { Header } from '../../Components/Header';

export const Login = (props) => {
    return (
        <>
            <TecladoView>
            <Header/>
                <Titulo> Hello World</Titulo>
            </TecladoView>
        </>
    );
}