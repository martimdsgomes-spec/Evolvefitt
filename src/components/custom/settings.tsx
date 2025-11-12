"use client";

import { User, Bell, Shield, Smartphone, Globe, Palette, Crown, Calendar, CreditCard } from "lucide-react";
import { useSubscription } from "@/contexts/subscription-context";

interface SettingsProps {
  onUpgradeClick: () => void;
}

export default function Settings({ onUpgradeClick }: SettingsProps) {
  const { planType, trialDaysRemaining, isTrialExpired, cancelSubscription } = useSubscription();

  const profileData = {
    name: "Seu Nome",
    email: "seu@email.com",
    age: 28,
    weight: 70,
    height: 175,
    goal: "Ganho de massa muscular",
    level: "Intermediário"
  };

  const settingSections = [
    {
      title: "Perfil",
      icon: User,
      items: [
        { label: "Informações pessoais", description: "Nome, idade, medidas corporais" },
        { label: "Objetivos fitness", description: "Metas e preferências de treino" },
        { label: "Histórico médico", description: "Lesões e restrições" }
      ]
    },
    {
      title: "Notificações",
      icon: Bell,
      items: [
        { label: "Lembretes de treino", description: "Receba notificações para não perder treinos" },
        { label: "Metas diárias", description: "Acompanhe progresso de água, passos e calorias" },
        { label: "Comunidade", description: "Novos posts, desafios e conquistas" }
      ]
    },
    {
      title: "Privacidade",
      icon: Shield,
      items: [
        { label: "Perfil público", description: "Controle quem pode ver seu perfil" },
        { label: "Dados de treino", description: "Compartilhamento de estatísticas" },
        { label: "Localização", description: "Permissões de GPS para atividades" }
      ]
    },
    {
      title: "Dispositivos",
      icon: Smartphone,
      items: [
        { label: "Smartwatch", description: "Conectar Apple Watch, Garmin, Fitbit" },
        { label: "Aplicativos", description: "Integração com Google Fit, Apple Health" },
        { label: "Sensores", description: "Monitor cardíaco, balança inteligente" }
      ]
    }
  ];

  const quickSettings = [
    { label: "Modo escuro", enabled: false },
    { label: "Notificações push", enabled: true },
    { label: "Sincronização automática", enabled: true },
    { label: "Modo offline", enabled: false }
  ];

  const getSubscriptionStatus = () => {
    switch (planType) {
      case "premium":
        return {
          title: "Premium Ativo",
          description: "Você tem acesso completo a todos os recursos",
          color: "from-green-500 to-blue-500",
          textColor: "text-green-700",
          bgColor: "bg-green-50",
          borderColor: "border-green-200"
        };
      case "trial":
        return isTrialExpired ? {
          title: "Teste Expirado",
          description: "Seu período de teste de 7 dias terminou",
          color: "from-orange-500 to-red-500",
          textColor: "text-orange-700",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-200"
        } : {
          title: "Teste Premium",
          description: `${trialDaysRemaining} dias restantes do seu teste gratuito`,
          color: "from-blue-500 to-purple-500",
          textColor: "text-blue-700",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200"
        };
      default:
        return {
          title: "Plano Gratuito",
          description: "Acesso limitado aos recursos básicos",
          color: "from-gray-400 to-gray-500",
          textColor: "text-gray-700",
          bgColor: "bg-gray-50",
          borderColor: "border-gray-200"
        };
    }
  };

  const subscriptionStatus = getSubscriptionStatus();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Configurações</h2>
        <p className="text-gray-600 text-lg">
          Personalize sua experiência no EvolveFit
        </p>
      </div>

      {/* Subscription Status */}
      <div className={`bg-white rounded-2xl p-6 shadow-sm border ${subscriptionStatus.borderColor}`}>
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-12 h-12 bg-gradient-to-r ${subscriptionStatus.color} rounded-full flex items-center justify-center`}>
            <Crown className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">{subscriptionStatus.title}</h3>
            <p className="text-gray-600">{subscriptionStatus.description}</p>
          </div>
          {planType !== "premium" && (
            <button 
              onClick={onUpgradeClick}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-200"
            >
              {planType === "free" ? "Testar Premium" : "Assinar Agora"}
            </button>
          )}
        </div>

        {/* Subscription Details */}
        <div className={`${subscriptionStatus.bgColor} rounded-xl p-4`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">
                {planType === "premium" ? "Renovação automática" : 
                 planType === "trial" ? `Teste até ${new Date(Date.now() + trialDaysRemaining * 24 * 60 * 60 * 1000).toLocaleDateString()}` :
                 "Sem data de renovação"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">
                {planType === "premium" ? "€4,99/mês" : 
                 planType === "trial" ? "Gratuito (teste)" :
                 "€0,00"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">
                {planType === "premium" || (planType === "trial" && !isTrialExpired) ? "Recursos premium" : "Recursos básicos"}
              </span>
            </div>
          </div>
        </div>

        {/* Subscription Actions */}
        {planType === "premium" && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <button 
              onClick={cancelSubscription}
              className="text-red-600 hover:text-red-700 font-medium text-sm"
            >
              Cancelar assinatura
            </button>
          </div>
        )}
      </div>

      {/* Profile Overview */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {profileData.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{profileData.name}</h3>
            <p className="text-gray-600 mb-2">{profileData.email}</p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>{profileData.age} anos</span>
              <span>{profileData.weight}kg</span>
              <span>{profileData.height}cm</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                {profileData.level}
              </span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
            Editar Perfil
          </button>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4">
          <h4 className="font-semibold text-gray-900 mb-1">Objetivo Atual</h4>
          <p className="text-gray-600">{profileData.goal}</p>
        </div>
      </div>

      {/* Quick Settings */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Configurações Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickSettings.map((setting, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <span className="font-medium text-gray-900">{setting.label}</span>
              <button className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                setting.enabled ? 'bg-blue-500' : 'bg-gray-300'
              }`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                  setting.enabled ? 'translate-x-7' : 'translate-x-1'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingSections.map((section, sectionIndex) => {
          const Icon = section.icon;
          return (
            <div key={sectionIndex} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
              </div>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer group">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.label}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                      →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* App Info */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Sobre o App</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <span className="font-medium text-gray-900">Versão</span>
            <span className="text-gray-600">2.1.0</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <span className="font-medium text-gray-900">Última atualização</span>
            <span className="text-gray-600">15 Jun 2024</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-blue-50 rounded-xl text-blue-600 font-medium hover:bg-blue-100 transition-colors">
              Política de Privacidade
            </button>
            <button className="p-4 bg-green-50 rounded-xl text-green-600 font-medium hover:bg-green-100 transition-colors">
              Termos de Uso
            </button>
            <button className="p-4 bg-purple-50 rounded-xl text-purple-600 font-medium hover:bg-purple-100 transition-colors">
              Suporte
            </button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-red-600">Zona de Perigo</h3>
        </div>
        <div className="space-y-4">
          <button className="w-full p-4 bg-red-50 text-red-600 rounded-xl font-medium hover:bg-red-100 transition-colors">
            Exportar Dados
          </button>
          <button className="w-full p-4 bg-red-50 text-red-600 rounded-xl font-medium hover:bg-red-100 transition-colors">
            Limpar Histórico
          </button>
          <button className="w-full p-4 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors">
            Excluir Conta
          </button>
        </div>
      </div>
    </div>
  );
}