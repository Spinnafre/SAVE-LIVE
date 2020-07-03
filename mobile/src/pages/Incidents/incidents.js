import { StyleSheet, Text, View, Image,TouchableOpacity,FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {useNavigation} from '@react-navigation/native'
import {Feather} from '@expo/vector-icons'
import React,{useEffect,useState} from 'react'
import styles from './styles.js'
import logo from '../../assets/logo.png'

import api from '../../services/api'

const Incidents = () => {
    const Navigation=useNavigation()

    const [incidents,setIncidents]=useState([])
    const [incTotal,setIncTotal]=useState(0)
    const [page,setPage]=useState(1)
    const [loading,setLoading]=useState(false)

    function handleNavigator(incidents){
        Navigation.navigate('Detail',{incidents})
    }

    async function loadIncidents(){
        if(loading){
            return
        }

        if(incTotal>0 && incidents.length === incTotal){
            return
        }

        setLoading(true)
        const resp = await api.get('incidents',{
            params:{page}
        })
        // Evitar que os valores de INCIDENTS sejam mudados por completo(sobrescritos)
        setIncidents([...incidents,...resp.data])
        setPage(page+1)
        setLoading(false)
        setIncTotal(resp.headers['x-total-count'])
    }

    useEffect(()=>{
        loadIncidents()
    },[])
    return (
        <View style={styles.conteiner}>
            <View style={styles.header}>
                <Image source={logo} />
                <Text style={styles.textHeader}>
                    Total de casos: <Text style={styles.textHeaderBold}>{incTotal}</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo</Text>

            {/* Casos Listados */}
                
                <FlatList
                    data={incidents}
                    style={styles.ContainerCards}
                    keyExtractor={Incidents=>String(Incidents.id)}
                    showsVerticalScrollIndicator={true}
                    // Quando chegar no fim da lista irá disparar a funcão para recarregar no backend
                    onEndReached={loadIncidents}
                    onEndReachedThreshold={0.2}
                    
                    renderItem={({item:incidents})=>(
                        <View style={styles.IncidentCard}>
                            <Text style={styles.incidentProperty}>Caso</Text>
                            <Text style={styles.incidentValue}>{incidents.title}</Text>

                            <Text style={styles.incidentProperty}>ONG</Text>
                            <Text style={styles.incidentValue}>{incidents.name}</Text>

                            <Text style={styles.incidentProperty}>Valor</Text>
                            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incidents.value)}</Text>

                            <TouchableOpacity style={styles.buttonVerMais} onPress={()=>handleNavigator(incidents)}>
                                <Text style={styles.textButtonVerMais}>Ver mais Detalhes</Text>
                                <Feather style={styles.IconButtonVerMais} name="arrow-right" size={17} color="#5352ed" />
                            </TouchableOpacity>
                        </View>
                    )}
                />
        </View>
    )
}


export default Incidents