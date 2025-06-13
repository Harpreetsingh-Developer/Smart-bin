import { motion } from "motion/react";
import { Target, Users, Globe, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Transforming urban waste management through intelligent automation and sustainable practices."
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Empowering cities and communities to achieve their sustainability goals with cutting-edge technology."
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Designing solutions that can adapt to diverse urban environments and waste management challenges worldwide."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Leveraging AI, IoT, and machine learning to create the next generation of smart city infrastructure."
  }];


  return (
    <section id="about" className="py-20 bg-white perspective-2000" data-id="lw60rjaca" data-path="src/components/AboutSection.tsx">
      <div className="container mx-auto px-4" data-id="u7noh9izw" data-path="src/components/AboutSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="7iv381oah" data-path="src/components/AboutSection.tsx">

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-id="2845owpgm" data-path="src/components/AboutSection.tsx">
            About <motion.span
              className="text-green-600 inline-block"
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                textShadow: '2px 2px 4px rgba(34, 197, 94, 0.3)'
              }} data-id="8p3m2nd8k" data-path="src/components/AboutSection.tsx">SmartBin AI</motion.span>
          </h2>
          <div className="max-w-4xl mx-auto" data-id="tbboz3vht" data-path="src/components/AboutSection.tsx">
            <motion.p
              className="text-xl text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }} data-id="50pwq2hmn" data-path="src/components/AboutSection.tsx">
              We are pioneering the future of waste management by combining artificial intelligence, 
              computer vision, and IoT technology to create intelligent waste segregation systems 
              that make recycling effortless and cities cleaner.
            </motion.p>
            <motion.p
              className="text-lg text-gray-500 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }} data-id="c3f775apg" data-path="src/components/AboutSection.tsx">
              Our mission is to solve urban waste challenges through automation, boost recycling rates, 
              and contribute to building sustainable smart cities. With SmartBin AI, we're not just 
              managing waste – we're revolutionizing how communities interact with their environment.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000" data-id="4ketsj48v" data-path="src/components/AboutSection.tsx">
          {values.map((value, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            className="text-center group cursor-pointer" data-id="wr6gd3fbo" data-path="src/components/AboutSection.tsx">

              <motion.div
              className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-6 mb-6 shadow-3d card-3d"
              whileHover={{
                rotateY: 10,
                rotateX: 5,
                scale: 1.02,
                background: 'linear-gradient(to right, rgb(240 253 244), rgb(239 246 255))',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
              }}
              transition={{ type: "spring", stiffness: 300 }} data-id="tj5mal01q" data-path="src/components/AboutSection.tsx">
                
                <motion.div
                className="bg-white rounded-2xl p-4 w-16 h-16 mx-auto flex items-center justify-center shadow-3d"
                whileHover={{
                  scale: 1.1,
                  rotateZ: 10,
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                }} data-id="qz3x7k6u2" data-path="src/components/AboutSection.tsx">
                  <value.icon className="w-8 h-8 text-green-600" data-id="0hk3jv9gm" data-path="src/components/AboutSection.tsx" />
                </motion.div>
              </motion.div>
              
              <motion.h3
              className="text-xl font-semibold text-gray-900 mb-3"
              whileHover={{ scale: 1.05 }} data-id="5irp2gw2o" data-path="src/components/AboutSection.tsx">
                {value.title}
              </motion.h3>
              
              <p className="text-gray-600 leading-relaxed" data-id="il8i5zych" data-path="src/components/AboutSection.tsx">{value.description}</p>
            </motion.div>
          )}
        </div>

        {/* Enhanced 3D Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="mt-20" data-id="cvf56tsxf" data-path="src/components/AboutSection.tsx">

          <motion.div
            className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white shadow-3d-intense card-3d"
            whileHover={{
              rotateY: 2,
              rotateX: 2,
              scale: 1.01,
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)'
            }}
            transition={{ type: "spring", stiffness: 200 }} data-id="7ggm78vk1" data-path="src/components/AboutSection.tsx">

            <div className="text-center mb-12" data-id="zl7j3fb8j" data-path="src/components/AboutSection.tsx">
              <motion.h3
                className="text-3xl font-bold mb-4"
                whileHover={{ scale: 1.05 }} data-id="pcia4vqot" data-path="src/components/AboutSection.tsx">
                Driving Real Impact
              </motion.h3>
              <p className="text-xl opacity-90" data-id="lgulns23r" data-path="src/components/AboutSection.tsx">Our technology is already making a difference in pilot programs</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center" data-id="g117xu0v0" data-path="src/components/AboutSection.tsx">
              {[
              { value: "500K+", label: "Kg Waste Sorted" },
              { value: "85%", label: "Contamination Reduction" },
              { value: "12", label: "Cities Interested" },
              { value: "24/7", label: "Continuous Operation" }].
              map((stat, index) =>
              <motion.div
                key={index}
                className="card-3d"
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 300 }} data-id="9k1tfwg1y" data-path="src/components/AboutSection.tsx">
                  
                  <motion.div
                  className="text-4xl font-bold mb-2"
                  whileHover={{ scale: 1.1 }} data-id="eao46c6q7" data-path="src/components/AboutSection.tsx">
                    {stat.value}
                  </motion.div>
                  <div className="text-lg opacity-90" data-id="tt8mryz9u" data-path="src/components/AboutSection.tsx">{stat.label}</div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default AboutSection;