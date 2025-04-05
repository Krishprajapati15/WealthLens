"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Cover } from "./ui/cover";

const HeroSection = () => {
  return (
    <div className="pb-20 px-1">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-8xl lg:text-[72px] pb-6 gradient-title font-italic">
          <Cover>
            {" "}
            Take Control of Your Wealth <br /> With WealthLens!
          </Cover>
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
      </div>
    </div>
  );
};

export default HeroSection;
