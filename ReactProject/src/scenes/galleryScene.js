import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Button,
    Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

var imageList = [];

class GalleryScene extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: imageList,
        };
    }
    
    componentDidMount() {
        this.setState({
            dataSource: imageList,
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
            <View style={styles.MainContainer}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                            <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                        </View>
                    )}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={{ height: 40 }}>
                    <Button title='Choose Picture' onPress={() =>
                        ImagePicker.openPicker({
                            width: 300,
                            height: 400,
                            cropping: true
                        }).then(image => {
                            imageList.push({src: image.path})
                            this.setState({
                                dataSource: imageList
                              })
                        })
                    }>
                    </Button>
                </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});

export default GalleryScene;