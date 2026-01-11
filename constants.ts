
import { Session, SessionStatus } from './types';
import { CLASSICAL_READINGS } from './readings';

export const COURSE_SESSIONS: Session[] = [
  {
    id: 1,
    title: "Rompiendo el Molde: Más Allá de la Magia y el Método",
    objective: "Superar la dicotomía entre el azar y la regla rígida mediante la Racionalidad Inventiva.",
    concepts: ["Falacia de la dicotomía", "Ceguera del método", "Ars Inveniendi"],
    status: SessionStatus.UNLOCKED,
    content: `Como expongo en *Ni Magia ni Método*: "El descubrimiento surge a menudo de la irritación que produce el error persistente. La racionalidad científica es una de las mayores conquistas del espíritu humano, pero lo que aquí propongo es dar su lugar a una tradición olvidada: la de la racionalidad inventiva, orientada no solo a demostrar, sino a encontrar; no solo a verificar, sino a juzgar; no solo a calcular, sino a actuar con prudencia en situaciones concretas".`,
    classicalReading: CLASSICAL_READINGS[1],
    exercises: [
      {
        id: "s1-e1",
        type: "arbitrage",
        prompt: "DESAFÍO DE ARBITRAJE: Identifica un protocolo que tu industria siga por inercia. ¿Qué valor tangible se está 'filtrando' por seguir este método ciegamente? Propón una alternativa inventiva."
      }
    ],
    closingQuote: "«No hay receta para lo nuevo, pero hay formas de preparar el espíritu para recibirlo.» — Moris Polanco"
  },
  {
    id: 2,
    title: "La Abducción: El Arte de la Hipótesis Sorprendente",
    objective: "Dominar la lógica del hallazgo (Peirce) para ver lo que otros ignoran.",
    concepts: ["Lógica de Sherlock Holmes", "Instinto disciplinado", "Il lume naturale"],
    status: SessionStatus.LOCKED,
    content: `En *Ni Magia ni Método* analizamos la abducción: "Es el salto mental que, ante un hecho sorprendente o anómalo, propone una causa posible. Sherlock Holmes no deduce; abduce. Construye una narrativa causal que explica el hecho observado de la manera más económica y plausible. El genio es quien sabe qué ignorar".`,
    classicalReading: CLASSICAL_READINGS[2],
    exercises: [
      {
        id: "s2-e1",
        type: "arbitrage",
        prompt: "DESAFÍO DE ARBITRAJE: Detecta un 'hecho sorprendente' en tu mercado que todos ignoran. Genera una hipótesis abductiva: ¿Qué necesidad insatisfecha revela? ¿Cómo podrías arbitrar esa necesidad?"
      }
    ],
    closingQuote: "«La verdad suele estar en lo que falta, no en lo que sobra.»"
  },
  {
    id: 3,
    title: "Los 'Lugares' del Pensamiento: La Tópica como Geografía",
    objective: "Utilizar los 'Topoi' aristotélicos como herramientas de búsqueda sistemática de valor.",
    concepts: ["Topos", "Depósito de argumentos", "Interrogatorio de la realidad"],
    status: SessionStatus.LOCKED,
    content: `Recuperando la herencia de Aristóteles: "Un topos es un lugar mental, una categoría de almacenamiento donde el orador puede acudir para encontrar argumentos. Es un algoritmo de búsqueda semántica. La Tópica es el arte de gestionar la incertidumbre productiva".`,
    classicalReading: CLASSICAL_READINGS[3],
    exercises: [
      {
        id: "s3-e1",
        type: "arbitrage",
        prompt: "DESAFÍO DE ARBITRAJE: Aplica el lugar de 'Lo Contrario' a la oferta de tu competidor. ¿Qué vacío de valor deja su fortaleza? Diseña un 'arbitraje de nicho' que capture a los alienados."
      }
    ],
    closingQuote: "«Saber interrogar es la mitad de la sabiduría.»"
  },
  {
    id: 4,
    title: "El Ingenio Barroco: Agudeza y Conexión Inesperada",
    objective: "Entender el concepto como el vínculo que exprime la correspondencia entre objetos distantes.",
    concepts: ["Agudeza", "Correspondencia", "Tensión barroca"],
    status: SessionStatus.LOCKED,
    content: `En *Ingenio y Alertness* definimos: "El Ingenio es la facultad de la agudeza, la habilidad de concebir conceptos complejos mediante la metáfora. La agudeza es un acto de inteligencia rápida que conecta dos extremos distantes para producir una verdad nueva y sorprendente".`,
    classicalReading: CLASSICAL_READINGS[4],
    exercises: [
      {
        id: "s4-e1",
        type: "arbitrage",
        prompt: "DESAFÍO DE ARBITRAJE: Realiza una 'Corrispondenza'. Toma un modelo de éxito de un campo ajeno (ej. arquitectura gótica) y aplícalo a un cuello de botella propio. ¿Qué eficiencia surge?"
      }
    ],
    closingQuote: "«La agudeza es el pasto del alma.» — Baltasar Gracián"
  },
  {
    id: 5,
    title: "Prudencia y Kairós: La Oportunidad Aguda",
    objective: "Gestionar el tiempo cualitativo para actuar con audacia informada.",
    concepts: ["Kairós", "Audacia informada", "Tiempo estratégico"],
    status: SessionStatus.LOCKED,
    content: `Como señalo en *El Código Gracián*: "La prudencia no es timidez; es agudeza en el tiempo. El dominio de la ocasión es el arte de fusionar previsión y acción para convertir el azar en una ventaja decisiva. Hay huracanes en los asuntos humanos...".`,
    classicalReading: CLASSICAL_READINGS[5],
    exercises: [
      {
        id: "s5-e1",
        type: "arbitrage",
        prompt: "DESAFÍO DE ARBITRAJE: Ubica una tendencia emergente. Define el Kairós exacto: ¿Qué señal específica te indicará que es el momento 'saudable' para entrar? ¿Cómo arbitrarás el tiempo?"
      }
    ],
    closingQuote: "«Hacer y hacer parecer.» — Gracián"
  },
  {
    id: 6,
    title: "La Dislocación Anacrónica: Viajar en el Tiempo",
    objective: "Utilizar la sabiduría antigua para romper prejuicios modernos.",
    concepts: ["Dislocación", "Anacronismo creativo", "Tropicalización"],
    status: SessionStatus.LOCKED,
    content: `En *Ni Magia ni Método* propongo: "Seleccione dos notas separadas por siglos de distancia. ¿Cómo explicaría Santo Tomás de Aquino el concepto de 'deuda técnica'? Esta dislocación obliga al cerebro a abstraer los principios fundamentales".`,
    classicalReading: CLASSICAL_READINGS[6],
    exercises: [
      {
        id: "s6-e1",
        type: "arbitrage",
        prompt: "DESAFÍO DE ARBITRAJE: Elige una máxima de Gracián (ej. 'Hallar el torcedor'). ¿Cómo arbitra esta sabiduría un conflicto actual de reputación digital o negociación comercial?"
      }
    ],
    closingQuote: "«Lo nuevo suele ser lo viejo bien comprendido.»"
  },
  {
    id: 7,
    title: "El Arbitraje Intelectual: La Alerta de Kirzner",
    objective: "Desarrollar la vigilancia ante la 'ignorancia radical' para monetizar asimetrías.",
    concepts: ["Alertness", "Ignorancia radical", "Costo nulo"],
    status: SessionStatus.LOCKED,
    content: `Citando *Ingenio y Alertness*: "La alertness no es una habilidad programable; es una actitud perceptiva, una vigilancia activa que permite ver oportunidades de ganancia que ya existen pero permanecen inadvertidas. Es la capacidad de notar lo obvio que nadie ha notado".`,
    classicalReading: CLASSICAL_READINGS[7],
    exercises: [
      {
        id: "s7-e1",
        type: "arbitrage",
        prompt: "DESAFÍO DE ARBITRAJE: ¿Qué secreto táctico posees que tus clientes ignoran? Diseña un producto que monetice esta asimetría. Ver el valor donde otros ven aire."
      }
    ],
    closingQuote: "«El saber es el único capital que crece al compartirse con discreción.»"
  },
  {
    id: 8,
    title: "Fricción Cognitiva y Paradoja",
    objective: "Abrazar la complejidad y la contradicción como firewall ontológico.",
    concepts: ["Racionalidad ecológica", "Fricción cognitiva", "Modernidad abigarrada"],
    status: SessionStatus.LOCKED,
    content: `En *Ni Magia ni Método*: "La verdadera innovación requiere ir más allá del método prescrito. El sentido práctico o phronesis es la capacidad de navegar entre las reglas estrictas. No habitamos un mundo de 'o esto o aquello'".`,
    classicalReading: CLASSICAL_READINGS[8],
    exercises: [
      {
        id: "s8-e1",
        type: "arbitrage",
        prompt: "DESAFÍO DE ARBITRAJE: Encuentra una contradicción dolorosa en tu industria. Usa la fricción para diseñar una solución paradójica que entregue ambas cosas."
      }
    ],
    closingQuote: "«Sin oposición no hay agudeza.»"
  },
  {
    id: 9,
    title: "La Racionalidad Inventiva en la Práctica",
    objective: "Sintetizar la visión poética con la acción mercantil.",
    concepts: ["Poética de la economía", "Semoviencia", "Creación de mercados"],
    status: SessionStatus.LOCKED,
    content: `Como se expone en *Ingenio y Alertness*: "El empresario es el poeta del mercado. La creación de mercados inexistentes es el acto económico más sublime, manifestación de la capacidad humana de trascender limitaciones materiales".`,
    classicalReading: CLASSICAL_READINGS[9],
    exercises: [
      {
        id: "s9-e1",
        type: "arbitrage",
        prompt: "DESAFÍO DE ARBITRAJE: Toma un bloqueo burocrático que paralice a tu competencia. Encuentra la 'salida airosa' usando la RI. Convierte este obstáculo en un foso defensivo."
      }
    ],
    closingQuote: "«El arte de vivir es el arte de la discreción.»"
  },
  {
    id: 10,
    title: "Cultivando el Ingenio: De Hombre a Persona",
    objective: "Forjar un carácter estratégico que trascienda el éxito efímero.",
    concepts: ["Ser Persona", "Milicia del autoperfeccionamiento", "Legado"],
    status: SessionStatus.LOCKED,
    content: `Culminamos con *El Código Gracián*: "La 'persona' es la creación deliberada de uno mismo. Ser persona es lo más grande. El poder sin carácter es una casa construida sobre arena. El triunfo del carácter es transformar un 'hombre' ordinario en 'persona'".`,
    classicalReading: CLASSICAL_READINGS[10],
    exercises: [
      {
        id: "s10-e1",
        type: "arbitrage",
        prompt: "DESAFÍO DE ARBITRAJE: Audita tus fuentes de información. ¿Dónde ocurre un 'arbitraje de tu atención'? Sustituye una fuente de ruido por una de 'agudeza' antigua."
      }
    ],
    closingQuote: "«No basta ser inteligente; hay que ser sabio.» — Moris Polanco"
  }
];
