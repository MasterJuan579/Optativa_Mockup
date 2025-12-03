export const actividades = [
  {
    id: 1,
    titulo: "¡Yo, ... Hoy!",
    descripcion: "Me gustó mucho presentarme de esta forma tan original. Utilizar la metodología A.E.I.O.U. en mi video me permitió estructurar quién soy y qué hago día a día.",
    youtube: "https://www.youtube.com/watch?v=E5QVkjufHZw",
    imagen: null // Aquí puedes poner la ruta de una imagen después
  },
  {
    id: 2,
    titulo: "Innovación en Organizaciones",
    descripcion: "Disfruté mucho este análisis. Me obligó a ver cómo las variables generacionales están interconectadas en IBM. Entender esta dinámica de la empresa y proponer ideas nuevas fue un reto muy satisfactorio.",
    youtube: "https://www.youtube.com/watch?v=FKO9AQpv-h0",
    imagen: null
  },
  {
    id: 3,
    titulo: "Conociendo las Generaciones",
    descripcion: "Esta tarea me encantó por su novedad. Las perspectivas de las tres generaciones (Baby Boomer, X y Millennial) me dieron ideas nuevas sobre la productividad. Entender esta dinámica de la empresa fue un aprendizaje muy satisfactorio y útil.",
    youtube: "https://www.youtube.com/watch?v=Syy50OijcB8&t=235s",
    imagen: null
  },
  {
    id: 4,
    titulo: "MockUp",
    descripcion: "Me encantó usar Minecraft Education para crear el mockup de convivencia. Fue un gran reto de creatividad diseñar un espacio que integrara las necesidades de las Baby Boomer, X y Millennial. Logré darle una visión integral al proyecto desde el diseño.",
    youtube: "https://www.youtube.com/watch?v=Yc7UYnsj-xs",
    imagen: null
  },
  {
    id: 5,
    titulo: "Actividad Física en el Campus",
    descripcion: "Recrear \"Uptown Funk\" nos obligó a ser muy creativos como equipo, coordinando los movimientos para el video. Fue un gran ejercicio para generar soluciones de valor a través del esfuerzo físico y la colaboración.",
    youtube: "https://www.youtube.com/watch?v=OOE6Kf3_Gv0",
    imagen: null
  },
  {
    id: 6,
    titulo: "Pitch",
    descripcion: "El pitch de dos minutos fue un gran reto de creatividad y síntesis. Disfruté mucho usar el storytelling para vender mi idea y encontrar soluciones de valor en la comunicación. Fue clave para mi visión integral de cómo comunicar una propuesta.",
    youtube: "https://www.youtube.com/watch?v=bbOzkD7_XWU",
    imagen: null
  }
]

export const getActividadTitulo = (id) => {
  if (id === 'landing') return 'Portafolio'
  const actividad = actividades.find(a => a.id === id)
  return actividad ? actividad.titulo : ''
}