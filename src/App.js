import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import Headphones from "./pages/Headphones";
import { getAll } from "./apis/ProductApi";
import ProductDetails from "./components/ProductDetails";
import ScrollTop from "./helpers/ScrollTop";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const request = await getAll().catch((err) => {
        console.log("Err", err);
      });
      dispatch({ type: "GET_DATA_FROM_DB", payload: request });
    }
    fetchData();
  }, [dispatch]);
  return (
    <BrowserRouter>
      <ScrollTop>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/headphones">
            <Headphones />
          </Route>
          <Route exact path="/speakers">
            <Speakers />
          </Route>
          <Route exact path="/earphones">
            <Earphones />
          </Route>
          <Route exact path="/product-details/:slug">
            <ProductDetails />
          </Route>
          {/* <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <Error />
        </Route> */}
        </Switch>
        <Footer />
      </ScrollTop>
    </BrowserRouter>
  );
}

export default App;
