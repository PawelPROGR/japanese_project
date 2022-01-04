import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export const MainScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
    },
    containerAll: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 20,
        backgroundColor: '#292929',
    },
    text: {
        fontFamily: 'RobotoBold',
        fontSize: 18,
        paddingTop: 13,
        paddingLeft: 0,
        color: '#FFFFFF'
    },
    textViewCont: {
        marginBottom: 0,
        height: 40,
        alignItems: 'center',
        backgroundColor: '#353535',
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 8,
        color: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 0
        },
    },
    img1: {
        justifyContent: 'flex-start',
        width: '95%',
        backgroundColor: "black",
        height: 253,
        marginTop: 20,
        resizeMode: 'contain'
    },
    img2: {
        //justifyContent: 'flex-start',
        width: 130,
        height: 110,
        marginTop: 20,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    trainerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        //backgroundColor: 'yellow',
        marginRight: 20,
        marginTop: 100,
        height: 300,
    },
    trainer: {
        flexDirection: 'column',
        width: '50%',
        height: 175,
        justifyContent: 'flex-end',
        borderRadius: 15,
        alignItems: 'center',
        borderColor: '#454545',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: '#555555',
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 0
        },
    },
    trainerText: {
        fontFamily: 'RobotoBold',
        fontSize: 16,
        paddingBottom: 14,
        color: '#fff'
    },
    statCont: {
        margin: 20,
        marginTop: 35,
        borderRadius: 30,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#191919',
        shadowColor: "#000",
        shadowOpacity: 0.42,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
    },
    TextStyleStat: {
        fontFamily: 'RobotoBold',
        fontSize: 18,
        color: 'white',
        letterSpacing: 1
    },
    StatWindowPoints: {
        margin: 20,
        height: 260,
        borderRadius: 20,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#454545',
        shadowColor: "#fff",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 0
        },
    }
})