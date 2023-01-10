import Header from "./components/Layout/Header";
import { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import ErrorProvider from "./store/ErrorProvider";
import Error from './components/UI/Error'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const [errorIsShown, setErrorIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  const showErrorHandler = () => {
    setErrorIsShown(true)
  }

  const hideErrorHandler = () => {
    setErrorIsShown(false)
  }

  return (
    <ErrorProvider>
      {errorIsShown && <Error onClose={hideErrorHandler}></Error>}
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
        

        <Header onShowCart={showCartHandler}></Header>
        <main>
          <Meals></Meals>
        </main>
      </CartProvider>
    </ErrorProvider>
  );
}

export default App;
