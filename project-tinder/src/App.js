import "./assets/App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentsViewPage from "./pages/StudentsViewPage";
import GroupsViewPage from "./pages/GroupsViewPage";
import StudentNoticePage from "./pages/StudentNoticePage";
import GroupNoticePage from "./pages/GroupNoticePage";
import MessagePage from "./pages/MessagePage";
import DatabaseService from "./services/DatabaseService";
import StudentPage from "./pages/StudentPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./contexts/CartContext";
import { UserProvider } from "./contexts/UserContext";


const App = () => {

  // sprawdzanie połączenia z bazą danych
  // useEffect(() => {
  //   DatabaseService.checkConnection();
  // }, []);

  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<StudentsViewPage />}></Route>
            <Route path="/student-notice" element={<StudentNoticePage />}></Route>
            <Route path="/search-groups" element={<GroupsViewPage />}></Route>
            <Route path="/group-notice" element={<GroupNoticePage />}></Route>
            <Route path="/send-message/:id" element={<MessagePage />}></Route>
            <Route path="/student-page/:id" element={<StudentPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
