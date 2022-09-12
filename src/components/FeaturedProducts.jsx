import React from 'react'
import Bomba from  '../assets/logo.png'


const FeaturedProducts = () => {
  
   

    const callouts = [
        {
          name: 'Lorem ',
          description: 'Lorem ipsum dolor sit amet consectetur.',
          imageSrc: 'https://images.pexels.com/photos/4440143/pexels-photo-4440143.jpeg?cs=srgb&dl=pexels-cang-hai-4440143.jpg&fm=jpg',
          imageAlt: 'Lorem ipsum dolor sit amet consectetur.',
          href: '#',
        },
        {
          name: 'Lorem ',
          description: 'Lorem ipsum dolor sit amet consectetur.',
          imageSrc:  'https://images.pexels.com/photos/4440143/pexels-photo-4440143.jpeg?cs=srgb&dl=pexels-cang-hai-4440143.jpg&fm=jpg',
          imageAlt: 'Lorem ipsum dolor sit amet consectetur.',
          href: '#',
        },
        {
          name: 'Lorem ',
          description: 'Lorem ipsum dolor sit amet consectetur.',
          imageSrc:  'https://images.pexels.com/photos/4440143/pexels-photo-4440143.jpeg?cs=srgb&dl=pexels-cang-hai-4440143.jpg&fm=jpg',
          imageAlt: 'Lorem ipsum dolor sit amet consectetur.',
          href: '#',
        },
      ]
  
    return (
    <div>
        <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl font-bold text-gray-900 font-ubuntu text-center">Productos <span className='underline underline-offset-8 rounded-full p-1 bg-indigo-200'>destacados</span></h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500 text-center font-ubuntu">
                  <a href={callout.href}> 
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900 text-center font-ubuntu">{callout.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500 text-center font-ubuntu">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900 text-center font-ubuntu">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FeaturedProducts