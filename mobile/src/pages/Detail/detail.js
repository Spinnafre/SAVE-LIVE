import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'
import React from 'react'
import logo from '../../assets/logo.png'
import styles from './styles'


const Header = () => {
    const Navigation = useNavigation()
    const route = useRoute()
    const incident = route.params.incidents
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de doar uma quantia de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}.`

    function handleNavigator() {
        Navigation.goBack()
    }

    function SendEmail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        })
    }
    function handleWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
                <Feather name="arrow-left" size={24} color='#5352ed' onPress={handleNavigator} />
            </View>

            <View style={styles.IncidentCard}>
                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name}, de {incident.city} ({incident.uf})</Text>

                <Text style={styles.incidentProperty}>Descrição:</Text>
                <Text style={styles.incidentValue}>{incident.description}
                </Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>

            </View>

            <View style={styles.contact}>
                <Text style={styles.contactTextTitle}>Ajude a ONG</Text>
                <Text style={styles.contactTextDesc}>Entre em contato:</Text>

                <View style={styles.buttonsContacts}>
                    <TouchableOpacity style={styles.action} onPress={handleWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={SendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default Header