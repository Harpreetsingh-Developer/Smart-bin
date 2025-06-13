import { motion } from "motion/react";
import { Camera, Brain, Recycle, Bell, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
  {
    icon: Camera,
    title: "Waste Input & Detection",
    description: "High-resolution cameras capture images of incoming waste items using advanced computer vision technology.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Brain,
    title: "AI Classification",
    description: "Our CNN-powered AI instantly identifies and classifies waste types with 95%+ accuracy in real-time.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Recycle,
    title: "Automated Sorting",
    description: "Mechanical sorting system automatically directs waste to appropriate compartments based on AI analysis.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Bell,
    title: "Real-time Monitoring",
    description: "IoT sensors track bin capacity, contamination levels, and send alerts for optimal collection timing.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: TrendingUp,
    title: "Data Optimization",
    description: "Machine learning algorithms continuously improve accuracy and optimize collection routes for maximum efficiency.",
    color: "from-teal-500 to-teal-600"
  }];


  return (
    <section id="how-it-works" className="py-20 bg-gray-50 perspective-2000" data-id="xc7vgqqyx" data-path="src/components/HowItWorksSection.tsx">
      <div className="container mx-auto px-4" data-id="3bvb8z4g9" data-path="src/components/HowItWorksSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="v4hc9rc8h" data-path="src/components/HowItWorksSection.tsx">

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-id="w9lssehe9" data-path="src/components/HowItWorksSection.tsx">
            How <motion.span
              className="text-green-600 inline-block"
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                textShadow: '2px 2px 4px rgba(34, 197, 94, 0.3)'
              }} data-id="c8tvgkmil" data-path="src/components/HowItWorksSection.tsx">It Works</motion.span>
          </h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }} data-id="f4ttymk64" data-path="src/components/HowItWorksSection.tsx">
            Our intelligent waste segregation system combines cutting-edge AI, computer vision, 
            and IoT technology to automate the entire waste sorting process.
          </motion.p>
        </motion.div>

        <div className="relative perspective-1000" data-id="lk9smmkse" data-path="src/components/HowItWorksSection.tsx">
          {/* Enhanced 3D Connection Lines */}
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-green-300 to-teal-300 opacity-40 rounded-full shadow-lg"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }} data-id="e16wke5qt" data-path="src/components/HowItWorksSection.tsx">
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8" data-id="5rsyx3h12" data-path="src/components/HowItWorksSection.tsx">
            {steps.map((step, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="relative group" data-id="spmh6lt3g" data-path="src/components/HowItWorksSection.tsx">

                {/* Enhanced 3D Step Number */}
                <motion.div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                whileHover={{ scale: 1.2, rotateY: 15 }} data-id="l1xg6a66j" data-path="src/components/HowItWorksSection.tsx">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-3d card-3d`} data-id="f8m7yyzbb" data-path="src/components/HowItWorksSection.tsx">
                    {index + 1}
                  </div>
                </motion.div>

                <motion.div
                className="bg-white rounded-2xl p-8 pt-12 shadow-3d hover:shadow-3d-hover transition-all duration-500 group h-full card-3d"
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02
                }}
                transition={{ type: "spring", stiffness: 200 }} data-id="gr5hygcen" data-path="src/components/HowItWorksSection.tsx">
                  
                  <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 shadow-3d`}
                  whileHover={{
                    scale: 1.15,
                    rotateZ: 10,
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }} data-id="32nudb48y" data-path="src/components/HowItWorksSection.tsx">
                    <step.icon className="w-8 h-8 text-white" data-id="oa9npcbyp" data-path="src/components/HowItWorksSection.tsx" />
                  </motion.div>
                  
                  <motion.h3
                  className="text-xl font-semibold text-gray-900 mb-4 text-center"
                  whileHover={{ scale: 1.05 }} data-id="rihgps59e" data-path="src/components/HowItWorksSection.tsx">
                    {step.title}
                  </motion.h3>
                  
                  <p className="text-gray-600 leading-relaxed text-center" data-id="9gildkxi3" data-path="src/components/HowItWorksSection.tsx">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Enhanced 3D Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="mt-20 text-center" data-id="ykdr1fu4a" data-path="src/components/HowItWorksSection.tsx">

          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-8"
            whileHover={{ scale: 1.05 }} data-id="kbv17ogfo" data-path="src/components/HowItWorksSection.tsx">
            Powered by Advanced Technology
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-6 perspective-1000" data-id="lom9ngtq6" data-path="src/components/HowItWorksSection.tsx">
            {[
            "Computer Vision",
            "Convolutional Neural Networks",
            "IoT Sensors",
            "Machine Learning",
            "Real-time Analytics",
            "Cloud Computing"].
            map((tech, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
              className="cursor-pointer" data-id="828aa0m5r" data-path="src/components/HowItWorksSection.tsx">

                <motion.div
                className="bg-white px-6 py-3 rounded-full shadow-3d border-2 border-gray-100 hover:border-green-300 transition-all duration-300 btn-3d"
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  borderColor: 'rgb(134 239 172)',
                  boxShadow: '0 8px 25px rgba(34, 197, 94, 0.15)'
                }}
                whileTap={{ scale: 0.95 }} data-id="r0fcp8ldk" data-path="src/components/HowItWorksSection.tsx">
                  <span className="text-gray-700 font-medium" data-id="ythd28p97" data-path="src/components/HowItWorksSection.tsx">{tech}</span>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

};

export default HowItWorksSection;