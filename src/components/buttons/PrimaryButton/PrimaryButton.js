import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from "./styles";

export const PrimaryButton = (props) => {
    const { label } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

