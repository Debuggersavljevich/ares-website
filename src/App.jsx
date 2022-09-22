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
