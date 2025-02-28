"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sparkles, ArrowRight, Shield, Brain, LineChart } from "lucide-react";

const benefits = [
  {
    name: "Open Source",
    role: "MIT License",
    content: "Full access to source code. Deploy locally, modify, and contribute back to the community.",
    icon: "OS"
  },
  {
    name: "Privacy First",
    role: "Your Data, Your Control",
    content: "Local deployment option, secure API key storage, and complete control over your financial data.",
    icon: "PF"
  },
  {
    name: "AI Powered",
    role: "Choose Your LLM",
    content: "Integrate with your preferred LLM provider for personalized financial insights and advice.",
    icon: "AI"
  }
];

const faqs = [
  {
    question: "What makes FinGuide different?",
    answer: "FinGuide combines modern budget tracking with AI-powered insights through Local Language Model (LLM) providers. It's completely open-source, privacy-focused, and offers local deployment options."
  },
  {
    question: "Which LLM providers are supported?",
    answer: "We currently support Groq and Ollama, with Cohere integration nearly complete. Support for Gemini, Anthropic, OpenAI, and Azure is planned for future updates."
  },
  {
    question: "Can I deploy it locally?",
    answer: "Yes! FinGuide is designed for easy local deployment. We provide a setup script that automates the installation process, requiring just Node.js, npm, Docker."
  },
  {
    question: "How can I contribute?",
    answer: "We welcome contributions of all kinds! You can fork the repository, submit pull requests, report bugs, suggest features, or help with documentation. Every contribution counts!"
  }
];

const stats = [
  { label: "LLM Providers", value: "7+", prefix: "" },
  { label: "Core Features", value: "10+", prefix: "" },
  { label: "License", value: "MIT", prefix: "" },
  { label: "Cost", value: "Free", prefix: "100%" }
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img src="/finguide.png" alt="FinGuide" className="h-11 w-11" />
              <h1 className="text-xl sm:text-2xl font-bold text-primary">
                FinGuide
              </h1>
            </motion.div>
          </Link>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-2 sm:gap-4 items-center"
          >
            
            
            <Link href="/register">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button className="text-sm sm:text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                  Get Started
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-blue-500/[0.03] bg-[size:32px] [mask-image:radial-gradient(white,transparent_85%)]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-white/30 backdrop-blur-3xl [mask-image:radial-gradient(transparent,white_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block mb-4 sm:mb-6"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -inset-2 rounded-xl bg-blue-500/10 blur-xl"
            />
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground">
              Budgeting &<br />
                <span className="text-primary"> Finance Coordinator</span>
              </h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="text-lg sm:text-xl text-muted-foreground">Where</span>
            <span className="font-semibold text-lg sm:text-xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Curiosity</span>
            <span className="text-lg sm:text-xl text-muted-foreground">meets</span>
            <span className="font-semibold text-lg sm:text-xl bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Payments</span>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0"
          >
            Privacy-focused budget tracking with AI-powered insights. Forever free, completely open source.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-yellow-100 dark:bg-yellow-900/50 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8 max-w-2xl mx-auto"
          >
            <p className="text-yellow-800 dark:text-yellow-200 text-sm sm:text-base">
              ⚠️ <strong>Important:</strong> While we offer a demo for preview purposes, we strongly recommend local deployment for actual use. The demo should NOT be used for real financial data. Your financial privacy matters - deploy locally to keep your data under your control.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/register" className="w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg">
                  Get Started <ArrowRight className="w-5 h-5 inline-block ml-2" />
                </Button>
              </motion.div>
            </Link>
            
          </motion.div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 sm:p-6 rounded-xl bg-card hover:bg-card/80 border shadow-sm transition-colors"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2"
                >
                  {stat.prefix}{stat.value}
                </motion.div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Core Features
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Everything included, no premium features or hidden costs</p>
          </motion.div>
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 sm:mb-12 bg-card/50 p-1 rounded-lg">
              <TabsTrigger value="features" className="text-sm sm:text-base flex items-center gap-1 sm:gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-600">
                <LineChart className="w-3 h-3 sm:w-4 sm:h-4" />
                Features
              </TabsTrigger>
              <TabsTrigger value="security" className="text-sm sm:text-base flex items-center gap-1 sm:gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-600">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                Security
              </TabsTrigger>
              <TabsTrigger value="ai" className="text-sm sm:text-base flex items-center gap-1 sm:gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-600">
                <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
                AI Integration
              </TabsTrigger>
            </TabsList>
            <TabsContent value="features">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {[
                  {
                    title: "Enhanced Dashboard",
                    description: "Modern, paginated interface for expense and income listings with real-time updates",
                    badge: "Core"
                  },
                  {
                    title: "Intelligent Chat",
                    description: "Advanced chat with Markdown support for better financial assistance",
                    badge: "AI"
                  },
                  {
                    title: "Smart Categories",
                    description: "Robust validation for categories and payment methods with informative feedback",
                    badge: "Core"
                  },
                  {
                    title: "Budget Alerts",
                    description: "Get notified via in-app notifications and email when you exceed your budget",
                    badge: "Core"
                  },
                  {
                    title: "Recurring Expenses",
                    description: "Set automatic tracking for recurring payments and subscriptions",
                    badge: "Core"
                  },
                  {
                    title: "API Access",
                    description: "Full API documentation available at /api-docs for developers",
                    badge: "Dev"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="h-full transition-all hover:shadow-lg bg-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                          <Badge variant="secondary" className={cn(
                            "bg-blue-50 text-blue-700",
                            feature.badge === "AI" && "bg-purple-50 text-purple-700",
                            feature.badge === "Dev" && "bg-green-50 text-green-700"
                          )}>
                            {feature.badge}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="security">
              <Card className="border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Privacy-First Approach</CardTitle>
                  <CardDescription>Your data stays under your control</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Local Deployment</h4>
                      <p className="text-sm text-gray-600">Deploy on your own infrastructure with our easy setup script</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Secure Storage</h4>
                      <p className="text-sm text-gray-600">API keys stored securely in your browser</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ai">
              <Card className="border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Multiple LLM Providers</CardTitle>
                  <CardDescription>Choose your preferred AI provider for financial insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Current Support</h4>
                      <p className="text-sm text-gray-600">Groq and Ollama, with Cohere integration nearly complete</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Coming Soon</h4>
                      <p className="text-sm text-gray-600">Support for Gemini, Anthropic, OpenAI, and Azure</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <div className="mt-8 text-center">
            <Link href="/api-docs" className="inline-flex items-center text-primary hover:text-primary/90">
              <span className="text-lg">View API Documentation</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Why FinGuide?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Built with privacy, flexibility, and community in mind</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-xl transition-all border bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 rounded-xl bg-primary/10"
                      >
                        {benefit.icon === "OS" && <GitHubLogoIcon className="w-6 h-6 text-primary" />}
                        {benefit.icon === "PF" && <Shield className="w-6 h-6 text-primary" />}
                        {benefit.icon === "AI" && <Brain className="w-6 h-6 text-primary" />}
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl text-foreground">{benefit.name}</CardTitle>
                        <CardDescription className="text-primary/80">{benefit.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg">{benefit.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Everything you need to know about FinGuide</p>
          </motion.div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px]" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
              Join Our FinGuide Community
            </h2>
            <p className="text-xl sm:text-2xl text-primary-foreground/80 max-w-2xl mx-auto px-4 sm:px-0">
              Help us build the future of privacy-focused financial management
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <img src="/finguide.png" alt="FinGuide" className="h-11 w-11" />
              <p className="text-muted-foreground text-xs sm:text-sm">
                © 2025 All rights reserved.
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="hover:text-primary transition-colors">
                Disclaimer
              </Link>
            </div>

            <p className="text-xs text-center text-muted-foreground max-w-2xl">
              FinGuide is provided "as is" without warranty. Not a substitute for professional financial advice. 
              By using FinGuide, you agree to our Terms of Service and Privacy Policy. The demo environment should NOT be used for real financial data - please deploy locally for actual use.
            </p>

            
          </div>
        </div>
      </footer>
    </div>
  );
}
