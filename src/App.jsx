import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"

function App() {

  return (
    <>
      <div className="relative z-10">
        <Navbar />
      </div> 
        
        <main>    
          <Hero />
          <FeaturedProducts />
      
         <Footer />
        </main> 
    </>
  )
}

export default App
