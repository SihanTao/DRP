import Slideshow from 'react-native-image-slider-show';
import { Component } from "react";

export default class AutomatedSlideshow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
        };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === (this.props.dataSource.length - 1) ? 0 : (this.state.position + 1 >= 5 ? 5 : this.state.position + 1)
                });
            }, 5000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <Slideshow
                onPress={() => this.props.showUrl(this.state.position)}
                // onPress={this.props.onPress}
                titleStyle={this.props.style}
                height={260}
                dataSource={this.props.dataSource}
                position={this.state.position}
                onPositionChanged={position => this.setState({ position })} />
        );
    }
}