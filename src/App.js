

import './App.css';
import BelowHeader from './BelowHeader';
import Header from './Header';
import Hotel from './Hotel';
import { useState } from 'react';
import hoteldata from './stays.json'



function App() {
  const [hotelList, setstate] = useState([...hoteldata]);
  return (
    <div className="container">
     <Header />
     <BelowHeader />
     <Hotel hotelList={hotelList}/>
    </div>
  );
}

export default App;
