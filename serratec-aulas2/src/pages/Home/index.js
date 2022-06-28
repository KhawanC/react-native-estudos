import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, View, Image, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'
import { Buscador, CateBox, CateCard, CateName, DestaqueBox, DestaqueImageBox, DestaqueStarBox, DestaqueTextBox, DestaqueTituloDescBox, MainBox, RecenteBox, RecenteCard, RecenteDesc, RecenteImageBox, RecenteTextBox, RecenteTitulo, Titulo } from './style';
import AxiosInstance from '../../api/Api';

export const Home = ({route, navigation}) => {

    const [contador, setContador] = useState(0)
    const [categorias, setCategoria] = useState([])
    const [recente, setRecente] = useState([])
    const [produtos, setProdutos] = useState([])
    const {token} = route.params

    function getRandomRum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    const getDadosCategoria = async () => {
        const res = await AxiosInstance.get('/categoria',{headers: {"Authorization": `Bearer ${token}`}})
        setCategoria(res.data)
    }

    const getDadosProduto = async () => {
        try {
            const res = await AxiosInstance.get('/produto',{headers: {"Authorization": `Bearer ${token}`}})
            setProdutos(res.data)
            for (let i = 0; i < 5; i++) {
                aleatNum = getRandomRum(0, (res.data.length - 1))
                recente.push(res.data[aleatNum])
            }
            console.log(recente)
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        getDadosProduto()
        getDadosCategoria()
    }, [])

    useEffect(() => {
        setTimeout(function() {
            if((contador + 1) !== 5) {
                setContador(e => e + 1)
            } else {
                setContador(e => 0)
            }
        }, 6000)
    }, [contador])

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
                            keyExtractor={item => item.idCategoria}
                            renderItem={({item}) => <CateCard>
                                <Image
                                    style={{width: '100%', height: '100%'}}
                                    source={{
                                    uri: item.nomeImagem,
                                    }}/>
                            </CateCard>}
                        />
                    </CateBox>
                    <Titulo>Recentes</Titulo>
                    <RecenteBox>
                        <FlatList
                                data={recente}
                                horizontal
                                keyExtractor={item => item.idProduto}
                                renderItem={({item}) => <RecenteCard>
                                                            <RecenteImageBox>
                                                            <Image
                                                                style={{width: '100%', height: '100%'}}
                                                                source={{
                                                                uri: item.imagemProduto,
                                                                }}
                                                            />
                                                            </RecenteImageBox>
                                                            <RecenteTextBox>
                                                                <RecenteTitulo>{item.nomeProduto}</RecenteTitulo>
                                                                <RecenteDesc>R$ {item.precoProduto}</RecenteDesc>
                                                            </RecenteTextBox>
                                                        </RecenteCard>}/>
                    </RecenteBox>
                    <Titulo>Destaques</Titulo>
                    {renderDestaque(contador)}
            </ScrollView>
    )
};
