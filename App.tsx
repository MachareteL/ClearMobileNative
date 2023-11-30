import Routes from "./src";
import { CartProvider } from "./src/lib/cartContext";

export default function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}
