import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class RincianScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.pesanan}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 25 }}>
                        <Text>1x</Text>
                        <Text>Dada Ayam panggang</Text>
                        <Text>40rb</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 25 }}>
                        <Text>1x</Text>
                        <Text>Nasi Langgi Kuning Special</Text>
                        <Text>90rb</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 25 }}>
                        <Text>1x</Text>
                        <Text>Mie Seger dengan sapi{"\n"}panggang dan lumpia</Text>
                        <Text>90rb</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 25 }}>
                        <Text>1x</Text>
                        <Text>Daging sapi, kecap, kacang,{"\n"}dan selada</Text>
                        <Text>40rb</Text>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: "#000000", marginBottom: 25 }}></View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 25 }}>
                        <Text>Subtotal</Text>
                        <Text>240rb</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 25 }}>
                        <Text>PPN (10%)</Text>
                        <Text>24.000</Text>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: "#000000", marginBottom: 25 }}></View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                        <Text>Total Harga</Text>
                        <Text>RP224.000</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.fontPesan}>Terima Pesanan</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        display: 'flex',
        flex: 1,
    },
    pesanan: {
        backgroundColor: '#ffffff',
        padding: 15,
        marginBottom: 5,
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        backgroundColor: '#00FF00',
        height: 70,
        borderRadius: 10,
    },
    fontPesan: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})
