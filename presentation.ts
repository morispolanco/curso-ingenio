
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
    title: "El Manifiesto del Ingenio",
    subtitle: "Soberanía cognitiva en la era del algoritmo",
    quote: "Este curso no es un manual de eficiencia mecánica, sino una guía para pensar como un humano en un mundo de máquinas.",
    content: [
      "<b>Fundamentos y Autoridad:</b> Esta experiencia se cimenta en la <i>Racionalidad Inventiva</i> de Moris Polanco, integrando la agudeza de Baltasar Gracián con la lógica abductiva de Peirce. No buscamos la 'asepsia' técnica, sino la <b>Modernidad Abigarrada</b> donde conviven lo antiguo y lo futuro.",
      "<b>Por qué es Vital:</b> La modernidad nos ha convertido en jueces que solo aceptan pruebas perfectas, perdiendo la capacidad de explorar lo probable. En un mundo saturado de IA probabilística —que tiende al promedio y al cliché—, el ingenio es la única <b>Ventaja Humana</b> real: la intención frente a la estadística.",
      "<b>Nuestra Distinción:</b> A diferencia de los métodos rígidos que 'diseñan todo a priori' (Catedrales), proponemos una <b>Racionalidad Ecológica</b> (Bazares) que permite la emergencia del hallazgo. Aquí, la imperfección es nuestra soberanía y la fricción es el motor de la tracción cognitiva."
    ],
    type: 'intro'
  },
  {
    id: 2,
    title: "La Geografía del Hallazgo",
    subtitle: "Un itinerario de 10 estaciones estratégicas",
    content: [
      "<b>Qué cubriremos:</b> Viajaremos desde el desmantelamiento de la <b>Ceguera del Método</b> hasta la maestría en la <b>Dislocación Anacrónica</b>. Entrenarás el 'instinto disciplinado' para ver anomalías donde otros ven normalidad.",
      "<b>El Andamiaje Mental:</b> El curso te dotará de una <b>Neo-Tópica</b>: un sistema de 'lugares' para interrogar la realidad y forzar el hallazgo. Aprenderás que innovar no es 'crear de la nada', sino encontrar lo que ya está ahí mediante el <b>Ingenio y la Agudeza</b>.",
      "<b>Filosofía de Vuelo:</b> No razonaremos por analogía con lo que otros hacen, sino por <i>Primeros Principios</i>. Dejaremos de ser <i>Homo Oeconomicus</i> (calculadores) para convertirnos en <i>Homo Inveniens</i> (exploradores) capaces de 'cazar' la verdad en la ocasión (Kairos)."
    ],
    type: 'concept'
  },
  {
    id: 3,
    title: "Resultados: El Héroe del Ingenio",
    subtitle: "De curador de datos a arquitecto de valor",
    quote: "El mapa ha sido trazado, pero el territorio te pertenece solo a ti.",
    content: [
      "<b>Qué obtendrás:</b> La facultad de realizar el <b>Arbitraje Intelectual</b>: identificar ignorancia radical en el mercado y capitalizarla con costo nulo. Aprenderás a resolver problemas únicos con recursos insuficientes mediante la <b>Gambiarra Intelectual</b>.",
      "<b>Tu Transformación:</b> Al finalizar, habrás consolidado tu propio <b>Plan Inventivo Personal</b> para los próximos seis meses. No serás un monumento a lo que otros dijeron, sino la plataforma de lo que tú tienes que decir.",
      "<b>La Promesa Final:</b> Lograrás la <b>Soberanía Cognitiva</b> y la 'Salida Airosa' en situaciones de alta incertidumbre. Pasarás de seguir manuales a cultivar tu propio 'Jardín Infinito' de conocimiento, donde cada idea es un activo de valor estratégico."
    ],
    type: 'conclusion'
  }
];
