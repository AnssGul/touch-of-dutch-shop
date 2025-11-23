import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Minus, Plus, Package, Truck, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-dutch-bg flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dutch-text mb-4">
            Product Not Found
          </h2>
          <Link
            to="/shop"
            className="text-dutch-teal hover:underline font-medium"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const displayPrice = product.salePrice || product.price;
  const hasDiscount = product.salePrice && product.salePrice < product.price;

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-dutch-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/shop"
          className="inline-flex items-center text-dutch-teal hover:text-dutch-text transition-colors duration-200 mb-8 font-medium"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Shop
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full rounded-xl shadow-lg"
              />
              {hasDiscount && (
                <div className="absolute top-4 right-4 bg-dutch-coral text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Save $
                  {(product.price - product.salePrice).toFixed(2)}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-sm text-dutch-teal font-semibold mb-2">
                  {product.category}
                </div>
                <h1 className="text-4xl font-bold text-dutch-text mb-4">
                  {product.title}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                {hasDiscount ? (
                  <>
                    <span className="text-4xl font-bold text-dutch-coral">
                      ${displayPrice.toFixed(2)}
                    </span>
                    <span className="text-2xl text-gray-400 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-4xl font-bold text-dutch-text">
                    ${displayPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 font-medium">Quantity:</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-200"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-16 text-center text-xl font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= product.stock}
                      className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-200"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {product.stock < 10 && (
                  <p className="text-dutch-coral font-medium">
                    Hurry! Only {product.stock} left in stock
                  </p>
                )}

                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="w-full flex items-center justify-center space-x-2 bg-dutch-coral text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>
                    {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                  </span>
                </button>
              </div>

              <div className="border-t pt-6 space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Package className="h-5 w-5 text-dutch-teal" />
                  <span>Premium quality packaging</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Truck className="h-5 w-5 text-dutch-teal" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Shield className="h-5 w-5 text-dutch-teal" />
                  <span>100% satisfaction guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-dutch-text mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id}>
                  <Link
                    to={`/product/${relatedProduct.id}`}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 block"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-dutch-text group-hover:text-dutch-teal transition-colors duration-200 line-clamp-2">
                        {relatedProduct.title}
                      </h3>
                      <p className="text-lg font-bold text-dutch-text mt-2">
                        ${(relatedProduct.salePrice || relatedProduct.price).toFixed(2)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
