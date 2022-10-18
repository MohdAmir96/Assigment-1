import React from 'react'
import './Header.css'
import HeaderItem from './HeaderItem'
function Header() {

  const HeaderList = [
    {
       title : 'Up to 60% off | Last chance to grab offers on TVs',
      img : 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/TVs/Jup22/Kamya/1_PC_CategoryCard_758X608_D._SY304_CB607449290_.jpg'
    },
    {
       title : 'Up to 60% off | Last chance to grab offers on TVs',
      img : 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/LA/Jupiter22/GW/P3/Ref-PC-CC-1x._SY304_CB609048397_.jpg'
    },
    {
       title : 'Up to 60% off | Last chance to grab offers on TVs',
      img : 'https://m.media-amazon.com/images/I/51DLLa8HNWL._AC_SY200_.jpg'
    },
    {
       title : 'Up to 60% off | Last chance to grab offers on TVs',
      img : 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/TVs/Jup22/Kamya/1_PC_CategoryCard_758X608_D._SY304_CB607449290_.jpg'
    }
  ]
  console.log(HeaderList);
  return (
    <div className='header-container' >
     {
    HeaderList.map (item=>
     
      <HeaderItem
      title ={item.title}
      img = {item.img}
      />
    )

     }
    </div>
  )
}

export default Header
