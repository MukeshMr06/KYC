import React from "react";
import KYC from "./KYC";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navebar from "./Navebar";
import Help from "./Help";
import Setting from "./Setting";
import Support from "./Support";
import Popup from "./Popup";

const App = () => {
  return (
    <BrowserRouter>
      <Navebar />
      <Routes>
        <Route path="/" element={<KYC />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/pop" element={<Popup />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
