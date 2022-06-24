import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';
import Logo from '../../assets/logo-makerclub.png'

export const Header = (props) => {
    return (
        <>
            <Container>
                <Image
                    source={Logo}
                />
            </Container>
        </>
    );
}