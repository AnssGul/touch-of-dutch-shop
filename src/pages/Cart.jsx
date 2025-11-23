import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-dutch-bg flex items-center justify-center py-16">
        <div className="text-center space-y-6">
          <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto" />
          <h2 className="text-3xl font-bold text-dutch-text">
            Your cart is empty
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our collection of authentic Dutch products
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-4 bg-dutch-coral text-white font-semibold rounded-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Start Shopping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 8.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-dutch-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-dutch-text mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {cart.length} item{cart.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row gap-6"
              >
                <Link
                  to={`/product/${item.id}`}
                  className="flex-shrink-0 w-full sm:w-32 h-32 rounded-lg overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </Link>

                <div className="flex-1 space-y-4">
                  <div>
                    <Link
                      to={`/product/${item.id}`}
                      className="text-xl font-semibold text-dutch-text hover:text-dutch-teal transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.category}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end sm:space-x-6">
                      <span className="text-2xl font-bold text-dutch-text">
                        ${((item.salePrice || item.price) * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-dutch-coral hover:text-red-700 transition-colors duration-200"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-dutch-coral hover:text-red-700 font-medium transition-colors duration-200"
            >
              Clear Cart
            </button>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl p-6 sticky top-24 space-y-6">
              <h2 className="text-2xl font-bold text-dutch-text">
                Order Summary
              </h2>

              <div className="space-y-3 border-b pb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-dutch-teal">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                {subtotal < 50 && subtotal > 0 && (
                  <p className="text-sm text-dutch-coral">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                )}
              </div>

              <div className="flex justify-between text-xl font-bold text-dutch-text">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="w-full bg-dutch-coral text-white py-4 rounded-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-200 shadow-lg">
                Proceed to Checkout
              </button>

              <Link
                to="/shop"
                className="block text-center text-dutch-teal hover:text-dutch-text font-medium transition-colors duration-200"
              >
                Continue Shopping
              </Link>

              <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
                <p className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-dutch-teal rounded-full"></span>
                  <span>Secure checkout</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-dutch-teal rounded-full"></span>
                  <span>Easy returns within 30 days</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-dutch-teal rounded-full"></span>
                  <span>Temperature-controlled delivery</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
