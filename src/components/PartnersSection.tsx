import { motion } from 'motion/react';
import {
  Building2,
  MapPin,
  Users,
  Handshake,
  Trophy,
  Globe,
  CheckCircle,
  ArrowRight,
  Cpu,
  Shield,
  Zap,
  Cloud,
  Camera,
  BarChart3 } from
'lucide-react';

const PartnersSection = () => {
  const partnerTypes = [
  {
    icon: Building2,
    title: "Municipal Corporations",
    description: "Partnering with city governments to implement smart waste management solutions",
    examples: ["Smart City Councils", "Urban Development Bodies", "Municipal Corporations"]
  },
  {
    icon: MapPin,
    title: "Urban Development",
    description: "Collaborating with development authorities for new smart city projects",
    examples: ["Housing Boards", "Development Authorities", "Planning Commissions"]
  },
  {
    icon: Users,
    title: "Technology Partners",
    description: "Working with tech companies to enhance our AI and IoT capabilities",
    examples: ["Cloud Providers", "IoT Platforms", "AI/ML Companies"]
  },
  {
    icon: Handshake,
    title: "Environmental NGOs",
    description: "Joining forces with organizations focused on sustainability and environmental protection",
    examples: ["Green Organizations", "Sustainability Advocates", "Environmental Groups"]
  }];


  const smartFeatures = [
  {
    icon: Camera,
    title: "Advanced Computer Vision",
    description: "Real-time waste classification using state-of-the-art image recognition technology",
    capability: "95%+ Accuracy",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Cpu,
    title: "Edge AI Processing",
    description: "On-device artificial intelligence for instant decision making and reduced latency",
    capability: "<100ms Response",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Cloud,
    title: "Cloud Analytics Platform",
    description: "Comprehensive data insights and predictive analytics for optimal waste management",
    capability: "Real-time Insights",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption and secure data transmission for municipal data protection",
    capability: "Bank-level Security",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Solar-powered operation with intelligent power management and battery optimization",
    capability: "85% Energy Reduction",
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Machine learning algorithms for route optimization and capacity forecasting",
    capability: "30% Cost Savings",
    color: "from-indigo-500 to-blue-600"
  }];


  const successStories = [
  {
    icon: Trophy,
    city: "Smart Metro City",
    result: "45% increase in recycling rates within 6 months",
    details: "Successful deployment of 150 smart bins across commercial and residential districts"
  },
  {
    icon: Globe,
    city: "Green Urban Hub",
    result: "30% reduction in collection costs through optimized routes",
    details: "Integrated AI-powered route optimization with existing municipal management systems"
  },
  {
    icon: CheckCircle,
    city: "EcoCity Initiative",
    result: "95% user satisfaction rate and improved city cleanliness",
    details: "Community engagement program alongside technology deployment across 50+ locations"
  }];


  return (
    <section className="py-20 bg-white" data-id="7ntfwnytt" data-path="src/components/PartnersSection.tsx">
      <div className="container mx-auto px-4" data-id="auag50pbp" data-path="src/components/PartnersSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="j1geqwa85" data-path="src/components/PartnersSection.tsx">

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-id="8or2yac4e" data-path="src/components/PartnersSection.tsx">
            Partners & <span className="text-blue-600" data-id="kdd4ta5b0" data-path="src/components/PartnersSection.tsx">Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-id="u0vx997l5" data-path="src/components/PartnersSection.tsx">
            We collaborate with forward-thinking organizations to build smarter, cleaner cities 
            through cutting-edge waste management technology and sustainable partnerships.
          </p>
        </motion.div>

        {/* Partner Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" data-id="2v335a36a" data-path="src/components/PartnersSection.tsx">
          {partnerTypes.map((partner, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group" data-id="9s2cq6mxu" data-path="src/components/PartnersSection.tsx">

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" data-id="87thow6ag" data-path="src/components/PartnersSection.tsx">
                <partner.icon className="w-7 h-7 text-white" data-id="1awhh1h8h" data-path="src/components/PartnersSection.tsx" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3" data-id="2f0irc9f2" data-path="src/components/PartnersSection.tsx">{partner.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed" data-id="qjrosxfqh" data-path="src/components/PartnersSection.tsx">{partner.description}</p>
              <div className="space-y-1" data-id="tjulcxreu" data-path="src/components/PartnersSection.tsx">
                {partner.examples.map((example, idx) =>
              <div key={idx} className="text-sm text-gray-500 flex items-center" data-id="bpq9avdnk" data-path="src/components/PartnersSection.tsx">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2" data-id="n1lqhdbmh" data-path="src/components/PartnersSection.tsx"></div>
                    {example}
                  </div>
              )}
              </div>
            </motion.div>
          )}
        </div>

        {/* Smart Technology Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20" data-id="h72mfam96" data-path="src/components/PartnersSection.tsx">

          <h3 className="text-3xl font-bold text-gray-900 text-center mb-4" data-id="c4finm1c1" data-path="src/components/PartnersSection.tsx">Smart Technology Features</h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto" data-id="k2uvy63xl" data-path="src/components/PartnersSection.tsx">
            Discover the advanced technologies that power our intelligent waste management ecosystem
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="9sce5kbi0" data-path="src/components/PartnersSection.tsx">
            {smartFeatures.map((feature, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100" data-id="65u58ou9l" data-path="src/components/PartnersSection.tsx">

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`} data-id="5mttc1qx1" data-path="src/components/PartnersSection.tsx">
                  <feature.icon className="w-7 h-7 text-white" data-id="l0qvvjdtl" data-path="src/components/PartnersSection.tsx" />
                </div>
                
                <div className="flex items-center justify-between mb-3" data-id="xt3v525is" data-path="src/components/PartnersSection.tsx">
                  <h4 className="text-lg font-semibold text-gray-900" data-id="jnj7t48yx" data-path="src/components/PartnersSection.tsx">{feature.title}</h4>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white`} data-id="9j3vdgv61" data-path="src/components/PartnersSection.tsx">
                    {feature.capability}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed" data-id="aqmdn0fm4" data-path="src/components/PartnersSection.tsx">{feature.description}</p>
                
                <motion.div
                className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ x: 5 }} data-id="tgs5y65sf" data-path="src/components/PartnersSection.tsx">

                  <span className="text-sm font-medium" data-id="jul9r19q3" data-path="src/components/PartnersSection.tsx">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" data-id="zhmgv5ahn" data-path="src/components/PartnersSection.tsx" />
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16" data-id="v3uzgsyng" data-path="src/components/PartnersSection.tsx">

          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12" data-id="1lvzg790i" data-path="src/components/PartnersSection.tsx">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8" data-id="bsp8pa38w" data-path="src/components/PartnersSection.tsx">
            {successStories.map((story, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300" data-id="3gs2n72kp" data-path="src/components/PartnersSection.tsx">

                <div className="bg-white rounded-xl p-4 w-16 h-16 mx-auto mb-4 shadow-lg" data-id="3vnnsy5rq" data-path="src/components/PartnersSection.tsx">
                  <story.icon className="w-8 h-8 text-green-600 mx-auto" data-id="aisuynvsc" data-path="src/components/PartnersSection.tsx" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2" data-id="r8os0h1fg" data-path="src/components/PartnersSection.tsx">{story.city}</h4>
                <p className="text-green-600 font-medium mb-3" data-id="awefqlwl8" data-path="src/components/PartnersSection.tsx">{story.result}</p>
                <p className="text-gray-600 text-sm leading-relaxed" data-id="8yo2e6m2u" data-path="src/components/PartnersSection.tsx">{story.details}</p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center" data-id="a2uqfocmr" data-path="src/components/PartnersSection.tsx">

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white" data-id="dzgqr0se2" data-path="src/components/PartnersSection.tsx">
            <h3 className="text-3xl font-bold mb-4" data-id="yaeairf6k" data-path="src/components/PartnersSection.tsx">Ready to Transform Your City?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto" data-id="44tvuyjku" data-path="src/components/PartnersSection.tsx">
              Join the growing network of smart cities implementing sustainable waste management solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-id="og38az2e1" data-path="src/components/PartnersSection.tsx">
              <motion.button
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} data-id="1cj7orbwy" data-path="src/components/PartnersSection.tsx">

                Schedule Partnership Meeting
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} data-id="hurrq7l9c" data-path="src/components/PartnersSection.tsx">

                Download Partnership Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default PartnersSection;