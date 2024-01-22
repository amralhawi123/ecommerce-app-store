import React from 'react'
import Slider from '../../Componanet/Home/Slider';
import HomeCategory from './../../Componanet/Home/HomeCategory';
import CardProductContainer from './../../Componanet/Products/CardProductContainer';
import DiscountSeaction from './../../Componanet/Home/DiscountSeaction';
import BrandFeatured from './../../Componanet/Brand/BrandFeature';
import ViewHomeProductHook from '../../hook/product/view-home-product-hook';

const HomePages = () => {

   const [items] = ViewHomeProductHook()
   
   return (
      <div>
         <Slider/>
         <HomeCategory/>
         <CardProductContainer product={items} title="الأكثر مبيعاً" btntitle="المزيد" pathtext="/products"/>
         <DiscountSeaction/>
         <CardProductContainer product={items} title="أحدث الأزياء" btntitle="المزيد" pathtext="/products"/>
         <BrandFeatured title="أشهر الماركات" btntitle="المزيد"/>
      </div>
   )
}

export default HomePages