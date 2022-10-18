import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './Header/Header';
import Offers from './components/Offer/Offers';
import Recommendation from './components/Recommendation/Recommendation';


function App() {
  return (    
    <div>
      <Navigation/>
      <Header/>
      <Offers/>
      <Recommendation/>
      
    </div>
  );
}

export default App;
