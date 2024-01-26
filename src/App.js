import { useReducer } from "react";
import "./App.css";

const initialState = {
  name: "Prasanth",
  age: 25,
};

const reducer = (state, action) => {
  switch(action.type){
    case 'name':
      return {...state, name : action.payload.name}
    case 'age':
      return {...state, age: action.payload.age}
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <input type="text" value={state.name} onChange={(e) => dispatch({type:'name', payload:{name: e.target.value}})}/>
      <input type="number" value={state.age} onChange={(e) => dispatch({type:'age', payload:{age: e.target.value}})}/>
    </>
  );
}

export default App;
