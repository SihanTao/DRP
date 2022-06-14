import { Text } from "react-native-elements";
import DEV_STATUS from "./DevStatus";
import { Block } from "galio-framework";

function YetToBeImplementedScreen () {
  return (
    <Block center style={[{flex: 1}, {flexDirection: "row"}, {alignItems: "center"}]}>
      <Text> YetToBeImplementedScreen </Text>
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
