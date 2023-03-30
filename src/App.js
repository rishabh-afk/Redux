import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
