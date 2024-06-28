// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Learn to Read!</Text>
            <LetterDisplay />
        </SafeAreaView>
    );
};

const LetterDisplay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const handleNextLetter = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % letters.length);
    };

    return (
        <View style={styles.letterContainer}>
            <Text style={styles.letter}>{letters[currentIndex]}</Text>
            <TouchableOpacity style={styles.button} onPress={handleNextLetter}>
                <Text style={styles.buttonText}>Next Letter</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    letterContainer: {
        alignItems: 'center',
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#6200EE',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default App;