import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import CarouselFeaturedProducts from "./components/CarouselFeaturedProducts"
import AboutUs from "./components/AboutUs"
import MainProducts from "./components/MainProducts"
import { PhoneIcon, CalendarIcon } from "@chakra-ui/icons";


function App() {

  return (
    <>
     <div className="bg-indigo-200 text-center p-2 font-ubuntu">
        <div className="font-bold">
          <PhoneIcon /> +549(11)47606060
          <CalendarIcon className="ml-5" />Lun a Vie de 08:00 a 17:00
        </div>
      </div>

      <div className="z-10 sticky top-0">
        <Navbar />
      </div> 
        
      <main>    
          <Hero />
          <div className="text-center mt-10">
            <h2 className=" m-20 text-4xl font-bold tracking-tight text-indigo-700 sm:text-5xl md:text-6xl">Productos Destacados</h2>

            <CarouselFeaturedProducts />
          </div>
          <AboutUs />
          <MainProducts />
         <Footer />
      </main> 
    </>
  )
}

export default App
