import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductoBase from './components/products/ProductoBase'
import Contacto from './components/Contacto'
import Nosotros from './components/Nosotros'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    
      <ChakraProvider>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/productoBase" element={<ProductoBase />} />
            <Route exact path="/contacto" element={<Contacto />} />
            <Route exact path="/nosotros" element={<Nosotros />} />
            
        </Routes>
          
        </BrowserRouter>
      </ChakraProvider>
    
      
  </React.StrictMode>
)
