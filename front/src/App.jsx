import { useSelector, useDispatch } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity, removeFromCart } from './reducer/cartSlice';

function App() {
  const dispatch = useDispatch(); 
  const productList = useSelector(state => state.products.value);
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h2>Products</h2>
      {productList.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleIncrement(item.id)}>+</button>
            <button onClick={() => handleDecrement(item.id)}>-</button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default App;
