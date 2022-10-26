import { AppContainer } from "./App.style";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BrowseCards from "./pages/BrowseCards";
import CreateDeck from "./pages/CreateDeck";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

function App() {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Router>
        <AppContainer>
          {user && <Navbar />}
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/browsecards" element={<BrowseCards />}></Route>
            <Route path="/createdeck" element={<CreateDeck />}></Route>
          </Routes>
        </AppContainer>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
