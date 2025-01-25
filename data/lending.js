import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
  Landmark,
  DiamondPercent,
} from "lucide-react";

export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-black" />,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: <Receipt className="h-8 w-8 text-black" />,
    title: "Smart Receipt Scanner",
    description:
      "Extract data automatically from receipts using advanced AI technology",
  },
  {
    icon: <PieChart className="h-8 w-8 text-black" />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-black" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <Globe className="h-8 w-8 text-black" />,
    title: "Multi-Currency",
    description: "Support for multiple currencies with real-time conversion",
  },
  {
    icon: <Zap className="h-8 w-8 text-black" />,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations",
  },
];

export const upcomingFeaturesData = [
  {
    title: "SmartPaySync",
    description:
      "Seamlessly sync your GPay and PhonePe transactions with WealthLens, automating data entry into your financial statement for a hassle-free tracking experience.",
    icon: <Landmark />,
  },
  {
    title: "CraditCard Track AI",
    description:
      "Automatically fetch and categorize your credit card transactions, providing real-time updates to your financial statements while highlighting potential savings and due dates.",
    icon: <CreditCard />,
  },
  {
    title: "Predictive Tax Estimator",
    description:
      "Automatically estimate taxes based on categorized expenses and income, providing real-time tax planning insights.",
    icon: <DiamondPercent />,
  },
];

export const faqsData = [
  {
    question: "How do I set up WealthLens for my first time?",
    answer:
      "Sign up for a free account, scan your receipts, and start tracking your spending. WealthLens will automatically categorize and track your transactions for you.",
  },
  {
    question: "What are the fees for using WealthLens?",
    answer:
      "WealthLens offers a free tier with unlimited usage. There are no monthly fees, and you can continue using the service for as long as you want. You can also explore additional features and services offered by our partners.",
  },
  {
    question: "Can I Connect  WealthLens with my existing bank accounts?",
    answer: "No, WealthLens are Realise This Feature in Short Time!",
  },
  {
    question: "WealthLens is Secure or Not?",
    answer: "Yes, wealthLens is 100% Secure!",
  },
  {
    question: "How do I contact WealthLens support?",
    answer: "You can contact our support through the Contact Us Page",
  },
  {
    question: "Can I use WealthLens on my mobile device?",
    answer:
      "Yes, wealthLens is compatible with all major smartphones and tablets.",
  },
  {
    question: "Can I export my data from WealthLens?",
    answer: "Yes, you can export your data in CSV, PDF, or TXT formats.",
  },
];
