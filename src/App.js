import logo from './logo.svg';
import './App.css';
import Main from './Main';
import data from './data';
import { useState } from 'react';
import Basket from './Basket';
import Header from './Header';

function App() {
  //saving all the data from API into new variable
  const {products} = data;

  //hook for building up the cart functionality
  const [cartItems, setCartItems] = useState([]);

  //function for adding the product to cart
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if(exist){
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty:exist.qty + 1 } : x))
      console.log(cartItems);
    }else{
      setCartItems([...cartItems, {...product,qty:1}]);
    }
  }

  //function for adding the product to cart
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
    else{
      setCartItems(
     cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty-1 }: x)
     //setCartItems([...cartItems,{qty: exist.qty}])
      );
    }
  }
  return (
    <div>
  
    <div className="ml-5">
     <Basket cartItems1={cartItems} onAdd={onAdd} onRemove={onRemove} countItems={cartItems.length}/>
     </div>
    <div className="ml-5">
     <Main prod={products} onAdd={onAdd}  />
    
     
    </div>
    </div>
  );
}

export default App;
