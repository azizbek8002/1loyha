import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {  Footer, Header, InfoContent, Products } from '../../component';

const Info = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  async function getData() {
    return await fetch(`${import.meta.env.VITE_API_URL}/products?id=${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }

  useEffect(() => {
    getData();
  }, [id]);

  console.log(product);
  return (
    <div>
      <Header />
      <InfoContent product={product} />
      <Products/>
      <Footer/>
    </div>
  );
};

export default Info;
