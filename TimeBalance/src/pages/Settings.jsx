import { User, Bell, Clock, Palette, Trash2, Download } from 'lucide-react';

function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Configuración</h1>
        <p className="text-gray-600 mt-2">Personaliza tu experiencia en TimeBalance</p>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-6">
          <User className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-gray-800">Perfil del Usuario</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
            <input
              type="text"
              defaultValue="Estudiante Demo"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              defaultValue="estudiante@demo.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Avatar</label>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Cambiar Avatar
              </button>
            </div>
          </div>
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Guardar Cambios
          </button>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Bell className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-gray-800">Preferencias de Notificaciones</h2>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Alertas de burnout', description: 'Te avisaremos cuando detectemos riesgo de agotamiento' },
            { label: 'Recordatorios de comida', description: 'Notificaciones para recordarte comer en horarios saludables' },
            { label: 'Recordatorios de sueño', description: 'Te recordaremos cuando sea hora de dormir' },
            { label: 'Resumen semanal por email', description: 'Recibe un análisis de tu semana cada domingo' },
          ].map((item, index) => (
            <div key={index} className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex-1">
                <div className="font-medium text-gray-800">{item.label}</div>
                <div className="text-sm text-gray-600 mt-1">{item.description}</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4">
                <input type="checkbox" className="sr-only peer" defaultChecked={index < 2} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Clock className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-gray-800">Horario de Trabajo/Clases</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Hora inicio trabajo</label>
            <input
              type="time"
              defaultValue="06:00"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Hora fin trabajo</label>
            <input
              type="time"
              defaultValue="12:30"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Hora inicio clases</label>
            <input
              type="time"
              defaultValue="13:00"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Hora fin clases</label>
            <input
              type="time"
              defaultValue="17:00"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Theme Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Palette className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-gray-800">Tema</h2>
        </div>
        <div className="space-y-3">
          {['Claro', 'Oscuro', 'Sistema'].map((theme) => (
            <label key={theme} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="theme"
                defaultChecked={theme === 'Claro'}
                className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-gray-700">{theme}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-xl shadow-md p-6 border-2 border-red-200">
        <div className="flex items-center space-x-3 mb-6">
          <Trash2 className="w-6 h-6 text-red-600" />
          <h2 className="text-xl font-bold text-gray-800">Zona Peligrosa</h2>
        </div>
        <div className="space-y-3">
          <button className="w-full md:w-auto px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Exportar Datos</span>
          </button>
          <button className="w-full md:w-auto px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
            <Trash2 className="w-4 h-4" />
            <span>Eliminar Todos los Datos</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;