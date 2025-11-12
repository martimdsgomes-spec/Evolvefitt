"use client";

import { useState } from "react";
import Navigation from "@/components/custom/navigation";
import Dashboard from "@/components/custom/dashboard";
import Workouts from "@/components/custom/workouts";
import Progress from "@/components/custom/progress";
import Nutrition from "@/components/custom/nutrition";
import Wellness from "@/components/custom/wellness";
import Community from "@/components/custom/community";
import Settings from "@/components/custom/settings";
import SubscriptionBanner from "@/components/custom/subscription-banner";
import PricingModal from "@/components/custom/pricing-modal";

export default function Home() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard onUpgradeClick={() => setIsPricingModalOpen(true)} />;
      case "workouts":
        return <Workouts onUpgradeClick={() => setIsPricingModalOpen(true)} />;
      case "progress":
        return <Progress onUpgradeClick={() => setIsPricingModalOpen(true)} />;
      case "nutrition":
        return <Nutrition onUpgradeClick={() => setIsPricingModalOpen(true)} />;
      case "wellness":
        return <Wellness onUpgradeClick={() => setIsPricingModalOpen(true)} />;
      case "community":
        return <Community onUpgradeClick={() => setIsPricingModalOpen(true)} />;
      case "settings":
        return <Settings onUpgradeClick={() => setIsPricingModalOpen(true)} />;
      default:
        return <Dashboard onUpgradeClick={() => setIsPricingModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
        onUpgradeClick={() => setIsPricingModalOpen(true)}
      />
      
      {/* Main Content */}
      <main className="md:ml-64 pt-16 md:pt-0">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Subscription Banner */}
          <SubscriptionBanner onUpgradeClick={() => setIsPricingModalOpen(true)} />
          
          {renderSection()}
        </div>
      </main>

      {/* Pricing Modal */}
      <PricingModal 
        isOpen={isPricingModalOpen} 
        onClose={() => setIsPricingModalOpen(false)} 
      />
    </div>
  );
}