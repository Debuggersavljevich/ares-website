import Logo from '../assets/logo.png'
import ItemsFooterContainer from './FooterProps/ItemsFooterContainer'


const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
        <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-white py-7'>
            <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leding-normal font-semibold font-ubuntu md:2/5'>
              <img src={Logo} alt="" className='h-9 cursor-pointer ml-14' />
            </h1>
        </div>
        <ItemsFooterContainer></ItemsFooterContainer>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-2'>
        <span>© 2022 Ares. Todos los derechos reservados.</span>
        <span>Términos · Política de privacidad</span>
        <div className="flex justify-around">
          <span className='m-2 text-3xl text-teal-200 cursor-pointer rounded-full mx-1.5'>
            <ion-icon name="logo-linkedin"></ion-icon>
          </span>
          <span className='m-2 text-3xl text-teal-200 cursor-pointer rounded-full mx-1.5'>
          <ion-icon name="logo-facebook"></ion-icon>
          </span>
        </div>
        </div>
        
    </footer>
  )
}

export default Footer