import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { apiURL } from "./constants"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'

import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import Pagination from "./components/Pagination/Pagination";
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/About";
import CardDetails from "./components/Card/CardDetails";


const Home = () => {

  const [fetchedData, updateFetchedData] = useState([]);
  const { info, results } = fetchedData;
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState("")

  let api = `${apiURL}/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  
  return (
    <div className="App">
      <h1 className="text-center mb-3">Busquemos algún personaje:</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page={"/"} results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
  </div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
  
}

export default App
