import {useState} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { PhoneIcon, CalendarIcon, EmailIcon } from "@chakra-ui/icons";
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import Bomba from '../../assets/bomba.jpg'
import Bomba1 from '../../assets/bomba1.png'
import Bomba2 from '../../assets/bomba-2.png'
import Bomba3 from '../../assets/bomba-3.png'

const product = {
  name: 'Bomba template',
  price: '$123',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Productos', href: '#' },
    { id: 2, name: 'Bombas', href: '#' },
  ],
  images: [
    {
      src: "https://www.ares.com.ar/css/images/DS6.png",
      alt: 'desc',
    },
    {
      src: "https://www.ares.com.ar/css/images/LK7.png",
      alt: 'desc',
    },
    {
      src: "https://www.ares.com.ar/css/images/Bomba%20dosificadora.png",
      alt: 'desc',
    },
    {
      src: "https://ares.com.ar/carousel/productos/img/BombaDX%20450x450.png",
      alt: 'desc',
    },
  ],
  sizes: [
    { name: '1/2"', inStock: false },
    { name: '3/4"', inStock: true },
    { name: '1"', inStock: true },
    { name: '1 1/4"', inStock: true },
    { name: '1 1/2"', inStock: true },
    { name: '2"', inStock: true },
    { name: '2 1/4"', inStock: true },
    { name: '2 1/2"', inStock: true },
  ],
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate odio quos harum laudantium? Cumque omnis atque error, mollitia ipsa exercitationem.',
    
  highlights: [
    'Lorem ipsum dolor sit, amet consectetur',
    'Lorem ipsum dolor sit, amet consectetur',
    'Lorem ipsum dolor sit, amet consectetur',
    'Lorem ipsum dolor sit, amet consectetur',
  ],
  details:
    'Lorem ipsum dolor sit, amet consectetur',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const ProductoBase = () => {
  
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    
    <>
    <div className="bg-indigo-200 p-3 font-ubuntu">
        <div className="font-bold">
          <CalendarIcon className="ml-5" />Lun a Vie de 08:00 a 17:00
          <PhoneIcon className="ml-5" /> +549(11)47606060
          <EmailIcon className="ml-4" /> <a target="_blank" href="mailto:ventas@ares.com.ar">ventas@ares.com.ar</a>
        </div>
      </div>
      <div className="z-10 sticky top-0">
        <Navbar key="key-nav" />
      </div>
    
      <div className="bg-white mt-24  ">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Galeria de imagenes */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Info del producto */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Opciones */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
            

            <form className="mt-10">
              {/* Descargas */}
              <div>
                <h3 className="text-sm text-gray-900 font-bold font-ubuntu">Descargas</h3>

                <RadioGroup className="mt-4">
                  <RadioGroup.Label className="sr-only">Descargas disponibles </RadioGroup.Label>
                  <div className='flex justify-around'>
                    <a className='mr-2 font-bold font-ubuntu h-6 w-32 text-center bg-indigo-100 rounded-3xl cursor-pointer'>Ficha Técnica</a>
                    <a className='mr-2 font-bold font-ubuntu h-6 w-16 text-center bg-indigo-100 rounded-3xl cursor-pointer'>Folleto</a>
                  </div>
                </RadioGroup>
              </div>

              {/* Hp */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Potencia</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    ¿Qué son los HP?
                  </a>
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                              : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Comprar
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Detalles y desc */}
            <div>
              <h3 className="sr-only">Descripción</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Ventajas</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Detalles</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <Footer />
    </>
  )
}

export default ProductoBase