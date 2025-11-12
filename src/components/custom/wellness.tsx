"use client";

import { Heart, Moon, Smile, Play, Clock } from "lucide-react";

export default function Wellness() {
  const wellnessStats = [
    {
      title: "Qualidade do Sono",
      value: "8.2h",
      subtitle: "Média semanal",
      icon: Moon,
      color: "from-purple-500 to-purple-600",
      progress: 85
    },
    {
      title: "Nível de Stress",
      value: "Baixo",
      subtitle: "Muito bom!",
      icon: Heart,
      color: "from-green-500 to-green-600",
      progress: 20
    },
    {
      title: "Humor Geral",
      value: "Ótimo",
      subtitle: "Acima da média",
      icon: Smile,
      color: "from-yellow-500 to-orange-500",
      progress: 90
    }
  ];

  const meditationSessions = [
    {
      title: "Respiração Matinal",
      duration: "5 min",
      description: "Comece o dia com energia positiva",
      difficulty: "Iniciante",
      icon: "🌅"
    },
    {
      title: "Foco e Concentração",
      duration: "10 min",
      description: "Melhore sua produtividade",
      difficulty: "Intermediário",
      icon: "🎯"
    },
    {
      title: "Relaxamento Noturno",
      duration: "15 min",
      description: "Prepare-se para uma boa noite de sono",
      difficulty: "Iniciante",
      icon: "🌙"
    },
    {
      title: "Redução de Ansiedade",
      duration: "12 min",
      description: "Encontre paz interior",
      difficulty: "Intermediário",
      icon: "🧘"
    }
  ];

  const sleepData = [
    { day: "Seg", hours: 7.5, quality: "Boa" },
    { day: "Ter", hours: 8.2, quality: "Excelente" },
    { day: "Qua", hours: 7.8, quality: "Boa" },
    { day: "Qui", hours: 8.5, quality: "Excelente" },
    { day: "Sex", hours: 7.2, quality: "Regular" },
    { day: "Sáb", hours: 9.1, quality: "Excelente" },
    { day: "Dom", hours: 8.7, quality: "Excelente" }
  ];

  const motivationalQuotes = [
    "Sua única limitação é você mesmo.",
    "O progresso, não a perfeição.",
    "Cada dia é uma nova oportunidade.",
    "Acredite em seu potencial infinito."
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Bem-estar Mental</h2>
        <p className="text-gray-600 text-lg">
          Cuide da sua mente e encontre o equilíbrio perfeito
        </p>
      </div>

      {/* Wellness Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {wellnessStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{stat.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{stat.subtitle}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`bg-gradient-to-r ${stat.color} h-2 rounded-full transition-all duration-300`}
                  style={{ width: `${stat.progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Daily Quote */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center">
        <h3 className="text-xl font-bold mb-4">Inspiração do Dia</h3>
        <p className="text-2xl font-light italic mb-4">
          "{motivationalQuotes[new Date().getDay() % motivationalQuotes.length]}"
        </p>
        <div className="w-16 h-1 bg-white/30 mx-auto rounded-full" />
      </div>

      {/* Meditation Sessions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Sessões de Meditação</h3>
          <div className="flex items-center gap-2 text-purple-600">
            <Play className="w-5 h-5" />
            <span className="font-semibold">12 sessões concluídas</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {meditationSessions.map((session, index) => (
            <div key={index} className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-all duration-200 cursor-pointer group">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl">{session.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {session.title}
                  </h4>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{session.duration}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      session.difficulty === 'Iniciante' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {session.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{session.description}</p>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
                Iniciar Sessão
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sleep Tracking */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Acompanhamento do Sono</h3>
          <div className="flex items-center gap-2 text-blue-600">
            <Moon className="w-5 h-5" />
            <span className="font-semibold">Média: 8.2h</span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-4">
          {sleepData.map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-sm text-gray-600 mb-2">{day.day}</div>
              <div className="relative h-24 bg-gray-100 rounded-lg flex items-end justify-center p-2">
                <div 
                  className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded transition-all duration-300"
                  style={{ height: `${(day.hours / 10) * 100}%` }}
                />
                <span className="absolute bottom-1 text-xs text-white font-medium">
                  {day.hours}h
                </span>
              </div>
              <div className={`text-xs mt-2 px-2 py-1 rounded-full ${
                day.quality === 'Excelente' ? 'bg-green-100 text-green-700' :
                day.quality === 'Boa' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {day.quality}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wellness Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Dicas de Bem-estar</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
              <p className="text-gray-600">Pratique 5 minutos de respiração profunda ao acordar</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
              <p className="text-gray-600">Mantenha um diário de gratidão</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <p className="text-gray-600">Evite telas 1 hora antes de dormir</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
              <p className="text-gray-600">Faça pausas regulares durante o trabalho</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Exercícios de Respiração</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Respiração 4-7-8</h4>
              <p className="text-gray-600 text-sm">Inspire por 4s, segure por 7s, expire por 8s</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Respiração Quadrada</h4>
              <p className="text-gray-600 text-sm">Inspire, segure, expire e pause por 4s cada</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Respiração Profunda</h4>
              <p className="text-gray-600 text-sm">Respirações lentas e profundas pelo diafragma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}