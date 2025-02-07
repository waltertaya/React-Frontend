import AddToCart from "./AddToCart";

interface ProductCardProps {
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
}

const ProductCard = ({ image, name, category, price }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={image.thumbnail} alt={image.alt} />
      <p className="product-category">{category}</p>
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price.toFixed(2)}</p>
      <AddToCart name={name} price={price} />
    </div>
  );
};

export default ProductCard;
