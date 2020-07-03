import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'
export default StyleSheet.create({
    container: {
        backgroundColor: "#f0efef",
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 20
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    ContainerCards:{
    },
    IncidentCard: {
        marginTop: 32,
        backgroundColor: '#ffffffcc',
        borderRadius: 10,
        padding: 24,
        marginBottom: 16
    },
    incidentProperty: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#13131a"

    },
    incidentValue: {
        marginTop: 8,
        color: "#737380",
        marginBottom: 24,
        fontSize: 16
    },
    contact:{
        backgroundColor: '#ffffffcc',
        borderRadius: 10,
        padding: 24,
        marginBottom: 16
    },
    contactTextTitle:{
        fontSize: 20,
        lineHeight:30,
        fontWeight: "bold",
        color: "#13131a"
    },
    contactTextDesc:{
        marginTop:20,
        lineHeight: 24,
        color: "#737380",
        fontSize: 16
    },
    buttonsContacts:{
        marginTop:16,
        flexDirection:"row",
        justifyContent:"space-between",
        
    },
    action:{
        backgroundColor:"#0073e6",
        borderRadius:8,
        height:50,
        width:"48%",
        justifyContent:"center",
        alignItems:"center"
        
    },
    actionText:{
        color: "#f5f5f0",
        fontSize:15,
        fontWeight:"bold"
    }
})