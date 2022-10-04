import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import CarouselFeaturedProducts from "./components/CarouselFeaturedProducts"
import AboutUs from "./components/AboutUs"
import { PhoneIcon, CalendarIcon, EmailIcon } from "@chakra-ui/icons";
import Nosotros from './components/Nosotros'



function App() {

  return (
    <>
      


     <div className="bg-indigo-200 p-3 font-ubuntu flex justify-end">
        <div className="font-bold">
          <CalendarIcon className="ml-5 mr-1" />Lun a Vie de 08:00 a 17:00
          <PhoneIcon className="ml-5" /> +549(11)47606060
          <EmailIcon className="ml-4" /> <a target="_blank" href="mailto:ventas@ares.com.ar">ventas@ares.com.ar</a>
        </div>
      </div>

      <div className="z-10 sticky top-0">
        <Navbar key="key-nav" />
      </div> 
        
      <main>    
          <Hero />
          <div className="text-center">
            <h2 className=" m-20 text-4xl font-bold tracking-tight text-indigo-700 sm:text-5xl md:text-6xl">Nuestra Historia</h2>
            <Nosotros />
            
          </div>

          <div className="text-center mt-10">
            <h2 className="m-20 text-4xl font-bold tracking-tight text-indigo-700 sm:text-5xl md:text-6xl">Productos Destacados</h2>
            
            <CarouselFeaturedProducts />
          </div>
          <AboutUs />
         <Footer />
         
      </main> 
      
    </>
  )
}

export default App
