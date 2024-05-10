import { useContext } from 'react';
import OrderContext from '../../../../context/OrderContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(OrderContext);

  const totalPrice = cart ? cart.reduce((total, product) => total + product.price, 0) : 0;

  return (
    <div>
      {cart && cart.map(product => (
        <div key={product.id}>
          <img src={product.image || 'cupcake-item.png'} alt={product.title || 'Unnamed product'} />
          <div>{product.title || 'Unnamed product'}</div>
          <div>{product.price || '0.00 €'}</div>
          <button onClick={() => removeFromCart(product.id)}>Supprimer</button>
        </div>
      ))}
      <div>Total : {totalPrice.toFixed(2)} €</div>
    </div>
  );
};

export default Cart; 