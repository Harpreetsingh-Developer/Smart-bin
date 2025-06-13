import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Leaf, Zap, Recycle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white overflow-hidden perspective-2000" data-id="gr9vg5x4z" data-path="src/components/HeroSection.tsx">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden" data-id="9t5rrcnxx" data-path="src/components/HeroSection.tsx">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-200 to-green-300 rounded-full opacity-30 card-3d"
          animate={{
            y: [-20, 20, -20],
            rotateY: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} data-id="2dwfl98xd" data-path="src/components/HeroSection.tsx">
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full opacity-40 card-3d"
          animate={{
            y: [20, -20, 20],
            rotateX: [0, 360],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} data-id="gm4rxnmvw" data-path="src/components/HeroSection.tsx">
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-green-300 to-blue-300 rounded-full opacity-35 card-3d"
          animate={{
            x: [-10, 10, -10],
            rotateZ: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} data-id="t77g40a3u" data-path="src/components/HeroSection.tsx">
        </motion.div>

        {/* Additional Floating 3D Elements */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-8 h-8 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-25 float-3d"
          style={{ animationDelay: '2s' }} data-id="dey2iltlo" data-path="src/components/HeroSection.tsx">
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-20 float-3d"
          style={{ animationDelay: '4s' }} data-id="noxut7tbt" data-path="src/components/HeroSection.tsx">
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16" data-id="3k4o9z9v5" data-path="src/components/HeroSection.tsx">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]" data-id="oefjnfwjs" data-path="src/components/HeroSection.tsx">
          {/* Left Column - Enhanced Content with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="space-y-8 perspective-1000" data-id="5fxhplxaf" data-path="src/components/HeroSection.tsx">

            <div className="space-y-4" data-id="e8hsiha2p" data-path="src/components/HeroSection.tsx">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-medium shadow-3d card-3d"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
                }} data-id="kxs871x7w" data-path="src/components/HeroSection.tsx">

                <Leaf className="w-4 h-4 mr-2" data-id="65fm1oa0g" data-path="src/components/HeroSection.tsx" />
                Sustainability Meets AI Innovation
              </motion.div>
              
              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }} data-id="r40dd0p5v" data-path="src/components/HeroSection.tsx">
                Revolutionizing 
                <motion.span
                  className="text-green-600 inline-block"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    textShadow: '2px 2px 4px rgba(34, 197, 94, 0.3)'
                  }} data-id="0m4vcc1u6" data-path="src/components/HeroSection.tsx"> Waste Management</motion.span>
                <br data-id="bfxo961xf" data-path="src/components/HeroSection.tsx" />
                <motion.span
                  className="text-blue-600 inline-block"
                  whileHover={{
                    scale: 1.05,
                    rotateY: -10,
                    textShadow: '2px 2px 4px rgba(59, 130, 246, 0.3)'
                  }} data-id="plrl5dmfy" data-path="src/components/HeroSection.tsx">with AI</motion.span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }} data-id="xdpozj6lq" data-path="src/components/HeroSection.tsx">
                Introducing SmartBin AI – An intelligent system that segregates waste, boosts recycling, and powers sustainable cities with 95%+ accuracy.
              </motion.p>
            </div>

            {/* Enhanced 3D Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }} data-id="91dznfr2k" data-path="src/components/HeroSection.tsx">
              
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                className="perspective-1000" data-id="tusuyo08c" data-path="src/components/HeroSection.tsx">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 text-lg rounded-full btn-3d shadow-3d hover:shadow-3d-hover" data-id="6gwplehiu" data-path="src/components/HeroSection.tsx">

                  <Zap className="w-5 h-5 mr-2" data-id="4v13tekrh" data-path="src/components/HeroSection.tsx" />
                  Book a Demo
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
                className="perspective-1000" data-id="f9mloje55" data-path="src/components/HeroSection.tsx">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg rounded-full btn-3d shadow-3d hover:shadow-3d-hover" data-id="vh5p308hl" data-path="src/components/HeroSection.tsx">

                  <Recycle className="w-5 h-5 mr-2" data-id="8kly0k9xr" data-path="src/components/HeroSection.tsx" />
                  Partner With Us
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced 3D Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200" data-id="j2lvpnky7" data-path="src/components/HeroSection.tsx">

              {[
              { value: "95%+", label: "Accuracy Rate", color: "text-green-600" },
              { value: "60%", label: "Recycling Boost", color: "text-blue-600" },
              { value: "30%", label: "Cost Reduction", color: "text-green-600" }].
              map((stat, index) =>
              <motion.div
                key={index}
                className="text-center card-3d"
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  z: 20
                }}
                transition={{ type: "spring", stiffness: 300 }} data-id="75zv103c7" data-path="src/components/HeroSection.tsx">
                  <motion.div
                  className={`text-3xl font-bold ${stat.color}`}
                  whileHover={{ scale: 1.1 }} data-id="kk52bcs6c" data-path="src/components/HeroSection.tsx">
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600" data-id="mvgovr6nb" data-path="src/components/HeroSection.tsx">{stat.label}</div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            className="relative perspective-2000" data-id="me4i9u900" data-path="src/components/HeroSection.tsx">

            <motion.div
              className="relative bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl p-8 shadow-3d-intense card-3d"
              whileHover={{
                rotateY: 5,
                rotateX: 5,
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)'
              }}
              transition={{ type: "spring", stiffness: 200 }} data-id="w1qntun0j" data-path="src/components/HeroSection.tsx">
              
              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 space-y-4 glass-3d"
                whileHover={{
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  scale: 1.02
                }} data-id="jodu23xlx" data-path="src/components/HeroSection.tsx">
                
                <div className="flex items-center justify-between" data-id="bszfnpe00" data-path="src/components/HeroSection.tsx">
                  <h3 className="text-lg font-semibold text-gray-900" data-id="wqsdpfnam" data-path="src/components/HeroSection.tsx">SmartBin AI Dashboard</h3>
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }} data-id="3isp2i84p" data-path="src/components/HeroSection.tsx">
                  </motion.div>
                </div>
                
                <div className="space-y-3" data-id="1cpisk10n" data-path="src/components/HeroSection.tsx">
                  {[
                  { label: "Waste Segregated Today", value: "2,847 kg", color: "text-green-600" },
                  { label: "Recycling Rate", value: "94.2%", color: "text-blue-600" },
                  { label: "Active Bins", value: "156", color: "text-gray-900" }].
                  map((item, index) =>
                  <motion.div
                    key={index}
                    className="flex items-center justify-between card-3d"
                    whileHover={{
                      x: 5,
                      backgroundColor: 'rgba(248, 250, 252, 0.8)'
                    }}
                    transition={{ type: "spring", stiffness: 300 }} data-id="5tbs0vxox" data-path="src/components/HeroSection.tsx">
                      <span className="text-sm text-gray-600" data-id="0a3ll7uze" data-path="src/components/HeroSection.tsx">{item.label}</span>
                      <span className={`font-semibold ${item.color}`} data-id="0ubmyjxec" data-path="src/components/HeroSection.tsx">{item.value}</span>
                    </motion.div>
                  )}
                </div>

                <motion.div
                  className="bg-gray-50 rounded-lg p-4 space-y-2"
                  whileHover={{ backgroundColor: 'rgb(249 250 251)' }} data-id="xnrzo8uvf" data-path="src/components/HeroSection.tsx">
                  {[
                  { status: "Plastic bottles detected", color: "bg-green-500" },
                  { status: "Glass sorted successfully", color: "bg-blue-500" },
                  { status: "Organic waste identified", color: "bg-yellow-500" }].
                  map((activity, index) =>
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }} data-id="57k2pxw2k" data-path="src/components/HeroSection.tsx">
                      <motion.div
                      className={`w-2 h-2 ${activity.color} rounded-full`}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }} data-id="h0h6tcn1l" data-path="src/components/HeroSection.tsx">
                      </motion.div>
                      <span className="text-sm" data-id="5j5csp6i5" data-path="src/components/HeroSection.tsx">{activity.status}</span>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Enhanced Floating 3D Elements */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotateY: [0, 180, 360]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-3d card-3d"
              whileHover={{ scale: 1.2, rotateZ: 15 }} data-id="ff0nxb98v" data-path="src/components/HeroSection.tsx">

              <Recycle className="w-8 h-8 text-green-600" data-id="84z5qpzbf" data-path="src/components/HeroSection.tsx" />
            </motion.div>
            
            <motion.div
              animate={{
                y: [10, -10, 10],
                rotateX: [0, 180, 360]
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-3d card-3d"
              whileHover={{ scale: 1.2, rotateZ: -15 }} data-id="nwmvm3yza" data-path="src/components/HeroSection.tsx">

              <Zap className="w-8 h-8 text-blue-600" data-id="c2ecizkee" data-path="src/components/HeroSection.tsx" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HeroSection;