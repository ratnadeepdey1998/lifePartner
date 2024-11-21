// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { createHashHistory } from "history";

import Login from "./components/login";
import Home from "../src/components/home";
import Auth from "./Layout/Auth";
import Default from "./Layout/Default";
import Signup from "./components/signup";
import Profile from "./components/profile";
import Pricing from "./components/pricing";
import Explore from "./components/explore";
import Features from "./components/features";
import Contact from "./components/contact";

function App() {
  const history = createHashHistory();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Default history={history} location="">
              <Login history={history} location="" />
            </Default>
          }
        ></Route>

        <Route
          exact
          path="/signup"
          element={
            <Default history={history} location="">
              <Signup history={history} location="" />
            </Default>
          }
        ></Route>

        <Route
          exact
          path="/profile"
          element={
            <Auth history={history} location="">
              <Profile history={history} location="" />
            </Auth>
          }
        ></Route>

        <Route
          exact
          path="/features"
          element={
            <Auth history={history} location="">
              <Features history={history} location="" />
            </Auth>
          }
        ></Route>

        <Route
          exact
          path="/pricing"
          element={
            <Auth history={history} location="">
              <Pricing history={history} location="" />
            </Auth>
          }
        ></Route>

        <Route
          exact
          path="/home"
          element={
            <Auth history={history} location="">
              <Home history={history} location="" />
            </Auth>
          }
        ></Route>

        <Route
          exact
          path="/explore"
          element={
            <Auth history={history} location="">
              <Explore history={history} location="" />
            </Auth>
          }
        ></Route>

        <Route
          exact
          path="/contact"
          element={
            <Auth history={history} location="">
              <Contact history={history} location="" />
            </Auth>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
