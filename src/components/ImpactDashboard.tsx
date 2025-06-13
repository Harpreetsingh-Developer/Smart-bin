import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import {
  Recycle,
  Leaf,
  TrendingDown,
  Users,
  MapPin,
  Award,
  BarChart3,
  Calendar,
  Zap,
  Sparkles } from
"lucide-react";

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
};

const ImpactDashboard = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  const impactMetrics = [
  {
    icon: Recycle,
    title: "Recycling Rate Improvement",
    value: 67,
    suffix: "%",
    change: "+23%",
    description: "Average increase across all pilot locations",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Leaf,
    title: "Waste Diverted from Landfills",
    value: 1.2,
    suffix: "M kg",
    change: "+45%",
    description: "Total waste successfully diverted to recycling",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: TrendingDown,
    title: "CO₂ Emissions Saved",
    value: 890,
    suffix: " tons",
    change: "+31%",
    description: "Environmental impact reduction achieved",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Users,
    title: "User Satisfaction",
    value: 94,
    suffix: "%",
    change: "+12%",
    description: "Positive feedback from system users",
    color: "from-orange-500 to-red-500"
  }];


  const operationalMetrics = [
  {
    icon: MapPin,
    title: "Active Deployments",
    value: 156,
    description: "Smart bins currently operational"
  },
  {
    icon: Award,
    title: "Average Accuracy",
    value: 96.3,
    suffix: "%",
    description: "AI classification precision rate"
  },
  {
    icon: BarChart3,
    title: "Data Points Processed",
    value: 2.8,
    suffix: "M",
    description: "Daily waste classification events"
  },
  {
    icon: Calendar,
    title: "System Uptime",
    value: 99.7,
    suffix: "%",
    description: "Reliable 24/7 operation maintained"
  }];

  // Variable performance data for Weekly Performance Trends
  const weeklyPerformanceData = [
  { day: 'Mon', performance: 45, level: 'low' }, // Low performance
  { day: 'Tue', performance: 78, level: 'moderate' }, // Moderate performance
  { day: 'Wed', performance: 32, level: 'low' }, // Low performance
  { day: 'Thu', performance: 92, level: 'high' }, // High performance
  { day: 'Fri', performance: 65, level: 'moderate' }, // Moderate performance
  { day: 'Sat', performance: 88, level: 'high' }, // High performance
  { day: 'Sun', performance: 58, level: 'moderate' } // Moderate performance
  ];

  return (
    <section id="impact" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden perspective-2000" data-id="oqmm5wrci" data-path="src/components/ImpactDashboard.tsx">
      {/* Enhanced 3D Background Effects */}
      <div className="absolute inset-0" data-id="mtl21rt2y" data-path="src/components/ImpactDashboard.tsx">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-green-200/20 rounded-full blur-3xl card-3d"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            rotateY: [0, 180, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }} data-id="u1ukjdvjg" data-path="src/components/ImpactDashboard.tsx" />

        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl card-3d"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
            rotateX: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }} data-id="bwvzy2qie" data-path="src/components/ImpactDashboard.tsx" />

        {/* Enhanced floating particles */}
        {[...Array(15)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full float-3d"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [-20, -40, -20],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotateZ: [0, 180, 360]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }} data-id="zhjlx5y17" data-path="src/components/ImpactDashboard.tsx" />

        )}
      </div>

      <div className="container mx-auto px-4 relative z-10" data-id="tqz7dic4u" data-path="src/components/ImpactDashboard.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="sfacy56p1" data-path="src/components/ImpactDashboard.tsx">
          
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            animate={isInView ? {
              backgroundPosition: ["0%", "100%", "0%"]
            } : {}}
            transition={{ duration: 4, repeat: Infinity }} data-id="z4q5nu5hw" data-path="src/components/ImpactDashboard.tsx">
            Driving Real <span className="text-green-600 relative" data-id="c0qwn0i1e" data-path="src/components/ImpactDashboard.tsx">
              Impact
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1, repeat: Infinity }
                }} data-id="0a4ocdbhx" data-path="src/components/ImpactDashboard.tsx">
                <Sparkles className="w-6 h-6 text-yellow-500" data-id="l9y8rgl1z" data-path="src/components/ImpactDashboard.tsx" />
              </motion.div>
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }} data-id="1z1a5m9zq" data-path="src/components/ImpactDashboard.tsx">
            Real-world results from our pilot programs demonstrate the measurable impact 
            of SmartBin AI on environmental sustainability and operational efficiency.
          </motion.p>
        </motion.div>

        {/* Enhanced 3D Environmental Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 perspective-1000" data-id="vsy83pywf" data-path="src/components/ImpactDashboard.tsx">
          {impactMetrics.map((metric, index) => {
            const count = useCountUp(metric.value, 2000 + index * 200, isInView);

            return (
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
                className="group relative overflow-hidden" data-id="qhd2luhqh" data-path="src/components/ImpactDashboard.tsx">
                
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-3d hover:shadow-3d-hover transition-all duration-500 group h-full card-3d"
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    rotateX: 5,
                    scale: 1.02
                  }}
                  transition={{ type: "spring", stiffness: 200 }} data-id="wpz8zgoew" data-path="src/components/ImpactDashboard.tsx">
                
                  {/* Enhanced background glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} data-id="iljvgsdhu" data-path="src/components/ImpactDashboard.tsx" />
                  
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${metric.color} flex items-center justify-center mb-6 relative shadow-3d`}
                    whileHover={{
                      scale: 1.15,
                      rotateZ: 10,
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)'
                    }}
                    transition={{ type: "spring", stiffness: 300 }} data-id="48lfcbpv8" data-path="src/components/ImpactDashboard.tsx">
                    
                    <metric.icon className="w-8 h-8 text-white" data-id="h7uyn46q9" data-path="src/components/ImpactDashboard.tsx" />
                    
                    {/* Enhanced pulse effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${metric.color}`}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }} data-id="oow4a0gn3" data-path="src/components/ImpactDashboard.tsx" />

                  </motion.div>
                  
                  <div className="mb-4" data-id="clj8njh2b" data-path="src/components/ImpactDashboard.tsx">
                    <div className="flex items-baseline space-x-2" data-id="7lxh5sxx7" data-path="src/components/ImpactDashboard.tsx">
                      <motion.span
                        className="text-4xl font-bold text-gray-900"
                        key={count} data-id="ybnlbb11q" data-path="src/components/ImpactDashboard.tsx">
                        {metric.suffix === "M kg" ? (count / 10).toFixed(1) : count}
                      </motion.span>
                      {metric.suffix && <span className="text-lg text-gray-600" data-id="16sowyuwq" data-path="src/components/ImpactDashboard.tsx">{metric.suffix}</span>}
                    </div>
                    <div className="flex items-center space-x-2 mt-2" data-id="sgfzp98be" data-path="src/components/ImpactDashboard.tsx">
                      <motion.span
                        className="text-green-600 font-semibold"
                        animate={{
                          scale: [1, 1.1, 1],
                          color: ["#059669", "#10b981", "#059669"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }} data-id="i56yn6dfy" data-path="src/components/ImpactDashboard.tsx">
                        {metric.change}
                      </motion.span>
                      <span className="text-sm text-gray-500" data-id="uqjgrxklf" data-path="src/components/ImpactDashboard.tsx">vs last period</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2" data-id="cpy9ehlkx" data-path="src/components/ImpactDashboard.tsx">{metric.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed" data-id="43ytess6v" data-path="src/components/ImpactDashboard.tsx">{metric.description}</p>
                </motion.div>
              </motion.div>);

          })}
        </div>

        {/* Enhanced 3D Live Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }} data-id="75c0fz6wn" data-path="src/components/ImpactDashboard.tsx">
          
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-3d-intense mb-16 relative overflow-hidden card-3d"
            whileHover={{
              rotateY: 1,
              rotateX: 1,
              scale: 1.01,
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
            }}
            transition={{ type: "spring", stiffness: 200 }} data-id="hw5onakmu" data-path="src/components/ImpactDashboard.tsx">
            
            {/* Enhanced background pattern */}
            <div className="absolute inset-0 opacity-5" data-id="7d2nczf6c" data-path="src/components/ImpactDashboard.tsx">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20px 20px, #10b981 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} data-id="dc5m9w2gi" data-path="src/components/ImpactDashboard.tsx" />
            </div>

            <div className="flex items-center justify-between mb-8 relative z-10" data-id="3bj5tkl7d" data-path="src/components/ImpactDashboard.tsx">
              <motion.h3
                className="text-2xl font-bold text-gray-900 flex items-center"
                whileHover={{ scale: 1.05 }} data-id="2mcue8y6c" data-path="src/components/ImpactDashboard.tsx">
                <Zap className="w-6 h-6 mr-2 text-green-600" data-id="n9xrk9ys6" data-path="src/components/ImpactDashboard.tsx" />
                Live System Dashboard
              </motion.h3>
              <div className="flex items-center space-x-2" data-id="jew1fnxtx" data-path="src/components/ImpactDashboard.tsx">
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }} data-id="cknajfojo" data-path="src/components/ImpactDashboard.tsx" />
                <span className="text-sm text-gray-600" data-id="py9cpv2s4" data-path="src/components/ImpactDashboard.tsx">Real-time updates</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 perspective-1000" data-id="88mhct9cj" data-path="src/components/ImpactDashboard.tsx">
              {operationalMetrics.map((metric, index) => {
                const count = useCountUp(metric.value, 1500 + index * 100, isInView);

                return (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 card-3d"
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      backgroundColor: "#f9fafb"
                    }}
                    transition={{ type: "spring", stiffness: 300 }} data-id="0vzyh64tw" data-path="src/components/ImpactDashboard.tsx">
                    
                    <motion.div
                      className="bg-white rounded-xl p-3 w-12 h-12 mx-auto mb-3 shadow-3d"
                      whileHover={{
                        rotate: 10,
                        scale: 1.1
                      }} data-id="81ern6bth" data-path="src/components/ImpactDashboard.tsx">
                      <metric.icon className="w-6 h-6 text-gray-700 mx-auto" data-id="gckz7g2wy" data-path="src/components/ImpactDashboard.tsx" />
                    </motion.div>
                    
                    <motion.div
                      className="text-2xl font-bold text-gray-900 mb-1"
                      key={count} data-id="wn6cpuhgx" data-path="src/components/ImpactDashboard.tsx">
                      {metric.suffix === "M" ? (count / 10).toFixed(1) :
                      metric.suffix === "%" ? count.toFixed(1) : count}
                      {metric.suffix}
                    </motion.div>
                    
                    <div className="text-sm font-medium text-gray-900 mb-1" data-id="9juksel95" data-path="src/components/ImpactDashboard.tsx">{metric.title}</div>
                    <div className="text-xs text-gray-600" data-id="aef49z1s2" data-path="src/components/ImpactDashboard.tsx">{metric.description}</div>
                  </motion.div>);

              })}
            </div>

            {/* Enhanced 3D Chart Visualization with Variable Performance */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6" data-id="6ty6yh01i" data-path="src/components/ImpactDashboard.tsx">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center" data-id="2hw9oot2k" data-path="src/components/ImpactDashboard.tsx">
                <BarChart3 className="w-5 h-5 mr-2 text-green-600" data-id="w2v391ej8" data-path="src/components/ImpactDashboard.tsx" />
                Weekly Performance Trends
              </h4>
              <div className="grid grid-cols-7 gap-2 h-32 perspective-1000" data-id="u1fo6u5pi" data-path="src/components/ImpactDashboard.tsx">
                {weeklyPerformanceData.map((data, index) => {
                  // Get gradient color based on performance level
                  const getGradientColor = (level: string) => {
                    switch (level) {
                      case 'low':
                        return 'from-red-400 to-orange-500';
                      case 'moderate':
                        return 'from-yellow-400 to-orange-500';
                      case 'high':
                        return 'from-green-500 to-blue-500';
                      default:
                        return 'from-gray-400 to-gray-500';
                    }
                  };

                  return (
                    <div key={index} className="flex flex-col justify-end" data-id="xgqaczctg" data-path="src/components/ImpactDashboard.tsx">
                      <motion.div
                        className={`bg-gradient-to-t ${getGradientColor(data.level)} rounded-t relative overflow-hidden card-3d`}
                        style={{ height: `${data.performance}%` }}
                        initial={{ height: 0, rotateX: -90 }}
                        whileInView={{ height: `${data.performance}%`, rotateX: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          rotateY: 5,
                          boxShadow: data.level === 'high' ?
                          "0 8px 25px rgba(16, 185, 129, 0.3)" :
                          data.level === 'moderate' ?
                          "0 8px 25px rgba(251, 191, 36, 0.3)" :
                          "0 8px 25px rgba(239, 68, 68, 0.3)"
                        }} data-id="jjkkrq26b" data-path="src/components/ImpactDashboard.tsx">
                        
                        {/* Enhanced shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut"
                          }} data-id="4t93i37v3" data-path="src/components/ImpactDashboard.tsx" />

                        {/* Performance level indicator */}
                        <div className="absolute top-1 left-1 right-1" data-id="hk2c9txmt" data-path="src/components/ImpactDashboard.tsx">
                          <div className={`text-xs font-bold text-white text-center ${
                          data.performance > 25 ? 'block' : 'hidden'}`
                          } data-id="6vcy9bkie" data-path="src/components/ImpactDashboard.tsx">
                            {data.performance}%
                          </div>
                        </div>

                      </motion.div>
                      <div className="text-xs text-center text-gray-600 mt-2" data-id="nyhboyiaf" data-path="src/components/ImpactDashboard.tsx">
                        {data.day}
                      </div>
                      <div className={`text-xs text-center mt-1 font-semibold ${
                      data.level === 'high' ? 'text-green-600' :
                      data.level === 'moderate' ? 'text-yellow-600' :
                      'text-red-600'}`
                      } data-id="8lfd88sbn" data-path="src/components/ImpactDashboard.tsx">
                        {data.level}
                      </div>
                    </div>);

                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced 3D Future Projections */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }} data-id="eac3t5bnz" data-path="src/components/ImpactDashboard.tsx">
          
          <motion.div
            className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-3d-intense card-3d"
            whileHover={{
              rotateY: 1,
              rotateX: 1,
              scale: 1.01,
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.25)'
            }}
            transition={{ type: "spring", stiffness: 200 }} data-id="mjdfeg2ko" data-path="src/components/ImpactDashboard.tsx">
            
            {/* Enhanced background effects */}
            <div className="absolute inset-0" data-id="syas5y53f" data-path="src/components/ImpactDashboard.tsx">
              <motion.div
                className="absolute top-10 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: 360,
                  x: [0, 50, 0],
                  y: [0, -30, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }} data-id="9vcmnrx9z" data-path="src/components/ImpactDashboard.tsx" />

              <motion.div
                className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"
                animate={{
                  scale: [1.5, 1, 1.5],
                  rotate: -360,
                  x: [0, -30, 0],
                  y: [0, 20, 0]
                }}
                transition={{ duration: 10, repeat: Infinity }} data-id="zve05fymr" data-path="src/components/ImpactDashboard.tsx" />

            </div>

            <div className="relative z-10" data-id="oq3z48fxd" data-path="src/components/ImpactDashboard.tsx">
              <motion.h3
                className="text-3xl font-bold mb-6"
                animate={{
                  textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 20px rgba(16,185,129,0.5)",
                  "0 0 0px rgba(255,255,255,0)"]

                }}
                transition={{ duration: 3, repeat: Infinity }} data-id="aujlajlk8" data-path="src/components/ImpactDashboard.tsx">
                Projected Impact at Scale
              </motion.h3>
              <motion.p
                className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.9, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }} data-id="tiyqelsp8" data-path="src/components/ImpactDashboard.tsx">
                When deployed city-wide, SmartBin AI could transform urban waste management
              </motion.p>
              
              <div className="grid md:grid-cols-3 gap-8 perspective-1000" data-id="6vcmakn2o" data-path="src/components/ImpactDashboard.tsx">
                {[
                { value: 10, suffix: "M+", label: "Kg Waste Processed Annually", color: "text-green-400" },
                { value: 75, suffix: "%", label: "Citywide Recycling Rate", color: "text-blue-400" },
                { value: 5, suffix: "K", label: "Tons CO₂ Saved Per Year", color: "text-purple-400" }].
                map((projection, index) => {
                  const count = useCountUp(projection.value, 3000 + index * 300, isInView);

                  return (
                    <motion.div
                      key={index}
                      className="card-3d"
                      whileHover={{
                        scale: 1.1,
                        rotateY: 10,
                        y: -5
                      }}
                      transition={{ type: "spring", stiffness: 300 }} data-id="e4sn84bfq" data-path="src/components/ImpactDashboard.tsx">
                      
                      <motion.div
                        className={`text-4xl font-bold ${projection.color} mb-2`}
                        key={count} data-id="ua965pn3z" data-path="src/components/ImpactDashboard.tsx">
                        {count}{projection.suffix}
                      </motion.div>
                      <div className="text-lg opacity-90" data-id="b7s3tbuji" data-path="src/components/ImpactDashboard.tsx">{projection.label}</div>
                    </motion.div>);

                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default ImpactDashboard;