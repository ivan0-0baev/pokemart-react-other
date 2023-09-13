import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Theme from './components/Theme';
import Categories from './components/Categories';

function App() {

  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })
  const [orderAlphabetical, setOrderAlphabetical] = useState(0);
  const [orderPrice, setOrderPrice] = useState(0);
  const [categories, setCategories] = useState(["All"]);

  return (
    <div>
      <div className="App d-flex flex-nowrap">
        
        <div className=''>
          <div id='sidebar' className='d-flex flex-nowrap h-100 d-inline-block'>
            <Sidebar setPriceRange={setPriceRange} setOrderAlphabetical={setOrderAlphabetical} setOrderPrice={setOrderPrice}></Sidebar>
          </div>
        </div>
        <div id='content' className='w-100'>
          <div id="header" className='mt-3'>
            <Header></Header>
            <Theme></Theme>
          </div>
          <div id='body'>
            <Body priceRange={priceRange} orderAlphabetical={orderAlphabetical} orderPrice={orderPrice} categories={categories}></Body>
          </div>
        </div>
        <Categories categories={categories} setCategories={setCategories}></Categories>
      </div>
    </div>
    
  );
}

export default App;
