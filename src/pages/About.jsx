import { Heart, Globe, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-dutch-bg">
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About A Touch of Dutch
            </h1>
            <p className="text-xl text-gray-100">
              Bringing the authentic flavors and warmth of the Netherlands to
              your home, one product at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-dutch-text mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A Touch of Dutch was born from a simple love story: the love of
                authentic Dutch food and the desire to share it with the world.
                Founded in 2020 by a Dutch expat family longing for the tastes
                of home, we started with a small selection of cheeses and
                stroopwafels shared among friends.
              </p>
              <p>
                Today, we've grown into a trusted source for authentic Dutch
                groceries, working directly with family-owned farms and
                producers in the Netherlands. Every product we offer is
                carefully selected for its quality, authenticity, and the story
                it tells about Dutch culinary heritage.
              </p>
              <p>
                We believe that food is more than sustenance—it's connection,
                comfort, and culture. Whether you're Dutch and missing the
                tastes of home, or simply curious about Dutch cuisine, we're
                here to bring that authentic experience to your table.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dutch-text text-center mb-12">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dutch-teal rounded-full">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dutch-text">
                Authentic Quality
              </h3>
              <p className="text-gray-600">
                Every product is sourced directly from the Netherlands,
                ensuring genuine taste and quality in every bite.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dutch-coral rounded-full">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dutch-text">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We partner with producers who prioritize sustainable farming
                and eco-friendly practices.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dutch-teal rounded-full">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dutch-text">
                Community First
              </h3>
              <p className="text-gray-600">
                We're more than a store—we're building a community of Dutch
                food lovers and culture enthusiasts.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dutch-coral rounded-full">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dutch-text">
                Excellence
              </h3>
              <p className="text-gray-600">
                From product selection to customer service, we strive for
                excellence in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-dutch-teal rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="text-white space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Join Our Journey
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  We're always looking for ways to improve and expand our
                  selection. Have a favorite Dutch product you'd like to see in
                  our store? We'd love to hear from you!
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  Follow us on social media for Dutch recipes, product
                  spotlights, and special offers. Let's celebrate Dutch culture
                  together.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-dutch-teal font-semibold rounded-lg hover:bg-dutch-bg hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Get in Touch
                </a>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dutch windmill and tulips"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
