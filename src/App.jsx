import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Category from './Pages/Category';
import CategoryView from './Pages/CategoryView';
import { AddTocart } from './Context/Addtocart';
import { MenuProvider } from './Context/MenuProvider';
import { DataAddtocart } from './Context/DataAddtoCart';
import CustomCursor from './CustomCursor';

function App() {

  const [count, setCount] = useState(0)

  AOS.init({
    duration: 900,
    once: true,
    offset: 0,
  });


  return (
    <> 
      <DataAddtocart>
        <MenuProvider>
          <AddTocart>
            <BrowserRouter>
            <CustomCursor/>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category' element={<Category />} />
                <Route path='/categoryView/:id' element={<CategoryView />} />
              </Routes>
            </BrowserRouter>
          </AddTocart>
        </MenuProvider>
      </DataAddtocart> 
    </>
  )
}

export default App
