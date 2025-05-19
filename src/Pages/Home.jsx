import React from 'react'
import '../PagesStyle/Home.css'
import Navbar from '../Component/Navbar'
import Banner from '../Component/Banner'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductOne from '/assets/img/Product1.webp'
import ProductTwo from '/assets/img/Product2.webp'
import ProductThree from '/assets/img/Product3.webp'
import Footer from '../Component/Footer';

const Home = () => {
  
  const ProductArr = [
    { id: 1, ProdcutImg: ProductOne, name: "kintsu" },
    { id: 1, ProdcutImg: ProductTwo, name: "bird" },
    { id: 1, ProdcutImg: ProductThree, name: "mougin" },
  ]
  const ProductSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Navbar />
      <Banner />

      <section className='py-lg-5 py-3'>
        <Slider {...ProductSlider} r>
          {
            ProductArr.map((item, index) => (
              <div className='px-2 position-relative' key={index}>
                <div className='product-warpper'>
                  <img src={item.ProdcutImg} alt="" />
                </div>
                <div className='product-home-postion'>
                  <p className='text-uppercase text-white fs-6 fw-bolder'>{item.name}</p>
                  <button className='px-4 py-2 border-0 text-uppercase fs-12 fw-bold'>view products</button>
                </div>
              </div>
            ))
          }
        </Slider>
      </section>

      <Footer/>

    </>
  )
}

export default Home