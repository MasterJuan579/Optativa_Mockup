import { ChevronLeft, ChevronRight } from 'lucide-react';

function Calendar() {
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const timeSlots = [
    { label: '6:00 - 12:00', period: 'Mañana' },
    { label: '13:00 - 17:00', period: 'Tarde' },
    { label: '18:00 - 22:00', period: 'Noche' },
    { label: '22:00 - 4:00', period: 'Dormir' },
  ];

  const scheduleData = {
    'Lunes': ['💼 Trabajo\nJP Morgan', '📚 Clases\nTEC', '🍜 Cena', '😴 Dormir'],
    'Martes': ['💼 Trabajo\nJP Morgan', '📚 Clases\nTEC', '🍜 Cena', '😴 Dormir'],
    'Miércoles': ['💼 Trabajo\nJP Morgan', '📚 Clases\nTEC', '🍜 Cena', '😴 Dormir'],
    'Jueves': ['💼 Trabajo\nJP Morgan', '📚 Clases\nTEC', '🍜 Cena', '😴 Dormir'],
    'Viernes': ['💼 Trabajo\nJP Morgan', '📚 Clases\nTEC', '🏈 Borregos', '😴 Dormir'],
    'Sábado': ['🎮 Tiempo Libre', '💕 Con Novia', '🎬 Relax', '😴 Dormir'],
    'Domingo': ['🏁 Fórmula 1', '🎯 Hobbies', '🎮 Gaming', '😴 Dormir'],
  };

  const getBlockColor = (activity) => {
    if (activity.includes('💼')) return 'bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white';
    if (activity.includes('📚')) return 'bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 text-white';
    if (activity.includes('😴')) return 'bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700 text-white';
    if (activity.includes('🍜')) return 'bg-gradient-to-br from-pink-500 to-pink-600 dark:from-pink-600 dark:to-pink-700 text-white';
    return 'bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 text-white';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Calendario Semanal</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Semana del 11 al 17 de Noviembre, 2025</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <button className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors">
            Hoy
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 w-32">
                    Horario
                  </th>
                  {days.map((day) => (
                    <th key={day} className="px-4 py-3 text-center text-sm font-semibold text-gray-800 dark:text-white">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((slot, slotIndex) => (
                  <tr key={slot.label} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 font-medium bg-gray-50 dark:bg-gray-700">
                      <div>{slot.label}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{slot.period}</div>
                    </td>
                    {days.map((day) => {
                      const activity = scheduleData[day][slotIndex];
                      const colorClass = getBlockColor(activity);
                      return (
                        <td key={day} className="px-2 py-2">
                          <div className={`${colorClass} rounded-lg p-4 min-h-[100px] flex items-center justify-center text-center text-sm font-semibold shadow-md hover:shadow-lg transition-shadow`}>
                            <div className="whitespace-pre-line">{activity}</div>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Leyenda</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded"></div>
            <span className="text-sm text-gray-700 dark:text-gray-300">Trabajo</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded"></div>
            <span className="text-sm text-gray-700 dark:text-gray-300">Clases</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-green-600 rounded"></div>
            <span className="text-sm text-gray-700 dark:text-gray-300">Tiempo Libre</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gradient-to-br from-pink-500 to-pink-600 rounded"></div>
            <span className="text-sm text-gray-700 dark:text-gray-300">Comida</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded"></div>
            <span className="text-sm text-gray-700 dark:text-gray-300">Dormir</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;