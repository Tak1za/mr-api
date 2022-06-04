import "primereact/resources/themes/arya-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "./App.scss";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
