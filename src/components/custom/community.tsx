"use client";

import { MessageCircle, Trophy, Users, Heart, Share2, Camera } from "lucide-react";

export default function Community() {
  const challenges = [
    {
      title: "Desafio 30 Dias de Treino",
      description: "Complete 30 treinos em 30 dias",
      participants: 1247,
      daysLeft: 12,
      progress: 60,
      icon: "🏋️",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "10.000 Passos Diários",
      description: "Caminhe 10k passos todos os dias",
      participants: 892,
      daysLeft: 8,
      progress: 75,
      icon: "👟",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Hidratação Perfeita",
      description: "Beba 2.5L de água por 21 dias",
      participants: 654,
      daysLeft: 5,
      progress: 85,
      icon: "💧",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const feedPosts = [
    {
      user: {
        name: "Maria Silva",
        avatar: "👩",
        level: "Nível 15"
      },
      time: "2h atrás",
      content: "Acabei de completar meu primeiro mês de treinos! 💪 Perdi 3kg e ganhei muita disposição. Obrigada pela motivação, pessoal!",
      likes: 24,
      comments: 8,
      image: "🏃‍♀️"
    },
    {
      user: {
        name: "João Santos",
        avatar: "👨",
        level: "Nível 22"
      },
      time: "4h atrás",
      content: "Novo PR no supino! 85kg x 5 reps 🎯 Quem mais está batendo recordes essa semana?",
      likes: 31,
      comments: 12,
      image: "🏋️"
    },
    {
      user: {
        name: "Ana Costa",
        avatar: "👩‍🦱",
        level: "Nível 8"
      },
      time: "6h atrás",
      content: "Primeira aula de yoga hoje! Que experiência incrível 🧘‍♀️ Já estou mais relaxada e focada.",
      likes: 18,
      comments: 5,
      image: "🧘"
    }
  ];

  const leaderboard = [
    { position: 1, name: "Carlos Mendes", points: 2847, badge: "🥇" },
    { position: 2, name: "Fernanda Lima", points: 2634, badge: "🥈" },
    { position: 3, name: "Roberto Silva", points: 2521, badge: "🥉" },
    { position: 4, name: "Você", points: 2398, badge: "🔥", isUser: true },
    { position: 5, name: "Juliana Rocha", points: 2287, badge: "⭐" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Comunidade EvolveFit</h2>
        <p className="text-gray-600 text-lg">
          Conecte-se, inspire-se e evolua junto com milhares de pessoas
        </p>
      </div>

      {/* Active Challenges */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Desafios Ativos</h3>
          <div className="flex items-center gap-2 text-orange-600">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">3 participando</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div key={index} className="p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${challenge.color} flex items-center justify-center text-2xl`}>
                  {challenge.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{challenge.title}</h4>
                  <p className="text-gray-600 text-sm">{challenge.description}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Progresso</span>
                  <span className="font-semibold text-gray-900">{challenge.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${challenge.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${challenge.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{challenge.participants} participantes</span>
                  </div>
                  <span>{challenge.daysLeft} dias restantes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Feed & Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Community Feed */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Feed da Comunidade</h3>
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
              <Share2 className="w-4 h-4" />
              Compartilhar
            </button>
          </div>
          
          {/* Create Post */}
          <div className="mb-6 p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                V
              </div>
              <input 
                type="text" 
                placeholder="Compartilhe sua evolução..."
                className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Camera className="w-4 h-4" />
                <span className="text-sm">Adicionar foto</span>
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors">
                Publicar
              </button>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {feedPosts.map((post, index) => (
              <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                    {post.user.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900">{post.user.name}</h4>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {post.user.level}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">{post.time}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{post.content}</p>
                {post.image && (
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 text-center mb-3">
                    <div className="text-6xl">{post.image}</div>
                  </div>
                )}
                <div className="flex items-center gap-6 text-gray-600">
                  <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Ranking Semanal</h3>
            <Trophy className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="space-y-4">
            {leaderboard.map((user, index) => (
              <div key={index} className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                user.isUser 
                  ? 'bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <div className="text-2xl">{user.badge}</div>
                <div className="flex-1">
                  <h4 className={`font-semibold ${user.isUser ? 'text-blue-600' : 'text-gray-900'}`}>
                    {user.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{user.points} pontos</p>
                </div>
                <span className="text-gray-500 text-sm">#{user.position}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Próxima Recompensa</h4>
            <p className="text-gray-600 text-sm mb-3">Faltam 152 pontos para o próximo nível</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full w-3/4" />
            </div>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Juntos Somos Mais Fortes</h3>
          <p className="text-blue-100">Estatísticas da nossa comunidade</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">12.5K</div>
            <div className="text-blue-100 text-sm">Membros Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">89.2K</div>
            <div className="text-blue-100 text-sm">Treinos Completados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">2.1M</div>
            <div className="text-blue-100 text-sm">Calorias Queimadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">156</div>
            <div className="text-blue-100 text-sm">Países</div>
          </div>
        </div>
      </div>
    </div>
  );
}