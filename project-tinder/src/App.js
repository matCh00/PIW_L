import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddAnnouncement from "./Pages/AddAnnouncement";
import AddGroup from "./Pages/AddGroup";
import SearchGroups from "./Pages/SearchGroups";
import SendMessage from "./Pages/SendMessage";

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/add-announcement" element={<AddAnnouncement></AddAnnouncement>}></Route>
        <Route path="/search-groups" element={<SearchGroups></SearchGroups>}></Route>
        <Route path="/add-group" element={<AddGroup></AddGroup>}></Route>
        <Route path="/send-message" element={<SendMessage></SendMessage>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
