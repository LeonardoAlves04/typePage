import Cases from "./components/Home/Cases";
import Examples from "./components/Home/Examples";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import Methods from "./components/Home/Methods";
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
