import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#D9D9D9',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
    },
})
