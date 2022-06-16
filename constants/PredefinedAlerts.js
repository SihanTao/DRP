import { Alert } from "react-native";

export function NotImplementedAlert() {
  Alert.alert(
    "Not Implemented",
    "Please tell the developers if you really need it working."
  )
}