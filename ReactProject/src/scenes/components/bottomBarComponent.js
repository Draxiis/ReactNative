import React, { Component } from "react";
import {
    Text,
    View,
    Button,
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScene from "../homeScene";
import GalleryScene from "../galleryScene";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilScene from "../profilScene";


const Tab = createMaterialBottomTabNavigator();

class BottomBarComponent extends Component {

    render() {
        return (
            <NavigationContainer independent={true}>
                <Tab.Navigator>
                    <Tab.Screen name="Gallery" component={GalleryScene} />
                    <Tab.Screen name="Profile" component={ProfilScene} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }


}

export default BottomBarComponent
