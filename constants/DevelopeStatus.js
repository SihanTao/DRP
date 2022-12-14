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
 * @param {*} status
 *    should be either "developing" or "done". "developing" content will not be
 *    shown if constants.DevStatus is "publishing". Otherwise, whatever that the
 *    function wraps is simply displayed. This value defaults to "done".
 * @param {*} pubHide
 *    A boolean value. When set to true, the component will be hidden
 *    if constants.DevStatus is "publishing". This value defaults to false.
 * @param {*} forceHide
 *    If assigned true, the content will be hidden anyway.
 */
export default function DevStatus ({
  status="done",
  pubHide=false,
  forceHide,
  children,
}) {
  if (forceHide) {
    return (<></>)
  }
  if (DEV_STATUS=="publishing" && pubHide) {
    return (<></>)
  }
  if (status=="developing" && DEV_STATUS=="publishing" && !pubHide) {
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
