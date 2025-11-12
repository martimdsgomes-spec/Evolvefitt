"use client";

import { Activity, Target, Trophy, Clock } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Treinos Concluídos",
      value: "24",
      change: "+12%",
      icon: Activity,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Objetivo Atual",
      value: "Ganhar Massa",
      change: "75% completo",
      icon: Target,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Streak Atual",
      value: "7 dias",
      change: "Recorde pessoal!",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Tempo Médio",
      value: "45 min",
      change: "+5 min",
      icon: Clock,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const todayWorkout = {
    title: "Treino de Peito e Tríceps",
    duration: "45 min",
    exercises: 8,
    difficulty: "Intermediário"
  };

  const nutritionToday = {
    calories: { consumed: 1850, target: 2200 },
    protein: { consumed: 120, target: 150 },
    carbs: { consumed: 180, target: 220 },
    fat: { consumed: 65, target: 80 }
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Bem-vindo de volta!</h2>
        <p className="text-blue-100 text-lg">
          Pronto para mais um dia de evolução? Vamos conquistar seus objetivos juntos!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm mb-2">{stat.title}</p>
              <p className="text-green-600 text-sm font-medium">{stat.change}</p>
            </div>
          );
        })}
      </div>

      {/* Today's Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Workout */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Treino de Hoje</h3>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">{todayWorkout.title}</h4>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>⏱️ {todayWorkout.duration}</span>
              <span>🏋️ {todayWorkout.exercises} exercícios</span>
              <span>📊 {todayWorkout.difficulty}</span>
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
            Iniciar Treino
          </button>
        </div>

        {/* Nutrition Overview */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Nutrição Hoje</h3>
          <div className="space-y-4">
            {Object.entries(nutritionToday).map(([key, value]) => {
              const percentage = (value.consumed / value.target) * 100;
              const labels = {
                calories: "Calorias",
                protein: "Proteína (g)",
                carbs: "Carboidratos (g)",
                fat: "Gordura (g)"
              };
              
              return (
                <div key={key}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{labels[key as keyof typeof labels]}</span>
                    <span className="text-gray-900 font-medium">
                      {value.consumed}/{value.target}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
            <Activity className="w-8 h-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Registrar Treino</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
            <Target className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Adicionar Refeição</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
            <Trophy className="w-8 h-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Ver Progresso</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors">
            <Clock className="w-8 h-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Meditação</span>
          </button>
        </div>
      </div>
    </div>
  );
}