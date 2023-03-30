import Header from "../component/Header";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/slice/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.cart);
  const removeFromCart = (id) => {
    try {
      dispatch(remove(id));
      toast.success("Removed successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  if (product.length === 0) {
    navigate("/");
  }
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
                onClick={() => removeFromCart(product.id)}
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
