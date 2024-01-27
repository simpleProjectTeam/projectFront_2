import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ItemForm from "./pages/ItemForm";
import ModifyForm from "./pages/ModifyForm";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/itemform" element={<ItemForm />} />
        <Route path="/modifyform" element={<ModifyForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
