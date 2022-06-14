import { Text } from "react-native-elements";
import { StyleSheet } from "react-native";
import DEV_STATUS from "./DevStatus";
import { Block } from "galio-framework";

function YetToBeImplementedScreen () {
  return (
    <Block center style={styles.block}>
      <Block>
        <Text style={styles.bigText}>
          This feature is yet to be implemented.
        </Text>
        <Text style={styles.smallText}>
          If you are a developer for the project. You might want to set
          DEV_STATUS value to "developing" in "constants/DevStatus.js"
        </Text>
      </Block>
    </Block>
  )
}

/**
 * Used to control whether components are shown when project is in different
 * states. In "publishing" state, all "developing" features will be hidden.
 * @param {*} status should be either "developing" or "done". "developing"
 *                   content will not be shown if constants.DevStatus is
 *                   publishing. Otherwise, whatever that the function wraps
 *                   is simply displayed.
 */
export default function DevStatus ({status, children}) {
  if (status=="developing" && DEV_STATUS=="publishing") {
    return (<>
      <YetToBeImplementedScreen />
    </>)
  }
  return (<>
    {children}
  </>)
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  bigText: {
    fontSize: 26,
    fontWeight: "bold"
  },
  smallText: {
    fontSize: 12,
  },
})
