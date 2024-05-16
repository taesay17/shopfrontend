import React, { useContext } from 'react'
import { ShopContext } from '../Contexts/ShopContent'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import all_product from '../Components/Assets/all_product';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productid} = useParams();
  const product = all_product.find((e)=> e.id === Number(productid));
  const image_array = [all_product]
  return (
    <div>
        <Breadcrum product={product}/>
        <ProductDisplay product={image_array}/>
        <DescriptionBox/>
        <RelatedProducts/>
    </div>
  )
}

export default Product