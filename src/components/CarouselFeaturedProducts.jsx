import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import ItemCarousel from './carouselFeaturedProducts/ItemCarousel';
import 'bootstrap/dist/css/bootstrap.min.css'

const items = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      src: 'https://ares.com.ar/carousel/productos/img/BombaDX%20450x450.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },{
      id: 1,
      name: 'Basic Tee',
      href: '#',
      src: 'https://ares.com.ar/carousel/productos/img/BombaDX%20450x450.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      src: 'https://ares.com.ar/carousel/productos/img/BombaDX%20450x450.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    
    
  ]

class CarouselFeaturedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
            <div className='bg-black'> 
                <ItemCarousel />
            </div>
        </CarouselItem>
      );
    });

    return (
       
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        
      >
        <CarouselIndicators className='hidden' items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        
          <CarouselControl className='' direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl className='' direction="next" directionText="Next" onClickHandler={this.next} />
        
      </Carousel>
      
    );
  }
}


export default CarouselFeaturedProducts;