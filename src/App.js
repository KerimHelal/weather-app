import "./App.css";
import Weather from "./pages/Weather";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./assets/themes/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Weather />
    </ThemeProvider>
  );
}

export default App;
