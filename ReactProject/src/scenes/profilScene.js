import React, { Component } from "react";
import {
    Text,
    View,
    Button,
} from 'react-native';
import BottomBarComponent from './components/bottomBarComponent'

class ProfilScene extends Component {

    render() {
        return (
            // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            //     <Text>Details Screen</Text>
            //     <Button
            //         title="Go to Details... again"
            //         onPress={() => navigation.push('Details')}
            //     />
            //     <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            //     <Button title="Go back" onPress={() => navigation.goBack()} />
            //     <Button
            //         title="Go back to first screen in stack"
            //         onPress={() => navigation.popToTop()}
            //     />
           
            // </View>
            <BottomBarComponent></BottomBarComponent>
        );
    }
}

export default ProfilScene
