import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Auth/ProtectedRoute";
import Homepage from "./Pages/Homepage/Homepage";
import Landing from "./Pages/Landing/Landing";

function App() {
  const { isLoading: isAuth0Loading } = useAuth0();

  return (
    <Routes>
      <Route path="/home" element={<ProtectedRoute component={Landing} />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
