import { StyleSheet } from 'react-native';
import { colors } from '../../../config/colors';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 50
    },
    btn: {
        backgroundColor: colors.yellow,
        borderRadius: 10,
        top: -50,
        elevation: 5
    },
    label: {
        textAlign: 'center',
        color: '#000',
        fontSize: 22,
        fontFamily: 'Inter-Bold',
        fontWeight: 'bold',
        padding: 20,
    }
})