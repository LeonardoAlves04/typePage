import { HashRouter, Route, Routes } from "react-router-dom";
import Cases from "./components/Cases";
import Examples from "./components/Examples";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Methods from "./components/Methods";
import Header from "./global/Header";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Cases />
      <Methods />
      <Examples />
      <Footer />
    </div>
  );
}

export default App;
