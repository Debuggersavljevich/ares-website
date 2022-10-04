import Logo from '../assets/logo.png'
import ItemsFooterContainer from './FooterProps/ItemsFooterContainer'


const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
        
        <ItemsFooterContainer></ItemsFooterContainer>
        <div className='grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-2'>
        <span>© 2022 Ares. Todos los derechos reservados.</span>
        <span>Términos · Política de privacidad</span>
        <div className="flex justify-around">
          <span className='m-2 text-3xl text-teal-200 cursor-pointer rounded-full mx-1.5'>
          </span>
          <span className='m-2 text-3xl text-teal-200 cursor-pointer rounded-full mx-1.5'>
          </span>
        </div>
        </div>
        
    </footer>
  )
}

export default Footer