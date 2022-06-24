import React from 'react';
import { Icon } from 'react-native-elements';
import { MainBox, Textbox, Titulo } from './style';

export const Navbar = (params) => {
    return(
        <>
            <MainBox>
                <Icon name='menu' color='white' size={30} />
                <Textbox>
                    <Titulo>Delivery</Titulo>
                </Textbox>
            </MainBox>
        </>
    )
};
