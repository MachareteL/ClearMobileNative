import Routes from "./src";
import CartContext from "./src/lib/cartContext";

export default function App() {
  return (
    <CartContext>
      <Routes />
    </CartContext>
  );
}
