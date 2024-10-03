import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Category from "../pages/category/Category";
import BadHabits from "../pages/habit/BadHabits";
import News from "../pages/news/News";
import Pharmacy from "../pages/pharmacy/Pharmacy";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Route for Login */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />

        {/* Main scrolling content */}
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Home />
              <Pharmacy />
              <Category />
              <BadHabits />
              <News />
              <Pharmacy />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
