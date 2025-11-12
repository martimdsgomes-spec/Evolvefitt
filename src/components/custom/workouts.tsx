"use client";

import { Play, Clock, Users, Star, Crown } from "lucide-react";
import PremiumFeature from "./premium-feature";

interface WorkoutsProps {
  onUpgradeClick: () => void;
}

export default function Workouts({ onUpgradeClick }: WorkoutsProps) {
  const workoutCategories = [
    {
      title: "Musculação",
      description: "Treinos focados em ganho de massa e força",
      icon: "🏋️",
      color: "from-blue-500 to-blue-600",
      workouts: 15,
      isPremium: false
    },
    {
      title: "Cardio",
      description: "Exercícios para resistência e queima de gordura",
      icon: "🏃",
      color: "from-red-500 to-red-600",
      workouts: 12,
      isPremium: false
    },
    {
      title: "HIIT",
      description: "Treinos intervalados de alta intensidade",
      icon: "⚡",
      color: "from-orange-500 to-orange-600",
      workouts: 8,
      isPremium: true
    },
    {
      title: "Calistenia",
      description: "Exercícios com peso corporal",
      icon: "🤸",
      color: "from-green-500 to-green-600",
      workouts: 10,
      isPremium: true
    },
    {
      title: "Yoga",
      description: "Flexibilidade, equilíbrio e relaxamento",
      icon: "🧘",
      color: "from-purple-500 to-purple-600",
      workouts: 6,
      isPremium: true
    },
    {
      title: "Mobilidade",
      description: "Exercícios de alongamento e recuperação",
      icon: "🤲",
      color: "from-teal-500 to-teal-600",
      workouts: 7,
      isPremium: true
    }
  ];

  const featuredWorkouts = [
    {
      title: "Push Day - Peito, Ombros e Tríceps",
      duration: "45 min",
      difficulty: "Intermediário",
      rating: 4.8,
      participants: 1234,
      image: "🏋️",
      isPremium: false
    },
    {
      title: "HIIT Queima Gordura",
      duration: "20 min",
      difficulty: "Avançado",
      rating: 4.9,
      participants: 2156,
      image: "🔥",
      isPremium: true
    },
    {
      title: "Yoga Matinal",
      duration: "30 min",
      difficulty: "Iniciante",
      rating: 4.7,
      participants: 987,
      image: "🌅",
      isPremium: true
    }
  ];

  const WorkoutCard = ({ category }: { category: typeof workoutCategories[0] }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50 hover:shadow-lg transition-all duration-200 cursor-pointer group relative">
      {category.isPremium && (
        <div className="absolute top-3 right-3">
          <Crown className="w-5 h-5 text-yellow-500" />
        </div>
      )}
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl">{category.icon}</div>
        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium`}>
          {category.workouts} treinos
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {category.title}
      </h3>
      <p className="text-gray-600 mb-4">{category.description}</p>
      <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
        <Play className="w-4 h-4" />
        Começar Treino
      </button>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Seus Treinos</h2>
        <p className="text-gray-600 text-lg">
          Escolha o treino perfeito para seus objetivos
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutCategories.map((category, index) => (
          <div key={index}>
            {category.isPremium ? (
              <PremiumFeature
                featureName={`Treinos de ${category.title}`}
                description={`Acesse ${category.workouts} treinos exclusivos de ${category.title.toLowerCase()}`}
                onUpgradeClick={onUpgradeClick}
              >
                <WorkoutCard category={category} />
              </PremiumFeature>
            ) : (
              <WorkoutCard category={category} />
            )}
          </div>
        ))}
      </div>

      {/* Featured Workouts */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Treinos em Destaque</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWorkouts.map((workout, index) => {
            const WorkoutItem = (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50 hover:shadow-lg transition-all duration-200 cursor-pointer group relative">
                {workout.isPremium && (
                  <div className="absolute top-3 right-3">
                    <Crown className="w-5 h-5 text-yellow-500" />
                  </div>
                )}
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{workout.image}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {workout.title}
                  </h4>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{workout.duration}</span>
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                      {workout.difficulty}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{workout.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{workout.participants.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  Iniciar Treino
                </button>
              </div>
            );

            return (
              <div key={index}>
                {workout.isPremium ? (
                  <PremiumFeature
                    featureName={workout.title}
                    description="Treino premium com instruções detalhadas e acompanhamento personalizado"
                    onUpgradeClick={onUpgradeClick}
                  >
                    {WorkoutItem}
                  </PremiumFeature>
                ) : (
                  WorkoutItem
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Start */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Início Rápido</h3>
          <p className="text-gray-600 mb-6">
            Não sabe por onde começar? Responda algumas perguntas e criaremos o treino perfeito para você.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-white text-gray-900 py-3 px-6 rounded-xl font-medium hover:shadow-md transition-all duration-200">
              🎯 Definir Objetivo
            </button>
            <button className="bg-white text-gray-900 py-3 px-6 rounded-xl font-medium hover:shadow-md transition-all duration-200">
              ⏱️ Treino Rápido (15min)
            </button>
            <button className="bg-white text-gray-900 py-3 px-6 rounded-xl font-medium hover:shadow-md transition-all duration-200">
              🏠 Treino em Casa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}