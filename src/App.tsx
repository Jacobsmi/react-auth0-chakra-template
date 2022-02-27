import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  const { isLoading: isAuth0Loading } = useAuth0();

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
