import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, View, Image, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'
import { Buscador, CateBox, CateCard, CateName, DestaqueBox, DestaqueImageBox, DestaqueStarBox, DestaqueTextBox, DestaqueTituloDescBox, MainBox, RecenteBox, RecenteCard, RecenteDesc, RecenteImageBox, RecenteTextBox, RecenteTitulo, Titulo } from './style';
import AxiosInstance from '../../api/Api';

export const Home = ({route, navigation}) => {

    const [contador, setContador] = useState(0)
    const [categoria2, setCategoria2] = useState([])
    const {token} = route.params
    
    const getDadosCategoria = async () => {
        console.log(contador)
        AxiosInstance.get(
            '/categoria',
            {headers: {"Authorization": `Bearer ${token}`}}
        ).then(res => {
            setCategoria2(res.data)
        }).catch((error) => {
            console.log('deu erro')
            console.log(JSON.stringify(error))
        });
    }

    // useEffect(() => {
    //     getDadosCategoria()
    // }, [])

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
        {
            id: 0,
            info:[
                'https://www.globeholidays.net/Central_America/Jamaica/Media/Jamaica_Ackee_and_Saltfish.jpg',
                'Ackee e Peixe Salgado',
                'O ackee e o peixe-salgado são amplamente considerados o prato nacional da Jamaica.',
                4
            ]
        },
        {
            id: 1,
            info:[
                'https://cardapio.menu/storage/media/dishes_main/1299443/conversions/dish_thumbnail.jpg',
                'Wiener Schnitzel',
                'Bem parecido com o bife empanado, o prato mais tradicional da Áustria é preparado com os melhores ingredientes e servido fresco',
                5
            ]
        },
        {
            id: 2,
            info:[
                'https://static.paodeacucar.com/img/uploads/1/477/23056477.jpg',
                'Paella Valenciana',
                'Um ícone da Espanha. Apesar de existirem diversas formas de prepará-la, a verdade é que todas as suas versões são deliciosas.',
                4
            ]
        },
        {
            id: 3,
            info:[
                'https://www.comidaereceitas.com.br/wp-content/uploads/2021/07/feijoada_veveta-780x503.jpg',
                'Feijoada',
                'Feijoada é uma designação comum dada a pratos da culinária de regiões e países lusófonos.',
                5
            ]
        },
        {
            id: 4,
            info:[
                'https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/fish-&-other-seafood-dishes/moqueca-r%C3%A1pida/main-header.jpg',
                'Moqueca',
                'Prato típico dos estados do Pará, da Bahia e do Espírito Santo. Pode ser preparada com peixe, mariscos, crustáceos, galinha ou ovos de galinha.',
                5
            ]
        },
        {
            id: 5,
            info:[
                'https://www.receiteria.com.br/wp-content/uploads/receitas-de-tonkatsu-1.jpg',
                'Tonkatsu',
                'uma costeleta de porco frita e empanada fatiada em pequenos pedaços. Geralmente servida com repolho picado e/ou sopa de missô.',
                5
            ]
        },

    ]

    function renderEstrelas(id) {
        let listEstrela = []
        for(let i = 0; i < destaque[id].info[3]; i++) {
            listEstrela.push(<Ionicons name={'star-outline'} size={20} color={'black'} />)
        }
        return <>{listEstrela}</>
    }

    function renderDestaque(index) {
        setTimeout(function() {
            if((contador + 1) !== 5) {
                setContador(e => e + 1)
            } else {
                setContador(e => 0)
            }
        }, 6000)
        return <DestaqueBox key={destaque[index].id}>
            <DestaqueImageBox>
            <Image
                style={{width: '100%', height: '100%'}}
                source={{
                uri: destaque[contador].info[0],
                }}
            />
            </DestaqueImageBox>
            <DestaqueTextBox>
                <DestaqueTituloDescBox>
                    <Text style={{
                        fontWeight: 'bold'
                    }}>{destaque[index].info[1]}</Text>
                    <Text style={{
                        fontSize: 11,
                        marginTop: 5
                    }}>{destaque[index].info[2]}</Text>
                </DestaqueTituloDescBox>
                <DestaqueStarBox>
                        {renderEstrelas(index)}
                </DestaqueStarBox>
            </DestaqueTextBox>
        </DestaqueBox>
    }
    
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
                                    }}/>
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
                    {renderDestaque(contador)}
            </ScrollView>
    )
};
