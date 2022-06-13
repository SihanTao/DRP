import { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
} from 'react-native';
import { WebView } from 'react-native-webview';

var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

class WebPage extends Component {
    render() {
        return (
            <WebView bounces={false}
                scalesPageToFit={true}
                source={{ uri: "https://www.imperial.ac.uk/" }}
                style={{ width: deviceWidth, height: deviceHeight }}>
            </WebView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    }
});

export default WebPage;