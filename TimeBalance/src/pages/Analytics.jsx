function Analytics() {
  const timeDistribution = [
    { label: 'Trabajo', hours: 32, percentage: 19, color: 'bg-blue-500' },
    { label: 'Clases', hours: 24, percentage: 14, color: 'bg-orange-500' },
    { label: 'Sueño', hours: 42, percentage: 25, color: 'bg-indigo-500' },
    { label: 'Tiempo Libre', hours: 18, percentage: 11, color: 'bg-green-500' },
    { label: 'Otros', hours: 52, percentage: 31, color: 'bg-gray-300' },
  ];

  const sleepTrend = [
    { week: 'Semana 1', hours: 38 },
    { week: 'Semana 2', hours: 40 },
    { week: 'Semana 3', hours: 39 },
    { week: 'Semana 4', hours: 42 },
  ];

  const metrics = [
    { label: 'Promedio trabajo/día', value: '6.4h', trend: '+5%' },
    { label: 'Promedio sueño/noche', value: '6.0h', trend: '-10%' },
    { label: 'Horas de estudio totales', value: '24h', trend: '+15%' },
    { label: 'Días con buen balance', value: '2/7', trend: '0%' },
  ];

  const maxSleep = Math.max(...sleepTrend.map(s => s.hours));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Análisis de Tiempo</h1>
        <p className="text-gray-600 mt-2">Estadísticas de tu última semana</p>
      </div>

      {/* Time Distribution */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Distribución de Tiempo Semanal</h2>
        <div className="space-y-4">
          {timeDistribution.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                <span className="text-sm text-gray-600">{item.hours}h ({item.percentage}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`${item.color} h-full rounded-full transition-all duration-500`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sleep Trend & Balance */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Sleep Trend */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Tendencia de Sueño (últimas 4 semanas)</h2>
          <div className="flex items-end justify-around h-64 space-x-2">
            {sleepTrend.map((week, index) => {
              const height = (week.hours / maxSleep) * 100;
              return (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="relative w-full">
                    <div
                      className="bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-lg transition-all duration-500 hover:from-indigo-600 hover:to-indigo-500"
                      style={{ height: `${height * 2}px` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-700">
                        {week.hours}h
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-gray-600 text-center">{week.week}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Work-Life Balance Gauge */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Balance Trabajo-Vida</h2>
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 80}`}
                  strokeDashoffset={`${2 * Math.PI * 80 * (1 - 0.68)}`}
                  className="text-indigo-600 transition-all duration-1000"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-gray-800">68%</div>
                <div className="text-sm text-gray-600 mt-1">Moderado</div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              Tu balance está en un nivel moderado. Considera aumentar tiempo de descanso.
            </p>
          </div>
        </div>
      </div>

      {/* Metrics Table */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Métricas Clave</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-800">{metric.value}</div>
              <div className="text-sm text-gray-600 mt-1">{metric.label}</div>
              <div className={`text-xs mt-2 ${metric.trend.includes('+') ? 'text-green-600' : metric.trend.includes('-') ? 'text-red-600' : 'text-gray-500'}`}>
                {metric.trend} vs. semana anterior
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Analytics;