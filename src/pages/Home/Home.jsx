import React from 'react'
import Navbar from '../../component/Navbar';
import Announcement from '../../component/Announcement';
import Slider from '../../component/Slider';
import Categories from '../../component/categories';
import Products from '../../component/Products';
import NewsLatter from '../../component/NewsLatter';
import Footer from '../../component/Footer';



export default function Home() {
  return (
    <div className='container'>
      <Announcement/>
      <Navbar/> 
      <Slider/>
      <Categories />
      <Products/>
      <NewsLatter/>
      <Footer/>
    </div>
  )
}
