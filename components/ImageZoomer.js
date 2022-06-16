import { NavigationContainer } from "@react-navigation/native";
import { Modal} from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';


export default function ImageZoomer(props) {
    const {navigation} = props;
    const imagesList = props.route.params.imagesList;
    return (
        <Modal visible={true} transparent={true}>
            <ImageViewer imageUrls={imagesList} onClick = {()=>navigation.goBack()}/>
        </Modal>
    //     <View>
    //     <ImageViewer imageUrls={images}/>
    // </View>
    );
}