import Navbar from "./components/Navbar"
import ContactButton from "./components/ContactButton"
import Footer from "./components/Footer"


function App() {

  return (
    <div>
  
        <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center">
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <h2 className="text-black text-2xl font-medium ">Lorem, ipsum.</h2>
        <h1 className="md:text-5xl text-3xl text-black font-semibold py-5">
          Lorem ipsum dolor sit amet.
        </h1>
        <div className="text-xl">
        </div>
      </div>
    </section>
     


     
        <Footer />
      
    </div>
  )
}

export default App
