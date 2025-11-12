"use client";

import { useState } from "react";
import { 
  Home, 
  Dumbbell, 
  TrendingUp, 
  Apple, 
  Brain, 
  Users, 
  Settings,
  Menu,
  X,
  Crown
} from "lucide-react";
import { useSubscription } from "@/contexts/subscription-context";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onUpgradeClick: () => void;
}

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "workouts", label: "Treinos", icon: Dumbbell },
  { id: "progress", label: "Progresso", icon: TrendingUp },
  { id: "nutrition", label: "Nutrição", icon: Apple },
  { id: "wellness", label: "Bem-estar", icon: Brain },
  { id: "community", label: "Comunidade", icon: Users },
  { id: "settings", label: "Configurações", icon: Settings },
];

export default function Navigation({ activeSection, onSectionChange, onUpgradeClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { planType, trialDaysRemaining } = useSubscription();

  const UpgradeButton = () => {
    if (planType === "premium") return null;

    return (
      <button
        onClick={onUpgradeClick}
        className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
      >
        <Crown className="w-4 h-4" />
        {planType === "trial" 
          ? `${trialDaysRemaining} dias restantes`
          : "Testar Premium"
        }
      </button>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-white/80 backdrop-blur-sm border-r border-blue-100 z-40">
        <div className="flex flex-col w-full p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              EvolveFit
            </h1>
          </div>
          
          <div className="flex flex-col gap-2 flex-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Upgrade Button */}
          <UpgradeButton />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-blue-100 z-50 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                EvolveFit
              </h1>
            </div>
            <div className="flex items-center gap-2">
              {planType !== "premium" && (
                <button
                  onClick={onUpgradeClick}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1"
                >
                  <Crown className="w-3 h-3" />
                  {planType === "trial" ? `${trialDaysRemaining}d` : "Premium"}
                </button>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Mobile Menu */}
        <nav className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="p-6 pt-20 flex flex-col h-full">
            <div className="flex flex-col gap-2 flex-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSectionChange(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg"
                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Upgrade Button */}
            <UpgradeButton />
          </div>
        </nav>
      </div>
    </>
  );
}