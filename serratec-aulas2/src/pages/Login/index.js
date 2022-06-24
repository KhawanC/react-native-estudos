import React, { useState} from 'react';
import { Text, Input, Icon, Button } from 'react-native-elements';
import { MainBox, SecBox, TextoMenor, Titulo } from './style';

export const Login = (params) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [isLoading, setLoading] = useState(false)

    const handleLogin = () => {
        console.log(`Email: ${email} - Senha: ${senha}`)
    }

    function load() {
        setTimeout(function() {
            setLoading(e => false)
        }, 3000)
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
                    onPress={() => {setLoading(e => true); load(); handleLogin()}}
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
