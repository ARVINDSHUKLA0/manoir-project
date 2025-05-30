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
import { Link } from 'react-router-dom';

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

      <section className='py-lg-5 custom-block-bg'>
        <Slider {...ProductSlider} r>
          {
            ProductArr.map((item, index) => (
              <div className='px-2 position-relative' key={index}>
                <div className='product-warpper'>
                  <img src={item.ProdcutImg} alt="" />
                </div>
                <div className='border-left-custom'>
                  <h5 className='text-uppercase py-2'>seasonal sakura</h5>
                  <h4 className='text-capitalize'>Japan</h4>
                  <p className=' py-2 m-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis molestias aliquam amet, deleniti molestiae asperiores culpa porro praesentium exercitationem reprehenderit! Placeat quod nesciunt veniam. Molestiae impedit doloremque tempora laudantium porro fuga ratione sequi nemo. Fugiat excepturi praesentium dolore commodi recusandae.</p>
                  <p>
                    <Link className=' text-white text-capitalize m-0 p-0'>discover over</Link>
                  </p>
                </div>
              </div>
            ))
          }
        </Slider>
      </section>

      <Footer />

    </>
  )
}

export default Home