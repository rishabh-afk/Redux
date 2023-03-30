import { useEffect, useState } from "react";
import Header from "../component/Header";

function Home() {
  const [product, setProduct] = useState([]);
  const handlesubmit = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    setProduct(products);
  };
  const addtocart = (id) => {
    console.log(id);
  };
  useEffect(() => {
    handlesubmit();
  }, []);

  return (
    <div>
      <Header />
      <h1 className="mx-8 mt-8 text-3xl font-semibold text-amber-600">
        ALL PRODUCTS
      </h1>
      <div className="flex m-8 flex-row justify-between gap-6 flex-wrap">
        {product.map((product) => {
          return (
            <div
              key={product.id}
              className="w-full md:w-[48%] lg:w-[23.5%] border hover:shadow-lg hover:shadow-amber-600 border-amber-600 shadow-amber-600 shadow-md rounded items-center flex flex-col justify-center p-6"
            >
              <img src={product.image} alt="" className="h-56" />
              <p className="text-xs py-4">{product.description.slice(0, 50)}</p>
              <p className="text-left">Rs. {product.price}</p>
              <button
                onClick={() => addtocart(product.id)}
                className="text-white bg-red-500 px-4 py-1 w-fit rounded"
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
