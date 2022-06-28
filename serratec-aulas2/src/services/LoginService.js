import React from 'react';
import jwt_decode from 'jwt-decode';
import AxiosInstance from '../api/Api';

const LoginService = async(email, senha) => {
    var tokenDecode = null;
    try {
        const res = await AxiosInstance.post('autenticacao', {email, senha})
        tokenDecode = jwt_decode(res.data.token);
        tokenDecode['token'] = res.data.token
        return tokenDecode
    } catch (error) {
        console.log(error)
        return tokenDecode
    }
}

export {LoginService}