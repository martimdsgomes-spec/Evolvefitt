"use client";

import { Crown, Lock, Zap } from "lucide-react";
import { useSubscription } from "@/contexts/subscription-context";

interface PremiumFeatureProps {
  children: React.ReactNode;
  featureName: string;
  description?: string;
  onUpgradeClick: () => void;
}

export default function PremiumFeature({ 
  children, 
  featureName, 
  description, 
  onUpgradeClick 
}: PremiumFeatureProps) {
  const { canAccessPremiumFeatures, planType } = useSubscription();

  // Se tem acesso premium, mostra o conteúdo normal
  if (canAccessPremiumFeatures) {
    return <>{children}</>;
  }

  // Se não tem acesso, mostra o bloqueio
  return (
    <div className="relative">
      {/* Conteúdo com overlay */}
      <div className="filter blur-sm pointer-events-none opacity-50">
        {children}
      </div>
      
      {/* Overlay de bloqueio */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
        <div className="text-center p-6 max-w-sm">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Crown className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {featureName}
          </h3>
          
          {description && (
            <p className="text-gray-600 text-sm mb-4">
              {description}
            </p>
          )}
          
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Lock className="w-4 h-4" />
              <span>Recurso Premium</span>
            </div>
            
            <button 
              onClick={onUpgradeClick}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              {planType === "free" ? (
                <>
                  <Zap className="w-4 h-4" />
                  Testar 7 Dias Grátis
                </>
              ) : (
                <>
                  <Crown className="w-4 h-4" />
                  Assinar Premium
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}