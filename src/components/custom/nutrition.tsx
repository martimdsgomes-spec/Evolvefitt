"use client";

import { Plus, Search, BookOpen, Target } from "lucide-react";

export default function Nutrition() {
  const dailyGoals = {
    calories: { consumed: 1850, target: 2200, remaining: 350 },
    protein: { consumed: 120, target: 150, remaining: 30 },
    carbs: { consumed: 180, target: 220, remaining: 40 },
    fat: { consumed: 65, target: 80, remaining: 15 }
  };

  const meals = [
    {
      name: "Café da Manhã",
      time: "08:00",
      calories: 450,
      foods: ["Aveia com banana", "Whey protein", "Café"],
      completed: true
    },
    {
      name: "Lanche da Manhã",
      time: "10:30",
      calories: 200,
      foods: ["Iogurte grego", "Castanhas"],
      completed: true
    },
    {
      name: "Almoço",
      time: "12:30",
      calories: 650,
      foods: ["Frango grelhado", "Arroz integral", "Brócolis"],
      completed: true
    },
    {
      name: "Lanche da Tarde",
      time: "15:30",
      calories: 300,
      foods: ["Shake de proteína", "Banana"],
      completed: true
    },
    {
      name: "Jantar",
      time: "19:00",
      calories: 550,
      foods: ["Salmão", "Batata doce", "Salada"],
      completed: false
    },
    {
      name: "Ceia",
      time: "21:30",
      calories: 250,
      foods: ["Caseína", "Amêndoas"],
      completed: false
    }
  ];

  const popularFoods = [
    { name: "Peito de Frango (100g)", calories: 165, protein: 31 },
    { name: "Arroz Integral (100g)", calories: 111, carbs: 23 },
    { name: "Whey Protein (30g)", calories: 120, protein: 25 },
    { name: "Banana (1 unidade)", calories: 89, carbs: 23 },
    { name: "Aveia (50g)", calories: 190, carbs: 34 },
    { name: "Ovo (1 unidade)", calories: 70, protein: 6 }
  ];

  const mealPlans = [
    {
      title: "Ganho de Massa Muscular",
      description: "2800 calorias • 180g proteína",
      icon: "💪",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Perda de Gordura",
      description: "1800 calorias • 140g proteína",
      icon: "🔥",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Manutenção",
      description: "2200 calorias • 150g proteína",
      icon: "⚖️",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Nutrição</h2>
        <p className="text-gray-600 text-lg">
          Acompanhe sua alimentação e atinja seus objetivos
        </p>
      </div>

      {/* Daily Progress */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Progresso Diário</h3>
          <div className="flex items-center gap-2 text-green-600">
            <Target className="w-5 h-5" />
            <span className="font-semibold">84% da meta</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(dailyGoals).map(([key, data]) => {
            const percentage = (data.consumed / data.target) * 100;
            const labels = {
              calories: { name: "Calorias", unit: "kcal" },
              protein: { name: "Proteína", unit: "g" },
              carbs: { name: "Carboidratos", unit: "g" },
              fat: { name: "Gordura", unit: "g" }
            };
            
            return (
              <div key={key} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - percentage / 100)}`}
                      className="text-blue-500 transition-all duration-300"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-900">
                      {Math.round(percentage)}%
                    </span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {labels[key as keyof typeof labels].name}
                </h4>
                <p className="text-sm text-gray-600">
                  {data.consumed}/{data.target} {labels[key as keyof typeof labels].unit}
                </p>
                <p className="text-xs text-blue-600 font-medium">
                  Restam {data.remaining} {labels[key as keyof typeof labels].unit}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Today's Meals */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Refeições de Hoje</h3>
          <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
            <Plus className="w-4 h-4" />
            Adicionar Alimento
          </button>
        </div>
        <div className="space-y-4">
          {meals.map((meal, index) => (
            <div key={index} className={`p-4 rounded-xl border-2 transition-all duration-200 ${
              meal.completed 
                ? 'bg-green-50 border-green-200' 
                : 'bg-gray-50 border-gray-200 hover:border-blue-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    meal.completed ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                  <h4 className="font-semibold text-gray-900">{meal.name}</h4>
                  <span className="text-gray-500 text-sm">{meal.time}</span>
                </div>
                <span className="font-bold text-gray-900">{meal.calories} kcal</span>
              </div>
              <div className="ml-6">
                <p className="text-gray-600 text-sm">
                  {meal.foods.join(" • ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Add & Meal Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Add Foods */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Adicionar Rápido</h3>
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {popularFoods.map((food, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer">
                <div>
                  <h4 className="font-medium text-gray-900">{food.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {food.calories} kcal
                    {food.protein && ` • ${food.protein}g proteína`}
                    {food.carbs && ` • ${food.carbs}g carbs`}
                  </p>
                </div>
                <Plus className="w-5 h-5 text-blue-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Meal Plans */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Planos Alimentares</h3>
            <BookOpen className="w-5 h-5 text-blue-500" />
          </div>
          <div className="space-y-4">
            {mealPlans.map((plan, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl hover:shadow-md transition-all duration-200 cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-2xl`}>
                    {plan.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {plan.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Water Intake */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Hidratação</h3>
          <p className="text-blue-100 mb-6">Meta diária: 2.5L • Consumido: 1.8L</p>
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(10)].map((_, index) => (
              <div key={index} className={`w-6 h-8 rounded-full ${
                index < 7 ? 'bg-white' : 'bg-white/30'
              }`} />
            ))}
          </div>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
            + 250ml
          </button>
        </div>
      </div>
    </div>
  );
}