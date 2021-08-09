import Routing from './Pages/Routing';
import { Provider } from 'react-redux';
import store from './store';
import './Styles/index.scss';

function App() {
  return (
    <Provider store={store}>
      <Routing/>
    </Provider>
  );
}

export default App;
