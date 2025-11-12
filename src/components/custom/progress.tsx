"use client";

import { TrendingUp, Camera, Award, Calendar } from "lucide-react";

export default function Progress() {
  const progressData = {
    weight: [
      { month: "Jan", value: 75 },
      { month: "Fev", value: 74 },
      { month: "Mar", value: 73 },
      { month: "Abr", value: 72 },
      { month: "Mai", value: 71 },
      { month: "Jun", value: 70 }
    ],
    measurements: {
      chest: { current: 102, previous: 98, change: +4 },
      waist: { current: 82, previous: 86, change: -4 },
      arms: { current: 38, previous: 36, change: +2 },
      thighs: { current: 58, previous: 56, change: +2 }
    }
  };

  const achievements = [
    {
      title: "Primeira Semana Completa",
      description: "Completou 7 dias consecutivos de treino",
      icon: "🎯",
      date: "15 Mai 2024",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Recorde de Supino",
      description: "Novo PR: 80kg x 5 repetições",
      icon: "🏋️",
      date: "22 Mai 2024",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Meta de Proteína",
      description: "Atingiu meta de proteína por 30 dias",
      icon: "🥩",
      date: "28 Mai 2024",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const personalRecords = [
    { exercise: "Supino Reto", weight: "80kg", reps: "5x", date: "22/05" },
    { exercise: "Agachamento", weight: "100kg", reps: "8x", date: "20/05" },
    { exercise: "Levantamento Terra", weight: "120kg", reps: "3x", date: "18/05" },
    { exercise: "Desenvolvimento", weight: "45kg", reps: "10x", date: "15/05" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Seu Progresso</h2>
        <p className="text-gray-600 text-lg">
          Acompanhe sua evolução e celebre suas conquistas
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weight Progress Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Evolução do Peso</h3>
            <div className="flex items-center gap-2 text-green-600">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">-5kg</span>
            </div>
          </div>
          <div className="space-y-4">
            {progressData.weight.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">{data.month}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((80 - data.value) / 10) * 100}%` }}
                    />
                  </div>
                  <span className="font-semibold text-gray-900 w-12">{data.value}kg</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Body Measurements */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Medidas Corporais</h3>
          <div className="space-y-4">
            {Object.entries(progressData.measurements).map(([key, data]) => {
              const labels = {
                chest: "Peito",
                waist: "Cintura", 
                arms: "Braços",
                thighs: "Coxas"
              };
              
              return (
                <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="font-medium text-gray-900">{labels[key as keyof typeof labels]}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 text-sm">{data.previous}cm</span>
                    <span className="text-2xl">→</span>
                    <span className="font-bold text-gray-900">{data.current}cm</span>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      data.change > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {data.change > 0 ? '+' : ''}{data.change}cm
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Personal Records */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Recordes Pessoais</h3>
          <Award className="w-6 h-6 text-yellow-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalRecords.map((record, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
              <div>
                <h4 className="font-semibold text-gray-900">{record.exercise}</h4>
                <p className="text-gray-600 text-sm">{record.date}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-gray-900">{record.weight}</p>
                <p className="text-gray-600 text-sm">{record.reps}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Conquistas Recentes</h3>
          <Calendar className="w-6 h-6 text-blue-500" />
        </div>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center text-2xl`}>
                {achievement.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
              <span className="text-gray-500 text-sm">{achievement.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Photos */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Fotos de Progresso</h3>
          <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
            <Camera className="w-4 h-4" />
            Adicionar Foto
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="aspect-square bg-gradient-to-br from-blue-50 to-green-50 rounded-xl flex items-center justify-center border-2 border-dashed border-blue-200">
              <div className="text-center">
                <Camera className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-blue-600 text-sm font-medium">Adicionar Foto</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}