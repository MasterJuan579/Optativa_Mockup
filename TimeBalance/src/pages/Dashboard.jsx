import { Briefcase, BookOpen, Moon, Smile, AlertTriangle, CheckCircle, Info, Utensils, Clock, Apple, Activity, Coffee } from 'lucide-react';

function Dashboard() {
  const stats = [
    { icon: Briefcase, label: 'Horas de trabajo', value: '32h', color: 'from-blue-500 to-blue-600' },
    { icon: BookOpen, label: 'Horas de clases', value: '24h', color: 'from-orange-500 to-orange-600' },
    { icon: Moon, label: 'Horas de sueño', value: '42h', color: 'from-indigo-500 to-indigo-600' },
    { icon: Smile, label: 'Tiempo libre', value: '18h', color: 'from-green-500 to-green-600' },
  ];

  const alerts = [
    {
      type: 'warning',
      icon: AlertTriangle,
      title: '⚠️ Riesgo de Burnout',
      description: 'Tienes 10 horas consecutivas de trabajo + clases el martes. Considera tomar un break.',
      color: 'red',
    },
    {
      type: 'warning',
      icon: Moon,
      title: '😴 Sueño Insuficiente',
      description: 'Estás durmiendo solo 6h por día. Recomendado: 7-8 horas.',
      color: 'red',
    },
    {
      type: 'info',
      icon: Utensils,
      title: '🍽️ Recordatorio',
      description: 'No olvides comer algo nutritivo entre trabajo y clases.',
      color: 'blue',
    },
    {
      type: 'success',
      icon: CheckCircle,
      title: '✅ Buen Balance',
      description: 'El fin de semana tiene buen balance de descanso y actividades.',
      color: 'green',
    },
  ];

  const suggestions = [
    {
      icon: Clock,
      title: 'Optimiza tu Rutina Matutina',
      description: 'Considera preparar tu comida la noche anterior para ganar 15 minutos extra de sueño.',
    },
    {
      icon: Apple,
      title: 'Mejora tu Alimentación',
      description: 'Sustituye la Maruchan por opciones más nutritivas como ensaladas preparadas o wraps.',
    },
    {
      icon: Activity,
      title: 'Añade Actividad Física',
      description: 'Intenta caminar 10 minutos entre clases para mantener energía durante el día.',
    },
    {
      icon: Coffee,
      title: 'Micro-Breaks',
      description: 'Toma descansos de 5 minutos cada 2 horas para evitar fatiga mental.',
    },
  ];

  const weekSummary = [
    { day: 'Lun', blocks: ['bg-blue-500', 'bg-orange-500', 'bg-pink-500', 'bg-indigo-500'] },
    { day: 'Mar', blocks: ['bg-blue-500', 'bg-orange-500', 'bg-pink-500', 'bg-indigo-500'] },
    { day: 'Mié', blocks: ['bg-blue-500', 'bg-orange-500', 'bg-pink-500', 'bg-indigo-500'] },
    { day: 'Jue', blocks: ['bg-blue-500', 'bg-orange-500', 'bg-pink-500', 'bg-indigo-500'] },
    { day: 'Vie', blocks: ['bg-blue-500', 'bg-orange-500', 'bg-pink-500', 'bg-indigo-500'] },
    { day: 'Sáb', blocks: ['bg-green-500', 'bg-green-500', 'bg-green-500', 'bg-indigo-500'] },
    { day: 'Dom', blocks: ['bg-green-500', 'bg-green-500', 'bg-green-500', 'bg-indigo-500'] },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Mi Dashboard</h1>
        <p className="text-gray-600 mt-2">Vista general de tu semana</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Week Summary */}
        <div className="lg:col-span-2 space-y-6">
          {/* Week Summary */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Vista Rápida Semanal</h2>
            <div className="flex justify-around items-end h-48">
              {weekSummary.map((day, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div className="flex flex-col space-y-1">
                    {day.blocks.map((colorClass, blockIndex) => (
                      <div
                        key={blockIndex}
                        className={`w-10 h-10 ${colorClass} rounded-md transition-transform hover:scale-110`}
                        title={`${day.day} - Bloque ${blockIndex + 1}`}
                      ></div>
                    ))}
                  </div>
                  <span className="text-xs font-medium text-gray-600">{day.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Alerts */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Alertas</h2>
            <div className="space-y-3">
              {alerts.map((alert, index) => {
                const Icon = alert.icon;
                const bgColor = alert.color === 'red' ? 'bg-red-50 border-red-200' : 
                               alert.color === 'blue' ? 'bg-blue-50 border-blue-200' : 
                               'bg-green-50 border-green-200';
                const iconColor = alert.color === 'red' ? 'text-red-600' : 
                                 alert.color === 'blue' ? 'text-blue-600' : 
                                 'text-green-600';
                return (
                  <div key={index} className={`${bgColor} border-l-4 rounded-lg p-4`}>
                    <div className="flex items-start space-x-3">
                      <Icon className={`w-5 h-5 ${iconColor} mt-0.5`} />
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800">{alert.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{alert.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">💡 Sugerencias para Mejorar tu Balance</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {suggestions.map((suggestion, index) => {
            const Icon = suggestion.icon;
            return (
              <div key={index} className="border-2 border-gray-200 rounded-lg p-4 hover:border-indigo-500 transition-colors">
                <Icon className="w-8 h-8 text-indigo-600 mb-3" />
                <h4 className="font-semibold text-sm text-gray-800 mb-2">{suggestion.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{suggestion.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;