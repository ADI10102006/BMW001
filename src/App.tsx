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
  Clock,
  MessageCircle
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
    { title: 'M Performance Tuning', icon: <Zap className="text-adi-blue" />, desc: 'Unlock the full potential of your BMW with factory-certified performance upgrades.' },
    { title: 'Luxury Detailing', icon: <Shield className="text-adi-blue" />, desc: 'Elite protection and restoration services using premium ceramic coatings and materials.' },
    { title: 'Precision Service', icon: <Settings className="text-adi-blue" />, desc: 'Expert maintenance by BMW-certified technicians using only genuine parts.' },
    { title: '24/7 Concierge', icon: <Clock className="text-adi-blue" />, desc: 'Round-the-clock support and roadside assistance for total peace of mind.' }
  ];

  return (
    <div className="min-h-screen bg-adi-dark text-white selection:bg-adi-blue/30 overflow-x-hidden">
      <Navbar />

      {/* Home Page */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-adi-dark/20 to-adi-dark" />
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-6 flex justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" alt="BMW" className="h-24 w-24 brightness-110" />
            </div>
            <h1 className="mb-4 text-5xl font-black tracking-tighter md:text-8xl">
              ADI <span className="text-adi-blue">MOTORS</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/60 md:text-xl font-light tracking-wide">
              Step into the pinnacle of luxury. Experience the ultimate driving machine 
              in our state-of-the-art digital showroom.
            </p>
            <motion.a 
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 inline-block rounded-full bg-white px-10 py-4 text-sm font-bold text-black transition-all hover:bg-adi-blue hover:text-white"
            >
              EXPLORE THE FLEET
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Page */}
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
              <h2 className="mb-6 text-4xl font-bold md:text-6xl tracking-tighter">THE LEGACY OF <br /> ADI MOTORS</h2>
              <p className="mb-8 text-lg text-white/60 leading-relaxed">
                ADI MOTORS isn't just a dealership; it's a destination for those who demand excellence. 
                Our showroom represents a century of engineering mastery, brought to life through 
                immersive design and unparalleled service.
              </p>
              <button 
                onClick={() => setActiveModal('about')}
                className="group flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold transition-all hover:bg-white hover:text-black"
              >
                More Information <ArrowRight className="transition-transform group-hover:translate-x-2" />
              </button>
            </motion.div>
            <GlassCard className="aspect-video overflow-hidden p-0 border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000" 
                className="h-full w-full object-cover opacity-80 transition-transform duration-1000 hover:scale-110" 
                alt="Showroom" 
              />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Services Page */}
      <section id="services" className="relative py-24 backdrop-blur-3xl">
        <div className="absolute inset-0 bg-adi-blue/5" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-5xl tracking-tighter uppercase">Showroom Services</h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-adi-blue" />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <GlassCard key={idx} className="flex flex-col items-center text-center group">
                <div className="mb-6 rounded-full bg-white/5 p-6 transition-transform group-hover:rotate-[360deg] duration-700">
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
              className="rounded-full border border-white/20 px-10 py-4 font-bold transition-all hover:bg-adi-blue hover:border-adi-blue"
            >
              MORE SERVICES
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Page */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl tracking-tighter">THE ADI MOTORS COLLECTION</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {cars.map((car) => (
              <GlassCard 
                key={car.id} 
                className="group cursor-pointer p-0 overflow-hidden border-white/10 hover:border-adi-blue/50"
                onClick={() => setActiveModal(car.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-adi-blue">View Specifications</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{car.name}</h3>
                  <p className="mt-2 text-sm text-adi-blue font-medium">{car.specs}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Page */}
      <section id="testimonials" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-adi-blue/5 blur-[120px]" />
        <div className="container relative z-10 mx-auto px-6">
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl tracking-tighter">ELITE REVIEWS</h2>
          <div className="mx-auto max-w-4xl">
            <GlassCard className="flex flex-col items-center text-center md:flex-row md:text-left gap-10 p-10 border-white/20">
              <div className="relative">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Suriya_at_the_68th_National_Film_Awards.jpg/220px-Suriya_at_the_68th_National_Film_Awards.jpg" 
                  alt="Surya" 
                  className="h-40 w-40 rounded-full border-4 border-adi-blue object-cover shadow-[0_0_30px_rgba(0,102,178,0.3)]"
                />
                <div className="absolute -bottom-2 -right-2 rounded-full bg-adi-blue p-2">
                  <Star size={20} fill="white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-4 flex justify-center md:justify-start gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-2xl font-light italic leading-relaxed text-white/90">
                  "The experience at ADI MOTORS was truly world-class. The attention to detail in the cars and the service is <span className="text-adi-blue font-bold">very impressive and very comfortable</span>. A true luxury experience."
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold">Surya Sivakumar</h4>
                    <p className="text-sm uppercase tracking-widest text-white/40">Actor & BMW Enthusiast</p>
                  </div>
                  <button 
                    onClick={() => setActiveModal('testimonial')}
                    className="rounded-full bg-white/5 px-6 py-2 text-sm font-bold text-adi-blue transition-all hover:bg-adi-blue hover:text-white"
                  >
                    Read Story
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Contact Page */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-bold md:text-6xl tracking-tighter">CONNECT WITH <br /> ADI MOTORS</h2>
              <p className="mb-12 text-lg text-white/50 font-light leading-relaxed">
                Ready to experience the ultimate driving machine? Contact our showroom 
                concierge to schedule a private viewing or test drive.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://wa.me/1234567890" target="_blank" className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 transition-all hover:bg-[#25D366] hover:text-white group">
                  <MessageCircle size={24} className="text-[#25D366] group-hover:text-white" /> 
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest opacity-50">WhatsApp</span>
                    <span className="font-bold">Chat with us</span>
                  </div>
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 transition-all hover:bg-adi-blue group">
                  <Phone size={24} className="text-adi-blue group-hover:text-white" /> 
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest opacity-50">Phone</span>
                    <span className="font-bold">Call Concierge</span>
                  </div>
                </a>
                <a href="https://instagram.com" target="_blank" className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 transition-all hover:bg-gradient-to-tr hover:from-[#f09433] hover:to-[#bc1888] group">
                  <Instagram size={24} className="text-pink-500 group-hover:text-white" /> 
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest opacity-50">Instagram</span>
                    <span className="font-bold">@adimotors</span>
                  </div>
                </a>
                <a href="mailto:info@adi-motors.com" className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 transition-all hover:bg-adi-blue group">
                  <Mail size={24} className="text-adi-blue group-hover:text-white" /> 
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest opacity-50">Email</span>
                    <span className="font-bold">Send Inquiry</span>
                  </div>
                </a>
                <a href="https://facebook.com" target="_blank" className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 transition-all hover:bg-[#1877F2] group">
                  <Facebook size={24} className="text-[#1877F2] group-hover:text-white" /> 
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest opacity-50">Facebook</span>
                    <span className="font-bold">ADI Motors Official</span>
                  </div>
                </a>
                <a href="https://twitter.com" target="_blank" className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 transition-all hover:bg-[#1DA1F2] group">
                  <Twitter size={24} className="text-[#1DA1F2] group-hover:text-white" /> 
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest opacity-50">Twitter</span>
                    <span className="font-bold">@ADIMotors</span>
                  </div>
                </a>
              </div>
            </div>
            <GlassCard className="flex flex-col justify-center border-white/20 p-10">
              <h3 className="mb-8 text-2xl font-bold">Request a Callback</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/40">First Name</label>
                    <input type="text" className="w-full rounded-xl border border-white/10 bg-white/5 p-4 focus:border-adi-blue focus:outline-none transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/40">Last Name</label>
                    <input type="text" className="w-full rounded-xl border border-white/10 bg-white/5 p-4 focus:border-adi-blue focus:outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                  <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 p-4 focus:border-adi-blue focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/40">Preferred Model</label>
                  <select className="w-full rounded-xl border border-white/10 bg-white/5 p-4 focus:border-adi-blue focus:outline-none transition-colors appearance-none">
                    <option className="bg-adi-dark">M4 Competition</option>
                    <option className="bg-adi-dark">i8 Roadster</option>
                    <option className="bg-adi-dark">X5 M</option>
                    <option className="bg-adi-dark">Other</option>
                  </select>
                </div>
                <button className="w-full rounded-full bg-adi-blue py-5 font-black tracking-widest transition-all hover:bg-white hover:text-black shadow-lg shadow-adi-blue/20">
                  SUBMIT REQUEST
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-adi-blue/5 opacity-50" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="col-span-2">
              <div className="mb-6 flex items-center gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" alt="Logo" className="h-12 w-12" />
                <span className="text-2xl font-black tracking-[0.3em]">ADI MOTORS</span>
              </div>
              <p className="max-w-md text-white/40 font-light leading-relaxed">
                Defining the future of luxury mobility. Experience the perfect blend of 
                performance, innovation, and design in every curve.
              </p>
            </div>
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><a href="#home" className="hover:text-adi-blue transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-adi-blue transition-colors">About</a></li>
                <li><a href="#portfolio" className="hover:text-adi-blue transition-colors">Fleet</a></li>
                <li><a href="#contact" className="hover:text-adi-blue transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Legal</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><a href="#" className="hover:text-adi-blue transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-adi-blue transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-adi-blue transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-adi-blue transition-colors">Imprint</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold uppercase tracking-widest text-white/20">
              © 2025 ADI MOTORS. All Rights Reserved.
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-white/20">
              Created by <span className="text-white/40">Dualite Senior Engineer</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <GlassModal 
        isOpen={activeModal === 'about'} 
        onClose={() => setActiveModal(null)} 
        title="ADI MOTORS: The Heritage"
      >
        <div className="space-y-6">
          <p className="text-lg font-light leading-relaxed">ADI MOTORS has been a symbol of luxury and performance since its inception. Our showroom brings this legacy to life through immersive technology and personalized service.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h5 className="text-adi-blue font-bold mb-2">Innovation</h5>
              <p className="text-sm opacity-60">Leading the world in electric mobility and autonomous driving tech.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h5 className="text-adi-blue font-bold mb-2">Performance</h5>
              <p className="text-sm opacity-60">M-Series engineering that defines the sports car segment.</p>
            </div>
          </div>
          <p className="opacity-70">Our vision is to define the future of premium mobility through sustainability, digital innovation, and sheer driving pleasure. Every vehicle in our collection is a testament to German precision engineering.</p>
        </div>
      </GlassModal>

      <GlassModal 
        isOpen={activeModal === 'services'} 
        onClose={() => setActiveModal(null)} 
        title="ADI MOTORS Exclusive Services"
      >
        <div className="grid gap-6">
          <div className="flex gap-6 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-adi-blue/20 flex items-center justify-center text-adi-blue">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg">ADI Financial Services</h4>
              <p className="text-sm opacity-60 leading-relaxed">Tailored financing and leasing options designed to suit your elite lifestyle with flexible terms and competitive rates.</p>
            </div>
          </div>
          <div className="flex gap-6 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-adi-blue/20 flex items-center justify-center text-adi-blue">
              <Shield size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg">ADI Diplomatic Sales</h4>
              <p className="text-sm opacity-60 leading-relaxed">Exclusive benefits and personalized service for diplomats and members of international organizations worldwide.</p>
            </div>
          </div>
          <div className="flex gap-6 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-adi-blue/20 flex items-center justify-center text-adi-blue">
              <Settings size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg">Certified Pre-Owned</h4>
              <p className="text-sm opacity-60 leading-relaxed">Rigorous 360-degree inspection and comprehensive warranty for peace of mind with every pre-owned masterpiece.</p>
            </div>
          </div>
        </div>
      </GlassModal>

      {cars.map(car => (
        <GlassModal 
          key={`modal-${car.id}`}
          isOpen={activeModal === car.id} 
          onClose={() => setActiveModal(null)} 
          title={car.name}
        >
          <div className="relative overflow-hidden rounded-2xl mb-8">
            <img src={car.image} alt={car.name} className="w-full object-cover h-64" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <h4 className="mb-4 text-2xl font-black text-adi-blue tracking-tighter">{car.specs}</h4>
          <p className="text-lg font-light leading-relaxed opacity-80 mb-8">{car.desc}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <span className="block text-xs uppercase tracking-widest opacity-40 mb-1">Top Speed</span>
              <span className="text-2xl font-black">155+ MPH</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <span className="block text-xs uppercase tracking-widest opacity-40 mb-1">Transmission</span>
              <span className="text-2xl font-black">8-Speed M</span>
            </div>
          </div>
          <button className="mt-8 w-full rounded-full bg-white py-4 font-bold text-black transition-all hover:bg-adi-blue hover:text-white">
            BOOK A TEST DRIVE
          </button>
        </GlassModal>
      ))}

      <GlassModal 
        isOpen={activeModal === 'testimonial'} 
        onClose={() => setActiveModal(null)} 
        title="The Surya Experience"
      >
        <div className="flex flex-col items-center text-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Suriya_at_the_68th_National_Film_Awards.jpg/220px-Suriya_at_the_68th_National_Film_Awards.jpg" 
            className="mb-8 h-32 w-32 rounded-full border-4 border-adi-blue object-cover shadow-2xl" 
            alt="Surya" 
          />
          <div className="mb-6 flex gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
          </div>
          <p className="text-2xl font-light italic leading-relaxed text-white/90">
            "I have always admired the commitment to performance. This showroom experience at <span className="text-adi-blue font-bold">ADI MOTORS</span> was the best I've had globally. The team understands the passion behind the drive. Truly very impressive and very comfortable."
          </p>
          <div className="mt-10 border-t border-white/10 pt-8 w-full">
            <h4 className="text-xl font-bold">Surya Sivakumar</h4>
            <p className="text-sm uppercase tracking-widest opacity-50">National Award Winning Actor</p>
          </div>
        </div>
      </GlassModal>
    </div>
  );
};

export default App;
