import React from 'react';
import { FlatList } from 'react-native';
import { Navbar } from '../../components/Navbar';
import { Buscador, CateBox, CateCard, CateName, MainBox, RecenteBox, RecenteCard, RecenteDesc, RecenteImageBox, RecenteTextBox, RecenteTitulo, Titulo } from './style';

export const Home = (params) => {

    const categorias = [
        {
            id: 1,
            desc:['Exemplo 1']
        },
        {
            id: 2,
            desc:['Exemplo 2']

        },
        {
            id: 3,
            desc:['Exemplo 3']

        },
        {
            id: 4,
            desc:['Exemplo 4']

        },
        {
            id: 5,
            desc:['Exemplo 5']

        }
    ]

    const recente = [
        {
            id: 1,
            desc:['Imagem 1']
        },
        {
            id: 2,
            desc:['Imagem 2']
        },
        {
            id: 3,
            desc:['Imagem 3']
        },
        {
            id: 4,
            desc:['Imagem 4']
        },
        {
            id: 5,
            desc:['Imagem 5']
        }
    ]
    
    
    return(
        <>
            <Navbar/>
            <MainBox>
                <Buscador/>
                <CateBox>
                    <FlatList
                        data={categorias}
                        horizontal
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <CateCard><CateName>{item.desc[0]}</CateName></CateCard>}
                    />
                </CateBox>
                <Titulo>Recentes</Titulo>
                <RecenteBox>
                <FlatList
                        data={recente}
                        horizontal
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <RecenteCard>
                                                    <RecenteImageBox>

                                                    </RecenteImageBox>
                                                    <RecenteTextBox>
                                                        <RecenteTitulo>Titulo</RecenteTitulo>
                                                        <RecenteDesc>Descricao</RecenteDesc>
                                                    </RecenteTextBox>
                                                </RecenteCard>}
                    />
                </RecenteBox>
            </MainBox>
        </>
    )
};
