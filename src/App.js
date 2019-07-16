import React from 'react';
import Header from './components/header/Header'
import SearchLocation from './components/slider/Slider'
import CarouselProducts from './components/carousel/ProductCarousel'
import Services from './components/services/Services'
import Cities from './components/cities/Cities'
import Categories from './components/categories/Categories'
import Footer from './components/footer/Footer'
import Data from './menu'
import './styles/app.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <SearchLocation />
      <CarouselProducts data={Data} />
      <Services />
      <Cities />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
