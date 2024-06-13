import "./css/main.css"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header"
import NotFound from "./components/NotFound.jsx"
import { ItemListContainer } from "./components/ItemListContainer.jsx"
import Footer from "./components/Footer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";


function App() {

  const numerito = 1;

  return (
    <BrowserRouter>
      <Header numerito={numerito} setNumerito={setNumerito} />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App