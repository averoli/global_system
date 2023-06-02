import "./App.css";
import LoginPage from "./pages/auth/LoginPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme.js";
import Layout from "./layouts/auth";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <LoginPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
