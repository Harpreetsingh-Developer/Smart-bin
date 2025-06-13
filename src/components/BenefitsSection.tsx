import { motion } from "motion/react";
import {
  Target,
  Activity,
  TrendingUp,
  DollarSign,
  Shield,
  Smartphone } from
"lucide-react";

const BenefitsSection = () => {
  const benefits = [
  {
    icon: Target,
    title: "Accurate AI Segregation",
    stat: "95%+",
    description: "Precision waste classification using advanced computer vision and machine learning algorithms.",
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50"
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    stat: "24/7",
    description: "Continuous monitoring with instant alerts for bin capacity, contamination, and maintenance needs.",
    color: "from-blue-500 to-cyan-600",
    bgColor: "from-blue-50 to-cyan-50"
  },
  {
    icon: TrendingUp,
    title: "Recycling Boost",
    stat: "60%",
    description: "Dramatically increase recycling rates by ensuring proper waste segregation and reducing contamination.",
    color: "from-purple-500 to-violet-600",
    bgColor: "from-purple-50 to-violet-50"
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    stat: "30%",
    description: "Optimize collection routes and reduce operational costs through intelligent monitoring and analytics.",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50"
  },
  {
    icon: Shield,
    title: "Hygienic Operation",
    stat: "100%",
    description: "Completely touchless waste disposal system ensuring maximum hygiene and user safety.",
    color: "from-teal-500 to-green-600",
    bgColor: "from-teal-50 to-green-50"
  },
  {
    icon: Smartphone,
    title: "Smart Integration",
    stat: "API",
    description: "Seamless integration with existing smart city infrastructure and waste management systems.",
    color: "from-indigo-500 to-purple-600",
    bgColor: "from-indigo-50 to-purple-50"
  }];


  return (
    <section id="benefits" className="py-20 bg-white perspective-2000" data-id="bb4nlddpr" data-path="src/components/BenefitsSection.tsx">
      <div className="container mx-auto px-4" data-id="z54mcieuo" data-path="src/components/BenefitsSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="kr40pwscs" data-path="src/components/BenefitsSection.tsx">

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-id="3702ed0x6" data-path="src/components/BenefitsSection.tsx">
            Key <motion.span
              className="text-green-600 inline-block"
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                textShadow: '2px 2px 4px rgba(34, 197, 94, 0.3)'
              }} data-id="9ee9edp64" data-path="src/components/BenefitsSection.tsx">Benefits</motion.span>
          </h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }} data-id="sm0wc9y7m" data-path="src/components/BenefitsSection.tsx">
            SmartBin AI delivers measurable improvements in waste management efficiency, 
            environmental impact, and operational costs.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000" data-id="399jqeyjp" data-path="src/components/BenefitsSection.tsx">
          {benefits.map((benefit, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            className="group cursor-pointer" data-id="vblsnl2qj" data-path="src/components/BenefitsSection.tsx">

              <motion.div
              className={`bg-gradient-to-br ${benefit.bgColor} rounded-3xl p-8 h-full shadow-3d card-3d`}
              whileHover={{
                y: -10,
                rotateY: 5,
                rotateX: 5,
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
              }}
              transition={{ type: "spring", stiffness: 200 }} data-id="geowku5fh" data-path="src/components/BenefitsSection.tsx">
                
                <div className="flex items-start space-x-4 mb-6" data-id="43jgt2owz" data-path="src/components/BenefitsSection.tsx">
                  <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center shadow-3d`}
                  whileHover={{
                    scale: 1.15,
                    rotateZ: 10,
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }} data-id="6g8cih99i" data-path="src/components/BenefitsSection.tsx">
                    <benefit.icon className="w-8 h-8 text-white" data-id="xuzzzw6yh" data-path="src/components/BenefitsSection.tsx" />
                  </motion.div>
                  
                  <div className="flex-1" data-id="pr9conpgo" data-path="src/components/BenefitsSection.tsx">
                    <motion.div
                    className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-1`}
                    whileHover={{ scale: 1.1 }} data-id="yo2woz2iq" data-path="src/components/BenefitsSection.tsx">
                      {benefit.stat}
                    </motion.div>
                    <motion.h3
                    className="text-xl font-semibold text-gray-900"
                    whileHover={{ scale: 1.05 }} data-id="xgmaczb4o" data-path="src/components/BenefitsSection.tsx">
                      {benefit.title}
                    </motion.h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed" data-id="cgp7qbk0u" data-path="src/components/BenefitsSection.tsx">
                  {benefit.description}
                </p>

                {/* Enhanced Hover Effect Arrow */}
                <motion.div
                className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }} data-id="zq8cs3uoy" data-path="src/components/BenefitsSection.tsx">
                  <div className="flex items-center text-gray-500" data-id="hgq5747ud" data-path="src/components/BenefitsSection.tsx">
                    <span className="text-sm font-medium" data-id="gj1967zr5" data-path="src/components/BenefitsSection.tsx">Learn more</span>
                    <motion.svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }} data-id="79gsfryqx" data-path="src/components/BenefitsSection.tsx">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" data-id="9iiya9avr" data-path="src/components/BenefitsSection.tsx" />
                    </motion.svg>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Enhanced 3D Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="mt-20 text-center" data-id="ve4uvxtkk" data-path="src/components/BenefitsSection.tsx">

          <motion.div
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white shadow-3d-intense card-3d"
            whileHover={{
              rotateY: 2,
              rotateX: 2,
              scale: 1.01,
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.25)'
            }}
            transition={{ type: "spring", stiffness: 200 }} data-id="38fe3da85" data-path="src/components/BenefitsSection.tsx">
            
            <motion.h3
              className="text-3xl font-bold mb-4"
              whileHover={{ scale: 1.05 }} data-id="735vz5fud" data-path="src/components/BenefitsSection.tsx">
              Ready to Transform Your Waste Management?
            </motion.h3>
            
            <motion.p
              className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }} data-id="zyrkd7v4b" data-path="src/components/BenefitsSection.tsx">
              Join the smart cities revolution and make a lasting impact on your community's sustainability goals.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-id="ab2ei3f7s" data-path="src/components/BenefitsSection.tsx">
              <motion.button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 btn-3d shadow-3d"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)'
                }}
                whileTap={{ scale: 0.95 }} data-id="fs3oke6s5" data-path="src/components/BenefitsSection.tsx">
                Request Pilot Program
              </motion.button>
              
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 btn-3d"
                whileHover={{
                  scale: 1.05,
                  rotateY: -5,
                  backgroundColor: 'white',
                  color: 'rgb(17 24 39)'
                }}
                whileTap={{ scale: 0.95 }} data-id="b7hvfu9w4" data-path="src/components/BenefitsSection.tsx">
                Download Case Study
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default BenefitsSection;