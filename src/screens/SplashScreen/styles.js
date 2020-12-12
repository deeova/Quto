import { StyleSheet } from 'react-native'
import { colors } from "../../config/colors";
export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },
    header: {
        flex: 1,
        marginBottom: 51,
    },
    textHeader: {
        fontFamily: 'Poppins-ExtraBold',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 72,
        lineHeight: 108,
        color: colors.orange,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowRadius: 10,
        textShadowOffset: { width: 1, height: 5 },
        marginBottom: 29,
        marginTop: 29,
        alignSelf: 'center'
    },
    welcomeImage: {
        alignSelf: 'center',
        width: 313,
        height: 325,
    },
    footer: {
        flex: 1,
    },
    contentFooter: {
        alignItems: 'center',
        padding: 50
    },
    textFooter: {
        fontFamily: 'Poppins-Bold',
        fontStyle: 'normal',
        fontSize: 18,
        lineHeight: 27,
    },
})