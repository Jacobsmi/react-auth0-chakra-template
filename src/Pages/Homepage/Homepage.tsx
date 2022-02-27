import { useAuth0 } from "@auth0/auth0-react";

const Homepage = () => {
  const { isLoading, loginWithPopup } = useAuth0();
  return (
    <div>
      <h1>Auth0</h1>
      <button onClick={loginWithPopup}>Login</button>
    </div>
  );
};

export default Homepage;
