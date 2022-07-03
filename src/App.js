import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from './actions';


function App() {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">

        <h1>Increment/Decrement counter</h1>
        <h4>Using React Redux</h4>

        <div className="quantity">
          <a className="quantity-minius" title="Decrement"
            onClick={() => dispatch(decNumber())} ><span>-</span></a>
          <input name="quantity" type="text" className="quantity__input" value={myState} />
          <a className="quantity__plus" title="Increment"
            onClick={() => dispatch(incNumber())} ><span>+</span></a>
        </div>
      </div>
    </>
  );
}

export default App;
