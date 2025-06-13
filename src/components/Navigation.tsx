import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import {
  Recycle,
  Menu,
  X,
  ChevronDown,
  Zap,
  Users } from
'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Benefits', href: '#benefits' },
  {
    name: 'Solutions',
    href: '#smart-city',
    hasDropdown: true,
    dropdownItems: [
    { name: 'System Architecture', href: '#smart-city' },
    { name: 'Impact Dashboard', href: '#impact' },
    { name: 'Partnership Options', href: '#partners' }]

  },
  { name: 'Contact', href: '#contact' }];


  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled ?
    'bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/20' :
    'bg-white/5 backdrop-blur-md'}`
    } data-id="ia6efmfgc" data-path="src/components/Navigation.tsx">
      <div className="container mx-auto px-4" data-id="ew3kuec7n" data-path="src/components/Navigation.tsx">
        <div className="flex items-center justify-between h-16 lg:h-18" data-id="fxv4crxbs" data-path="src/components/Navigation.tsx">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick('#hero')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }} data-id="f4uxxctbr" data-path="src/components/Navigation.tsx">

            <motion.div
              className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-2 shadow-lg"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }} data-id="rdusf6e8h" data-path="src/components/Navigation.tsx">

              <Recycle className="w-6 h-6 lg:w-7 lg:h-7 text-white" data-id="38fj52sqg" data-path="src/components/Navigation.tsx" />
            </motion.div>
            <span className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-white drop-shadow-lg' : 'text-white drop-shadow-lg'}`
            } data-id="385fj6y67" data-path="src/components/Navigation.tsx">
              SmartBin AI
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" data-id="lfq76bgtd" data-path="src/components/Navigation.tsx">
            {navItems.map((item, index) =>
            <div key={index} className="relative group" data-id="4s2ugx2bd" data-path="src/components/Navigation.tsx">
                {item.hasDropdown ?
              <div data-id="imsiypcxu" data-path="src/components/Navigation.tsx">
                    <motion.button
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  'text-white hover:text-green-300 hover:bg-white/10 backdrop-blur-sm drop-shadow-sm'}`
                  }
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} data-id="87dr3c0zr" data-path="src/components/Navigation.tsx">

                      <span data-id="s4z8e4ohl" data-path="src/components/Navigation.tsx">{item.name}</span>
                      <ChevronDown className="w-4 h-4" data-id="smf58ni9e" data-path="src/components/Navigation.tsx" />
                    </motion.button>
                    
                    {/* Dropdown Menu */}
                    <motion.div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white/20 backdrop-blur-xl rounded-xl shadow-xl border border-white/30 py-2 ${
                  activeDropdown === item.name ?
                  'opacity-100 visible transform translate-y-0' :
                  'opacity-0 invisible transform -translate-y-2'}`
                  }
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  initial={false}
                  animate={{
                    opacity: activeDropdown === item.name ? 1 : 0,
                    y: activeDropdown === item.name ? 0 : -8
                  }}
                  transition={{ duration: 0.2 }} data-id="bud4hx0vy" data-path="src/components/Navigation.tsx">

                      {item.dropdownItems?.map((dropdownItem, idx) =>
                  <motion.button
                    key={idx}
                    onClick={() => handleNavClick(dropdownItem.href)}
                    className="w-full text-left px-4 py-3 text-white hover:text-green-300 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                    whileHover={{ x: 4 }} data-id="h9zwdbsob" data-path="src/components/Navigation.tsx">

                          {dropdownItem.name}
                        </motion.button>
                  )}
                    </motion.div>
                  </div> :

              <motion.button
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                'text-white hover:text-green-300 hover:bg-white/10 backdrop-blur-sm drop-shadow-sm'}`
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} data-id="x9ywuwak8" data-path="src/components/Navigation.tsx">

                    {item.name}
                  </motion.button>
              }
              </div>
            )}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3" data-id="u8nkd9k7k" data-path="src/components/Navigation.tsx">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} data-id="7iqxkl26j" data-path="src/components/Navigation.tsx">
              <Button
                variant="outline"
                onClick={() => handleNavClick('#contact')}
                className={`border-2 transition-all duration-200 ${
                'border-white/50 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm'}`
                } data-id="cc035i955" data-path="src/components/Navigation.tsx">

                <Users className="w-4 h-4 mr-2" data-id="rlamnnb7r" data-path="src/components/Navigation.tsx" />
                Partner With Us
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} data-id="75chmrw0h" data-path="src/components/Navigation.tsx">
              <Button
                onClick={() => handleNavClick('#contact')}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg backdrop-blur-sm" data-id="aaka0gi4g" data-path="src/components/Navigation.tsx">

                <Zap className="w-4 h-4 mr-2" data-id="dgwn8ai6d" data-path="src/components/Navigation.tsx" />
                Book Demo
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
            'text-white hover:bg-white/10 backdrop-blur-sm'}`
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} data-id="tdrfijzwo" data-path="src/components/Navigation.tsx">

            {isMobileMenuOpen ? <X className="w-6 h-6" data-id="4r7jljp9o" data-path="src/components/Navigation.tsx" /> : <Menu className="w-6 h-6" data-id="u5kw95sfk" data-path="src/components/Navigation.tsx" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white/20 backdrop-blur-xl shadow-xl rounded-2xl mt-2 border border-white/30" data-id="ahl4odu6n" data-path="src/components/Navigation.tsx">

          <div className="py-4 space-y-1" data-id="wwfo7pn0t" data-path="src/components/Navigation.tsx">
            {navItems.map((item, index) =>
            <div key={index} data-id="94kpnyq0r" data-path="src/components/Navigation.tsx">
                {item.hasDropdown ?
              <div data-id="5ynxa82gs" data-path="src/components/Navigation.tsx">
                    <motion.button
                  onClick={() => setActiveDropdown(
                    activeDropdown === item.name ? null : item.name
                  )}
                  className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-white/10 hover:text-green-300 transition-all duration-200"
                  whileHover={{ x: 4 }} data-id="9if9rh9bv" data-path="src/components/Navigation.tsx">

                      <span className="font-medium" data-id="19yuo2eoy" data-path="src/components/Navigation.tsx">{item.name}</span>
                      <motion.div
                    animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                    transition={{ duration: 0.2 }} data-id="ldj80ihg3" data-path="src/components/Navigation.tsx">

                        <ChevronDown className="w-4 h-4" data-id="irj5gkgch" data-path="src/components/Navigation.tsx" />
                      </motion.div>
                    </motion.button>
                    {activeDropdown === item.name &&
                <motion.div
                  className="bg-white/10 py-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }} data-id="2zf3mhero" data-path="src/components/Navigation.tsx">

                        {item.dropdownItems?.map((dropdownItem, idx) =>
                  <motion.button
                    key={idx}
                    onClick={() => handleNavClick(dropdownItem.href)}
                    className="w-full text-left px-8 py-2 text-white/80 hover:text-green-300 transition-colors duration-200"
                    whileHover={{ x: 8 }} data-id="l232ip74c" data-path="src/components/Navigation.tsx">

                            {dropdownItem.name}
                          </motion.button>
                  )}
                      </motion.div>
                }
                  </div> :

              <motion.button
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left px-4 py-3 text-white hover:bg-white/10 hover:text-green-300 font-medium transition-all duration-200"
                whileHover={{ x: 4 }} data-id="vln7ehq5f" data-path="src/components/Navigation.tsx">

                    {item.name}
                  </motion.button>
              }
              </div>
            )}
            
            {/* Mobile CTA Buttons */}
            <div className="px-4 pt-4 space-y-3 border-t border-white/20" data-id="si4qoblgu" data-path="src/components/Navigation.tsx">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} data-id="nj75onqt9" data-path="src/components/Navigation.tsx">
                <Button
                  variant="outline"
                  onClick={() => handleNavClick('#contact')}
                  className="w-full border-white/50 text-white hover:bg-white hover:text-gray-900" data-id="exf6yykk0" data-path="src/components/Navigation.tsx">

                  <Users className="w-4 h-4 mr-2" data-id="ie93p211f" data-path="src/components/Navigation.tsx" />
                  Partner With Us
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} data-id="21bbqv0dr" data-path="src/components/Navigation.tsx">
                <Button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white" data-id="a3vzgqk8a" data-path="src/components/Navigation.tsx">

                  <Zap className="w-4 h-4 mr-2" data-id="2ga6ijddf" data-path="src/components/Navigation.tsx" />
                  Book Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>);

};

export default Navigation;