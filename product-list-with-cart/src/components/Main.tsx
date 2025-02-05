import ProductList from "./ProductList";
import data from "./data";

function Main() {
  return (
    <div>
      <h1>Desserts</h1>
        <ProductList products={data}/>
    </div>
  );
}

export default Main;
