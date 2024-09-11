import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity, removeFromCart } from './reducer/cartSlice';

const App = () => {
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
    <div className="container">
      <h1>My E-commerce Store</h1>
      
      <div className="content">
        <div className="products">
          <h2>Products</h2>
          <div className="product-list">
            {productList.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">${product.price.toFixed(2)}</p>
                  <p className="description">{product.description}</p>
                  <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="cart">
          <h2>Cart</h2>
          {cartItems.length > 0 ? (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p className="price">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              ))}
              <div className="cart-total">
                <p>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
                <button className="checkout-btn">Checkout</button>
              </div>
            </div>
          ) : (
            <p className="empty-cart">Your cart is empty.</p>
          )}
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
          color: #333;
        }

        .content {
          display: flex;
          gap: 40px;
        }

        .products, .cart {
          flex: 1;
        }

        h2 {
          color: #444;
          border-bottom: 2px solid #eee;
          padding-bottom: 10px;
        }

        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }

        .product-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }

        .product-card:hover {
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .product-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .product-info {
          padding: 15px;
        }

        .product-info h3 {
          margin: 0 0 10px;
          color: #333;
        }

        .price {
          font-weight: bold;
          color: #e44d26;
        }

        .description {
          font-size: 0.9em;
          color: #666;
          margin-bottom: 15px;
        }

        button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #45a049;
        }

        .cart-item {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #eee;
          padding: 15px 0;
        }

        .cart-item img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          margin-right: 15px;
        }

        .item-info {
          flex-grow: 1;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
        }

        .quantity-controls button {
          background-color: #ddd;
          color: #333;
          width: 30px;
          height: 30px;
          font-size: 1.2em;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .quantity-controls span {
          margin: 0 10px;
        }

        .remove-btn {
          background-color: #e74c3c;
          margin-left: 10px;
        }

        .remove-btn:hover {
          background-color: #c0392b;
        }

        .cart-total {
          margin-top: 20px;
          text-align: right;
        }

        .checkout-btn {
          background-color: #3498db;
          margin-top: 10px;
        }

        .checkout-btn:hover {
          background-color: #2980b9;
        }

        .empty-cart {
          text-align: center;
          color: #777;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .content {
            flex-direction: column;
          }

          .product-list {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default App;