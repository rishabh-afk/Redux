import { useEffect } from "react";
import Header from "../component/Header";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/slice/cartSlice";
import { toast } from "react-toastify";
import { fetchProducts } from "../store/slice/productSlice";
import { STATUS } from "../store/slice/productSlice";

function Home() {
  const disptach = useDispatch();
  const product = useSelector((state) => state.product.data);
  const status = useSelector((state) => state.product.status);
  useEffect(() => {
    disptach(fetchProducts());
  }, [disptach]);

  const addtocart = (product) => {
    try {
      disptach(add(product));
      toast.success("Added to Cart added successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  if (status === STATUS.LOADING) {
    return (
      <div className="h-full">
        <h1 className="flex justify-center items-center text-5xl mt-[20%] text-amber-600 font-semibold">
          Loading...
        </h1>
      </div>
    );
  }
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
                onClick={() => addtocart(product)}
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
