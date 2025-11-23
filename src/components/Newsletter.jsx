import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section className="bg-dutch-teal py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-4">
          <Mail className="h-12 w-12 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join Our Dutch Touch Mailing List
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Subscribe to receive exclusive offers, authentic Dutch recipes, and be
          the first to know about new product arrivals.
        </p>

        {isSubmitted ? (
          <div className="flex items-center justify-center space-x-2 text-white bg-white/20 rounded-lg py-4 px-6 max-w-md mx-auto">
            <CheckCircle className="h-6 w-6" />
            <span className="font-semibold">Thank you for subscribing!</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-lg text-dutch-text focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-dutch-coral text-white font-semibold rounded-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-sm text-white/80 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
