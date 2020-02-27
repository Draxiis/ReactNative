import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, ImageBackground, TouchableOpacity, Animated } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import BackImage from '../images/splash_back.png'
import LoginScene from './login.js';
import 'react-native-gesture-handler';

import StackNavigator from '../navigators/stackNavigator'



class LoadingScene extends Component {
    
    displayRegister = () => {
        alert("register pressed")
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground
                source={require('../images/splash_back.png')}
                style={{ width: '100%', height: '100%' }}>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity
                        style={styles.loginScreenButton}
                        onPress={() => navigate({LoginScreen})}
                        underlayColor='#fff'>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.registerScreenButton}
                        onPress={() => navigate('HomeScreen')}
                        underlayColor='#fff'>
                        <Text style={styles.loginText}>Register</Text>
                    </TouchableOpacity>

                </View>


            </ImageBackground>



        );
    }
}

export default LoadingScene;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttoncontainer: {
        flex: 1,
        justifyContent: 'center',
    },
    loginScreenButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#1E6738',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    registerScreenButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#1E6738',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    }

})
