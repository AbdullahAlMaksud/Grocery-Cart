import './App.css'
import Header from './assets/Header/Header'
import Product from './assets/Product/Product'
import { useEffect, useState } from "react";
import Products from './assets/Products/Products';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
      fetch('products.json')
      .then((res)=>res.json())
      .then(data=>setProducts(data))
  },[])

  console.log(products);

  return (
    <>
    <Header></Header>

    <Products products={products}></Products>
    
    </>
  )
}

export default App
