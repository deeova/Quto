import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class PesananScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                    <View style={styles.pesanan}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }}>
                            <Text>GF-123</Text>
                            <Text>5:15pm</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }}>
                            <Text>5 makanan untuk Nancy</Text>
                        </View>
                        <View>
                            <Text>Anda ada 4:59 menit lagi untuk menerima pesanan</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.pesanan}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }}>
                        <Text>GF-123</Text>
                        <Text>5:15pm</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }}>
                        <Text>5 makanan untuk Nancy</Text>
                    </View>
                    <View>
                        <Text>Anda ada 4:59 menit lagi untuk menerima pesanan</Text>
                    </View>
                </View>
                <View style={styles.pesanan}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }}>
                        <Text>GF-123</Text>
                        <Text>5:15pm</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }}>
                        <Text>5 makanan untuk Nancy</Text>
                    </View>
                    <View>
                        <Text>Anda ada 4:59 menit lagi untuk menerima pesanan</Text>
                    </View>
                </View>
                <View style={styles.pesanan}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }}>
                        <Text>GF-123</Text>
                        <Text>5:15pm</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }}>
                        <Text>5 makanan untuk Nancy</Text>
                    </View>
                    <View>
                        <Text>Anda ada 4:59 menit lagi untuk menerima pesanan</Text>
                    </View>
                </View>
                <View style={styles.pesanan}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }}>
                        <Text>GF-123</Text>
                        <Text>5:15pm</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }}>
                        <Text>5 makanan untuk Nancy</Text>
                    </View>
                    <View>
                        <Text>Anda ada 4:59 menit lagi untuk menerima pesanan</Text>
                    </View>
                </View>
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
        marginBottom: 5
    }
})
