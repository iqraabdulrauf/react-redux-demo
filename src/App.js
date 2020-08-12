import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './components/redux-demo/store';
import CakeContainer from './components/CakeContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
      </div>
    </Provider>
  );
}

export default App;


