import React from 'react';
import './App.scss';
import BoardContainer from '../components/BoardContainer/BoardContainer';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Auth from '../components/Auth/Auth';

function App() {
  return (
    <div className="App">
      <h2>PIN THE TREST</h2>
      <MyNavbar/>
      <Auth/>
      <BoardContainer/>
    </div>
  );
}

export default App;
