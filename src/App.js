import "./App.css";
import Weather from "./pages/Weather";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./assets/themes/theme";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Weather />
      <Alert stack={{ limit: 3 }} />
    </ThemeProvider>
  );
}

export default App;
