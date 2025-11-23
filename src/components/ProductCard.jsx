import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const displayPrice = product.salePrice || product.price;
  const hasDiscount = product.salePrice && product.salePrice < product.price;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {hasDiscount && (
          <div className="absolute top-3 right-3 bg-dutch-coral text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            Sale
          </div>
        )}
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-dutch-text group-hover:text-dutch-teal transition-colors duration-200 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {hasDiscount ? (
              <>
                <span className="text-xl font-bold text-dutch-coral">
                  ${displayPrice.toFixed(2)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-dutch-text">
                ${displayPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="flex items-center space-x-1 bg-dutch-teal text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200 hover:scale-105"
            aria-label={`Add ${product.title} to cart`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="text-sm font-medium">Add</span>
          </button>
        </div>

        {product.stock < 10 && product.stock > 0 && (
          <p className="text-xs text-dutch-coral font-medium">
            Only {product.stock} left in stock!
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
