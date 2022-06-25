import React from 'react';
import { FlatList, SafeAreaView, ScrollView, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Buscador, CateBox, CateCard, CateName, DestaqueBox, DestaqueImageBox, DestaqueTextBox, MainBox, RecenteBox, RecenteCard, RecenteDesc, RecenteImageBox, RecenteTextBox, RecenteTitulo, Titulo } from './style';

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

    const destaques = [
        {
            id: 1,
            imagem: ['teste']
        },
        {
            id: 2,
            imagem: ['teste']
        },
        {
            id: 3,
            imagem: ['teste']
        },
        {
            id: 4,
            imagem: ['teste']
        },
        {
            id: 5,
            imagem: ['teste']
        },
    ]
    
    
    return(
            <ScrollView style={{
                width: '100%',
                backgroundColor: '#192734'
            }}>
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
                <Titulo>Destaques</Titulo>
                <DestaqueBox>
                    <DestaqueImageBox>

                    </DestaqueImageBox>
                    <DestaqueTextBox>
                        
                    </DestaqueTextBox>
                </DestaqueBox>
            </MainBox>
            </ScrollView>
    )
};
