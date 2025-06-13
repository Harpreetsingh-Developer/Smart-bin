import { motion } from "motion/react";
import {
  Wifi,
  Database,
  Layers,
  Settings,
  Cloud,
  MapPin,
  Zap,
  Users } from
"lucide-react";

const SmartCitySection = () => {
  const integrationFeatures = [
  {
    icon: Wifi,
    title: "IoT & 5G Ready",
    description: "Seamless connectivity with next-generation network infrastructure for real-time data transmission."
  },
  {
    icon: Database,
    title: "API Integration",
    description: "RESTful APIs for easy integration with existing municipal systems and third-party applications."
  },
  {
    icon: Layers,
    title: "Modular Design",
    description: "Scalable architecture that adapts to different urban environments and deployment requirements."
  },
  {
    icon: Settings,
    title: "Easy Configuration",
    description: "Intuitive setup and management tools for municipal teams and system administrators."
  }];


  const smartCityBenefits = [
  {
    icon: Cloud,
    title: "Cloud Analytics",
    stat: "Real-time",
    description: "Comprehensive dashboard for citywide waste management insights and predictive analytics."
  },
  {
    icon: MapPin,
    title: "Route Optimization",
    stat: "40% Faster",
    description: "AI-powered route planning reduces collection time and fuel consumption significantly."
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    stat: "Low Power",
    description: "Solar-powered operation with minimal energy consumption for sustainable deployment."
  },
  {
    icon: Users,
    title: "Citizen Engagement",
    stat: "Mobile App",
    description: "User-friendly mobile application for reporting issues and tracking recycling impact."
  }];


  return (
    <section id="smart-city" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 perspective-2000" data-id="dpzche6oj" data-path="src/components/SmartCitySection.tsx">
      <div className="container mx-auto px-4" data-id="kkowmy8bt" data-path="src/components/SmartCitySection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="ft0312lm6" data-path="src/components/SmartCitySection.tsx">

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-id="awphdav0v" data-path="src/components/SmartCitySection.tsx">
            Smart City <motion.span
              className="text-blue-600 inline-block"
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                textShadow: '2px 2px 4px rgba(59, 130, 246, 0.3)'
              }} data-id="7lddsusqc" data-path="src/components/SmartCitySection.tsx">Integration</motion.span>
          </h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }} data-id="hi7k7602g" data-path="src/components/SmartCitySection.tsx">
            Designed for seamless integration with smart city infrastructure, 
            our modular system adapts to diverse urban environments and existing municipal systems.
          </motion.p>
        </motion.div>

        {/* Enhanced 3D Integration Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 perspective-1000" data-id="gyfuc3dp8" data-path="src/components/SmartCitySection.tsx">
          {integrationFeatures.map((feature, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateY: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            className="group" data-id="5jfaqdtb8" data-path="src/components/SmartCitySection.tsx">

              <motion.div
              className="bg-white rounded-2xl p-6 shadow-3d hover:shadow-3d-hover transition-all duration-500 h-full card-3d"
              whileHover={{
                y: -10,
                rotateY: 5,
                rotateX: 5,
                scale: 1.02
              }}
              transition={{ type: "spring", stiffness: 200 }} data-id="d7tlq32sm" data-path="src/components/SmartCitySection.tsx">

                <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 w-14 h-14 flex items-center justify-center mb-4 shadow-3d"
                whileHover={{
                  scale: 1.15,
                  rotateZ: 10,
                  boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
                }}
                transition={{ type: "spring", stiffness: 300 }} data-id="aqc0yhxvp" data-path="src/components/SmartCitySection.tsx">
                  <feature.icon className="w-7 h-7 text-white" data-id="7drfp98uf" data-path="src/components/SmartCitySection.tsx" />
                </motion.div>
                
                <motion.h3
                className="text-lg font-semibold text-gray-900 mb-3"
                whileHover={{ scale: 1.05 }} data-id="qi8vehnew" data-path="src/components/SmartCitySection.tsx">
                  {feature.title}
                </motion.h3>
                
                <p className="text-gray-600 leading-relaxed" data-id="ltbrckl8t" data-path="src/components/SmartCitySection.tsx">{feature.description}</p>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Enhanced 3D Smart City Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 perspective-1000" data-id="sjqknpoxx" data-path="src/components/SmartCitySection.tsx">
          {smartCityBenefits.map((benefit, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            className="text-center group" data-id="xyy75aijc" data-path="src/components/SmartCitySection.tsx">

              <motion.div
              className="bg-white rounded-3xl p-8 shadow-3d hover:shadow-3d-hover transition-all duration-500 card-3d h-full"
              whileHover={{
                y: -10,
                rotateY: 5,
                rotateX: 5,
                scale: 1.03
              }}
              transition={{ type: "spring", stiffness: 200 }} data-id="pqunikbrg" data-path="src/components/SmartCitySection.tsx">
                
                <motion.div
                className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 shadow-3d"
                whileHover={{
                  scale: 1.15,
                  rotateZ: 10,
                  boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)'
                }}
                transition={{ type: "spring", stiffness: 300 }} data-id="r1hzp41l4" data-path="src/components/SmartCitySection.tsx">
                  <benefit.icon className="w-8 h-8 text-white" data-id="iozhwvhwt" data-path="src/components/SmartCitySection.tsx" />
                </motion.div>
                
                <motion.div
                className="text-2xl font-bold text-blue-600 mb-2"
                whileHover={{ scale: 1.1 }} data-id="spgdqjgxk" data-path="src/components/SmartCitySection.tsx">
                  {benefit.stat}
                </motion.div>
                
                <motion.h3
                className="text-lg font-semibold text-gray-900 mb-3"
                whileHover={{ scale: 1.05 }} data-id="yvmy506u9" data-path="src/components/SmartCitySection.tsx">
                  {benefit.title}
                </motion.h3>
                
                <p className="text-gray-600 leading-relaxed" data-id="k2l36494x" data-path="src/components/SmartCitySection.tsx">{benefit.description}</p>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Enhanced 3D Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }} data-id="u77w57g0b" data-path="src/components/SmartCitySection.tsx">

          <motion.div
            className="bg-white rounded-3xl p-12 shadow-3d-intense card-3d"
            whileHover={{
              rotateY: 1,
              rotateX: 1,
              scale: 1.01,
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
            }}
            transition={{ type: "spring", stiffness: 200 }} data-id="0du73kxqb" data-path="src/components/SmartCitySection.tsx">

            <motion.h3
              className="text-2xl font-bold text-gray-900 text-center mb-12"
              whileHover={{ scale: 1.05 }} data-id="juupsh6nf" data-path="src/components/SmartCitySection.tsx">
              System Architecture
            </motion.h3>
            
            <div className="grid lg:grid-cols-3 gap-8 items-center perspective-1000" data-id="yfjhywkf4" data-path="src/components/SmartCitySection.tsx">
              {/* Enhanced SmartBin Layer */}
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 200 }} data-id="qxsbx4m8v" data-path="src/components/SmartCitySection.tsx">
                <motion.div
                  className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-4 shadow-3d card-3d"
                  whileHover={{
                    rotateX: 5,
                    boxShadow: '0 15px 35px rgba(34, 197, 94, 0.2)'
                  }} data-id="e8hwd8x4q" data-path="src/components/SmartCitySection.tsx">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 space-y-2" data-id="c0nojgn7d" data-path="src/components/SmartCitySection.tsx">
                    <motion.div
                      className="h-2 bg-green-200 rounded w-3/4 mx-auto"
                      animate={{ scaleX: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }} data-id="lf0fca4n4" data-path="src/components/SmartCitySection.tsx">
                    </motion.div>
                    <motion.div
                      className="h-2 bg-green-300 rounded w-1/2 mx-auto"
                      animate={{ scaleX: [1, 1.2, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity }} data-id="szt9kn5ua" data-path="src/components/SmartCitySection.tsx">
                    </motion.div>
                    <motion.div
                      className="h-2 bg-green-200 rounded w-2/3 mx-auto"
                      animate={{ scaleX: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }} data-id="g17hy7g8s" data-path="src/components/SmartCitySection.tsx">
                    </motion.div>
                  </div>
                </motion.div>
                <h4 className="font-semibold text-gray-900 mb-2" data-id="fuiiaob15" data-path="src/components/SmartCitySection.tsx">SmartBin Devices</h4>
                <p className="text-sm text-gray-600" data-id="g6n7ygzyb" data-path="src/components/SmartCitySection.tsx">Edge AI processing & IoT sensors</p>
              </motion.div>

              {/* Enhanced Connection Arrows */}
              <div className="hidden lg:flex justify-center" data-id="45w5q63lk" data-path="src/components/SmartCitySection.tsx">
                <motion.div
                  className="flex flex-col items-center space-y-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }} data-id="q7l5fnt5q" data-path="src/components/SmartCitySection.tsx">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-blue-400" data-id="x76s3losy" data-path="src/components/SmartCitySection.tsx"></div>
                  <div className="text-xs text-gray-500 font-medium" data-id="dj9mw8co5" data-path="src/components/SmartCitySection.tsx">5G/WiFi</div>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-blue-400" data-id="42nv3e91i" data-path="src/components/SmartCitySection.tsx"></div>
                </motion.div>
              </div>

              {/* Enhanced Cloud Layer */}
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 200 }} data-id="43fhkupcq" data-path="src/components/SmartCitySection.tsx">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 mb-4 shadow-3d card-3d"
                  whileHover={{
                    rotateX: 5,
                    boxShadow: '0 15px 35px rgba(59, 130, 246, 0.2)'
                  }} data-id="j1n1bogkc" data-path="src/components/SmartCitySection.tsx">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 grid grid-cols-2 gap-2" data-id="2va02pea1" data-path="src/components/SmartCitySection.tsx">
                    <motion.div
                      className="h-8 bg-blue-100 rounded"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }} data-id="4h26qjau2" data-path="src/components/SmartCitySection.tsx">
                    </motion.div>
                    <motion.div
                      className="h-8 bg-purple-100 rounded"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }} data-id="h84yk87t5" data-path="src/components/SmartCitySection.tsx">
                    </motion.div>
                    <motion.div
                      className="h-4 bg-blue-200 rounded col-span-2"
                      animate={{ scaleX: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }} data-id="9vih3am4k" data-path="src/components/SmartCitySection.tsx">
                    </motion.div>
                  </div>
                </motion.div>
                <h4 className="font-semibold text-gray-900 mb-2" data-id="h7fqwjneg" data-path="src/components/SmartCitySection.tsx">Cloud Platform</h4>
                <p className="text-sm text-gray-600" data-id="0d63ariy7" data-path="src/components/SmartCitySection.tsx">Analytics & municipal integration</p>
              </motion.div>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center" data-id="hnc8p5ztt" data-path="src/components/SmartCitySection.tsx">
              {[
              { title: "Edge Processing", desc: "Real-time AI classification" },
              { title: "Secure Communication", desc: "Encrypted data transmission" },
              { title: "Scalable Infrastructure", desc: "Cloud-native architecture" }].
              map((item, index) =>
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-4 card-3d"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  backgroundColor: 'rgb(249 250 251)'
                }}
                transition={{ type: "spring", stiffness: 300 }} data-id="wp3fpmx5m" data-path="src/components/SmartCitySection.tsx">
                  <div className="font-semibold text-gray-900" data-id="pvoob1sq8" data-path="src/components/SmartCitySection.tsx">{item.title}</div>
                  <div className="text-sm text-gray-600" data-id="m8lgtdb62" data-path="src/components/SmartCitySection.tsx">{item.desc}</div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default SmartCitySection;