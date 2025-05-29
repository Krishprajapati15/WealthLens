https://dribbble.com/search/finance-site-design
http://localhost:8288/runs
https://www.inngest.com/docs/getting-started/nextjs-quick-start?ref=docs-home
https://react.email/docs/getting-started/manual-setup
http://localhost:3001/preview/template?view=desktop
https://resend.com/api-keys
https://tailwindui.com/components


{/* <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-8xl lg:text-[72px] pb-6 gradient-title font-italic">
          TAKE CONTROL OF YOUR WEALTH <br /> WITH WEALTHLENS!
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Unlock the Power of AI to Track, Analyze, and Optimize Your Spending,
          Creating Smarter Financial Choices Every Day.
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <Link href="/dashboard">
          <Button size="lg" className="px-8">
            Get Started
          </Button>
        </Link>
        <Link href="">
          <Button size="lg" variant="outline" className="px-8">
            Watch Demo
          </Button>
        </Link>
      </div> */}


       {/* <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center animate-fadeIn">
                <div className="text-4xl font-bold text-blue-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

1>first graph 

<BarChart
  dataset={dataset}
  xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
  series={[
    { dataKey: 'london', label: 'London', valueFormatter },
    { dataKey: 'paris', label: 'Paris', valueFormatter },
    { dataKey: 'newYork', label: 'New York', valueFormatter },
    { dataKey: 'seoul', label: 'Seoul', valueFormatter },
  ]}
  {...chartSetting}
/>

2>Round graph

import { PieChart } from '@mui/x-charts/PieChart';

<PieChart
  series={[
    {
      data: [ ... ],
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -45,
      endAngle: 225,
      cx: 150,
      cy: 150,
    }
  ]}
/>

3>Metter Graph 

import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

<Gauge
  value={75}
  startAngle={-110}
  endAngle={110}
  sx={{
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 40,
      transform: 'translate(0px, 0px)',
    },
  }}
  text={
     ({ value, valueMax }) => `${value} / ${valueMax}`
  }
/>





"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Wrench,
  Fuel,
  Truck,
  Clock,
  Shield,
  ThumbsUp,
  Phone,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-gray-100">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatisticsSection />
      <UserFeedbackSection />
      <WhyChooseUsSection />
      <EmergencyServicesSection />
      <FaqSection />
      <FinalCTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Mechanic working on a car"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>
      <motion.div
        className="relative z-10 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Your Vehicle's Lifeline,
          <br />
          Anytime, Anywhere!
        </motion.h1>
        <p className="text-xl md:text-2xl mb-8">
          Find mechanics, get petrol, or request towing with just a tap.
        </p>
        <motion.button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(6,182,212)" }}
          whileTap={{ scale: 0.95 }}
        >
          Find a Mechanic Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <Wrench className="w-12 h-12 text-cyan-400" />,
      title: "Mechanic Finder",
      description: "Locate skilled mechanics near you in minutes.",
    },
    {
      icon: <Fuel className="w-12 h-12 text-cyan-400" />,
      title: "Petrol Services",
      description: "Running low? Get fuel delivered to your location.",
    },
    {
      icon: <Truck className="w-12 h-12 text-cyan-400" />,
      title: "Vehicle Towing",
      description: "Swift and safe towing services for emergencies.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg text-center"
              whileHover={{ y: -5, boxShadow: "0px 0px 8px rgb(6,182,212)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { title: "Search", description: "Enter your location and service needed" },
    { title: "Choose", description: "Select from available service providers" },
    { title: "Book", description: "Confirm your booking with a tap" },
    { title: "Relax", description: "Help is on the way to your location" },
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {index + 1}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatisticsSection() {
  const stats = [
    { value: "50k+", label: "Happy Customers" },
    { value: "1000+", label: "Service Providers" },
    { value: "15min", label: "Avg. Response Time" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-800 bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2 text-cyan-400"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UserFeedbackSection() {
  const testimonials = [
    {
      name: "John D.",
      rating: 5,
      text: "FindMyMech saved me when I was stranded on the highway. Quick and reliable!",
    },
    {
      name: "Sarah M.",
      rating: 4,
      text: "Great service! The petrol delivery was super fast and convenient.",
    },
    {
      name: "Mike R.",
      rating: 5,
      text: "Professional towing service. They handled my car with care. Highly recommended!",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0px 0px 8px rgb(6,182,212)" }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-cyan-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-gray-100">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const reasons = [
    {
      icon: <Clock className="w-8 h-8 text-cyan-400" />,
      title: "24/7 Availability",
      description:
        "We're here for you around the clock, every day of the year.",
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Trusted Professionals",
      description:
        "Our network consists of vetted and skilled service providers.",
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-cyan-400" />,
      title: "Fast Response Times",
      description: "Quick assistance when you need it the most.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md"
              whileHover={{ y: -5, boxShadow: "0px 0px 8px rgb(6,182,212)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-100">
                {reason.title}
              </h3>
              <p className="text-gray-300 text-center">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmergencyServicesSection() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-800 bg-opacity-50">
      <motion.div className="max-w-4xl mx-auto text-center" style={{ scale }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
          Emergency Services
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          We understand that vehicle emergencies can happen at any time. That's
          why our emergency services are available 24/7, ready to assist you
          wherever you are.
        </p>
        <motion.button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(6,182,212)" }}
          whileTap={{ scale: 0.95 }}
        >
          Call Emergency Services
          <Phone className="ml-2 w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      question: "How quickly can I expect help to arrive?",
      answer:
        "Our average response time is 15 minutes, but it may vary depending on your location and the current demand.",
    },
    {
      question: "Are your mechanics certified?",
      answer:
        "Yes, all mechanics in our network are certified professionals with years of experience.",
    },
    {
      question: "What types of vehicles do you service?",
      answer:
        "We service all types of passenger vehicles, including cars, SUVs, and light trucks.",
    },
    {
      question: "How do I pay for the services?",
      answer:
        "Payment can be made securely through our app using credit/debit cards or digital wallets.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                {faq.question}
              </h3>
              <p className="text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-800 bg-opacity-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          Ready for Peace of Mind on the Road?
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Download the FindMyMech app now and experience hassle-free vehicle
          assistance at your fingertips.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(6,182,212)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Download for iOS
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
          <motion.button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(6,182,212)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Download for Android
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}



