import './App.css';
import Calculator from "./calculator";
import Header from './header';
import About from './About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/calculator' element={<Calculator />} />
        <Route exact path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;