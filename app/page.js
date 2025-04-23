"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroSection from "@/components/hero";
import { FeaturesSectionDemo } from "@/components/ui/feture";
import { AnimatedTestimonialsDemo } from "@/components/Testinomials";
import { GlowingStar } from "@/components/upcoming";
import { BentoGridThirdDemo } from "@/components/Bentogrid";
import { MeteorsDemo } from "@/components/Howitwork";
import { useState } from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Spline from "@splinetool/react-spline";
import VapiAssistant from "@/components/VapiAssistant";

export default function Home() {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePricing = (planType) => {
    setIsMonthly(planType === "monthly");
  };
  return (
    <div className="mt-40">
      <HeroSection />
      <div className="bg-blue-50 mx-10  pt-20 pb-20">
        <BentoGridThirdDemo />
      </div>

      <main className="mx-10 mt-10">
        <Spline scene="https://prod.spline.design/rkiYig-82j5y7Z6e/scene.splinecode" />
      </main>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-900 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
                72K+
              </h2>
              <p className="text-gray-700 dark:text-gray-300">Active Users</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
                $1B+
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Transactions Tracked
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
                99.9%
              </h2>
              <p className="text-gray-700 dark:text-gray-300">Uptime</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
                4.8/5
              </h2>
              <p className="text-gray-700 dark:text-gray-300">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-10 pb-0">
        <h2 className="text-5xl text-gray-600 font-bold text-center mb-10 animate-slideInUp">
          Everything you need to manage your finances
        </h2>
        <FeaturesSectionDemo />
      </section>

      <div className="container mx-auto py-10">
        <h2 className="text-5xl font-bold text-gray-600 text-center mb-10 animate-slideInUp">
          How It Works
        </h2>
        <div className="mt-15">
          <MeteorsDemo />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-6xl text-gray-600 font-bold text-center mt-8 animate-slideInUp">
          Customer Feedback
        </h2>
        <AnimatedTestimonialsDemo />
      </div>

      <div className="container mx-auto">
        <h2 className="text-6xl font-bold text-center text-gray-600 animate-slideInUp">
          Upcoming Features
        </h2>
        <GlowingStar />
      </div>

      <div className="flex flex-col items-end">
        <TextHoverEffect text="WealthLens" />
      </div>

      <section className="py-0 pb-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="flex flex-col space-y-10">
            <div className="flex gap-10 flex-col items-center">
              <div className="text-center max-w-2xl">
                <h2 className="text-6xl font-bold text-center text-gray-600 animate-slideInUp">
                  Our Plans
                </h2>
              </div>
              <div className="min-w-max flex justify-center md:justify-end">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg shadow-gray-200/40 dark:shadow-none flex items-center relative p-1">
                  <button
                    className={`text-white flex items-center h-9 w-max px-4 rounded-lg ${
                      isMonthly
                        ? "bg-blue-900 dark:bg-blue-950"
                        : "bg-transparent"
                    }`}
                    onClick={() => togglePricing("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={`text-gray-700 dark:text-gray-300 flex items-center h-9 w-max px-4 ${
                      !isMonthly
                        ? "bg-blue-900 dark:bg-blue-950 text-white"
                        : ""
                    }`}
                    onClick={() => togglePricing("yearly")}
                  >
                    Yearly
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mx-auto mt-0">
              <div className="rounded-lg border border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 p-6 sm:p-10 space-y-6">
                <div className="text-center space-y-3">
                  <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">
                    Starter Plan
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    This plan offers visualizations, AI receipt scanning, email
                    updates, and spending suggestions for individuals.
                  </p>
                </div>
                <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-gray-100 dark:before:bg-gray-900" />
                <div className="text-center space-y-2">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {isMonthly ? "Free" : "Free"}
                  </p>
                  <span className="text-gray-700 dark:text-gray-300">
                    {isMonthly ? "Per Month/Per user" : "Per Year/Per user"}
                  </span>
                </div>
                <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-gray-100 dark:before:bg-gray-900" />
                <div className="flex justify-center">
                  <Link
                    href="/dashboard"
                    className="outline-none w-max mx-auto flex items-center h-11 px-5 rounded-md bg-gray-100 dark:bg-gray-900 text-blue-700 dark:text-gray-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              <div className="rounded-lg relative border border-gray-100 dark:border-gray-900 bg-gray-100 dark:bg-gray-900 p-6 sm:p-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 rounded-b-lg bg-gray-200 dark:bg-gray-950 text-gray-700 dark:text-gray-300">
                  Recommended
                </div>
                <div className="space-y-6">
                  <div className="text-center space-y-3">
                    <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">
                      Professional Plan
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      Includes Starter features plus SmartPaySync, Credit Card
                      AI, and a predictive tax estimator.
                    </p>
                  </div>
                  <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-gray-200 dark:before:bg-gray-800" />
                  <div className="text-center space-y-2">
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${isMonthly ? "100.00" : "1000.00"}
                    </p>
                    <span className="text-gray-700 dark:text-gray-300">
                      {isMonthly ? "Per Month/Per user" : "Per Year/Per user"}
                    </span>
                  </div>
                  <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-gray-200 dark:before:bg-gray-800" />
                  <div className="flex justify-center">
                    <Link
                      href="/dashboard"
                      className="outline-none w-max mx-auto flex items-center h-11 px-5 rounded-md bg-blue-900 dark:bg-blue-950 text-white"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 p-6 sm:p-10 space-y-6">
                <div className="text-center space-y-3">
                  <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">
                    Enterprise Plan
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    All features from Professional plans, plus team management,
                    custom analytics, and priority support.
                  </p>
                </div>
                <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-gray-100 dark:before:bg-gray-900" />
                <div className="text-center space-y-2">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${isMonthly ? "200.00" : "2000.00"}
                  </p>
                  <span className="text-gray-700 dark:text-gray-300">
                    {isMonthly ? "Per Month/Per user" : "Per Year/Per user"}
                  </span>
                </div>
                <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-gray-100 dark:before:bg-gray-900" />
                <div className="flex justify-center">
                  <Link
                    href="/dashboard"
                    className="outline-none w-max mx-auto flex items-center h-11 px-5 rounded-md bg-gray-100 dark:bg-gray-900 text-blue-700 dark:text-gray-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900">
            <div className="absolute right-0 top-0 h-full w-full flex justify-end">
              <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
              </div>
            </div>
            <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
              <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
              </div>
            </div>
            <div className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8">
              <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-blue-950 dark:text-white">
                Ready to Take{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-20% via-indigo-400 via-30% to-teal-600">
                  Control of Your
                </span>{" "}
                Finances?
              </h1>
              <p className="text-gray-700 dark:text-gray-300">
                Join thousands of users who are already managing their finances
                smarter with WealthLens
              </p>
              <div className="mx-auto max-w-md sm:max-w-xl flex justify-center">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-black text-white hover:bg-gradient-to-r from-[#A2D2DF] to-[#D4BEE4] hover:text-black animate-bounce border-2"
                  >
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Voice Assistant Floating */}
      <div className="fixed bottom-6 right-6 z-50">
        <VapiAssistant />
      </div>
    </div>
  );
}
