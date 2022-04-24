import { useReducer, createContext } from "react";


// CONTEXT - LISTA OBSERWOWAŃ
export const CartContext = createContext([{}, () => {}]);


// stan początkowy
export const initState = {
  people: [],
  groups: [],
};

// core reducera
export const reducer = (state, action) => {
  const { type, person, group, id } = action;

  switch (type) {
    case "ADD_P":
      if (
        state.people.find((p) => {
          return p.id === person.id;
        })
      ) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          people: [...state.people, person],
        };
      }

    case "REMOVE_P":
      let filtered = [];
      for (const followed of state.people) {
        if (followed.id !== id) {
          filtered = [...filtered, followed];
        }
      }
      return {
        ...state,
        people: filtered,
      };

    case "CLEAR_P":
      return {
        ...state,
        people: [],
      };

    case "ADD_G":
      if (
        state.groups.find((g) => {
          return g.id === group.id;
        })
      ) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          groups: [...state.groups, group],
        };
      }

    case "REMOVE_G":
      let filter = [];
      for (const followed of state.groups) {
        if (followed.id !== id) {
          filter = [...filter, followed];
        }
      }
      return {
        ...state,
        groups: filter,
      };

    case "CLEAR_G":
      return {
        ...state,
        groups: [],
      };

    default:
      throw new Error(`unknown action ${action.type}`);
  }
};


// PROVIDER
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
