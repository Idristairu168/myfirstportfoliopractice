"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import profilepix from "@/public/ProfilePix.jpeg"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Brain,
  Monitor,
  Box,
  Code,
  Palette,
  Shield,
  Network,
  Settings,
  Mail,
  ChevronDown,
  Zap,
  Target,
  Lightbulb,
  Send,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
            >
              TeeTechSolution
            </motion.div>
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent"
          />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Hi, I'm Idris Tairu
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-gray-600 dark:text-gray-300">
                Aspiring AI Engineer | 3D Animator | Web Designer | IT Expert
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("services")}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore My Work
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <ChevronDown className="h-8 w-8 text-blue-500" />
            </motion.div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-12 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="mb-12 flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <Image
                      src={profilepix}
                      alt="Idris Tairu - Professional Photo"
                      className="w-64 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/20 to-transparent" />
                  </motion.div>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  👋 Hey there! I'm a passionate Computer Science student and the founder of{" "}
                  <strong>TeeTechSolution</strong>. I live at the intersection of creativity and technology, where I
                  bring ideas to life through code, design, and innovation. 🚀 My journey spans from developing AI
                  models to creating stunning 3D animations and building robust IT solutions.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                  💡 I believe in the power of technology to solve real-world problems and create meaningful
                  experiences. Whether it's crafting intelligent algorithms or setting up complex network
                  infrastructures, I approach every project with curiosity, precision, and a drive for excellence.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
                  >
                    <Brain className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">AI & Intelligence</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Building smart solutions with machine learning and AI
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
                  >
                    <Monitor className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">IT Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-300">Comprehensive hardware and software expertise</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
                  >
                    <Box className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">3D Animation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Creating immersive visual experiences and animations
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Education & Certifications
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                My academic journey and professional certifications in technology and innovation
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Academic Qualifications */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
                    <CardHeader>
                      <CardTitle className="text-2xl text-blue-600 dark:text-blue-400 flex items-center gap-3">
                        <Monitor className="h-8 w-8" />
                        Academic Qualifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                        <h4 className="font-semibold text-lg mb-2">Higher National Diploma</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">Computer Science</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Kaduna State Polytechnic</p>
                      </div>

                      <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                        <h4 className="font-semibold text-lg mb-2">National Diploma</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">Computer Science</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Federal Polytechnic Idah, Kogi State</p>
                      </div>

                      <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                        <h4 className="font-semibold text-lg mb-2">Diploma</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">Microsoft Packages</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">White House Computer</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Professional Certifications */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900/50 dark:to-blue-900/20 border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-2xl text-gray-700 dark:text-gray-300 flex items-center gap-3">
                        <Brain className="h-8 w-8" />
                        Professional Certifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          AI Focused
                        </Badge>
                        <div>
                          <p className="font-medium">TIIDELab Initiative</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">AI Focused Certification</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Microsoft
                        </Badge>
                        <div>
                          <p className="font-medium">Microsoft Packages</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Office Suite & Applications</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                        <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                          Creative
                        </Badge>
                        <div>
                          <p className="font-medium">3D Animation</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Digital Arts & Animation</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                        <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Safety</Badge>
                        <div>
                          <p className="font-medium">Fire Safety</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Safety & Emergency Response</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Honors Section */}
        <section id="awards" className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Awards & Honors
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Recognition for excellence in technology, leadership, and professional performance
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Monitor className="h-8 w-8 text-white" />
                      </div>
                      <Badge className="mb-4 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                        Academic Excellence
                      </Badge>
                      <h3 className="text-xl font-semibold mb-3">Best IT Student</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        Recognized for outstanding performance and technical excellence at Kaduna Refining and
                        Petrochemical Company
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Leadership
                      </Badge>
                      <h3 className="text-xl font-semibold mb-3">Best Team Lead</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        Awarded for exceptional leadership skills and team management at TIIDELab Initiative
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                      <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        Professional Excellence
                      </Badge>
                      <h3 className="text-xl font-semibold mb-3">Staff of the Month</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        Recognized for outstanding work performance and dedication at Chicken Republic Food Concept
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Skills & Services
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Tech & Creativity */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-600 dark:text-blue-400 flex items-center gap-3">
                      <Lightbulb className="h-8 w-8" />
                      Tech & Creativity
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Innovative solutions at the cutting edge of technology
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                      <Brain className="h-8 w-8 text-blue-500" />
                      <div>
                        <h4 className="font-semibold">AI & Machine Learning</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Neural networks, deep learning, intelligent systems
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                      <Box className="h-8 w-8 text-cyan-500" />
                      <div>
                        <h4 className="font-semibold">3D Animation</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Modeling, rigging, rendering, visual effects
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                      <Palette className="h-8 w-8 text-blue-400" />
                      <div>
                        <h4 className="font-semibold">Web Design</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Modern UI/UX, responsive design, user experience
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* IT Solutions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900/50 dark:to-blue-900/20 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-700 dark:text-gray-300 flex items-center gap-3">
                      <Settings className="h-8 w-8" />
                      IT Solutions
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Comprehensive hardware and infrastructure services
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                      <Shield className="h-8 w-8 text-green-500" />
                      <div>
                        <h4 className="font-semibold">CCTV Installation</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Security systems, surveillance setup, monitoring
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                      <Network className="h-8 w-8 text-orange-500" />
                      <div>
                        <h4 className="font-semibold">LAN Setup</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Network configuration, infrastructure, connectivity
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                      <Code className="h-8 w-8 text-purple-500" />
                      <div>
                        <h4 className="font-semibold">Software Deployment</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          System integration, deployment, maintenance
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Work With Me Section */}
        <section id="why-me" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Why Work With Me?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                I bring a unique combination of software expertise and hardware knowledge, enabling me to deliver
                comprehensive solutions that bridge the digital and physical worlds. My approach combines technical
                precision with creative innovation to solve complex challenges.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Reliability</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Consistent delivery of high-quality solutions with attention to detail and commitment to deadlines.
                </p>
                <Badge className="mt-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Trusted Partner
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Problem-Solving</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Analytical thinking and innovative approaches to tackle complex technical challenges effectively.
                </p>
                <Badge className="mt-4 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">
                  Solution-Focused
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Creativity</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bringing fresh perspectives and innovative ideas to every project with artistic flair and technical
                  expertise.
                </p>
                <Badge className="mt-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  Innovation-Driven
                </Badge>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-800 shadow-xl">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Name</label>
                          <Input placeholder="Your full name" className="w-full" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email</label>
                          <Input type="email" placeholder="your.email@example.com" className="w-full" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <Textarea
                          placeholder="Tell me about your project or how I can help you..."
                          className="w-full h-32 resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <div className="text-left">
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">dabdullahi41@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <Phone className="h-5 w-5 text-green-500" />
                    <div className="text-left">
                      <p className="font-semibold">Phone</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">08036466451</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">08174011690</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    <div className="text-left">
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">08174011690</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-6">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 bg-transparent"
                    onClick={() => window.open("mailto:dabdullahi41@gmail.com")}
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-green-50 dark:hover:bg-green-900/20 bg-transparent"
                    onClick={() => window.open("https://wa.me/2348174011690")}
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 bg-transparent"
                    onClick={() => window.open("tel:+2348036466451")}
                  >
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-gray-50 dark:hover:bg-gray-900/20 bg-transparent"
                    onClick={() => window.open("https://github.com/Idristairu168", "_blank")}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 bg-transparent"
                    onClick={() => window.open("https://www.linkedin.com/in/tairu-idris-54ab92195", "_blank")}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-sky-50 dark:hover:bg-sky-900/20 bg-transparent"
                    onClick={() => window.open("https://x.com/IdrisTairu168", "_blank")}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gray-900 dark:bg-black text-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  TeeTechSolution
                </div>
                <p className="text-gray-400">Innovative solutions for the digital age</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-400">© 2025 Idris Tairu – All rights reserved.</p>
                <p className="text-sm text-gray-500 mt-1">Built with passion and cutting-edge technology</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
