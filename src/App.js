import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import ChangeName from "./redux/actions/ChangeName";

function App() {
  let dispatch = useDispatch();

  const state = useSelector((state) => state);

  const handleChangeName = () => {
    dispatch(
      ChangeName({
        name: "Gouré",
        lastName: "Mangli",
      })
    );
  };
  return (
    <div className="App">
      <div className="input">
        <input type="text" placeholder="Inserer un nom" />
        <input onClick={handleChangeName} type="submit" />
      </div>
      <div>
        <h1>My name is {state.name}</h1>
      </div>
    </div>
  );
}

export default App;
