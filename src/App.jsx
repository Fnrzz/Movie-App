import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header";
import Search from "./components/Search";
import Movies from "./components/Movies";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  return (
    <>
      <Search setTitle={setTitle} />
      <div className="container mt-4">
        <Header title={title ? title : "Movies App"} />
      </div>
      <div className="container mt-4">
        <Movies />
      </div>
    </>
  );
}

export default App;
