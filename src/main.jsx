import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductoBase from './components/products/ProductoBase'
import Contacto from './components/Contacto'
import Nosotros from './components/Nosotros'
import Aplicaciones from './components/Aplicaciones/Aplicaciones'
import Servicios from './components/Servicios/Servicios'
import Novedades from './components/Novedades/Novedades'
import NovedadesBase from './components/Novedades/NovedadesBase'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    
      <ChakraProvider>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/productoBase" element={<ProductoBase />} />
            <Route exact path="/contacto" element={<Contacto />} />
            <Route exact path="/nosotros" element={<Nosotros />} />
            <Route exact path="/aplicaciones" element={<Aplicaciones />} />
            <Route exact path="/servicios" element={<Servicios />} />
            <Route exact path="/novedades" element={<Novedades />} />
            <Route exact path="/novedades/base" element={<NovedadesBase />} />
            
        </Routes>
          
        </BrowserRouter>
      </ChakraProvider>
    
      
  </React.StrictMode>
)
