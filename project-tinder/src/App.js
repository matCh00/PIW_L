import "./assets/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchStudents from "./pages/SearchStudents";
import SearchGroups from "./pages/SearchGroups";
import AddAnnouncement from "./pages/AddAnnouncement";
import AddGroup from "./pages/AddGroup";
import SendMessage from "./pages/SendMessage";

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<SearchStudents />}></Route>
        <Route path="/add-announcement" element={<AddAnnouncement />}></Route>
        <Route path="/search-groups" element={<SearchGroups />}></Route>
        <Route path="/add-group" element={<AddGroup />}></Route>
        <Route path="/send-message" element={<SendMessage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
