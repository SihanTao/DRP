import { NavigationContainer } from "@react-navigation/native";
import { Modal} from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';

const toiletMap = require("../assets/imgs/huxley_floor2.jpeg");

export default function ImageZoomer(props) {
    const {navigation} = props;
    const images = [{
        url: '',
        props: {
            // Or you can set source directory.
            source: toiletMap
        }
    }]
    return (
        <Modal visible={true} transparent={true}>
            <ImageViewer imageUrls={images} onClick = {()=>navigation.goBack()}/>
        </Modal>
    //     <View>
    //     <ImageViewer imageUrls={images}/>
    // </View>
    );
}