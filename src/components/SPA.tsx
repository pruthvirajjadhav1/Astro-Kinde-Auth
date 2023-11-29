import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import LoggedIn from "../components/LoggedIn";
import LoggedOut from "../components/LoggedOut";

const SPA = () => {
  const { isLoading, isAuthenticated } = useKindeAuth();

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return isAuthenticated ? <LoggedIn /> : <LoggedOut />;
};

export default SPA;
