import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginContainer from './components/LoginContainer/LoginContainer';
import RegisterContainer from './components/RegisterContainer/RegisterContainer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginContainer></LoginContainer>
        </Route>
        <Route path="/login">
          <LoginContainer></LoginContainer>
        </Route>
        <Route path="/register">
          <RegisterContainer></RegisterContainer>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
