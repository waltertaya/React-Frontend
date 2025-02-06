import Main from "./components/Main";
import Cart from "./components/Cart";
import './App.css';

function App() {
  const cart = [];
  return (
    <div className="main-content">
      <Main />
      <Cart cart={cart}/>
    </div>
  );
}

export default App;
