import { mode } from "@chakra-ui/theme-tools"

const styles = {
  global: (props) => ({
    // hacky solution to the bug that toasts just partially follow the color mode if user switches after they're initialized.
    // We're changing the background of their container (since it works), and just apply the same color for them transparentized
    // in both light and dark mode (in alert.ts)
    ".chakra-toast__inner": {
      bg: mode("white", "gray.700")(props),
      borderRadius: "lg",
    },
    ".chakra-input__group .chakra-numberinput .chakra-numberinput__field": {
      borderRightRadius: "none",
    },
    ".chakra-input__group .chakra-numberinput div div[disabled]": {
      borderRightWidth: 0,
    },
    ".chakra-input__group .chakra-numberinput div div:first-of-type": {
      marginRight: "0.5px",
      borderTopRightRadius: 0,
      borderRightWidth: 0,
    },
    ".chakra-input__group .chakra-numberinput div div:last-of-type": {
      marginRight: "0.5px",
      borderBottomRightRadius: 0,
      borderRightWidth: 0,
    },
    ".chakra-form__error-message": {
      whiteSpace: "break-spaces",
    },
  }),
}

export default styles
