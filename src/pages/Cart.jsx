import { useEffect, useState } from "react";
import Header from "../component/Header";

const Cart = () => {
  const [product, setProduct] = useState([]);
  const handlesubmit = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    setProduct(products);
  };
  useEffect(() => {
    handlesubmit();
  }, []);
  return (
    <>
      <Header />
      <div className="m-8">
        {product.map((product) => {
          return (
            <div
              key={product.id}
              className="w-full mb-5 border border-amber-600 shadow-amber-600 shadow-sm rounded items-center flex justify-start gap-10 p-4"
            >
              <img src={product.image} alt="" className="h-24 aspect-square" />
              <p className="text-sm py-4 w-1/2">{product.description}</p>
              <p className="w-1/4 text-center">Rs. {product.price}</p>
              <button
                // onClick={() => addtocart(product.id)}
                className="text-white text-lg bg-red-500 px-6 py-2 w-fit rounded"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
