import ProductCard from "./ProductCard";

interface ProductListProps {
  products: {
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
      alt: string;
    };
    name: string;
    category: string;
    price: number;
  }[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
