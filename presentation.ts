
export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  quote?: string;
  content: string[];
  type: 'intro' | 'comparison' | 'concept' | 'action' | 'conclusion';
  metadata?: any;
}

export const PRESENTATION_SLIDES: Slide[] = [
  {
    id: 1,
    title: "La arquitectura del relámpago",
    subtitle: "El estratega del ingenio y la rebelión de la mirada",
    quote: "Vivimos en una época que padece de una hipertrofia de la información y una atrofia de la mirada.",
    content: [
      "<b>El Asedio de la Obviedad:</b> Nos hemos convertido en mineros de lo evidente, olvidando que la verdadera inteligencia reside en establecer conexiones donde otros solo ven silencio. Este curso propone una <i>metanoia intelectual</i>: el retorno al ingenio como facultad arquitectónica.",
      "<b>Racionalidad Inventiva:</b> Frente a la lógica lineal de la eficiencia algorítmica, reivindicamos la capacidad de percibir la <i>ratio oculta</i> entre las cosas. No se trata de inventar de la nada, sino de reordenar lo existente con una agudeza tal que el resultado parezca una revelación.",
      "<b>Soberanía Cognitiva:</b> En un mundo diseñado para domesticar la mente, el ingenio es un acto de resistencia. Es la decisión de no ser meros consumidores de pensamiento ajeno, sino productores de sentido propio."
    ],
    type: 'intro'
  },
  {
    id: 2,
    title: "La Tópica de la Exploración",
    subtitle: "Más allá del silogismo: Abducción y Kairós",
    content: [
      "<b>Gimnasia del Espíritu:</b> A través de 10 estaciones estratégicas, cultivaremos la <b>Alerta Kirzneriana</b>: esa vigilancia ante las oportunidades que la estadística desprecia. Aprenderemos que el mapa no es el territorio y que los tesoros suelen habitar en los márgenes.",
      "<b>El Arte de la Abducción:</b> Si la lógica es el bisturí que divide, la tópica es el hilo que cose. Practicaremos el salto creativo que propone hipótesis basadas en la belleza y la economía de la explicación, interrogando al objeto desde ángulos imprevistos.",
      "<b>El Tiempo de la Ocasión:</b> Operaremos bajo el signo del <i>Kairós</i>, reconociendo el instante sagrado donde una idea puede cambiar el curso de una vida. El ingenio es la sagacidad para ver el futuro en el germen del presente."
    ],
    type: 'concept'
  },
  {
    id: 3,
    title: "El Triunfo de la Persona",
    subtitle: "Redibujando las reglas del juego",
    quote: "¿Será usted capaz de ver el relámpago antes de que suene el trueno?",
    content: [
      "<b>El Arbitraje Intelectual:</b> Al finalizar, habrás desarrollado la capacidad de desmantelar metáforas heredadas para construir arquitecturas de valor propias. La <b>Prudencia del Ingenioso</b> será tu filtro para transformar intuiciones en éxitos significativos.",
      "<b>Resultados Tangibles:</b> Este no es un manual de éxito efímero, sino un ejercicio de robustez estratégica. Pasarás de ser una pieza movida por hilos invisibles a ser el estratega que redibuja las reglas del tablero de la existencia.",
      "<b>Tu Plan Inventivo:</b> La puerta está abierta, pero cruzarla requiere el valor de reconocer que nuestra forma de razonar ha sido, quizás, demasiado gris. El ingenio le aguarda no como un destino, sino como una forma de caminar por el mundo."
    ],
    type: 'conclusion'
  }
];
