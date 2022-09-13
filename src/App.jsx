import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
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
          <FeaturedProducts />
          <AboutUs />
          <MainProducts />
         <Footer />
        </main> 
    </>
  )
}

export default App
