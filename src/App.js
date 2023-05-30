import "./App.css";
import LoginPage from "./pages/auth/LoginPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme/theme.js'

function App() {
console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
