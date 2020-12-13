import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { styles } from "./styles";

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Selamat datang{'\n'}di <Text style={styles.headerText1}>Quto</Text></Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerContentTop}>
                    <Text style={styles.footerTextTop}>*Scan Barcode Pada Meja</Text>
                    <View style={styles.Qr}>
                        <Image
                            source={require('../../../assets/images/Qr.png')}
                        />
                    </View>
                </View>
                <View style={styles.footerContentBot}>
                    <Text style={styles.footerTextBot}>Rekomendasi Menu</Text>
                    <View style={styles.rekMenu}>
                        <TouchableOpacity style={styles.rekMenuIcon}>
                            <Image
                                style={{ width: 150, height: 150 }}
                                source={require('../../../assets/images/Roti.png')}
                            />
                            <Text style={styles.textIconMenu}>Roti Isi</Text>
                            <Text style={styles.textIconMenuRp}>Rp. 20.000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.rekMenuIcon}>
                            <Image
                                style={{ width: 150, height: 150 }}
                                source={require('../../../assets/images/Pangsit.png')}
                            />
                            <Text style={styles.textIconMenu}>Pangsit Ayam</Text>
                            <Text style={styles.textIconMenuRp}>Rp. 20.000</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}


