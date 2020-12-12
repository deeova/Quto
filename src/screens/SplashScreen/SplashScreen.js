import React from 'react'
import { Text, View, Image } from 'react-native'
import { PrimaryButton } from '../../components/buttons/PrimaryButton'
import { colors } from "../../config/colors";
import { styles } from "./styles";

export const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textHeader}>Q<Text style={{ color: colors.yellow }}>uto</Text></Text>
            </View>
            <View style={styles.header}>
                <View>
                    <Image
                        style={styles.welcomeImage}
                        source={require('../../../assets/images/SplashScreen.png')}
                    />
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.contentFooter}>
                    <Text style={styles.textFooter}>Takut datang ke Restourant ?{'\n'}
                        <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: '100' }}>Quto hadir untuk kami pesan makanan lebih aman, mudah dan cepat</Text>
                    </Text>
                </View>
                <PrimaryButton label={'Mulai'} />
            </View>
        </View>
    )
}




