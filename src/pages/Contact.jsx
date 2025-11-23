import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-dutch-bg">
      <section
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3747132/pexels-photo-3747132.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-100">
              We'd love to hear from you. Reach out anytime!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dutch-teal rounded-full">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dutch-text">
                Email Us
              </h3>
              <p className="text-gray-600">hello@atouchofdutch.com</p>
              <p className="text-gray-600">support@atouchofdutch.com</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dutch-coral rounded-full">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dutch-text">
                Call Us
              </h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">Mon-Fri: 9AM - 6PM EST</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dutch-teal rounded-full">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dutch-text">
                Visit Us
              </h3>
              <p className="text-gray-600">123 Dutch Lane</p>
              <p className="text-gray-600">Amsterdam Plaza, NY 10001</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-dutch-text mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-dutch-teal/10 border border-dutch-teal rounded-lg p-6 text-center">
                  <p className="text-dutch-teal font-semibold text-lg">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dutch-teal focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dutch-teal focus:border-transparent transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dutch-teal focus:border-transparent transition-all duration-200"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dutch-teal focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us what's on your mind..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-dutch-coral text-white py-4 rounded-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="flex items-start space-x-4">
                  <Clock className="h-8 w-8 text-dutch-teal flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-dutch-text mb-4">
                      Business Hours
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex justify-between">
                        <span className="font-medium">Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-medium">Saturday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-medium">Sunday:</span>
                        <span>Closed</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dutch-teal rounded-2xl shadow-xl p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Frequently Asked Questions
                </h3>
                <p className="text-white/90 mb-6">
                  Have a question? Check out our FAQ page for quick answers to
                  common inquiries about shipping, returns, and our products.
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-white text-dutch-teal font-semibold rounded-lg hover:bg-dutch-bg hover:scale-105 transition-all duration-200"
                >
                  View FAQ
                </a>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Contact support"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
