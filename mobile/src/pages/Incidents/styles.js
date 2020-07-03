import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'
export default StyleSheet.create({
    conteiner: {
        backgroundColor: "#f0efef",
        flex: 1,
        paddingHorizontal:24,
        paddingTop:Constants.statusBarHeight+24
    },
    title: {
        fontSize: 30,
        fontWeight:"bold",
        marginTop:48,
        marginBottom:16,
        color: "#13131a",
    },
    description:{
        lineHeight:24,
        color:"#737380",
        fontSize:16
    },
    header:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    textHeader:{
        fontSize:17
    },
    textHeaderBold:{
        fontWeight:'bold'
    },
    ContainerCards:{
        marginTop:32
    },
    IncidentCard:{
        backgroundColor:'#ffffffcc',
        borderRadius:10,
        padding:24,
        marginBottom:16
    },
    incidentProperty:{
        fontSize:18,
        fontWeight:"bold",
        color:"#13131a"
        
    },
    incidentValue:{
        marginTop: 8,
        color:"#737380",
        marginBottom:24,
        fontSize:16
    },
    buttonVerMais:{
        paddingTop:8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    textButtonVerMais:{
        color:"#5352ed",
        fontSize:18,
        fontWeight:"bold"
        
    },
    IconButtonVerMais:{
        // marginLeft:10
    }
})