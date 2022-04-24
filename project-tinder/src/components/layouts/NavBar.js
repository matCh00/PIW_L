import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import "../../assets/Layouts.css";


const NavBar = () => {

  // użytkownik
  const { user, setUser, userLS, setUserLS } = useContext(UserContext);

  // nawigowanie po stronach
  let navigate = useNavigate();


  // CONTEXT
  const cartContext = useContext(CartContext);

  // REDUCER Z CONTEXT: wyczyszczenie listy obserwowanych studentów i grup
  const clearCart = () => {
    cartContext.dispatch({ type: "CLEAR_P" });
    cartContext.dispatch({ type: "CLEAR_G" });
  };

  
  const logout = () => {
    setUser(null);
    setUserLS(null);
    clearCart();
    navigate("/login");
  };

  return (
    <nav className="navBar">
      <div className="navBar__container">
        <ul className="navBar__menu">
          <li className="navBar__item">
            <Link to="/" className="navBar__links" id="home-page">
              Search for people
            </Link>
          </li>

          {user && (
            <li className="navBar__item">
              <Link
                to="/student-notice"
                className="navBar__links"
                id="student-notice-page"
              >
                New student notice
              </Link>
            </li>
          )}

          {user && (
            <li className="navBar__item">
              <Link
                to="/search-groups"
                className="navBar__links"
                id="search-groups-page"
              >
                Search for groups
              </Link>
            </li>
          )}

          {user && (
            <li className="navBar__item">
              <Link
                to="/group-notice"
                className="navBar__links"
                id="add-group-page"
              >
                New group notice
              </Link>
            </li>
          )}

          {user && (
            <li className="navBar__item">
              <Link
                to="/login"
                className="navBar__links"
                id="add-group-page"
                onClick={logout}
              >
                Logout
              </Link>
            </li>
          )}

          {!user && (
            <li className="navBar__item">
              <Link to="/login" className="navBar__links" id="add-group-page">
                Login
              </Link>
            </li>
          )}

          {!user && (
            <li className="navBar__item">
              <Link
                to="/register"
                className="navBar__links"
                id="add-group-page"
              >
                Register
              </Link>
            </li>
          )}

          {user && (
            <li className="navBar__item">
              <Link to="/cart" className="navBar__links" id="cart-page">
                <h4>
                  Followed (
                  {cartContext.state.people.length +
                    cartContext.state.groups.length}
                  )
                </h4>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
