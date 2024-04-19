import  { useEffect, useState } from "react";
import Card from "../assets/Card";


const MyCard = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
    fetch("https://dummyjson.com/products")
        .then(result => result.json())
        .then((data) => {
            setProducts(data.products);
        });
}, []); //only one time call

  return( 
    <>
    <div>
    </div>
    
    
    <div className="d-flex justify-content-between flex-wrap">
         {products.map(product =>
        <Card
        key={product.id}
           title = {product.title}
           description = {product.description}
           price = {product.price}
           brand = {product.brand}
           thumbnail = {product.thumbnail}
        />)}
  </div>
  </>
)
};

export default MyCard;