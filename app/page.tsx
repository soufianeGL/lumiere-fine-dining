import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-charcoal/80 text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gold">✦ Lumière</div>
          <ul className="hidden md:flex gap-8">
            <li><a href="#menu" className="hover:text-gold transition">Menu</a></li>
            <li><a href="#about" className="hover:text-gold transition">About</a></li>
            <li><a href="#reserve" className="hover:text-gold transition">Reserve</a></li>
            <li><a href="#contact" className="hover:text-gold transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen pt-16">
        <Image
          src="https://v3b.fal.media/files/b/0a995d98/w7Hp5BRDpxOWJC8Z0_wFF.jpg"
          alt="Elegant fine dining restaurant interior with golden lighting and luxury ambiance"
          fill
          className="object-cover -z-10"
          priority
          quality={85}
          sizes="100vw"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent -z-5" />
        
        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-cream font-bold mb-6">Experience Fine Dining</h1>
          <p className="text-lg sm:text-xl text-cream/90 mb-8 max-w-2xl">
            Discover culinary excellence in an atmosphere of timeless elegance and warmth
          </p>
          <a
            href="#reserve"
            className="inline-block px-8 py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Reserve Your Table
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 sm:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-charcoal text-center">
            <span className="accent-underline">Our Culinary</span> Journey
          </h2>
          <p className="text-center text-charcoal/70 mb-16 max-w-2xl mx-auto">
            Each dish is crafted with precision and passion, showcasing the finest seasonal ingredients
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-gold/20 to-charcoal/20 flex items-center justify-center">
                <span className="text-6xl">🍽️</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-charcoal">Appetizers</h3>
                <p className="text-charcoal/70 mb-4">
                  Exquisite small bites to awaken the palate. From seared foie gras to fresh oysters, each selection is a testament to our commitment to quality.
                </p>
                <button className="text-gold font-semibold hover:text-gold/80 transition">Explore Menu →</button>
              </div>
            </div>

            {/* Menu Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-gold/20 to-charcoal/20 flex items-center justify-center">
                <span className="text-6xl">🥩</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-charcoal">Main Courses</h3>
                <p className="text-charcoal/70 mb-4">
                  Signature dishes featuring premium proteins and refined techniques. Each entrée is paired with carefully selected accompaniments.
                </p>
                <button className="text-gold font-semibold hover:text-gold/80 transition">Explore Menu →</button>
              </div>
            </div>

            {/* Menu Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-gold/20 to-charcoal/20 flex items-center justify-center">
                <span className="text-6xl">🍰</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-charcoal">Desserts</h3>
                <p className="text-charcoal/70 mb-4">
                  Artisanal creations that balance elegance with indulgence. Our pastry chef crafts each dessert with precision and creativity.
                </p>
                <button className="text-gold font-semibold hover:text-gold/80 transition">Explore Menu →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-charcoal text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="text-gold">About</span> Lumière
          </h2>
          <div className="prose prose-invert max-w-none text-cream/90 text-lg leading-relaxed">
            <p className="mb-6">
              Nestled in the heart of the city, Lumière represents a celebration of culinary craftsmanship and hospitality. Our restaurant is a sanctuary for those who appreciate the art of fine dining, where every detail—from the golden-hour lighting to the warmth of personal service—contributes to an unforgettable evening.
            </p>
            <p className="mb-6">
              Our executive chef brings over two decades of experience from Michelin-starred kitchens across Europe. Every dish on our menu is a reflection of this dedication: sourcing the finest ingredients, honoring traditional techniques, and innovating with contemporary flair.
            </p>
            <p>
              We believe dining is more than nourishment; it's a dialogue between chef and guest, a moment to celebrate life's finest pleasures. At Lumière, we invite you to experience that magic.
            </p>
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reserve" className="py-16 sm:py-24 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="accent-underline">Reserve</span> Your Table
          </h2>
          <p className="text-center text-charcoal/70 mb-12">
            Join us for an evening of culinary excellence and refined hospitality
          </p>
          
          <form className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 border-2 border-charcoal/20 rounded-lg focus:outline-none focus:border-gold transition"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 border-2 border-charcoal/20 rounded-lg focus:outline-none focus:border-gold transition"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                className="px-4 py-3 border-2 border-charcoal/20 rounded-lg focus:outline-none focus:border-gold transition"
                required
              />
              <select
                className="px-4 py-3 border-2 border-charcoal/20 rounded-lg focus:outline-none focus:border-gold transition"
                required
              >
                <option value="">Select Time</option>
                <option value="17:00">5:00 PM</option>
                <option value="17:30">5:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
            </div>
            
            <select
              className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-lg focus:outline-none focus:border-gold transition"
              required
            >
              <option value="">Number of Guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="7">7 Guests</option>
              <option value="8">8 Guests</option>
            </select>
            
            <textarea
              placeholder="Special Requests (allergies, celebrations, preferences)"
              rows={4}
              className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-lg focus:outline-none focus:border-gold transition resize-none"
            />
            
            <button
              type="submit"
              className="w-full py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-charcoal text-cream py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gold">Lumière</h3>
              <p className="text-cream/70">Fine dining at its finest. An experience to remember.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <ul className="text-cream/70 space-y-2">
                <li>Tuesday - Thursday: 5:00 PM - 10:00 PM</li>
                <li>Friday - Saturday: 5:00 PM - 11:00 PM</li>
                <li>Sunday: 5:00 PM - 9:00 PM</li>
                <li>Monday: Closed</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="text-cream/70 space-y-2">
                <li>📞 (555) 123-4567</li>
                <li>📧 reservations@lumiere.com</li>
                <li>📍 123 Culinary Street, Downtown</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-cream/60 text-sm">© 2024 Lumière. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-cream/60 hover:text-gold transition">Instagram</a>
              <a href="#" className="text-cream/60 hover:text-gold transition">Facebook</a>
              <a href="#" className="text-cream/60 hover:text-gold transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
