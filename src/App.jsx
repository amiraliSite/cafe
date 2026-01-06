import React, { useState, useEffect } from 'react';
import { 
  FaSun, FaMoon, FaCoffee, FaImages, FaUtensils, FaHome, 
  FaCalendarAlt, FaLeaf, FaInstagram, FaCheckCircle, FaMapMarkerAlt, 
  FaClock, FaPhone, FaMugHot, FaIceCream, FaGlassMartiniAlt, 
  FaCookieBite, FaTwitter, FaFacebook 
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  "https://m.media-amazon.com/images/I/719WDTZBGOL.jpg",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&h=800",
  "https://www.cafeyab.com/upload/media/original/2/-/2--339.jpg",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&h=800",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9fmOe3-cwHvI7uTHD8E4T9WOFS3F2i_iGFw&s",
  "https://cafeniro.com/wp-content/uploads/2020/02/espresso-machine-cafeniro2.jpg?v=1581068526"
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function CompleteCafeApp() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState('fa');
  const [activeTab, setActiveTab] = useState('home');
  const [isReserved, setIsReserved] = useState(false);

  const isRtl = lang === 'fa';

  const dictionary = {
    fa: {
      nav: { home: "صفحه اصلی", menu: "منوی کافه", gallery: "گالری", reserve: "رزرو میز" },
      hero: { title: "طعم اصیل آرامش", desc: "در لونا، هر فنجان قهوه داستانی برای گفتن دارد.", btn: "منوی آنلاین" },
      features: [
        { t: "مواد اولیه تازه", d: "شیر ارگانیک و دانه‌های دست‌چین شده.", icon: <FaLeaf/> },
        { t: "باریستاهای برتر", d: "هنر دم‌آوری قهوه توسط متخصصین.", icon: <FaCoffee/> },
        { t: "ساعات کاری", d: "هر روز از ۸ صبح تا ۱۱ شب میزبان شما هستیم.", icon: <FaClock/> }
      ],
      about: { t: "فضایی برای فریلنسرها", d: "ما در کافه لونا با فراهم کردن اینترنت پرسرعت، میزهای استاندارد و محیطی آرام، بهترین مکان را برای انجام پروژه‌های کاری و مطالعه شما فراهم کرده‌ایم. لذت کار کردن در کنار عطر قهوه تازه!", btn: "رزرو میز کار" },
      galleryTitle: "گوشه‌هایی از لونا",
      menu: {
        title: "منوی انتخاب شده لونا",
        subtitle: "تجربه بهترین‌ها",
        cats: ["نوشیدنی‌های گرم", "بار سرد", "کیک و دسر"],
        items: [
          { n: "اسپرسو سولو", p: "۴۵", icon: <FaCoffee /> }, { n: "کاپوچینو", p: "۷۵", icon: <FaMugHot /> }, { n: "آمریکانو", p: "۶۰", icon: <FaCoffee /> }, { n: "موکا شکلات", p: "۸۵", icon: <FaMugHot /> },
          { n: "آیس لاته", p: "۷۰", icon: <FaIceCream /> }, { n: "کلد برو", p: "۹۰", icon: <FaGlassMartiniAlt /> }, { n: "اسموتی میوه", p: "۸۰", icon: <FaGlassMartiniAlt /> },
          { n: "کیک هویج", p: "۶۵", icon: <FaCookieBite /> }, { n: "براونی گرم", p: "۷۰", icon: <FaCookieBite /> }, { n: "تارت سیب", p: "۷۵", icon: <FaCookieBite /> }
        ]
      },
      reserve: { t: "رزرو آنلاین میز", name: "نام کامل", count: "نفرات", date: "تاریخ", desc: "توضیحات", btn: "ثبت نهایی رزرو", success: "درخواست رزرو ارسال شد", contactD: "پاسخگویی ۸ الی ۲۲" },
      footer: {
        desc: "تجربه‌ای متفاوت از طعم و آرامش در قلب شهر. ما هر روز با عشق، بهترین دانه‌های قهوه را برای شما دم می‌کنیم.",
        linksT: "دسترسی سریع",
        contactT: "اطلاعات تماس",
        hoursT: "ساعات کاری",
        addr: "تهران، خیابان ولیعصر، بالاتر از پارک وی",
        copy: "© ۲۰۲۵ تمام حقوق برای کافه لونا محفوظ است.",
        days: ["شنبه - چهارشنبه", "پنجشنبه", "جمعه"]
      }
    },
    en: {
      nav: { home: "Home", menu: "Menu", gallery: "Gallery", reserve: "Booking" },
      hero: { title: "Authentic Peace", desc: "At Luna, every cup of coffee tells a story.", btn: "Online Menu" },
      features: [
        { t: "Fresh Ingredients", d: "Organic milk and hand-picked beans.", icon: <FaLeaf/> },
        { t: "Top Baristas", d: "Professional coffee brewing art.", icon: <FaCoffee/> },
        { t: "Opening Hours", d: "Daily from 8 AM to 11 PM.", icon: <FaClock/> }
      ],
      about: { t: "Freelancer Hub", d: "With high-speed internet and a quiet atmosphere, we provide the perfect workspace for your projects.", btn: "Book a Workspace" },
      galleryTitle: "Glimpses of Luna",
      menu: {
        title: "Luna's Curated Menu",
        subtitle: "Experience Excellence",
        cats: ["Hot Drinks", "Cold Bar", "Desserts"],
        items: [
          { n: "Espresso Solo", p: "45", icon: <FaCoffee /> }, { n: "Cappuccino", p: "75", icon: <FaMugHot /> }, { n: "Americano", p: "60", icon: <FaCoffee /> }, { n: "Mocha Chocolate", p: "85", icon: <FaMugHot /> },
          { n: "Iced Latte", p: "70", icon: <FaIceCream /> }, { n: "Cold Brew", p: "90", icon: <FaGlassMartiniAlt /> }, { n: "Fruit Smoothie", p: "80", icon: <FaGlassMartiniAlt /> },
          { n: "Carrot Cake", p: "65", icon: <FaCookieBite /> }, { n: "Warm Brownie", p: "70", icon: <FaCookieBite /> }, { n: "Apple Tart", p: "75", icon: <FaCookieBite /> }
        ]
      },
      reserve: { t: "Book a Table", name: "Full Name", count: "Guests", date: "Date", desc: "Description", btn: "Confirm Booking", success: "Reservation Sent!", contactD: "Support 8 AM - 10 PM" },
      footer: {
        desc: "A unique experience of taste and peace in the heart of the city. We brew excellence daily.",
        linksT: "Quick Links",
        contactT: "Contact Info",
        hoursT: "Opening Hours",
        addr: "Valiasr St, Tehran, Above Park-Way",
        copy: "© 2025 All Rights Reserved for Luna Cafe.",
        days: ["Sat - Wed", "Thursday", "Friday"]
      }
    }
  };

  const t = dictionary[lang];

  useEffect(() => { window.scrollTo(0, 0); }, [activeTab]);

  return (
    <div className={`${darkMode ? 'dark' : ''} ${isRtl ? 'rtl' : 'ltr'} font-sans`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500 pb-20 md:pb-0">
        
        {/* --- Header --- */}
        <header className="hidden md:flex justify-between items-center px-12 py-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md sticky top-0 z-50 border-b dark:border-zinc-800">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{scale:1.05}} 
            className="text-3xl font-serif font-black text-amber-800 cursor-pointer">LUNA_CAFE</motion.h1>
          <nav className="flex gap-8 font-bold text-sm tracking-widest uppercase">
            {Object.keys(t.nav).map((id, index) => (
              <motion.button 
                key={id} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveTab(id)} 
                className={`transition-all ${activeTab === id ? 'text-amber-700 border-b-2 border-amber-700' : 'text-zinc-500 hover:text-amber-600'}`}>
                {t.nav[id]}
              </motion.button>
            ))}
          </nav>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800">{darkMode ? <FaSun className="text-amber-500"/> : <FaMoon/>}</button>
            <button onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')} className="border-2 border-amber-800 px-4 py-1 rounded-full text-xs font-black">{lang.toUpperCase()}</button>
          </motion.div>
        </header>

        <main>
          <AnimatePresence mode="wait">
            {activeTab === 'home' && (
              <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden text-center">
                   <motion.img 
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1.05 }}
                      transition={{ duration: 2 }}
                      src="https://safarzon.com/mag/wp-content/uploads/2021/07/%DA%A9%D8%A7%D9%81%D9%87-%D9%87%D8%A7%DB%8C-%D9%85%D8%B4%D9%87%D8%AF.jpg" 
                      className="absolute inset-0 w-full h-full object-cover" alt="hero" />
                   <div className="absolute inset-0 bg-black/60 z-10" />
                   <div className="relative z-20 px-6">
                      <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-6xl md:text-8xl font-serif font-bold mb-6">{t.hero.title}</motion.h2>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="text-xl md:text-2xl opacity-80 mb-10 max-w-2xl mx-auto italic">{t.hero.desc}</motion.p>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        onClick={() => setActiveTab('menu')} 
                        className="bg-amber-800 hover:bg-amber-900 px-12 py-4 rounded-full font-bold shadow-xl">{t.hero.btn}</motion.button>
                   </div>
                </section>

                <section className="py-24 container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                   {t.features.map((f, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        whileHover={{y:-10}} 
                        className="p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-lg text-center border dark:border-zinc-800">
                        <div className="text-4xl text-amber-700 mb-4 flex justify-center">{f.icon}</div>
                        <h4 className="text-xl font-bold mb-2">{f.t}</h4>
                        <p className="text-zinc-500 text-sm">{f.d}</p>
                     </motion.div>
                   ))}
                </section>

                <section className="py-20 bg-stone-100 dark:bg-zinc-900/30">
                  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <motion.img 
                      initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=500" 
                      className="rounded-[3rem] shadow-2xl md:w-1/2" alt="about" />
                    <motion.div 
                      initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="md:w-1/2">
                      <h3 className="text-4xl font-serif mb-6">{t.about.t}</h3>
                      <p className="text-lg leading-relaxed mb-6 text-justify italic opacity-90">{t.about.d}</p>
                      <button onClick={() => setActiveTab('reserve')} className="flex items-center gap-2 text-amber-800 font-bold hover:gap-4 transition-all">{t.about.btn} <FaMapMarkerAlt/></button>
                    </motion.div>
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === 'menu' && (
              <motion.div key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-6 py-16">
                <motion.div 
                  {...fadeIn}
                  className="text-center mb-20">
                  <span className="text-amber-700 font-black tracking-widest uppercase text-sm">{t.menu.subtitle}</span>
                  <h2 className="text-5xl font-serif mt-2 mb-4">{t.menu.title}</h2>
                  <div className="w-24 h-1 bg-amber-800 mx-auto rounded-full"></div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                   {t.menu.cats.map((catName, idx) => (
                     <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="bg-white dark:bg-zinc-900/50 p-8 border-t-4 border-amber-800 rounded-[2.5rem] shadow-xl">
                        <h3 className="text-2xl font-black mb-8">{catName}</h3>
                        <div className="space-y-8">
                           {t.menu.items.slice(idx * 3, (idx + 1) * 4).map((item, i) => (
                             <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                key={i} className="flex justify-between items-center group">
                                <div className="flex items-center gap-4">
                                   <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-zinc-800 flex items-center justify-center text-amber-700">{item.icon}</div>
                                   <span className="font-bold">{item.n}</span>
                                </div>
                                <span className="font-mono font-bold text-amber-800">{item.p}</span>
                             </motion.div>
                           ))}
                        </div>
                     </motion.div>
                   ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'gallery' && (
              <motion.div key="gallery" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-6 py-16">
                <motion.h2 {...fadeIn} className="text-4xl font-serif text-center mb-12">{t.galleryTitle}</motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                   {galleryImages.map((img, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{scale:1.02}} 
                        className="h-80 rounded-3xl overflow-hidden shadow-xl">
                        <img src={img} className="w-full h-full object-cover" alt="gallery" />
                     </motion.div>
                   ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'reserve' && (
              <motion.div key="reserve" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="container mx-auto px-6 py-16 max-w-4xl">
                 <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-zinc-900 rounded-[3rem] shadow-2xl flex flex-col md:flex-row overflow-hidden border dark:border-zinc-800">
                    <div className="md:w-1/3 bg-amber-800 p-10 text-white flex flex-col justify-center">
                       <motion.h3 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="text-3xl font-serif mb-6">{t.reserve.t}</motion.h3>
                       <div className="space-y-4 text-sm opacity-80">
                          <p className="flex items-center gap-2"><FaPhone/> ۰۲۱-۱۲۳۴۵۶۷۸</p>
                          <p className="flex items-center gap-2"><FaClock/> {t.reserve.contactD}</p>
                       </div>
                    </div>
                    <div className="md:w-2/3 p-10">
                       {!isReserved ? (
                         <div className="space-y-6">
                            <motion.input initial={{x:-10, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.4}} type="text" placeholder={t.reserve.name} className="w-full p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 outline-none" />
                            <div className="flex gap-4">
                               <motion.input initial={{x:-10, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.5}} type="number" placeholder={t.reserve.count} className="w-1/2 p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 outline-none" />
                               <motion.input initial={{x:-10, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.6}} type="date" className="w-1/2 p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 outline-none" />
                            </div>
                            <motion.textarea initial={{x:-10, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.7}} placeholder={t.reserve.desc} className="w-full p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 outline-none h-32"></motion.textarea>
                            <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}} onClick={() => setIsReserved(true)} className="w-full bg-amber-800 text-white py-4 rounded-2xl font-bold">{t.reserve.btn}</motion.button>
                         </div>
                       ) : (
                         <motion.div initial={{scale:0.5, opacity:0}} animate={{scale:1, opacity:1}} className="text-center py-10">
                            <FaCheckCircle className="text-7xl text-green-500 mx-auto mb-6" />
                            <h4 className="text-2xl font-bold">{t.reserve.success}</h4>
                         </motion.div>
                       )}
                    </div>
                 </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* --- Mobile Nav --- */}
        <div className="md:hidden fixed bottom-6 left-6 right-6 h-16 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-2xl shadow-2xl flex justify-around items-center z-50 px-4">
          <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'text-amber-800' : 'text-zinc-400'}><FaHome size={22}/></button>
          <button onClick={() => setActiveTab('menu')} className={activeTab === 'menu' ? 'text-amber-800' : 'text-zinc-400'}><FaUtensils size={22}/></button>
          <button onClick={() => setActiveTab('gallery')} className={activeTab === 'gallery' ? 'text-amber-800' : 'text-zinc-400'}><FaImages size={22}/></button>
          <button onClick={() => setActiveTab('reserve')} className={activeTab === 'reserve' ? 'text-amber-800' : 'text-zinc-400'}><FaCalendarAlt size={22}/></button>
          <div className="w-[1px] h-6 bg-zinc-300 dark:bg-zinc-700 mx-1"></div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')} className="text-[10px] font-bold bg-amber-100 dark:bg-zinc-800 p-1 rounded-md text-amber-800">{lang.toUpperCase()}</button>
            <button onClick={() => setDarkMode(!darkMode)} className="text-amber-600">{darkMode ? <FaSun size={20}/> : <FaMoon size={20}/>}</button>
          </div>
        </div>

        {/* --- Footer --- */}
        <footer className="bg-zinc-900 text-zinc-400 pt-20 pb-10 border-t border-zinc-800 overflow-hidden relative">
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 text-start">
              <div>
                 <h4 className="text-white text-3xl font-serif font-black mb-6">LUNA_CAFE</h4>
                 <p className="text-sm leading-relaxed mb-6 opacity-70">{t.footer.desc}</p>
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-amber-800 hover:text-white transition-all cursor-pointer"><FaInstagram/></div>
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-amber-800 hover:text-white transition-all cursor-pointer"><FaTwitter/></div>
                 </div>
              </div>
              <div>
                 <h5 className="text-white font-bold mb-6 border-b border-amber-800 w-fit pb-2">{t.footer.linksT}</h5>
                 <ul className="space-y-4 text-sm">
                    {Object.keys(t.nav).map(id => <li key={id} onClick={() => setActiveTab(id)} className="hover:text-amber-700 cursor-pointer transition-colors">{t.nav[id]}</li>)}
                 </ul>
              </div>
              <div>
                 <h5 className="text-white font-bold mb-6 border-b border-amber-800 w-fit pb-2">{t.footer.contactT}</h5>
                 <ul className="space-y-4 text-sm">
                    <li className="flex items-center gap-3"><FaMapMarkerAlt className="text-amber-800"/> {t.footer.addr}</li>
                    <li className="flex items-center gap-3 font-mono" dir="ltr"><FaPhone className="text-amber-800"/> +98 21 1234 5678</li>
                 </ul>
              </div>
              <div>
                 <h5 className="text-white font-bold mb-6 border-b border-amber-800 w-fit pb-2">{t.footer.hoursT}</h5>
                 <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>{t.footer.days[0]}:</span><span className="font-mono">8:00 - 23:00</span></div>
                    <div className="flex justify-between"><span>{t.footer.days[1]}:</span><span className="font-mono">8:00 - 24:00</span></div>
                    <div className="flex justify-between text-amber-700 font-bold"><span>{t.footer.days[2]}:</span><span className="font-mono">10:00 - 23:00</span></div>
                 </div>
              </div>
           </motion.div>
           <div className="container mx-auto px-8 mt-16 pt-8 border-t border-zinc-800/50 flex justify-between items-center text-[10px] uppercase tracking-widest">
              <p>{t.footer.copy}</p>
           </div>
           <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 0.02 }}
              transition={{ duration: 1.5 }}
              className="absolute -bottom-10 -right-10 text-[15rem] font-black pointer-events-none select-none">LUNA</motion.div>
        </footer>
      </div>
    </div>
  );
}