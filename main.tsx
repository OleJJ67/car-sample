import { motion } from "motion/react";
import { 
  ArrowRight,
  ArrowLeft,
  ShieldCheck, 
  Award, 
  Layers, 
  MapPin, 
  Phone,
  Instagram,
  Quote
} from "lucide-react";

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4Y76l7uaga3obvBuqy0iaQzJEkoncoyH6aFPn5d0dRbFLts5riCImyYXoh7GX4-NQ6tZ246k-zBeUhtWk5c7ZMuFcOffPIGUEflfsSVki2MXjfdxoN-9RDfosafx-1K9cV-MM71DAVnOMog9GCHdB0UwGA2tVb1VS6a2vGkdd0aqsV4eaOdQvA8Q9NmMLGmmVZTk0W9x0PWn6D9efoULF35hTpkgXkja4y0IBXwwomk5W3L-RpOORyweaJImVMQnlNZY3Hgw19bI",
  tinting: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj3d7K4_PXEYavD7uWwg5pdWoNOcP7IfvEd0jt-4v9f4nupwr5EWYl7nuXunDwWlo986FxQxO5A1HqGeUKzpA-vMWYSaz6YxAEjj_gRuTijSGooEcMPwXJ8COMVv8xxYDBFvxeYuOUFg9tUr6OAaWNdkfHEAXGiDTK9npnm11Loye0s0RCkyoX5HbdUyjAlOk0bcGe83zOjcINqJH-npYh_h603lrCvsnb9oyKuxOPdQIh3XUFjhjpomgbcvmep5AeQjECtuXqC3Q",
  coating: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF4QtUFt9cec35k5apKSTzBFWMheo_bDhaGWRAO6gqH4JFg_a4IAKYPP6Wue-IJaxQSeW-XjRd80zHIWclXAEwAiAk1LeDEavwUIlCsMk9qXU30VZck-gZu8j_9pqe8JYGppcAQxO-AZdoPbjXIaQi1itVkkhm67-Oba2WATiGOzxuRsS0sRu1_zejHqnYaXckRfjuhTpS2LKeBes4-UWBJBIiCFJyd_Nm975Da8NtoCUe9WhmRKQVf6dXni36z5fNqdgEO6I69is",
  wraps: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX66nHGP-Q5Rb7F6ObOTdI4cxVL-NNhKQquvo-25HtiIkm7bGB0TuEnPcNavOBcWMESsQjAlL1wFIijc7ZC3uHeE-qtpzcV8uE1-eM2pQZUox6-y8JcJRrUEzbGZYFpY6vknwW4Lu4a5JeKoVMU_AFPdoYkGzm1KWH7MQ2LY9BOOpK_DxP6_MR9itgzLe7M7ggm7bcALZgse9MWbt21OLT4KNgyb-Po7ojs8umjqCFNmf3De4zxudYJYEPlAZo-cmvjWPo0-Rg8HQ",
  gallery1: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQBvTAC1RzD_ZhT2Rb7cR4N8Zf5ABQFtk40uNLCuc-Ve_iOuIzMc59rOLxyxeFoLXRDQsH0R7u1luw8ZplXiH_DD7NLSY4qAgvJQwRnNBGE-r0nYW4QScAINKifGQuKaWDOtxCxVPDuD2Qu3OpfMoMMi3smvwAWLL4aNRDUOh9Oyke6XSvx-XBi5xb0MdOvK0hEhxIHkq6hDCEhgNijQdmZaMQ-Tzqsd7Sob-r2QjmNDOmEhHB1HuCdUnlES3vVpiI9_ge-k2Nhgo",
  gallery2: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzqCpdYBs0o1ifcN_lid5xeSPuQ7tgPSW7qZrJQdnn3ivcpCrnw4hYc6VN36Xx6uvKEWMl7WAZ88pdjmGbIgRI0Bix3oEarxnYoissqxeiJfxRfz4WiH-JdZezi31enIq7ODskmob_v6MzeENzU7zJmecRC-gKTmJFflAl_55MfdYuUl82EbnFAXYkSGgutMQ4ziJj0U5uGPUK3t922UY24c8N9HjHLJfjhu634bczCDP-GjRYm5vWiDYxNffaVvYE4Wjwz5chDRE",
  gallery3: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj2TXbmFb1eIAZljiDulnxGfawykxETjFjfNy3gOl-_2pi4MuPSpSIqSAFPEKLAeTCb_lVH5Xx2FP2AJlsvYsVYUVGMOr0Z7cRxsYGc4AqMoQb3RT9MY5mx-YHUb4lSXRB7Usk1nz9PlJoNf6EL3Pf41K0VAdIx7DWFvol0_aVICagNsR53k2RkvX2uT0JLTn990S7QKoURCKMH9TwUMVES_j-PXQlMJg9ZdyIMi96ie_WEfITiS9FzxoO1scbgq40lOy1zvAaxMA",
  gallery4: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZmEc627BMsfclTmYFMyr9yJykcZW_mM8znSO5xqtP9H4qcY6Nj8Udi0Dg6kRRjLaUjx1A1wdy7xq1F6I7zb0dNkgsTXV-bXuRKN9pq-V1Khf_i3dsopBpN6A3gdw9BAlDm-sCN0UaFPD-oW1SDAc9SBdKyV9uODEivhAVxAOhd6qasqGE8ScXtdqpXN-xa2bXRY2Ku3gXzxXcns_BC-w3vJFDFeKoPUgkUhum4VN4qG-LhriiUl3_Fhv9bZEvfQXPe1EUOExzEWE",
  avatar1: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1oANBybBxVhmeA4PvdMcn-0pozy0Eue_Usj4WrMN6S2hcPeZahZXO2gHrGRL4V6yrd95C_D9ytwWeESFCkJUTrfFZt4w5CijfTXilU2LvUM66nvlB1FT_4i6Ag_t-pIZWKRNCbB-DH2uqo4cACXKwqrlMPxWIb3IRXKrO8yF38rar9M1sFVZv-DrB2q6F_qYpPBZpq7CaGEpweyetVjiO1IuYDBWgZYEpYoHzANd2ZfCrsBZ6dILcPMnJQ8mHd3Udtax25m8j_hA",
  avatar2: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu1tfYUlb3rNXiYjZbWVUOLJu9RwPNjuk6_X0JRu3h7PsP_R_O_RInMT4zkcxYirpE6oVlRfdOtTpgcNuupPKQOjVbZprFUVUtGBRfE5bwOh_aYDd7kkVdwPe4161-lHTpK-W6zoeTpyiY-FBYkuvYgTfU4sa9ZzdLHwrkgqyagJbtqD-tJ5KhXs36T74ntJN9rQXxA1-szhYdLsMoA5isQOTEYC0hPwTB3g6wHLkcsg0ExIQISNN86Icr7mo9OvqZukKj6tJJ6GU",
};

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Side Decorative Bar (Artistic Flair aside pattern) */}
      <aside className="fixed left-0 top-0 h-full w-12 md:w-20 border-r border-white/5 flex flex-col items-center justify-between py-12 z-[60] bg-surface pointer-events-none">
        <div className="vertical-text text-[9px] uppercase tracking-[0.4em] opacity-30 gold-text">Est. 2018 Brooklyn</div>
        <div className="flex flex-col gap-4">
          <div className="w-1 h-1 rounded-full bg-primary/40"></div>
          <div className="w-1 h-1 rounded-full bg-white/5"></div>
          <div className="w-1 h-1 rounded-full bg-white/5"></div>
        </div>
        <div className="vertical-text text-[9px] uppercase tracking-[0.4em] opacity-30 italic">Vol. IV / 2024</div>
      </aside>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-margin-desktop py-6 bg-surface/95 backdrop-blur-md border-b border-white/5 ml-0 md:ml-0 pl-16 md:pl-24">
        <div className="text-xl md:text-2xl tracking-[0.4em] font-light gold-text font-display">
          BROOKLYN TINTS
        </div>
        <div className="hidden md:flex items-center gap-10">
          {["Services", "Pricing", "Gallery", "Testimonials"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity font-sans"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="px-6 py-2 border border-primary text-[10px] uppercase tracking-[0.2em] gold-text hover:bg-primary hover:text-surface transition-all font-sans">
          BOOK NOW
        </button>
      </nav>

      <main className="pl-12 md:pl-20">
        {/* Hero Section */}
        <section className="relative h-[90vh] md:h-screen flex items-center pt-24 overflow-hidden">
          <div className="absolute inset-0 z-0 scale-105">
            <img 
              src={IMAGES.hero}
              alt="Luxury car showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#121212]/70 tint-gradient"></div>
          </div>
          
          <div className="absolute top-20 right-10 text-[18rem] font-display italic opacity-[0.03] pointer-events-none select-none hidden lg:block">
            Elite
          </div>

          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-primary"></span>
              <span className="text-[11px] uppercase tracking-[0.3em] gold-text font-semibold font-sans">Premium Auto Studio</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-[96px] leading-[0.85] font-light mb-10 italic text-white"
            >
              The Silent <br/> <span className="not-italic font-normal gold-text">Styling</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-md text-sm leading-relaxed opacity-50 font-sans mb-12"
            >
              A minimalist automotive studio exploring the tension between dark obsidian surfaces and natural luminescence. Specialized window films and artisan ceramic protection.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-10"
            >
              <button className="px-10 py-4 border border-primary text-[10px] uppercase tracking-[0.2em] gold-text hover:bg-primary hover:text-surface transition-all font-sans">
                Explore Tints
              </button>
              <div className="flex flex-col">
                <span className="text-[9px] opacity-40 uppercase mb-1 font-sans tracking-widest">Materiality</span>
                <span className="text-xs tracking-wide font-sans text-secondary">Nano-Ceramic & Brass</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface relative">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-gutter">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-flex items-center gap-3">
                <span className="w-8 h-px bg-primary"></span>
                <span className="text-[11px] uppercase tracking-[0.3em] gold-text font-semibold">Specialties</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-light italic text-white lowercase">Our <span className="gold-text not-italic font-normal">Dialogue</span></h2>
            </motion.div>
            <div className="hidden md:block h-px w-32 bg-white/5 mx-12"></div>
            <p className="text-sm opacity-40 max-w-xs font-sans">Technical refinement through industry leading commissioned materiality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                id: "FRAGMENT I",
                label: "PROTECTION",
                title: "WINDOW TINTING",
                desc: "Obsidian ceramic films providing 99% UV rejection and pure cabin isolation.",
                img: IMAGES.tinting
              },
              {
                id: "FRAGMENT II",
                label: "PERFORMANCE",
                title: "CERAMIC COATING",
                desc: "Nano-ceramic dialogue that bonds with surfaces for a permanent hydrophobic shield.",
                img: IMAGES.coating
              },
              {
                id: "FRAGMENT III",
                label: "AESTHETIC",
                title: "VINYL WRAPS",
                desc: "From limited palettes to custom textures, transform your vehicle's formal identity.",
                img: IMAGES.wraps
              }
            ].map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] glass-card overflow-hidden mb-8 rounded-[40px] border-white/5">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center w-full px-6">
                    <div className="font-display italic text-2xl mb-1 text-white">{service.id}</div>
                    <div className="text-[9px] uppercase tracking-widest opacity-40 font-sans">{service.label}</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-display text-2xl text-white mb-3 tracking-wide">{service.title}</h3>
                  <p className="text-xs opacity-40 leading-relaxed font-sans max-w-[240px] mx-auto mb-6">{service.desc}</p>
                  <button className="text-[9px] uppercase tracking-[0.2em] gold-text hover:opacity-100 opacity-60 transition-all font-sans flex items-center justify-center gap-2 mx-auto">
                    View Specs <ArrowRight size={10} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Section - Table Pattern */}
        <section id="pricing" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-white/5">
          <div className="text-center mb-24">
            <span className="text-[10px] gold-text uppercase tracking-[0.5em] mb-4 block font-sans">Investment Spectrum</span>
            <h2 className="font-display text-5xl md:text-7xl font-light italic text-white lowercase">The Car <span className="gold-text not-italic font-normal">Manifesto</span></h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse sans">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-12 px-6 text-left text-[11px] uppercase tracking-[0.3em] opacity-40">Service Category</th>
                  <th className="py-12 px-6 text-center text-[11px] uppercase tracking-[0.3em] gold-text">Compact</th>
                  <th className="py-12 px-6 text-center text-[11px] uppercase tracking-[0.3em] gold-text">Standard</th>
                  <th className="py-12 px-6 text-center text-[11px] uppercase tracking-[0.3em] gold-text">Grand</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  {
                    name: "WINDOW TINTING",
                    sub: "Obsidian / Ceramic Series",
                    prices: ["$299", "$349", "$449"]
                  },
                  {
                    name: "CERAMIC COATING",
                    sub: "Commissioned Protection",
                    prices: ["$899", "$1,199", "$1,499"]
                  },
                  {
                    name: "VINYL WRAPS",
                    sub: "Formal Transformation",
                    prices: ["$2,499", "$2,999", "$3,799"]
                  }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.01] transition-all group">
                    <td className="py-14 px-6">
                      <div className="font-display text-2xl text-white italic tracking-wide group-hover:gold-text transition-colors">{row.name}</div>
                      <div className="text-[9px] uppercase tracking-[0.2em] opacity-30 mt-2 font-mono">{row.sub}</div>
                    </td>
                    {row.prices.map((price, pi) => (
                      <td key={pi} className="py-14 px-6 text-center">
                        <div className="text-3xl font-display font-light text-white tracking-widest">{price}</div>
                        <div className="text-[8px] uppercase tracking-widest opacity-20 font-sans mt-1">Starting Fragment</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-20 flex flex-col items-center">
            <p className="text-[9px] opacity-30 italic mb-12 tracking-widest uppercase font-sans">Final curated quote provided upon physical evaluation.</p>
            <button className="px-16 py-5 border border-primary text-[10px] uppercase tracking-[0.3em] gold-text hover:bg-primary hover:text-surface transition-all font-sans">
              Request Commission
            </button>
          </div>
        </section>

        {/* Gallery Section - Artistic Pattern */}
        <section id="gallery" className="py-section-gap px-margin-mobile md:px-margin-desktop">
          <div className="flex items-center justify-between mb-24">
            <div>
              <div className="mb-4 inline-flex items-center gap-3">
                <span className="w-8 h-px bg-primary"></span>
                <span className="text-[11px] uppercase tracking-[0.3em] gold-text font-semibold">Archives</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-light text-white italic lowercase">Recent <span className="gold-text not-italic font-normal">Fragments</span></h2>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center opacity-40 hover:opacity-100 gold-text transition-all"><ArrowLeft size={18} /></button>
              <button className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center opacity-40 hover:opacity-100 gold-text transition-all"><ArrowRight size={18} /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { img: IMAGES.gallery1, type: "Object No. 42", title: "OBSIDIAN MONOLITH" },
              { img: IMAGES.gallery2, type: "Object No. 19", title: "POLISHED LIQUID" },
              { img: IMAGES.gallery3, type: "Object No. 07", title: "SATIN DIALOGUE" },
              { img: IMAGES.gallery4, type: "Object No. 88", title: "CHROME FRAGMENT" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="relative group cursor-crosshair"
              >
                <div className="aspect-[3/4] overflow-hidden glass-card rounded-[80px] border-white/5 mb-6">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000"
                  />
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/5 flex items-center justify-center">
                    <span className="text-[6px] uppercase tracking-tighter opacity-40 leading-none text-center">Studio<br/>Valid</span>
                  </div>
                </div>
                <div className="pl-4">
                  <span className="text-[8px] font-mono gold-text uppercase tracking-widest opacity-60">{item.type}</span>
                  <h4 className="text-white font-display text-xl italic lowercase mt-1 group-hover:gold-text transition-colors">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials - Editorial Layout */}
        <section id="testimonials" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low relative">
          <div className="absolute top-0 right-10 text-[18rem] font-display italic opacity-[0.01] pointer-events-none">Testimony</div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-5 mb-20 lg:mb-0">
              <div className="mb-6 inline-flex items-center gap-3">
                <span className="w-8 h-px bg-primary"></span>
                <span className="text-[11px] uppercase tracking-[0.3em] gold-text font-semibold">Credibility</span>
              </div>
              <h2 className="font-display text-5xl md:text-[80px] leading-[0.9] font-light mb-16 italic text-white lowercase">The <br/><span className="gold-text not-italic font-normal">Athelier</span> <br/>Standard</h2>
              
              <div className="space-y-12 max-w-sm">
                {[
                  { icon: <ShieldCheck size={20} />, title: "Lifetime Covenant", desc: "Premium obsidian protection backed by a permanent guarantee of materiality." },
                  { icon: <Award size={20} />, title: "Validated Artisans", desc: "Commissioned technicians factory-trained in the formal language of automotive styling." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="gold-text opacity-50 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-[11px] font-sans gold-text uppercase tracking-[0.2em] mb-2 font-semibold">{item.title}</h4>
                      <p className="text-[11px] opacity-40 font-sans leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              {[
                { quote: "The only atheiler I trust with my formal vision. The attention to materiality was absolute. My vehicle reached its perfect form.", name: "L. STEVENS", car: "SERIES: 911 GT3", avatar: IMAGES.avatar1 },
                { quote: "A masterclass in technical refinement. The dialogue between light and shadow on the obsidian film is unparalleled.", name: "J. CHEN", car: "SERIES: MODEL S", avatar: IMAGES.avatar2 }
              ].map((testi, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-white/[0.01] p-12 md:p-16 border border-white/5 relative group rounded-[2px]"
                >
                  <div className="text-[80px] font-display italic text-primary/10 absolute top-0 -left-6 select-none">"</div>
                  <div className="mb-14 relative z-10">
                    <p className="font-display text-2xl md:text-3xl text-white font-light lowercase leading-tight italic">"{testi.quote}"</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 glass-card rounded-full overflow-hidden grayscale opacity-60">
                      <img src={testi.avatar} alt={testi.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-[10px] gold-text font-sans uppercase tracking-[0.3em] font-semibold">{testi.name}</div>
                      <div className="text-[9px] opacity-30 uppercase tracking-widest font-mono">{testi.car}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Artistic Minimalist */}
      <footer className="w-full py-16 px-12 md:pl-32 border-t border-white/5 bg-surface text-[10px] uppercase tracking-[0.2em]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="flex gap-16 opacity-30 text-[9px] sans">
            <div className="flex flex-col gap-1">
              <span>LAT: 40.6782 N</span>
              <span>LONG: 73.9442 W</span>
            </div>
            <div className="flex flex-col gap-1">
              <span>CURATOR: B. TINTS</span>
              <span>SERIES: 1/ALL</span>
            </div>
          </div>

          <div className="flex items-center gap-12">
             {["Instagram", "Privacy", "Terms"].map((link) => (
               <a key={link} href="#" className="opacity-40 hover:opacity-100 transition-opacity">{link}</a>
             ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="opacity-40">Digital Twin Protocol</span>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
          </div>
        </div>

        <div className="flex justify-between items-center opacity-20 border-t border-white/5 pt-12 text-[8px] tracking-[0.4em] font-sans">
          <span>© 2024 Brooklyn Tints Athelier</span>
          <span className="hidden md:block">Handcrafted in New York</span>
        </div>
      </footer>
    </div>
  );
}
