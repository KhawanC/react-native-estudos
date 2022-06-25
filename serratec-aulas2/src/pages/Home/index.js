import React from 'react';
import { FlatList, SafeAreaView, ScrollView, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Buscador, CateBox, CateCard, CateName, DestaqueBox, DestaqueImageBox, DestaqueTextBox, MainBox, RecenteBox, RecenteCard, RecenteDesc, RecenteImageBox, RecenteTextBox, RecenteTitulo, Titulo } from './style';

export const Home = (params) => {

    const categorias = [
        {
            id: 1,
            img:['https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia27698/culinaria-mineira-cpt.jpg']
        },
        {
            id: 2,
            img:['https://www.saudeemdia.com.br/media/_versions/shutterstock_1021367641_2_widexl.jpg']

        },
        {
            id: 3,
            img:['https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.2218166:1589929719/prato-do-restaurante-mistura-baiana.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=9c7700c']

        },
        {
            id: 4,
            img:['https://receitaculinaria.com.br/wp-content/uploads/2020/11/sobremesa-gelada-sensacao-mega-f.jpg']

        },
        {
            id: 5,
            img:['https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg']

        }
    ]

    const recente = [
        {
            id: 1,
            info: ['Sashimi', 'R$ 2,80', 'https://www.sabornamesa.com.br/images/receitas/pins_image/r1108-sashimi-pin.jpg']
        },
        {
            id: 2,
            info: ['Missô', 'R$ 8,10', 'https://images.aws.nestle.recipes/resized/5afb571c38254395f7268e7ff29d5cae_missoshiro-receitas-nestle_768_384.jpg']
        },
        {
            id: 3,
            info: ['Hot Roll', 'R$ 5,80', 'https://www.djapa.com.br/wp-content/uploads/2021/01/hot-roll-980x654.jpg']
        },
        {
            id: 4,
            info: ['Espaguete à carbonara', 'R$ 35,00', 'https://static.clubedaanamariabraga.com.br/wp-content/uploads/2017/08/espaguete-a-carbonara-1024x576.jpg']
        },
        {
            id: 5,
            info: ['Leite ConMorango', 'R$ 15,00', 'https://s2.glbimg.com/fZnGZPfpFwQUOavBv3G6o0Z0O1Y=/0x0:1280x960/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/09/07/18_09_46_143_100_0125.JPG']
        },
    ]

    const destaque = [
        
    ] 
    
    
    return(
            <ScrollView style={{
                width: '100%',
                paddingRight: 15,
                paddingLeft: 15,
                backgroundColor: '#192734',
            }}>
                <Buscador/>
                <CateBox>
                        <FlatList
                            data={categorias}
                            horizontal
                            keyExtractor={item => item.id}
                            renderItem={({item}) => <CateCard>
                                <Image key={item.id}
                                    style={{width: '100%', height: '100%'}}
                                    source={{
                                    uri: item.img[0],
                                    }}
                                />
                            </CateCard>}
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
                                                            <Image key={item.id}
                                                                style={{width: '100%', height: '100%'}}
                                                                source={{
                                                                uri: item.info[2],
                                                                }}
                                                            />
                                                            </RecenteImageBox>
                                                            <RecenteTextBox>
                                                                <RecenteTitulo>{item.info[0]}</RecenteTitulo>
                                                                <RecenteDesc>{item.info[1]}</RecenteDesc>
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
            </ScrollView>
    )
};
