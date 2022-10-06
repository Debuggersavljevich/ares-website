import React from 'react'

const ItemCarousel = () => {

    const products = [
        {
          id: 1,
          name: 'Bomba',
          href: '#',
          imageSrc: 'https://ares.com.ar/carousel/productos/img/BombaDX%20450x450.png',
          imageAlt: "lorem",
          price: '$123',
          color: 'lorem',
        }, {
          id: 1,
          name: 'Bomba',
          href: '#',
          imageSrc: 'https://ares.com.ar/carousel/productos/img/BombaDX%20450x450.png',
          imageAlt: "lorem",
          price: '$123',
          color: 'lorem',
        }, {
          id: 1,
          name: 'Bomba',
          href: '#',
          imageSrc: 'https://ares.com.ar/carousel/productos/img/BombaDX%20450x450.png',
          imageAlt: "lorem",
          price: '$123',
          color: 'lorem',
        }, {
          id: 1,
          name: 'Bomba',
          href: '#',
          imageSrc: 'https://ares.com.ar/carousel/productos/img/BombaDX%20450x450.png',
          imageAlt: "lorem",
          price: '$123',
          color: 'lorem',
        }, {
          id: 1,
          name: 'Bomba',
          href: '#',
          imageSrc: 'https://ares.com.ar/carousel/productos/img/BombaDX%20450x450.png',
          imageAlt: "lorem",
          price: '$123',
          color: 'lorem',
        },
      ]


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="mt-6 flex justify-center w-full ">
          {products.map((product) => (
            <div key={product.id} className="group relative m-1">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ItemCarousel