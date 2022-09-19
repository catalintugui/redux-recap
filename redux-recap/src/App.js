import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from './actions';

function App() {
  const score = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      Your score is: {score}
      <div>
        <button onClick={() => dispatch(increment())}>PLUS +</button>
        <button onClick={() => dispatch(decrement())}>MINUS -</button>
      </div>
    </div>
  );
}

export default App;
