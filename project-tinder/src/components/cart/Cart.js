import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import chatting1 from "../../assets/images/chatting1.png";
import chatting2 from "../../assets/images/chatting2.png";


const Cart = () => {

  // CONTEXT
  const cartContext = useContext(CartContext);

  // REDUCER Z CONTEXT: usunięcie z obserwowanych
  const handleRemoveP = (s) => {
    cartContext.dispatch({ type: "REMOVE_P", id: s.id });
  };
  const handleRemoveG = (g) => {
    cartContext.dispatch({ type: "REMOVE_G", id: g.id });
  };

  
  return (
    <div className="cart__container">
      <div className="cart__subContainer">
        <h3> People: </h3>

        {cartContext.state.people.length !== 0 
        ? 
        (
          <>
            {cartContext.state.people.map((s) => (
              <div className="cart__element">
                <div className="cart__elementHeader">
                  <h2> {s.name} </h2>
                  <Link
                    to={"/student-page/" + s.id}
                    state={{ student: s }}
                    key={s.id + "_cart"}
                    title="View this student's page"
                  >
                    <img
                      className="cart__image"
                      id={s.id + "_image"}
                      src={JSON.parse(localStorage.getItem(s.id + "_image"))}
                    />
                  </Link>
                </div>

                <button
                  name="cartButton"
                  className="button cart__button"
                  onClick={() => handleRemoveP(s)}
                  key={s.id + "_cartStudentButton"}
                  id={s.id + "_cartStudentButton"}
                >
                  Unfollow
                </button>
              </div>
            ))}
          </>
        ) 
        : 
        (
          <>
            <main>
              <h2>No people followed</h2>
            </main>
          </>
        )}
      </div>

      <div className="cart__subContainer2">
        <h3> Groups: </h3>

        {cartContext.state.groups.length !== 0 
        ? 
        (
          <>
            {cartContext.state.groups.map((g) => (
              <div className="cart__element">
                <h2> {g.name} </h2>

                <div className="cart__elementHeader">
                  <button
                    name="cartButton"
                    className="button cart__button"
                    onClick={() => handleRemoveG(g)}
                    key={g.id + "_cartGroupButton"}
                    id={g.id + "_cartGroupButton"}
                  >
                    Unfollow
                  </button>

                  <Link
                    to={"/send-message/" + g.id}
                    key={g.id + "_cart"}
                    className="showGroups__elementLink"
                    title="Send a message to this group"
                  >
                    <img
                      src={chatting1}
                      title="Send a message to this group"
                      id="chattingIconCart"
                      onMouseOver={(e) => (e.currentTarget.src = chatting2)}
                      onMouseOut={(e) => (e.currentTarget.src = chatting1)}
                    ></img>
                  </Link>
                </div>
              </div>
            ))}
          </>
        ) 
        : 
        (
          <>
            <main>
              <h2>No groups followed</h2>
            </main>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
