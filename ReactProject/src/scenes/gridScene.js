import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Button,
    ActivityIndicator,
    Image,
    TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

var imageList = [];

class GridScene extends Component {
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
            <View style={styles.MainContainer}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                            <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={{ height: 40 }}>

                    <Button title='zzzz' onPress={() =>
                        ImagePicker.openPicker({
                            width: 300,
                            height: 400,
                            cropping: true
                        }).then(image => {

                            imageList.push({src: image.path})
                            this.setState({
                                dataSource: imageList
                              })

                            // this.state.dataSource.push({src: image.path})
                            console.log(this.state.dataSource)
                            // data.push({ key: image.path })
                            // setMedias(data)
                            // console.log(data);
                        })
                    }>



                    </Button>
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

export default GridScene;