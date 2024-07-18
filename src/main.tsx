import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.tsx";
import { CategoryProvider } from "./context/CategoryContext.tsx";
import { OrderDetailsProvider } from "./context/OrderDetailsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <CartProvider>
      <CategoryProvider>
        <OrderDetailsProvider>
          <App />
        </OrderDetailsProvider>
      </CategoryProvider>
    </CartProvider>
  </BrowserRouter>
);
