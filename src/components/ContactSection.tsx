import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Sparkles,
  Zap } from
"lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
    inquiryType: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours."
      });

      setFormData({
        name: "",
        email: "",
        organization: "",
        message: "",
        inquiryType: "general"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "sakshipandey7290@gmail.com",
    link: "mailto:sakshipandey7290@gmail.com",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 93556 05036",
    link: "tel:+919355605036",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "GLBCRI, India",
    link: "#",
    color: "from-purple-500 to-violet-600"
  }];


  const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "pilot", label: "Pilot Program" },
  { value: "partnership", label: "Partnership" },
  { value: "demo", label: "Request Demo" },
  { value: "technical", label: "Technical Support" }];


  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden perspective-2000" data-id="6ghpidy8r" data-path="src/components/ContactSection.tsx">
      {/* Enhanced 3D Background Effects */}
      <div className="absolute inset-0" data-id="2wpvbqqwc" data-path="src/components/ContactSection.tsx">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-green-200/30 rounded-full blur-xl card-3d"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotateY: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }} data-id="4t4vp5enl" data-path="src/components/ContactSection.tsx" />

        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl card-3d"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            rotateX: [0, 180, 360],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }} data-id="uzyy89ukp" data-path="src/components/ContactSection.tsx" />

      </div>

      <div className="container mx-auto px-4 relative z-10" data-id="oka3n339a" data-path="src/components/ContactSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="22ul3ucmy" data-path="src/components/ContactSection.tsx">
          
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"]
            }}
            transition={{ duration: 4, repeat: Infinity }} data-id="2tj55i0xp" data-path="src/components/ContactSection.tsx">
            Get <motion.span
              className="text-green-600 inline-block"
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                textShadow: '2px 2px 4px rgba(34, 197, 94, 0.3)'
              }} data-id="ml8j2rzm7" data-path="src/components/ContactSection.tsx">In Touch</motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }} data-id="eu7e1ae76" data-path="src/components/ContactSection.tsx">
            Ready to transform your city's waste management? Let's discuss how SmartBin AI 
            can help you achieve your sustainability goals.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start perspective-1000" data-id="0tw9259pp" data-path="src/components/ContactSection.tsx">
          {/* Enhanced 3D Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }} data-id="b4aocowg5" data-path="src/components/ContactSection.tsx">
            
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-3d-intense hover:shadow-3d-intense transition-all duration-500 card-3d"
              whileHover={{
                y: -5,
                rotateY: 2,
                rotateX: 2,
                scale: 1.01
              }}
              transition={{ type: "spring", stiffness: 200 }} data-id="letbaaajg" data-path="src/components/ContactSection.tsx">
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center" data-id="nojshua5u" data-path="src/components/ContactSection.tsx">
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.3 }} data-id="biguwzyag" data-path="src/components/ContactSection.tsx">
                  <Sparkles className="w-6 h-6 mr-2 text-green-600" data-id="3o483ieiq" data-path="src/components/ContactSection.tsx" />
                </motion.div>
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6" data-id="19571hf1z" data-path="src/components/ContactSection.tsx">
                <div className="grid md:grid-cols-2 gap-4" data-id="ag9s9y9r7" data-path="src/components/ContactSection.tsx">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }} data-id="safc661fk" data-path="src/components/ContactSection.tsx">
                    <label className="block text-sm font-medium text-gray-700 mb-2" data-id="cxl3j2ai9" data-path="src/components/ContactSection.tsx">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Your full name" data-id="03hq0ov6h" data-path="src/components/ContactSection.tsx" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }} data-id="6lqasf48g" data-path="src/components/ContactSection.tsx">
                    <label className="block text-sm font-medium text-gray-700 mb-2" data-id="kbgaxmjec" data-path="src/components/ContactSection.tsx">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="your.email@example.com" data-id="jx85mozrq" data-path="src/components/ContactSection.tsx" />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }} data-id="37s894oii" data-path="src/components/ContactSection.tsx">
                  <label className="block text-sm font-medium text-gray-700 mb-2" data-id="61n89yzo8" data-path="src/components/ContactSection.tsx">
                    Organization
                  </label>
                  <Input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your organization or company" data-id="6f7iz891p" data-path="src/components/ContactSection.tsx" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }} data-id="ntpfgwz30" data-path="src/components/ContactSection.tsx">
                  <label className="block text-sm font-medium text-gray-700 mb-2" data-id="64w0tfhw6" data-path="src/components/ContactSection.tsx">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" data-id="nct46rhba" data-path="src/components/ContactSection.tsx">
                    {inquiryTypes.map((type) =>
                    <option key={type.value} value={type.value} data-id="s72czta30" data-path="src/components/ContactSection.tsx">
                        {type.label}
                      </option>
                    )}
                  </select>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }} data-id="eglsl8ten" data-path="src/components/ContactSection.tsx">
                  <label className="block text-sm font-medium text-gray-700 mb-2" data-id="kvqq36sxe" data-path="src/components/ContactSection.tsx">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none"
                    placeholder="Tell us about your project, requirements, or questions..." data-id="n2kaq5g4x" data-path="src/components/ContactSection.tsx" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }} data-id="xqogpfd67" data-path="src/components/ContactSection.tsx">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-xl font-semibold disabled:opacity-50 btn-3d shadow-3d" data-id="sc2zziwhh" data-path="src/components/ContactSection.tsx">
                    {isSubmitting ?
                    <div className="flex items-center justify-center" data-id="0e2o014dk" data-path="src/components/ContactSection.tsx">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" data-id="myqkcjeb6" data-path="src/components/ContactSection.tsx"></div>
                        Sending...
                      </div> :
                    <div className="flex items-center justify-center" data-id="pxex0o0dh" data-path="src/components/ContactSection.tsx">
                        <Send className="w-5 h-5 mr-2" data-id="7vyub7ix9" data-path="src/components/ContactSection.tsx" />
                        Send Message
                      </div>
                    }
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>

          {/* Enhanced 3D Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="space-y-8" data-id="k3xreuntl" data-path="src/components/ContactSection.tsx">
            
            <div data-id="qe7e5h1rb" data-path="src/components/ContactSection.tsx">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center" data-id="mi0ty74lw" data-path="src/components/ContactSection.tsx">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }} data-id="ldozzjb0x" data-path="src/components/ContactSection.tsx">
                  <Zap className="w-6 h-6 mr-2 text-blue-600" data-id="of3oq4rgn" data-path="src/components/ContactSection.tsx" />
                </motion.div>
                Contact Information
              </h3>
              <div className="space-y-6" data-id="xk8d2tuvl" data-path="src/components/ContactSection.tsx">
                {contactInfo.map((info, index) =>
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="group block" data-id="jsnp2pcms" data-path="src/components/ContactSection.tsx">

                    <motion.div
                    className="flex items-center p-4 bg-white rounded-2xl shadow-3d hover:shadow-3d-hover transition-all duration-500 card-3d"
                    whileHover={{
                      scale: 1.05,
                      x: 10,
                      rotateY: 5
                    }}
                    transition={{ type: "spring", stiffness: 200 }} data-id="llrbgvpsl" data-path="src/components/ContactSection.tsx">
                      
                      <motion.div
                      className={`bg-gradient-to-r ${info.color} rounded-xl p-3 mr-4 shadow-3d`}
                      whileHover={{
                        scale: 1.15,
                        rotateZ: 10,
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                      }}
                      transition={{ type: "spring", stiffness: 300 }} data-id="rdb2f4ujw" data-path="src/components/ContactSection.tsx">
                        <info.icon className="w-6 h-6 text-white" data-id="pzs0fj5dn" data-path="src/components/ContactSection.tsx" />
                      </motion.div>
                      <div data-id="fbf0n14po" data-path="src/components/ContactSection.tsx">
                        <h4 className="font-semibold text-gray-900 mb-1" data-id="s74ngrfs8" data-path="src/components/ContactSection.tsx">{info.title}</h4>
                        <p className="text-gray-600" data-id="x363mlyjy" data-path="src/components/ContactSection.tsx">{info.value}</p>
                      </div>
                    </motion.div>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Enhanced 3D Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }} data-id="eko66i1ue" data-path="src/components/ContactSection.tsx">
              
              <motion.div
                className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-3d-intense card-3d"
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  rotateX: 2
                }}
                transition={{ type: "spring", stiffness: 200 }} data-id="zea154qv5" data-path="src/components/ContactSection.tsx">
                
                {/* Enhanced background effects */}
                <div className="absolute inset-0" data-id="zimevh5yj" data-path="src/components/ContactSection.tsx">
                  <motion.div
                    className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }} data-id="pmteugzia" data-path="src/components/ContactSection.tsx" />

                  <motion.div
                    className="absolute -bottom-5 -left-5 w-15 h-15 bg-white/5 rounded-full"
                    animate={{
                      rotate: -360,
                      scale: [1.2, 1, 1.2]
                    }}
                    transition={{
                      rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity }
                    }} data-id="w5sgb7glv" data-path="src/components/ContactSection.tsx" />

                </div>
                
                <div className="relative z-10" data-id="fc3kvaq9l" data-path="src/components/ContactSection.tsx">
                  <h4 className="text-xl font-bold mb-4" data-id="tp1gpudpt" data-path="src/components/ContactSection.tsx">Stay Updated</h4>
                  <p className="mb-6 opacity-90" data-id="pnir55o03" data-path="src/components/ContactSection.tsx">Get the latest news about smart city innovations and sustainability.</p>
                  <div className="flex gap-3" data-id="3xgwhlqoz" data-path="src/components/ContactSection.tsx">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70" data-id="l1bog2hz5" data-path="src/components/ContactSection.tsx" />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }} data-id="har1onqxo" data-path="src/components/ContactSection.tsx">
                      <Button className="bg-white text-green-600 hover:bg-gray-100 px-6 btn-3d" data-id="7psru3hdm" data-path="src/components/ContactSection.tsx">
                        Subscribe
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced 3D Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }} data-id="88sc45hgm" data-path="src/components/ContactSection.tsx">
              
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-3d card-3d"
                whileHover={{
                  y: -5,
                  rotateY: 2,
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
                }}
                transition={{ type: "spring", stiffness: 200 }} data-id="d4vagwrja" data-path="src/components/ContactSection.tsx">
                
                <h4 className="font-semibold text-gray-900 mb-4" data-id="ga5l7rf8u" data-path="src/components/ContactSection.tsx">What You Get</h4>
                <div className="space-y-3" data-id="g4mi6rw0v" data-path="src/components/ContactSection.tsx">
                  {[
                  "Free consultation call",
                  "Custom solution proposal",
                  "Pilot program options",
                  "Technical documentation"].
                  map((feature, index) =>
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }} data-id="kjrs9dp5a" data-path="src/components/ContactSection.tsx">
                      
                      <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.3 }} data-id="8v87sse5q" data-path="src/components/ContactSection.tsx">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" data-id="399kctb65" data-path="src/components/ContactSection.tsx" />
                      </motion.div>
                      <span className="text-gray-600" data-id="ef6wz96mv" data-path="src/components/ContactSection.tsx">{feature}</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default ContactSection;