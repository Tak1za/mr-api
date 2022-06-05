import "primereact/resources/themes/arya-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "./App.scss";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import { allRequests, IRequest } from "./models/Request";
import { useState } from "react";

function App() {
  const [currentRequest, setCurrentRequest] = useState<IRequest>(
    allRequests[0]
  );
  return (
    <div className="app">
      <Header setRequest={setCurrentRequest} />
      <Content currentRequest={currentRequest} />
      <Footer />
    </div>
  );
}

export default App;
