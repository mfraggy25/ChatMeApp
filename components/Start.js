import React, { Component } from 'react';

import { StyleSheet, Button, View, Text, TextInput, ImageBackground } from 'react-native';

export default class Start extends React.Component {
    constructor() {
        super();

        this.state = {
            name: ''
        }
    }




    render() {
        return (
            <ImageBackground source={require('../assets/BackgroundImage.png')}>
                <Text style={styles.appTitle}>ChatMeApp</Text>
                <View style={styles.container}>
                    <TextInput
                        value={this.state.name}
                        placeholder='Your name..'
                        styles={styles.nameContainer}
                        onChangeText={(name) => this.setState({ name })}
                    />

                    <Text style={styles.text}>
                        Choose Background Color:
                    </Text>

                    {/* 
                    
                    Background color options

                    colorOption1

                    colorOption2

                    colorOption3

                    colorOption4

                    */}

                    <Button
                        style={styles.button}
                        title='Start Chatting'
                        onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name, color: this.state.color })}
                    />

                </View>
            </ImageBackground>
        )
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '88%',
        fontSize: 16,
        height: '44%',
        color: '#000',
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        color: '#757083',
        fontWeight: '300',
    },
    appTitle: {
        color: '#fff',
        fontSize: '45',
        fontWeight: '600',
        textAlign: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    nameContainer: {
        fontSize: 16,
        width: '88%',
        borderWidth: 1,
        opacity: '50%',
        color: '#757083',
        fontWeight: '600',
        borderColor: '#000',
    },
    button: {
        fontSize: 16,
        width: '88%',
        color: '#fff',
        fontWeight: '600',
        backgroundColor: '#757083',
    },
    //Color options
    colorOption1: {
        backgroundColor: '#090C08',
    },
    colorOption2: {
        backgroundColor: '#474056',
    },
    colorOption3: {
        backgroundColor: '#8A95A5',
    },
    colorOption4: {
        backgroundColor: '#B9C6AE',
    }
})