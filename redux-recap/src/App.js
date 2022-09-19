import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from './actions';
import {login} from './actions'

function App() {
  const score = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const loggedIn = 'You are logged in';
  const loggedOut = 'You are logged out';
  const loginButton = 'Login';
  const logoutButton = 'Logout';

  return (
    <div className="App">
      <div>
        {isLogged ? <h2>{loggedIn}</h2> : <h2>{loggedOut}</h2>}
        <button onClick={() => dispatch(login())}>{isLogged ? logoutButton : loginButton}</button>
      </div>
      {isLogged &&
      <div>
        <h2>Your score is: {score}</h2>
        <div>
          <button onClick={() => dispatch(increment())}>PLUS +</button>
          <button onClick={() => dispatch(decrement())}>MINUS -</button>
        </div>
      </div>
      }
    </div>
  );
}

export default App;
