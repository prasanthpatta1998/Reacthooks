import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

const initialState = {
  search: "",
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "search":
      return { ...state, search: action.payload.search };
    case "Add":
      return {
        ...state,
        items: [...state.items, { id: uuidv4(),item: action.payload.item }],
        search: "",
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  return (
    <>
      <input
        type="text"
        value={state.search}
        onChange={(e) =>
          dispatch({ type: "search", payload: { search: e.target.value } })
        }
      />
      <button
        onClick={() =>
          dispatch({ type: "Add", payload: { item: state.search } })
        }
      >
        Add
      </button>
      {state.items?.map((each, index) => (
        <div key={index} style={{display:'flex', alignItems:'center'}}>
          <h5>{each.item}</h5>
          <button style={{height:'30px'}}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
