import './App.css';
import Calculator from "./calculator";
import Header from './header';
import About from './About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/about' element={<About />} />
          <Route path="/" index element={<Calculator />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;