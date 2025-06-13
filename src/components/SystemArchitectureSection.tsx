import { motion } from 'motion/react';
import {
  Wifi,
  Database,
  Cloud,
  Cpu,
  Shield,
  Layers,
  Network,
  Zap,
  ArrowRight,
  CheckCircle } from
'lucide-react';

const SystemArchitectureSection = () => {
  const architectureComponents = [
  {
    id: 'devices',
    title: 'SmartBin Devices',
    subtitle: 'Edge AI processing & IoT sensors',
    icon: Cpu,
    color: 'from-green-500 to-emerald-600',
    position: 'left',
    features: [
    'Real-time AI classification',
    'IoT sensor network',
    'Edge computing',
    'Solar powered']

  },
  {
    id: 'cloud',
    title: 'Cloud Platform',
    subtitle: 'Analytics & municipal integration',
    icon: Cloud,
    color: 'from-blue-500 to-purple-600',
    position: 'right',
    features: [
    'Scalable analytics',
    'Municipal integration',
    'Data visualization',
    'API management']

  }];


  const processLayers = [
  {
    title: 'Edge Processing',
    description: 'Real-time AI classification',
    icon: Cpu,
    color: 'text-green-600 bg-green-100'
  },
  {
    title: 'Secure Communication',
    description: 'Encrypted data transmission',
    icon: Shield,
    color: 'text-blue-600 bg-blue-100'
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Cloud-native architecture',
    icon: Layers,
    color: 'text-purple-600 bg-purple-100'
  }];


  return (
    <section id="system-architecture" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50" data-id="6h9vvm82z" data-path="src/components/SystemArchitectureSection.tsx">
      <div className="container mx-auto px-4" data-id="ysqnit4hz" data-path="src/components/SystemArchitectureSection.tsx">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="y9jg4txfc" data-path="src/components/SystemArchitectureSection.tsx">

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-id="gpj862g6f" data-path="src/components/SystemArchitectureSection.tsx">
            System <motion.span
              className="text-blue-600 inline-block"
              whileHover={{ scale: 1.05, rotateY: 10 }} data-id="uej9zihx3" data-path="src/components/SystemArchitectureSection.tsx">

              Architecture
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-id="fw1vk3mjs" data-path="src/components/SystemArchitectureSection.tsx">
            A comprehensive overview of our intelligent waste management ecosystem, 
            designed for seamless integration and optimal performance.
          </p>
        </motion.div>

        {/* Main Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20" data-id="fpi05vtvr" data-path="src/components/SystemArchitectureSection.tsx">

          <div className="relative" data-id="3x9qpayqk" data-path="src/components/SystemArchitectureSection.tsx">
            {/* Architecture Cards */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center" data-id="6a3ik9hp6" data-path="src/components/SystemArchitectureSection.tsx">
              {architectureComponents.map((component, index) =>
              <motion.div
                key={component.id}
                initial={{ opacity: 0, x: component.position === 'left' ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group" data-id="vqd4e7b1g" data-path="src/components/SystemArchitectureSection.tsx">

                  <motion.div
                  className={`relative bg-gradient-to-br ${component.color} rounded-3xl p-8 shadow-2xl`}
                  whileHover={{
                    scale: 1.02,
                    rotateY: component.position === 'left' ? 3 : -3,
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
                  }}
                  transition={{ type: 'spring', stiffness: 200 }} data-id="4wit7r4d0" data-path="src/components/SystemArchitectureSection.tsx">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20" data-id="f52e2jxyj" data-path="src/components/SystemArchitectureSection.tsx">
                      <div className="absolute top-4 right-4 w-32 h-32 bg-white/20 rounded-full blur-xl" data-id="5tih4jx61" data-path="src/components/SystemArchitectureSection.tsx"></div>
                      <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-lg" data-id="p31bkytjq" data-path="src/components/SystemArchitectureSection.tsx"></div>
                    </div>

                    {/* Content */}
                    <div className="relative" data-id="0k5gdiqet" data-path="src/components/SystemArchitectureSection.tsx">
                      {/* Icon */}
                      <motion.div
                      className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }} data-id="1b4f0we6q" data-path="src/components/SystemArchitectureSection.tsx">

                        <component.icon className="w-8 h-8 text-white" data-id="neuscz2cb" data-path="src/components/SystemArchitectureSection.tsx" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-2" data-id="aadhd7972" data-path="src/components/SystemArchitectureSection.tsx">
                        {component.title}
                      </h3>
                      <p className="text-white/80 mb-6" data-id="768mg4vth" data-path="src/components/SystemArchitectureSection.tsx">
                        {component.subtitle}
                      </p>

                      {/* Features */}
                      <div className="space-y-3" data-id="0tabpj83k" data-path="src/components/SystemArchitectureSection.tsx">
                        {component.features.map((feature, idx) =>
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3" data-id="apudaltq1" data-path="src/components/SystemArchitectureSection.tsx">

                            <CheckCircle className="w-5 h-5 text-white/90 flex-shrink-0" data-id="j878czgla" data-path="src/components/SystemArchitectureSection.tsx" />
                            <span className="text-white/90" data-id="nj5qe7lhx" data-path="src/components/SystemArchitectureSection.tsx">{feature}</span>
                          </motion.div>
                      )}
                      </div>

                      {/* Animated Device Simulation */}
                      <motion.div
                      className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                      whileHover={{ scale: 1.02 }} data-id="evz13o2da" data-path="src/components/SystemArchitectureSection.tsx">

                        <div className="grid grid-cols-3 gap-2" data-id="mbn8ko273" data-path="src/components/SystemArchitectureSection.tsx">
                          {[...Array(6)].map((_, i) =>
                        <motion.div
                          key={i}
                          className="h-3 bg-white/30 rounded"
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity
                          }} data-id="7xiviqw41" data-path="src/components/SystemArchitectureSection.tsx" />

                        )}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>

            {/* Connection Line */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" data-id="3zgp1tuye" data-path="src/components/SystemArchitectureSection.tsx">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4" data-id="r9e03qg8t" data-path="src/components/SystemArchitectureSection.tsx">

                <motion.div
                  className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg"
                  animate={{
                    boxShadow: [
                    '0 4px 15px rgba(0,0,0,0.1)',
                    '0 8px 25px rgba(59,130,246,0.3)',
                    '0 4px 15px rgba(0,0,0,0.1)']

                  }}
                  transition={{ duration: 3, repeat: Infinity }} data-id="lnl06xuk8" data-path="src/components/SystemArchitectureSection.tsx">

                  <Wifi className="w-5 h-5 text-blue-600" data-id="ogr67sfi9" data-path="src/components/SystemArchitectureSection.tsx" />
                  <span className="text-sm font-medium text-gray-700" data-id="9lncj5hr9" data-path="src/components/SystemArchitectureSection.tsx">5G/WiFi</span>
                  <ArrowRight className="w-4 h-4 text-gray-500" data-id="nvz7i5xfr" data-path="src/components/SystemArchitectureSection.tsx" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Process Layers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8" data-id="k4ob5lm0c" data-path="src/components/SystemArchitectureSection.tsx">

          {processLayers.map((layer, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="group" data-id="o2v6u0t0u" data-path="src/components/SystemArchitectureSection.tsx">

              <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
              transition={{ type: 'spring', stiffness: 300 }} data-id="9fyq7ssiu" data-path="src/components/SystemArchitectureSection.tsx">

                <motion.div
                className={`${layer.color} rounded-xl p-3 w-14 h-14 flex items-center justify-center mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }} data-id="7pazbh33u" data-path="src/components/SystemArchitectureSection.tsx">

                  <layer.icon className="w-7 h-7" data-id="h8aq4ae8y" data-path="src/components/SystemArchitectureSection.tsx" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3" data-id="frdk74afi" data-path="src/components/SystemArchitectureSection.tsx">
                  {layer.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed" data-id="djxaaoohl" data-path="src/components/SystemArchitectureSection.tsx">
                  {layer.description}
                </p>

                {/* Animated indicator */}
                <motion.div
                className="mt-6 flex items-center space-x-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }} data-id="ll675nw1r" data-path="src/components/SystemArchitectureSection.tsx">

                  <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }} data-id="dhhwjrnjk" data-path="src/components/SystemArchitectureSection.tsx" />

                  <span className="text-sm text-green-600 font-medium" data-id="7by97qbu2" data-path="src/components/SystemArchitectureSection.tsx">Active</span>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-3xl p-8 shadow-xl" data-id="a38gzhkuy" data-path="src/components/SystemArchitectureSection.tsx">

          <div className="text-center mb-8" data-id="zplv4b756" data-path="src/components/SystemArchitectureSection.tsx">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" data-id="bbt6hp7b0" data-path="src/components/SystemArchitectureSection.tsx">
              Performance Metrics
            </h3>
            <p className="text-gray-600" data-id="gop7mrosc" data-path="src/components/SystemArchitectureSection.tsx">
              Real-time system performance and efficiency indicators
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6" data-id="cal88ft8p" data-path="src/components/SystemArchitectureSection.tsx">
            {[
            { label: 'Data Processing', value: '99.9%', unit: 'uptime' },
            { label: 'Energy Efficiency', value: '85%', unit: 'reduction' },
            { label: 'Response Time', value: '<100ms', unit: 'latency' },
            { label: 'Accuracy Rate', value: '96%', unit: 'precision' }].
            map((metric, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50" data-id="r6txymb6a" data-path="src/components/SystemArchitectureSection.tsx">

                <motion.div
                className="text-3xl font-bold text-blue-600 mb-2"
                whileHover={{ scale: 1.1 }} data-id="83mjtdc0w" data-path="src/components/SystemArchitectureSection.tsx">

                  {metric.value}
                </motion.div>
                <div className="text-sm text-gray-600 mb-1" data-id="tebkeslzi" data-path="src/components/SystemArchitectureSection.tsx">{metric.label}</div>
                <div className="text-xs text-gray-500" data-id="ngi4p24db" data-path="src/components/SystemArchitectureSection.tsx">{metric.unit}</div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

};

export default SystemArchitectureSection;