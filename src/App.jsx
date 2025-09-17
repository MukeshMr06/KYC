import React from "react";
import KYC from "./KYC";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navebar from "./Navebar";
import Help from "./Help";
import Setting from "./Setting";
import Support from "./Support";
import Popup from "./Popup";
import Popup2 from "./Popup2";
import Popup3 from "./Popup3";
import Popup4 from "./Popup4";
import Popup5 from "./Popup5";

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
        <Route path="/popsecond" element={<Popup2 />}></Route>
        <Route path="/popthird" element={<Popup3 />}></Route>
        <Route path="/popfour" element={<Popup4 />}></Route>
        <Route path="/popfive" element={<Popup5 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
