import { useLocation, useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Correção: troque "carItems" por "cartItems"
  const items = location.state.cartItems;

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  return (
    <div className="thank-you-page">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
     <button onClick={() => navigate("/")}>Voltar ao catalogo</button>
    </div>
  );
};

export default ThankYouPage;

