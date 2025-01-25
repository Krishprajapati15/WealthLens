"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";

export function GlowingStar() {
  return (
    <div className="flex py-20 items-start justify-center space-x-8">
      <GlowingStarsBackgroundCard className="flex-1">
        <GlowingStarsTitle className="text-center">
          SmartPaySync
        </GlowingStarsTitle>
        <div className="flex flex-col justify-between items-center space-y-4 mt-4">
          <GlowingStarsDescription className="text-center">
            Seamlessly sync your GPay and PhonePe transactions with WealthLens,
            automating data entry into your financial statement for a
            hassle-free tracking experience.
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>

      <GlowingStarsBackgroundCard className="flex-1">
        <GlowingStarsTitle className="text-center">
          CraditCard Track AI
        </GlowingStarsTitle>
        <div className="flex flex-col justify-between items-center space-y-4 mt-4">
          <GlowingStarsDescription className="text-center">
            Automatically fetch and categorize your credit card transactions,
            providing real-time updates to your financial statements while
            highlighting potential savings and due dates.
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>

      <GlowingStarsBackgroundCard className="flex-1">
        <GlowingStarsTitle className="text-center">
          Predictive Tax Estimator
        </GlowingStarsTitle>
        <div className="flex flex-col justify-between items-center space-y-4 mt-4">
          <GlowingStarsDescription className="text-center">
            Automatically estimate taxes based on categorized expenses and
            income, providing real-time tax planning insights.
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
