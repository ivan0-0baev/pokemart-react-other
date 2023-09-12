import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Theme from './components/Theme';

function App() {

  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })

  return (
    <div><Theme></Theme>
      <div className="App d-flex flex-nowrap">
        
        <div className=''>
          <div id='sidebar' className='d-flex flex-nowrap h-100 d-inline-block'>
            <Sidebar setPriceRange={setPriceRange}></Sidebar>
          </div>
        </div>
        <div id='content' className='w-100'>
          <div id="header" className='mt-3'>
            <Header></Header>
          </div>
          <div id='body'>
            <Body priceRange={priceRange}></Body>
          </div>
        </div>
        
      </div>
    </div>
    
  );
}

export default App;
