import React, { useState, useEffect } from 'react';
import { Input, Icon, Button } from 'react-native-elements';
import { MainBox, SecBox, TextoMenor, Titulo } from './style';
import { useNavigation } from '@react-navigation/native';
import { LoginService } from '../../services/LoginService';
import AxiosInstance from '../../api/Api';

export const Login = (params) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [isLoading, setLoading] = useState(false)
    const navigation = useNavigation();

    const loadToken = async() => {
        const resLogin = await LoginService(email, senha)
        if(resLogin.token != null) {
            navigation.navigate("Home", {
                screen: 'Home',
                params: {
                    token: resLogin.token
                }
            })
        } else {
            console.log(resLogin.token)
        }
    }

    function load() {
        setTimeout(function() {
            setLoading(e => false)
            loadToken()
        }, 1500)
    }

    return(
        <>
            <MainBox>
                <Titulo>Bem vindo</Titulo>
                <Input
                    inputStyle={{color: 'white'}}
                    placeholder='Email'
                    onChangeText={setEmail}
                    value={email}
                    leftIcon={<Icon name='mail-outline' color='white' size={29}/>}
                />
                <Input
                    inputStyle={{color: 'white'}}
                    placeholder='Senha'
                    secureTextEntry={true}
                    onChangeText={setSenha}
                    value={senha}
                    leftIcon={<Icon name='lock' color='white' size={29}/>}
                />
                <SecBox>
                    <TextoMenor>Esqueceu sua senha?</TextoMenor>
                </SecBox>
                {isLoading === false ? <Button
                    buttonStyle={{
                        width: 150,
                        margin: 20}}
                    title='Entrar'
                    onPress={() => {setLoading(e => true); load()}}
                /> : <Button
                        loading
                    buttonStyle={{
                        width: 150,
                        margin: 20}}
                    title='Entrar'
                />}
                
            </MainBox>
        </>
    )
};
