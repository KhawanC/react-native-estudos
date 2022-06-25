import React from 'react';
import { ScrollView } from 'react-native';
import { Buscador, CategoriaBox, CategoriaCard } from './style';
import { Text, Image } from 'react-native-elements';

export const Categoria = (params) => {

    const categorias = [
        {
            id: 1,
            img: ['https://www.saudeemdia.com.br/media/_versions/shutterstock_1021367641_2_widexl.jpg']

        },
        {
            id: 2,
            img: ['https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia27698/culinaria-mineira-cpt.jpg']

        },
        {
            id: 3,
            img: ['https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.2218166:1589929719/prato-do-restaurante-mistura-baiana.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=9c7700c']

        },
        {
            id: 4,
            img: ['https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg']

        },
        {
            id: 5,
            img: ['Categoria 5']

        },
        {
            id: 6,
            img: ['Categoria 6']

        },
        {
            id: 7,
            img: ['Categoria 7']

        },
        {
            id: 8,
            img: ['Categoria 8']

        },
        {
            id: 9,
            img: ['Categoria 9']

        },
        {
            id: 10,
            img: ['Categoria 10']

        },
    ]

    return(
        <>
        <ScrollView style={{
                width: '100%',
                paddingRight: 15,
                paddingLeft: 15,
                backgroundColor: '#192734'
            }}>
            <Buscador/>
            <CategoriaBox>
                 {categorias.map(a => {
                    return <>
                        <CategoriaCard key={a.id}>
                            <Image
                                style={{width: 150, height: 150}}
                                source={{
                                uri: a.img[0],
                                }}
                            />
                        </CategoriaCard>
                    </>
                 })}
            </CategoriaBox>
        </ScrollView>
        </>
    )
};
