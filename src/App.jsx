import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import CarouselFeaturedProducts from "./components/CarouselFeaturedProducts"
import AboutUs from "./components/AboutUs"
import MainProducts from "./components/MainProducts"



function App() {

  return (
    <>
      <div className="relative z-10">
        <Navbar />
      </div> 
        
        <main>    
          <Hero />
          <div className="text-center m-5">
          <h2 className="font-bold tracking-tight text-indigo-600 text-3xl">Productos Destacados</h2>

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
