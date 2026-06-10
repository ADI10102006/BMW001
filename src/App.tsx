import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  ArrowRight, 
  Star,
  Shield,
  Settings,
  Zap,
  Clock
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { GlassCard } from './components/ui/GlassCard';
import { GlassModal } from './components/ui/GlassModal';

const App = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const cars = [
    {
      id: 'm4',
      name: 'BMW M4 Competition',
      image: 'https://images.unsplash.com/photo-1617814076668-8dfc6fe159c9?auto=format&fit=crop&q=80&w=1000',
      specs: '503 HP | 0-60 in 3.4s | Twin-Turbo Inline-6',
      desc: 'The BMW M4 Competition Coupe models represent the peak of performance for the BMW 4 Series Coupe M models. Equipped with a high-performance BMW M TwinPower Turbo inline 6-cylinder petrol engine.'
    },
    {
      id: 'i8',
      name: 'BMW i8 Roadster',
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=1000',
      specs: '369 HP | Hybrid Powertrain | Carbon Fiber Chassis',
      desc: 'The BMW i8 is a plug-in hybrid sports car developed by BMW. The i8 is part of BMW\'s electrified fleet and a masterpiece of sustainable performance and futuristic design.'
    },
    {
      id: 'x5',
      name: 'BMW X5 M',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000',
      specs: '600 HP | V8 Engine | M xDrive AWD',
      desc: 'The BMW X5 M Competition combines the spirit of a sports car with the versatility of an X model. Its high-torque M TwinPower Turbo V8 engine and M-specific suspension provide unmatched driving dynamics.'
    }
  ];

  const services = [
    { title: 'M Performance Tuning', icon: <Zap className="text-bmw-blue" />, desc: 'Unlock the full potential of your BMW with factory-certified performance upgrades.' },
    { title: 'Luxury Detailing', icon: <Shield className="text-bmw-blue" />, desc: 'Elite protection and restoration services using premium ceramic coatings and materials.' },
    { title: 'Precision Service', icon: <Settings className="text-bmw-blue" />, desc: 'Expert maintenance by BMW-certified technicians using only genuine parts.' },
    { title: '24/7 Concierge', icon: <Clock className="text-bmw-blue" />, desc: 'Round-the-clock support and roadside assistance for total peace of mind.' }
  ];

  return (
    <div className="min-h-screen bg-bmw-dark text-white selection:bg-bmw-blue/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        >
          <source src="https://cdn.pixabay.com/video/2020/09/24/50865-463428352_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bmw-dark/20 to-bmw-dark" />
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="mb-4 text-5xl font-black tracking-tighter md:text-8xl">
              THE ULTIMATE <br /> 
              <span className="text-bmw-blue">DRIVING MACHINE</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/60 md:text-xl">
              Experience the pinnacle of German engineering and luxury performance. 
              Step into the future of mobility with BMW.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-bmw-blue hover:text-white"
            >
              EXPLORE MODELS
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000" className="h-full w-full object-cover" alt="Background" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-bold md:text-6xl">A LEGACY OF <br /> INNOVATION</h2>
              <p className="mb-8 text-lg text-white/60">
                For over a century, BMW has been at the forefront of automotive excellence. 
                Our showroom represents the intersection of heritage and future-forward design, 
                offering an immersive environment for the discerning driver.
              </p>
              <button 
                onClick={() => setActiveModal('about')}
                className="group flex items-center gap-2 text-lg font-semibold text-bmw-blue transition-colors hover:text-white"
              >
                More Information <ArrowRight className="transition-transform group-hover:translate-x-2" />
              </button>
            </motion.div>
            <GlassCard className="aspect-video overflow-hidden p-0">
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000" 
                className="h-full w-full object-cover opacity-80 transition-transform duration-700 hover:scale-110" 
                alt="Showroom" 
              />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-bmw-dark/50 py-24 backdrop-blur-3xl">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">PREMIUM SERVICES</h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-bmw-blue" />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <GlassCard key={idx} className="flex flex-col items-center text-center">
                <div className="mb-6 rounded-full bg-white/5 p-4">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-white/50">{service.desc}</p>
              </GlassCard>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button 
              onClick={() => setActiveModal('services')}
              className="rounded-full border border-white/20 px-10 py-4 font-bold transition-all hover:bg-white hover:text-black"
            >
              VIEW ALL SERVICES
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">THE FLEET</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {cars.map((car) => (
              <GlassCard 
                key={car.id} 
                className="group cursor-pointer p-0 overflow-hidden"
                onClick={() => setActiveModal(car.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{car.name}</h3>
                  <p className="mt-2 text-sm text-bmw-blue font-medium">{car.specs}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-bmw-blue/5 blur-3xl" />
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">CLIENT VOICES</h2>
          <div className="mx-auto max-w-3xl">
            <GlassCard className="flex flex-col items-center text-center md:flex-row md:text-left gap-8">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Suriya_at_the_68th_National_Film_Awards.jpg/220px-Suriya_at_the_68th_National_Film_Awards.jpg" 
                alt="Surya" 
                className="h-32 w-32 rounded-full border-4 border-bmw-blue object-cover"
              />
              <div>
                <div className="mb-4 flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-xl italic text-white/80">
                  "The experience at the BMW showroom was truly world-class. The attention to detail in the cars and the service is very impressive and very comfortable. A true luxury experience."
                </p>
                <h4 className="mt-6 text-lg font-bold">Surya Sivakumar</h4>
                <p className="text-sm text-white/50">Actor & BMW Enthusiast</p>
                <button 
                  onClick={() => setActiveModal('testimonial')}
                  className="mt-4 text-sm font-bold text-bmw-blue hover:underline"
                >
                  Read Full Review
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-bold md:text-6xl">GET IN <br /> TOUCH</h2>
              <p className="mb-12 text-lg text-white/50">
                Ready to experience the ultimate driving machine? Contact our showroom 
                concierge to schedule a private viewing or test drive.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <a href="tel:+1234567890" className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-all hover:bg-bmw-blue">
                  <Phone size={20} /> <span>Call Us</span>
                </a>
                <a href="mailto:info@bmw-showroom.com" className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-all hover:bg-bmw-blue">
                  <Mail size={20} /> <span>Email</span>
                </a>
                <a href="https://instagram.com" target="_blank" className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-all hover:bg-bmw-blue">
                  <Instagram size={20} /> <span>Instagram</span>
                </a>
                <a href="https://twitter.com" target="_blank" className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-all hover:bg-bmw-blue">
                  <Twitter size={20} /> <span>Twitter</span>
                </a>
              </div>
            </div>
            <GlassCard className="flex flex-col justify-center">
              <form className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/50">Full Name</label>
                  <input type="text" className="w-full rounded-lg border border-white/10 bg-white/5 p-4 focus:border-bmw-blue focus:outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/50">Email Address</label>
                  <input type="email" className="w-full rounded-lg border border-white/10 bg-white/5 p-4 focus:border-bmw-blue focus:outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/50">Message</label>
                  <textarea rows={4} className="w-full rounded-lg border border-white/10 bg-white/5 p-4 focus:border-bmw-blue focus:outline-none" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full rounded-full bg-bmw-blue py-4 font-bold transition-all hover:bg-white hover:text-black">
                  SEND MESSAGE
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" alt="Logo" className="h-8 w-8" />
              <span className="font-bold tracking-widest">BMW SHOWROOM</span>
            </div>
            <div className="flex gap-8 text-sm text-white/50">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
            <p className="text-sm text-white/30">
              © 2025 BMW Showroom. Created with Passion.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <GlassModal 
        isOpen={activeModal === 'about'} 
        onClose={() => setActiveModal(null)} 
        title="BMW Heritage & Vision"
      >
        <p className="mb-4">BMW (Bayerische Motoren Werke AG) has been a symbol of luxury and performance since 1916. Our showroom brings this legacy to life through immersive technology and personalized service.</p>
        <p>Our vision is to define the future of premium mobility through sustainability, digital innovation, and sheer driving pleasure. Every vehicle in our collection is a testament to German precision engineering.</p>
      </GlassModal>

      <GlassModal 
        isOpen={activeModal === 'services'} 
        onClose={() => setActiveModal(null)} 
        title="Our Exclusive Services"
      >
        <ul className="space-y-4">
          <li className="flex gap-4">
            <div className="h-2 w-2 mt-2 rounded-full bg-bmw-blue" />
            <div>
              <h4 className="font-bold">BMW Financial Services</h4>
              <p className="text-sm opacity-70">Tailored financing and leasing options to suit your lifestyle.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="h-2 w-2 mt-2 rounded-full bg-bmw-blue" />
            <div>
              <h4 className="font-bold">BMW Diplomatic Sales</h4>
              <p className="text-sm opacity-70">Exclusive benefits for diplomats and international organizations.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="h-2 w-2 mt-2 rounded-full bg-bmw-blue" />
            <div>
              <h4 className="font-bold">Certified Pre-Owned</h4>
              <p className="text-sm opacity-70">Rigorous 360-degree inspection and comprehensive warranty.</p>
            </div>
          </li>
        </ul>
      </GlassModal>

      {cars.map(car => (
        <GlassModal 
          key={`modal-${car.id}`}
          isOpen={activeModal === car.id} 
          onClose={() => setActiveModal(null)} 
          title={car.name}
        >
          <img src={car.image} alt={car.name} className="mb-6 w-full rounded-xl" />
          <h4 className="mb-2 text-lg font-bold text-bmw-blue">{car.specs}</h4>
          <p className="opacity-80">{car.desc}</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-white/5 p-4 text-center">
              <span className="block text-xs uppercase tracking-widest opacity-50">Top Speed</span>
              <span className="text-xl font-bold">155+ MPH</span>
            </div>
            <div className="rounded-lg bg-white/5 p-4 text-center">
              <span className="block text-xs uppercase tracking-widest opacity-50">Transmission</span>
              <span className="text-xl font-bold">8-Speed M Steptronic</span>
            </div>
          </div>
        </GlassModal>
      ))}

      <GlassModal 
        isOpen={activeModal === 'testimonial'} 
        onClose={() => setActiveModal(null)} 
        title="Client Testimonial"
      >
        <div className="flex flex-col items-center text-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Suriya_at_the_68th_National_Film_Awards.jpg/220px-Suriya_at_the_68th_National_Film_Awards.jpg" 
            className="mb-6 h-24 w-24 rounded-full border-2 border-bmw-blue object-cover" 
            alt="Surya" 
          />
          <p className="text-lg italic">
            "I have always admired BMW's commitment to performance. This showroom experience was the best I've had globally. The team understands the passion behind the drive. Truly very impressive and very comfortable."
          </p>
          <div className="mt-6">
            <h4 className="font-bold">Surya Sivakumar</h4>
            <p className="text-sm opacity-50">National Award Winning Actor</p>
          </div>
        </div>
      </GlassModal>
    </div>
  );
};

export default App;
