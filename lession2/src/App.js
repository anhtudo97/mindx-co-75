import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/Card";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false)

  const changeShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="App">
      <Card chibaku="tuanh" show={show} />
      {/* <Card chibaku="aaaa" first={4} second={2} /> */}
      <Header changeShow={changeShow} />
    </div>
  );
}

export default App;
