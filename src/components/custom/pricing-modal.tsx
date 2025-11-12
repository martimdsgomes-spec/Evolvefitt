"use client";

import { useState } from "react";
import { Check, Crown, Star, Zap, X } from "lucide-react";
import { useSubscription } from "@/contexts/subscription-context";

export default function PricingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { planType, trialDaysRemaining, startTrial, upgradeToPremium, canAccessPremiumFeatures } = useSubscription();
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleStartTrial = async () => {
    setIsProcessing(true);
    // Simular processamento
    await new Promise(resolve => setTimeout(resolve, 1500));
    startTrial();
    setIsProcessing(false);
    onClose();
  };

  const handleUpgradeToPremium = async () => {
    setIsProcessing(true);
    // Simular processamento de pagamento
    await new Promise(resolve => setTimeout(resolve, 2000));
    upgradeToPremium();
    setIsProcessing(false);
    onClose();
  };

  const freeFeatures = [
    "Treinos básicos",
    "Contador de calorias simples",
    "Progresso básico",
    "Comunidade limitada"
  ];

  const premiumFeatures = [
    "Treinos personalizados ilimitados",
    "Planos nutricionais completos",
    "Análise avançada de progresso",
    "Sessões de meditação premium",
    "Comunidade VIP",
    "Suporte prioritário",
    "Integração com dispositivos",
    "Receitas exclusivas",
    "Desafios premium",
    "Backup na nuvem"
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between rounded-t-3xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Escolha seu Plano</h2>
            <p className="text-gray-600">Desbloqueie todo o potencial do EvolveFit</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          {/* Current Plan Status */}
          {planType !== "free" && (
            <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {planType === "trial" ? "Período de Teste Ativo" : "Plano Premium Ativo"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {planType === "trial" 
                      ? `${trialDaysRemaining} dias restantes do seu teste gratuito`
                      : "Você tem acesso completo a todos os recursos premium"
                    }
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Plans Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Gratuito</h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">€0</div>
                <p className="text-gray-600">Para sempre</p>
              </div>

              <ul className="space-y-3 mb-8">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                disabled={planType === "free"}
                className="w-full py-3 px-6 bg-gray-300 text-gray-600 rounded-xl font-semibold cursor-not-allowed"
              >
                {planType === "free" ? "Plano Atual" : "Plano Básico"}
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 border-2 border-blue-200 relative overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-sm font-semibold">
                Mais Popular
              </div>

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">€4,99</div>
                <p className="text-gray-600">por mês</p>
                
                {planType === "free" && (
                  <div className="mt-3 p-2 bg-green-100 rounded-lg">
                    <p className="text-green-700 text-sm font-medium">
                      🎉 7 dias grátis para testar!
                    </p>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                {planType === "free" && (
                  <button 
                    onClick={handleStartTrial}
                    disabled={isProcessing}
                    className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Iniciando teste...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        Começar Teste Grátis
                      </>
                    )}
                  </button>
                )}

                <button 
                  onClick={handleUpgradeToPremium}
                  disabled={isProcessing || planType === "premium"}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processando...
                    </>
                  ) : planType === "premium" ? (
                    "Plano Atual"
                  ) : (
                    <>
                      <Crown className="w-5 h-5" />
                      Assinar Premium
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Trial Info */}
          {planType === "free" && (
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Teste Premium por 7 dias</h3>
                <p className="text-gray-600 mb-4">
                  Experimente todos os recursos premium sem compromisso. 
                  Cancele a qualquer momento durante o período de teste.
                </p>
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Sem cobrança inicial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Cancele quando quiser</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Acesso completo</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FAQ */}
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Perguntas Frequentes</h3>
            <div className="space-y-3">
              <details className="bg-gray-50 rounded-xl p-4">
                <summary className="font-medium text-gray-900 cursor-pointer">
                  Como funciona o período de teste?
                </summary>
                <p className="text-gray-600 mt-2 text-sm">
                  Você tem 7 dias para testar todos os recursos premium gratuitamente. 
                  Após o período, você pode escolher continuar com o plano premium ou voltar ao plano gratuito.
                </p>
              </details>
              <details className="bg-gray-50 rounded-xl p-4">
                <summary className="font-medium text-gray-900 cursor-pointer">
                  Posso cancelar a qualquer momento?
                </summary>
                <p className="text-gray-600 mt-2 text-sm">
                  Sim! Você pode cancelar sua assinatura a qualquer momento nas configurações do app. 
                  Não há taxas de cancelamento.
                </p>
              </details>
              <details className="bg-gray-50 rounded-xl p-4">
                <summary className="font-medium text-gray-900 cursor-pointer">
                  O que acontece se eu cancelar?
                </summary>
                <p className="text-gray-600 mt-2 text-sm">
                  Você continuará tendo acesso aos recursos premium até o final do período pago, 
                  depois retornará automaticamente ao plano gratuito.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}