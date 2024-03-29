import { AppContainer } from "./App.style";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyDecks from "./pages/MyDecks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BrowseCards from "./pages/BrowseCards";
import CreateDeck from "./pages/CreateDeck";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import PageHeader from "./components/PageHeader";
import { getAllCards } from "./features/cards/cardsSlice";
import { getMetadata } from "./features/metadata/metadataSlice";
import { useEffect } from "react";

function App() {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    dispatch(getAllCards(filters));
    dispatch(getMetadata());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);
  return (
    <>
      <Router>
        <AppContainer>
          {user && (
            <>
              <Navbar />
              <PageHeader />
            </>
          )}
          <Routes>
            <Route path="/" element={<Navigate to="/browsecards" />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/browsecards" element={<BrowseCards />}></Route>
            <Route path="/createdeck" element={<CreateDeck />}></Route>
            <Route path="/decks" element={<MyDecks />}></Route>
          </Routes>
        </AppContainer>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
