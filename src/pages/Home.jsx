import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import Newsletter from '../components/Newsletter';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';

const Home = () => {
  const featuredProducts = productsData.slice(0, 4);

  return (
    <div className="bg-dutch-bg">
      <HeroSection />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dutch-text mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked selections from our finest Dutch imports. Taste the
              authentic flavors of the Netherlands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dutch-text mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our curated selection of authentic Dutch groceries,
              organized to make your shopping experience delightful.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesData.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-dutch-text">
                  Why Choose A Touch of Dutch?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-dutch-teal rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-dutch-text mb-1">
                        Authentic Dutch Quality
                      </h3>
                      <p className="text-gray-600">
                        Products sourced directly from the Netherlands, ensuring
                        genuine taste and quality.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-dutch-teal rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-dutch-text mb-1">
                        Fresh & Fast Delivery
                      </h3>
                      <p className="text-gray-600">
                        Temperature-controlled shipping to keep your groceries
                        fresh from our door to yours.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-dutch-teal rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-dutch-text mb-1">
                        Customer First
                      </h3>
                      <p className="text-gray-600">
                        Dedicated support team ready to help with any questions
                        or concerns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dutch groceries"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;
