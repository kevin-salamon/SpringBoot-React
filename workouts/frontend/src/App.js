// import Header from './Components/Header';
import { Provider } from 'react-redux';
import store from './store';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Pages/Login';
import { useEffect } from 'react';
// import './Styles/index.scss';

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
`;

function App() {

  return (
    <Router>
      <>
        <Provider store={store}>
          <StyledApp>
            <Switch>
              <Route exact path='/' component={Login}/>
              {/* <Route exact path='/overview' component={Overview}/> */}
            </Switch>
          </StyledApp>
        </Provider>
      </>
    </Router>
  );
}

export default App;
