// import { AuthProvider } from "app/contexts/Auth0Context";
// import { AuthProvider } from 'app/contexts/JWTAuthContext';
import { SettingsProvider } from "app/contexts/SettingsContext";
import { useRoutes } from "react-router-dom";
import { AdminTheme } from "./components";
import routes from "./routes";

const App = () => {
  const content = useRoutes(routes);

  return (
    <SettingsProvider>
      <AdminTheme>{content}</AdminTheme>
    </SettingsProvider>
  );
};

export default App;
