import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
  overrides: {
    MuiTab: {
      root: {
        textTransform: "none",
        fontSize: 17,
      },
      wrapper: {
        "font-weight": "bolder",
      },
      textColorPrimary: {
        color: "rgba(255, 255, 255, 0.75)",
      },
    },
    MuiTabs: {
      flexContainer: {
        borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
      },
    },
    MuiCircularProgress: {
      root: {
        margin: "0 auto",
        display: "block",
      },
    },
  },
});
