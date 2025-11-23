import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(category.name)}`}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
        <h3 className="text-2xl font-bold group-hover:text-dutch-coral transition-colors duration-200">
          {category.name}
        </h3>
        <p className="text-sm text-gray-200">{category.description}</p>
        <div className="flex items-center text-dutch-coral font-semibold pt-2">
          <span>Shop Now</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
