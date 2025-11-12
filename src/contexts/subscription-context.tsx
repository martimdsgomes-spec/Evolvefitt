"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type PlanType = "free" | "trial" | "premium";

interface SubscriptionState {
  planType: PlanType;
  trialStartDate: Date | null;
  trialDaysRemaining: number;
  isTrialExpired: boolean;
  isPremium: boolean;
  canAccessPremiumFeatures: boolean;
}

interface SubscriptionContextType extends SubscriptionState {
  startTrial: () => void;
  upgradeToPremium: () => void;
  cancelSubscription: () => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [subscriptionState, setSubscriptionState] = useState<SubscriptionState>({
    planType: "free",
    trialStartDate: null,
    trialDaysRemaining: 0,
    isTrialExpired: false,
    isPremium: false,
    canAccessPremiumFeatures: false,
  });

  const [isClient, setIsClient] = useState(false);

  // Garantir que estamos no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Carregar dados do localStorage na inicialização
  useEffect(() => {
    if (!isClient) return;
    
    try {
      const savedData = localStorage.getItem("evolvefit_subscription");
      if (savedData) {
        const parsed = JSON.parse(savedData);
        if (parsed.trialStartDate) {
          parsed.trialStartDate = new Date(parsed.trialStartDate);
        }
        setSubscriptionState(parsed);
      }
    } catch (error) {
      console.warn("Erro ao carregar dados da assinatura:", error);
    }
  }, [isClient]);

  // Calcular dias restantes do trial
  useEffect(() => {
    if (!isClient) return;
    
    if (subscriptionState.trialStartDate && subscriptionState.planType === "trial") {
      const now = new Date();
      const trialStart = subscriptionState.trialStartDate;
      const daysPassed = Math.floor((now.getTime() - trialStart.getTime()) / (1000 * 60 * 60 * 24));
      const daysRemaining = Math.max(0, 7 - daysPassed);
      const isExpired = daysRemaining === 0;

      setSubscriptionState(prev => ({
        ...prev,
        trialDaysRemaining: daysRemaining,
        isTrialExpired: isExpired,
        canAccessPremiumFeatures: !isExpired || prev.isPremium,
        planType: isExpired && !prev.isPremium ? "free" : prev.planType,
      }));
    }
  }, [subscriptionState.trialStartDate, subscriptionState.planType, subscriptionState.isPremium, isClient]);

  // Salvar no localStorage sempre que o estado mudar
  useEffect(() => {
    if (!isClient) return;
    
    try {
      localStorage.setItem("evolvefit_subscription", JSON.stringify(subscriptionState));
    } catch (error) {
      console.warn("Erro ao salvar dados da assinatura:", error);
    }
  }, [subscriptionState, isClient]);

  const startTrial = () => {
    const now = new Date();
    setSubscriptionState(prev => ({
      ...prev,
      planType: "trial",
      trialStartDate: now,
      trialDaysRemaining: 7,
      isTrialExpired: false,
      canAccessPremiumFeatures: true,
    }));
  };

  const upgradeToPremium = () => {
    setSubscriptionState(prev => ({
      ...prev,
      planType: "premium",
      isPremium: true,
      canAccessPremiumFeatures: true,
    }));
  };

  const cancelSubscription = () => {
    setSubscriptionState(prev => ({
      ...prev,
      planType: "free",
      isPremium: false,
      canAccessPremiumFeatures: false,
    }));
  };

  const contextValue: SubscriptionContextType = {
    ...subscriptionState,
    startTrial,
    upgradeToPremium,
    cancelSubscription,
  };

  return (
    <SubscriptionContext.Provider value={contextValue}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error("useSubscription must be used within a SubscriptionProvider");
  }
  return context;
}