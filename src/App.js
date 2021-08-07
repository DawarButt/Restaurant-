import react, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Products from './components/products';
import About from './components/About';
import Contact from "./components/Contact";
import {css} from "@emotion/core";
import PropagateLoader from 'react-spinners/PropagateLoader';

function App() {

  const[loading, setLoading] = useState(false);
  const override = css`
  display: block;
  border-color: red;
  margin-top: 20%;
  `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])


  return (
    <div className="App">
        {
          loading ? <PropagateLoader color={"#3d2514"} Loading={loading} css={override} size={48}/>
          :
          <>
          <Navbar />
          <Header />
          <Products />
          <About />
          <Contact />
          </>

        }
      </div>
  );
}

export default App;
