import { motion } from "motion/react";
import {
  Recycle,
  Mail,
  Phone,
  MapPin,
  Leaf,
  ArrowUp,
  Sparkles,
  Zap } from
"lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#benefits" },
    { name: "Integration", href: "#smart-city" },
    { name: "Pricing", href: "#contact" }],

    company: [
    { name: "About Us", href: "#about" },
    { name: "Impact", href: "#impact" },
    { name: "Partners", href: "#partners" },
    { name: "Careers", href: "#contact" }],

    support: [
    { name: "Documentation", href: "#contact" },
    { name: "API Reference", href: "#contact" },
    { name: "System Status", href: "#contact" },
    { name: "Support Center", href: "#contact" }],

    legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Data Protection", href: "#" }]

  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden" data-id="c53q5ojii" data-path="src/components/Footer.tsx">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden" data-id="0fovdjlfq" data-path="src/components/Footer.tsx">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }} data-id="g6ijb3vg1" data-path="src/components/Footer.tsx" />

        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }} data-id="wvjxyd4kb" data-path="src/components/Footer.tsx" />

        {/* Floating sparkles */}
        {[...Array(20)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }} data-id="54b2ctrif" data-path="src/components/Footer.tsx" />

        )}
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10" data-id="vf6fhntsp" data-path="src/components/Footer.tsx">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8" data-id="agsaaoy2o" data-path="src/components/Footer.tsx">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1" data-id="npupcklo5" data-path="src/components/Footer.tsx">
            
            <motion.div
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }} data-id="50rjkwh7y" data-path="src/components/Footer.tsx">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-2 shadow-lg" data-id="x5ohb7vo6" data-path="src/components/Footer.tsx">
                <Recycle className="w-8 h-8 text-white" data-id="fup6yaeil" data-path="src/components/Footer.tsx" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent" data-id="15mod78qu" data-path="src/components/Footer.tsx">
                SmartBin AI
              </span>
            </motion.div>
            
            <motion.p
              className="text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }} data-id="92a2rz4w0" data-path="src/components/Footer.tsx">
              Revolutionizing waste management with AI-powered smart segregation systems 
              for sustainable smart cities.
            </motion.p>

            <div className="space-y-3" data-id="qilskcc0t" data-path="src/components/Footer.tsx">
              <motion.div
                className="flex items-center text-gray-300 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }} data-id="juun7gnlj" data-path="src/components/Footer.tsx">
                <Mail className="w-4 h-4 mr-3 text-green-400 group-hover:text-green-300" data-id="2afwxn0qt" data-path="src/components/Footer.tsx" />
                <span className="text-sm" data-id="buty9pgdm" data-path="src/components/Footer.tsx">sakshipandey7290@gmail.com</span>
              </motion.div>
              <motion.div
                className="flex items-center text-gray-300 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }} data-id="mjs7zhwvx" data-path="src/components/Footer.tsx">
                <Phone className="w-4 h-4 mr-3 text-blue-400 group-hover:text-blue-300" data-id="bzfzdo8jy" data-path="src/components/Footer.tsx" />
                <span className="text-sm" data-id="t1k0ys3l2" data-path="src/components/Footer.tsx">+91 93556 05036</span>
              </motion.div>
              <motion.div
                className="flex items-center text-gray-300 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }} data-id="yeb1ui45f" data-path="src/components/Footer.tsx">
                <MapPin className="w-4 h-4 mr-3 text-purple-400 group-hover:text-purple-300" data-id="oe9iffk3k" data-path="src/components/Footer.tsx" />
                <span className="text-sm" data-id="dbjs6d8w4" data-path="src/components/Footer.tsx">GLBCRI, India</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }} data-id="fsvrgcoh4" data-path="src/components/Footer.tsx">
            
            <h3 className="text-lg font-semibold mb-6 flex items-center" data-id="r5xx2mv6f" data-path="src/components/Footer.tsx">
              <Sparkles className="w-5 h-5 mr-2 text-green-400" data-id="knj8h14sh" data-path="src/components/Footer.tsx" />
              Product
            </h3>
            <ul className="space-y-3" data-id="j0kimdiqo" data-path="src/components/Footer.tsx">
              {footerLinks.product.map((link, index) =>
              <li key={index} data-id="u8oi3vk5z" data-path="src/components/Footer.tsx">
                  <motion.a
                  href={link.href}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm block"
                  whileHover={{ x: 10, color: "#10b981" }}
                  transition={{ duration: 0.3 }} data-id="4ovwr5zu3" data-path="src/components/Footer.tsx">
                    {link.name}
                  </motion.a>
                </li>
              )}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }} data-id="qmcewchxt" data-path="src/components/Footer.tsx">
            
            <h3 className="text-lg font-semibold mb-6 flex items-center" data-id="0gqpzwce1" data-path="src/components/Footer.tsx">
              <Zap className="w-5 h-5 mr-2 text-blue-400" data-id="yn7gc1iap" data-path="src/components/Footer.tsx" />
              Company
            </h3>
            <ul className="space-y-3" data-id="sxwimgpg4" data-path="src/components/Footer.tsx">
              {footerLinks.company.map((link, index) =>
              <li key={index} data-id="ovr11x2dn" data-path="src/components/Footer.tsx">
                  <motion.a
                  href={link.href}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm block"
                  whileHover={{ x: 10, color: "#10b981" }}
                  transition={{ duration: 0.3 }} data-id="fv3asi5jg" data-path="src/components/Footer.tsx">
                    {link.name}
                  </motion.a>
                </li>
              )}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }} data-id="xi2ekt51q" data-path="src/components/Footer.tsx">
            
            <h3 className="text-lg font-semibold mb-6 flex items-center" data-id="pbvq5ml21" data-path="src/components/Footer.tsx">
              <Leaf className="w-5 h-5 mr-2 text-purple-400" data-id="nly9zwpzk" data-path="src/components/Footer.tsx" />
              Support
            </h3>
            <ul className="space-y-3" data-id="2epwd1r0a" data-path="src/components/Footer.tsx">
              {footerLinks.support.map((link, index) =>
              <li key={index} data-id="8sus28x0e" data-path="src/components/Footer.tsx">
                  <motion.a
                  href={link.href}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm block"
                  whileHover={{ x: 10, color: "#10b981" }}
                  transition={{ duration: 0.3 }} data-id="jizgavhv7" data-path="src/components/Footer.tsx">
                    {link.name}
                  </motion.a>
                </li>
              )}
            </ul>
          </motion.div>
        </div>

        {/* Enhanced Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800/50" data-id="dcl32hj1o" data-path="src/components/Footer.tsx">
          
          <div className="grid md:grid-cols-2 gap-8 items-center" data-id="wearg9axr" data-path="src/components/Footer.tsx">
            <div data-id="qcglsnaub" data-path="src/components/Footer.tsx">
              <motion.h3
                className="text-xl font-semibold mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }} data-id="qo79xhgdh" data-path="src/components/Footer.tsx">
                Stay Connected
              </motion.h3>
              <p className="text-gray-300" data-id="b7gn7jnfk" data-path="src/components/Footer.tsx">
                Get updates on smart city innovations and sustainability news.
              </p>
            </div>
            <motion.div
              className="flex gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }} data-id="6nklynt51" data-path="src/components/Footer.tsx">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 text-white placeholder:text-gray-400 transition-all duration-300" data-id="lry2pn9wt" data-path="src/components/Footer.tsx" />
              
              <motion.button
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} data-id="q3kk093qk" data-path="src/components/Footer.tsx">
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Bottom Footer */}
      <div className="border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm" data-id="cc4yp7ncv" data-path="src/components/Footer.tsx">
        <div className="container mx-auto px-4 py-6" data-id="c3fl10wk1" data-path="src/components/Footer.tsx">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" data-id="djqstr0pe" data-path="src/components/Footer.tsx">
            {/* Copyright */}
            <div className="flex items-center space-x-4" data-id="arzrmxwpj" data-path="src/components/Footer.tsx">
              <motion.p
                className="text-gray-400 text-sm"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }} data-id="vahsm93zg" data-path="src/components/Footer.tsx">
                © 2025 SmartBin AI. All rights reserved.
              </motion.p>
              <motion.div
                className="flex items-center space-x-2 text-green-400"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }} data-id="j0cg56s5m" data-path="src/components/Footer.tsx">
                <Leaf className="w-4 h-4" data-id="j5x3fsijv" data-path="src/components/Footer.tsx" />
                <span className="text-sm font-medium" data-id="r21hcfm62" data-path="src/components/Footer.tsx">Smart Waste. Clean Future.</span>
              </motion.div>
            </div>

            {/* Enhanced Back to Top with Legal Links */}
            <div className="flex items-center space-x-6" data-id="0tw4jzpxu" data-path="src/components/Footer.tsx">
              {/* Legal Links */}
              <div className="hidden md:flex items-center space-x-4" data-id="qi4i60jh0" data-path="src/components/Footer.tsx">
                {footerLinks.legal.map((link, index) =>
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }} data-id="lveqt009n" data-path="src/components/Footer.tsx">
                    {link.name}
                  </motion.a>
                )}
              </div>

              {/* Enhanced Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-green-600 hover:to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-xl"
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)"
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Back to top" data-id="7u5081j5w" data-path="src/components/Footer.tsx">
                
                <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" data-id="pa57t5b0h" data-path="src/components/Footer.tsx" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Tagline Banner */}
      <motion.div
        className="bg-gradient-to-r from-green-600 via-blue-600 to-green-600 py-3 relative overflow-hidden"
        animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity }} data-id="n5rokhvsc" data-path="src/components/Footer.tsx">
        
        <div className="container mx-auto px-4 text-center relative" data-id="oy3bhvo4q" data-path="src/components/Footer.tsx">
          <motion.p
            className="text-white font-medium"
            animate={{
              scale: [1, 1.02, 1],
              textShadow: [
              "0 0 0px rgba(255,255,255,0)",
              "0 0 10px rgba(255,255,255,0.5)",
              "0 0 0px rgba(255,255,255,0)"]

            }}
            transition={{ duration: 3, repeat: Infinity }} data-id="zew0j02is" data-path="src/components/Footer.tsx">
            🌱 Smart Waste. Clean Future. Powered by SmartBin AI. 🌱
          </motion.p>
        </div>
      </motion.div>
    </footer>);

};

export default Footer;