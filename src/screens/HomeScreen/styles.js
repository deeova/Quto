import { StyleSheet } from 'react-native';
import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.orange,
        display: 'flex',
        flex: 1,
    },
    header: {
        padding: 20,
    },
    headerText: {
        justifyContent: 'flex-start',
        fontSize: 30,
        fontWeight: '800',
        fontFamily: 'Poppins-Bold',
        color: colors.white,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowRadius: 10,
        textShadowOffset: { width: 1, height: 5 },
        marginTop: 60
    },
    headerText1: {
        fontSize: 60
    },
    footer: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.white,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    footerContentTop: {
        display: 'flex',
        alignItems: 'center',
    },
    footerTextTop: {
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: 'Inter-Medium',
        color: colors.red,
        marginTop: 20,
        marginBottom: 11
    },
    Qr: {
        backgroundColor: colors.qr,
        padding: 10,
        width: 232,
        height: 231,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    footerContentBot: {
        display: 'flex',
        paddingTop: 20
    },
    footerTextBot: {
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        lineHeight: 27,
        color: colors.black,
        marginBottom: 10
    },
    rekMenu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
    },
    rekMenuIcon: {
        width: 150,
        height: 210,
        backgroundColor: colors.gold,
        borderRadius: 15,
        alignItems: 'center',
        elevation: 4
    },
    textIconMenu: {
        fontFamily: 'Poppins-Bold',
        color: colors.white,
        fontSize: 15,
        lineHeight: 22,
    },
    textIconMenuRp: {
        fontFamily: 'Inter-Medium',
        fontSize: 14,
        lineHeight: 20,
        color: colors.white
    }
})