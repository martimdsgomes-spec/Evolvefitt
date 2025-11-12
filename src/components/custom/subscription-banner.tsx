"use client";

import { Crown, Zap, AlertCircle } from "lucide-react";
import { useSubscription } from "@/contexts/subscription-context";

interface SubscriptionBannerProps {
  onUpgradeClick: () => void;
}

export default function SubscriptionBanner({ onUpgradeClick }: SubscriptionBannerProps) {
  const { planType, trialDaysRemaining, isTrialExpired, canAccessPremiumFeatures } = useSubscription();

  // Não mostrar banner se for premium
  if (planType === "premium") return null;

  // Banner de trial ativo
  if (planType === "trial" && !isTrialExpired) {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 rounded-2xl mb-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold">Teste Premium Ativo</h3>
              <p className="text-white/90 text-sm">
                {trialDaysRemaining} dias restantes do seu teste gratuito
              </p>
            </div>
          </div>
          <button 
            onClick={onUpgradeClick}
            className="bg-white text-blue-600 px-4 py-2 rounded-xl font-semibold hover:bg-white/90 transition-colors"
          >
            Assinar Agora
          </button>
        </div>
      </div>
    );
  }

  // Banner de trial expirado
  if (planType === "trial" && isTrialExpired) {
    return (
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-2xl mb-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold">Teste Premium Expirado</h3>
              <p className="text-white/90 text-sm">
                Continue aproveitando todos os recursos premium
              </p>
            </div>
          </div>
          <button 
            onClick={onUpgradeClick}
            className="bg-white text-orange-600 px-4 py-2 rounded-xl font-semibold hover:bg-white/90 transition-colors"
          >
            Assinar Premium
          </button>
        </div>
      </div>
    );
  }

  // Banner para usuários gratuitos
  if (planType === "free") {
    return (
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl mb-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold">Desbloqueie o Premium</h3>
              <p className="text-white/90 text-sm">
                7 dias grátis + recursos ilimitados por apenas €4,99/mês
              </p>
            </div>
          </div>
          <button 
            onClick={onUpgradeClick}
            className="bg-white text-purple-600 px-4 py-2 rounded-xl font-semibold hover:bg-white/90 transition-colors"
          >
            Testar Grátis
          </button>
        </div>
      </div>
    );
  }

  return null;
}