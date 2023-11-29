import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import SPA from "../components/SPA";

function App() {
  return (
    <KindeProvider
      clientId={import.meta.env.PUBLIC_KINDE_CLIENT_ID}
      domain={import.meta.env.PUBLIC_KINDE_DOMAIN}
      logoutUri={window.location.origin}
      redirectUri={window.location.origin}
      isDangerouslyUseLocalStorage={import.meta.env.DEV}
    >
      <SPA />
    </KindeProvider>
  );
}

export default App;
