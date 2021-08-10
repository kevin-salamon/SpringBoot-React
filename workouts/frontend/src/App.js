import Body from './Components/Body';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import store from './store';
import './Styles/index.scss';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header/>
        <Body/>
      </div>
    </Provider>
  );
}

export default App;
