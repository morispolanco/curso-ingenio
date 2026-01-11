
import { Session, SessionStatus } from './types';
import { CLASSICAL_READINGS } from './readings';

export const COURSE_SESSIONS: Session[] = [
  {
    id: 1,
    title: "Rompiendo el Molde: Más Allá de la Magia y el Método",
    objective: "Superar la dicotomía entre el azar y la regla rígida mediante la Racionalidad Inventiva.",
    concepts: ["Falacia de la dicotomía", "Ceguera del método", "Ars Inveniendi"],
    status: SessionStatus.UNLOCKED,
    content: `En "Ni Magia ni Método", sostengo que el profesional contemporáneo habita una prisión de doble celda: por un lado, la "magia" del genio irracional que espera la musa; por otro, el "método" algorítmico que cree que la realidad se pliega a una hoja de Excel. Esta ceguera técnica nos hace creer que si el resultado falla es porque no seguimos bien el manual, cuando a menudo el manual es el que falla al no captar la singularidad de la circunstancia. 

Como señalo en mi obra: "La racionalidad inventiva está orientada no solo a demostrar, sino a encontrar; no solo a verificar, sino a juzgar". El método es, por definición, una reducción de la complejidad. Es una abstracción necesaria para la repetición industrial, pero mortal para la invención estratégica. El estratega que confía ciegamente en el método se vuelve predecible y, por tanto, vulnerable. La Racionalidad Inventiva surge precisamente donde el algoritmo se agota, en ese "espacio intermedio" donde la regla general choca con la excepción particular.

No buscamos la anarquía de la inspiración irracional, sino un *Ars Inveniendi* (Arte de Encontrar) que sea riguroso pero flexible. La ceguera del método ocurre cuando la herramienta (el proceso) se convierte en el fin. El estratega del ingenio reconoce que el método es un punto de partida, no de llegada. Debe cultivar lo que Gracián llamaba la "atención", una vigilancia constante que permite detectar cuándo la realidad ha dejado de responder a nuestras categorías habituales. Romper el molde no es destruir la estructura, sino habitarla con la libertad del que sabe que el mapa no es el territorio.`,
    cases: [
      {
        title: "La Ceguera de la Caballería Francesa (Agincourt)",
        description: "En 1415, los nobles franceses poseían el mejor 'método' de guerra de su tiempo: la carga de caballería pesada. Siguieron el manual de honor y táctica a pesar del barro y los arqueros ingleses. Su adherencia ciega al método los llevó a la ruina frente a un enemigo que inventó una nueva circunstancia de combate."
      },
      {
        title: "Nokia y la Trampa de la Eficiencia",
        description: "Nokia dominaba el mercado con un método de optimización industrial impecable. Cuando apareció el smartphone, sus métricas de eficiencia (el método) les decían que el iPhone era un juguete ineficiente. Su incapacidad de 'romper el molde' metodológico para ver la nueva racionalidad inventiva del software los borró del mapa."
      }
    ],
    classicalReading: CLASSICAL_READINGS[1],
    exercises: [
      {
        id: "s1-e1",
        type: "arbitrage",
        prompt: "Identifica un protocolo que tu industria siga por inercia. ¿Qué valor tangible se está 'filtrando' por seguir este método ciegamente? Propón una alternativa inventiva."
      }
    ],
    closingQuote: "«No hay receta para lo nuevo, pero hay formas de preparar el espíritu para recibirlo.» — Moris Polanco"
  },
  {
    id: 2,
    title: "La Abducción: El Arte de la Hipótesis Sorprendente",
    objective: "Dominar la lógica del hallazgo para ver las causas ocultas tras los hechos sorprendentes.",
    concepts: ["Hipótesis plausible", "Sospecha inteligente", "Salto mental"],
    status: SessionStatus.UNLOCKED,
    content: `La abducción es el motor de la novedad. Mientras la deducción es necesaria pero estéril (no añade nada nuevo) y la inducción es probable pero lenta (necesita mil repeticiones), la abducción es el rayo que ilumina la oscuridad. En "Ni Magia ni Método", exploro cómo este proceso propuesto por Peirce es la verdadera "lógica del estratega". 

La abducción comienza con un "hecho sorprendente": algo que no encaja en nuestra teoría actual del mundo. En lugar de ignorarlo como un 'outlier' o error de datos, el estratega lanza una sonda mental: una hipótesis que, de ser cierta, convertiría el hecho sorprendente en algo natural. Es un salto al vacío, pero un vacío iluminado por el conocimiento previo y la sensibilidad a la circunstancia. Como explicaba Peirce, poseemos un *il lume naturale* que nos inclina hacia la hipótesis correcta si sabemos escuchar la realidad.

Este "instinto disciplinado" es lo que diferencia al genio del loco. El estratega no espera a que los datos hablen —pues los datos, por naturaleza, solo hablan del pasado—, sino que "escucha" el silencio de lo que aún no es obvio. En mi interpretación de la racionalidad inventiva, la abducción no es un proceso místico, sino una inferencia hacia la mejor explicación. Es la capacidad de decir: "Esto que veo solo tiene sentido si ocurre X". Aprender a abducir es aprender a sospechar con inteligencia, buscando la 'cifra' oculta bajo la superficie de los eventos cotidianos.`,
    cases: [
      {
        title: "Semmelweis y la Fiebre Puerperal",
        description: "Ignaz Semmelweis observó un hecho sorprendente: las mujeres morían más en la sala de médicos que en la de matronas. Mediante abducción, postuló la existencia de 'partículas cadavéricas' invisibles antes de que existiera la microbiología. No fue una inducción estadística, fue un salto mental hacia una causa invisible pero necesaria."
      },
      {
        title: "Reed Hastings y el Recargo de Blockbuster",
        description: "El fundador de Netflix se sorprendió por una multa de 40 dólares por retrasar una película. En lugar de pagar y quejarse (lo normal), abdujo una nueva realidad: ¿Y si el modelo de alquiler no dependiera de locales físicos ni de multas por tiempo? De un hecho irritante nació la hipótesis de un imperio digital."
      }
    ],
    classicalReading: CLASSICAL_READINGS[2],
    exercises: [
      {
        id: "s2-e1",
        type: "arbitrage",
        prompt: "Detecta un 'hecho sorprendente' en tu mercado que todos ignoran. Genera una hipótesis abductiva: ¿Qué realidad oculta revela? ¿Cómo podrías arbitrar esa necesidad?"
      }
    ],
    closingQuote: "«La verdad suele estar en lo que falta, no en lo que sobra.»"
  },
  {
    id: 3,
    title: "Los 'Lugares' del Pensamiento: La Tópica como Geografía",
    objective: "Utilizar la tópica clásica como un sistema de escaneo para hallar argumentos y oportunidades.",
    concepts: ["Topos", "Inventario de ideas", "Interrogatorio sistemático"],
    status: SessionStatus.UNLOCKED,
    content: `En la tradición de Aristóteles y Cicerón, la Tópica es la disciplina de encontrar los 'lugares' (topoi) donde se esconden los argumentos. No se trata de repetir lugares comunes, sino de usar esos lugares como una red para pescar en el río de la complejidad. En "Ni Magia ni Método", rescato la tópica no como una retórica de adorno, sino como una verdadera "geografía del descubrimiento". 

Si no tienes un sistema de búsqueda, tu ingenio depende exclusivamente del azar. La Tópica funciona como un interrogatorio sistemático de la realidad. Como explico en mis textos, "la tópica es el andamio sobre el cual el ingenio construye sus torres". Cada lugar —Definición, Causa, Efecto, Contrario, Similitud— es una ventana diferente desde la cual mirar el mismo objeto. Al aplicar estos lugares a un problema de negocios o a una crisis de reputación, forzamos a la realidad a revelar sus grietas y sus potenciales.

El estratega que domina la Tópica nunca se encuentra en el silencio del desierto intelectual. Es capaz de mapear un territorio desconocido rápidamente preguntando: "¿Qué es esto por su género? ¿A qué se opone? ¿Qué efectos secundarios ignorados produce?". Esta técnica de escaneo sistemático permite hallar lo que conviene decir y hacer en cada situación, transformando la confusión en una lista de posibilidades accionables. La tópica nos enseña que las ideas no caen del cielo, sino que se encuentran en lugares específicos si sabemos dónde buscar.`,
    cases: [
      {
        title: "Vitorio y la Tópica de la Definición",
        description: "Un fabricante de colchones se definía como 'vendedor de espuma y resortes'. Al aplicar la tópica de la definición, cambió a 'vendedor de descanso y salud'. Este cambio no fue marketing, fue una redefinición estratégica que alteró sus procesos, su precio y su mercado objetivo. Cambiar el lugar de definición cambió el negocio."
      },
      {
        title: "Steve Jobs y el Lugar del Contrario",
        description: "Cuando la industria de la computación se movía hacia la complejidad y los manuales técnicos pesados, Jobs aplicó el lugar del 'Contrario' para el iPad: simplicidad radical, sin manual, pura intuición. Al buscar sistemáticamente lo opuesto a la norma, halló un océano azul de usuarios que temían a la tecnología tradicional."
      }
    ],
    classicalReading: CLASSICAL_READINGS[3],
    exercises: [
      {
        id: "s3-e1",
        type: "arbitrage",
        prompt: "Aplica el lugar de 'Lo Contrario' a la oferta de tu principal competidor. ¿Qué vacío de valor deja su fortaleza? Diseña una propuesta que capture ese vacío."
      }
    ],
    closingQuote: "«Saber interrogar es la mitad de la sabiduría.»"
  },
  {
    id: 4,
    title: "El Ingenio Barroco: Agudeza y Conexión Inesperada",
    objective: "Desarrollar la capacidad de crear 'conceptos' uniendo extremos distantes con agudeza.",
    concepts: ["Artificio de ingenio", "Correspondencia", "Tensión creativa"],
    status: SessionStatus.UNLOCKED,
    content: `Para Baltasar Gracián, el ingenio es la facultad más noble del espíritu. No se trata de una gracia superficial, sino de un acto del entendimiento que descubre la correspondencia entre objetos que parecen no tener nada en común. En "El Código Gracián", explico que "el concepto es un acto del entendimiento que exprime la correspondencia que se halla entre los objetos". Esta agudeza es la que permite al estratega crear 'conceptos' potentes que reconfiguran la percepción del valor.

El concepto barroco es una chispa que salta entre dos polos distantes. Cuanto más alejados estén los polos, más brillante es la chispa. El estratega del ingenio es un maestro de la metáfora aplicada: sabe que un problema en logística puede tener una solución inspirada en la coreografía de un ballet, o que una crisis de reputación puede gestionarse con la lógica de un sacrificio de ajedrez. La agudeza no busca la armonía fácil, sino la correspondencia sutil.

Esta sesión te invita a abrazar la tensión creativa. Como señalo en mi estudio del barroco, "la agudeza es el pasto del alma". Innovar no es añadir más materia, sino añadir más "concepto". El estratega debe ser capaz de ver el vínculo secreto que hace que dos cosas juntas valgan infinitamente más que separadas. Es un artificio de la inteligencia que "fuerza" a la realidad a revelar una nueva dimensión de utilidad. El ingenio es, en última instancia, la capacidad de ver antes que los otros la metáfora que moverá el mercado.`,
    cases: [
      {
        title: "Bernini y el Concepto de la Piedra Viva",
        description: "En el Rapto de Proserpina, Bernini une dos extremos distantes: la dureza fría del mármol y la suavidad de la piel humana. El 'concepto' es la presión de los dedos en el muslo. Esa conexión inesperada entre la piedra y la carne creó una agudeza visual que cambió la historia del arte. El estratega debe buscar ese 'toque' que transforme el material inerte en valor vibrante."
      },
      {
        title: "Airbnb: Dormir en casa de extraños",
        description: "El éxito de Airbnb nació de unir dos conceptos que la sociedad consideraba repelentes por seguridad: 'un extraño en mi casa' y 'dinero por confianza'. Al forzar esa correspondencia mediante un sistema de reputación (el artificio), crearon un concepto de agudeza estratégica que desmanteló la industria hotelera tradicional."
      }
    ],
    classicalReading: CLASSICAL_READINGS[4],
    exercises: [
      {
        id: "s4-e1",
        type: "arbitrage",
        prompt: "Toma un modelo de éxito de un campo totalmente ajeno al tuyo. Forja una conexión (concepto) con un problema actual que tengas. ¿Qué eficiencia o novedad surge de esa unión?"
      }
    ],
    closingQuote: "«La agudeza es el pasto del alma.» — Baltasar Gracián"
  },
  {
    id: 5,
    title: "Prudencia y Kairós: La Oportunidad Aguda",
    objective: "Gestionar el tiempo estratégico para actuar en el momento exacto de máxima eficacia.",
    concepts: ["Tiempo cualitativo", "Discreción", "Anticipación"],
    status: SessionStatus.UNLOCKED,
    content: `La Racionalidad Inventiva es una sabiduría del tiempo. Aristóteles distinguía entre el Cronos (el tiempo que pasa, los segundos) y el Kairós (el tiempo de la oportunidad, el momento sazonado). Un estratega puede tener la idea correcta, pero si la ejecuta fuera de su Kairós, fracasará estrepitosamente. La prudencia (*phronēsis*) es el hábito que nos permite discernir esa sazón.

En "El Código Gracián", recalco la importancia de la "Cuerda Discreción". La prudencia no es miedo ni parálisis, sino el juicio exacto de la oportunidad. Como decía Gracián, hay que "hacer y hacer parecer", pero sobre todo hay que saber cuándo. El momento oportuno es una ventana que se abre y se cierra; el necio se apresura y el perezoso llega tarde. El estratega prudente es un "buen conjeturador" del tiempo cualitativo.

La anticipación es el fruto del ingenio que mira hacia adelante. Saber esperar sin desesperar es una forma activa de agudeza. El Kairós no se calcula con relojes, sino con una sensibilidad aguzada hacia las circunstancias cambiantes. La discreción en el tiempo protege al estratega de la exposición innecesaria y maximiza el impacto de su acción. Aprenderás que la sazón de las cosas es el componente invisible que convierte una buena idea en un triunfo rotundo.`,
    cases: [
      {
        title: "Fabio el Cunctator (El que retrasa)",
        description: "Frente a Aníbal, Fabio se negó a dar batalla. Su 'prudencia' fue tachada de cobardía, pero él entendió el Kairós: Aníbal era invencible en campo abierto en ese momento. Al esperar y desgastar al enemigo, Fabio salvó a Roma. Sabía que su momento de actuar era el que dictaba la realidad."
      },
      {
        title: "El Lanzamiento del iPod",
        description: "Apple no inventó el reproductor de MP3, pero captó el Kairós exacto: cuando el Napster original colapsaba y la banda ancha se masificaba. Lanzaron el producto con la 'sazón' justa entre tecnología y necesidad legal (iTunes), capturando una oportunidad que otros habían intentado demasiado pronto o demasiado tarde."
      }
    ],
    classicalReading: CLASSICAL_READINGS[5],
    exercises: [
      {
        id: "s5-e1",
        type: "arbitrage",
        prompt: "Analiza una decisión importante que debas tomar. Evalúala bajo la lente del Kairós: ¿Es este el momento 'saudable'? ¿Qué señales externas confirman que la oportunidad está madura?"
      }
    ],
    closingQuote: "«Hacer y hacer parecer.» — Baltasar Gracián"
  },
  {
    id: 6,
    title: "La Dislocación Anacrónica: Viajar en el Tiempo",
    objective: "Utilizar el pasado y el futuro como herramientas de perspectiva para el presente.",
    concepts: ["Tropicalización", "Perspectiva histórica", "Salida de marco"],
    status: SessionStatus.UNLOCKED,
    content: `En "Ni Magia ni Método", propongo la dislocación anacrónica como una forma de romper la "tiranía del presente". A menudo estamos tan inmersos en las herramientas y lenguajes de nuestra época que nos volvemos incapaces de ver soluciones obvias que otras culturas o tiempos ya dominaban. Dislocar el pensamiento significa llevar un problema actual a un marco temporal ajeno.

Como señalo con frecuencia, "lo nuevo suele ser lo viejo bien comprendido". El anacronismo creativo nos permite despojar al problema de sus adornos tecnológicos y llegar a la esencia humana y estratégica del mismo. ¿Cómo resolvería un general romano un problema de retención de empleados? Al forzar este ejercicio, rompemos la inercia del pensamiento corporativo moderno y accedemos a una "phronēsis" que ha sobrevivido milenios.

La verdadera innovación suele ser una "traducción infiel" de una sabiduría antigua a un soporte moderno. Al viajar en el tiempo mentalmente, ganamos una perspectiva que los que solo miran la última tendencia ignoran por completo. Es el arte de usar la historia no como un museo de curiosidades, sino como un arsenal de armas cargadas de futuro. La dislocación nos permite ser "tropicalizadores" de conceptos eternos en el suelo féil de la modernidad.`,
    cases: [
      {
        title: "Gracián y la Gestión de Crisis en Redes Sociales",
        description: "Las reglas de Gracián sobre la 'disimulación cuerda' y el 'no declararse de un todo' son más eficaces para un Community Manager moderno que muchos manuales de PR actuales. La agudeza barroca entiende el manejo de la imagen y la percepción pública con una profundidad que la transparencia ingenua moderna a menudo olvida."
      },
      {
        title: "Elon Musk y la Física de Primeros Principios",
        description: "Musk utiliza una técnica aristotélica: reducir todo a sus verdades fundamentales (primeros principios) en lugar de razonar por analogía con lo que hacen los demás hoy. Al 'dislocar' su pensamiento hacia la lógica pura de la física antigua, pudo ver que los cohetes podían ser mucho más baratos si se construían desde cero, rompiendo la inercia de la industria aeroespacial."
      }
    ],
    classicalReading: CLASSICAL_READINGS[6],
    exercises: [
      {
        id: "s6-e1",
        type: "arbitrage",
        prompt: "¿Cómo resolvería un problema tecnológico actual un monje medieval con su enfoque en la paciencia y el manuscrito? Intenta aplicar esa lógica a un proceso que hoy te genere estrés."
      }
    ],
    closingQuote: "«Lo nuevo suele ser lo viejo bien comprendido.»"
  },
  {
    id: 7,
    title: "El Arbitraje Intelectual: La Alerta de Kirzner",
    objective: "Identificar y capitalizar asimetrías de conocimiento para generar valor con costo nulo.",
    concepts: ["Ignorancia radical", "Darse cuenta", "Ganancia pura"],
    status: SessionStatus.UNLOCKED,
    content: `El arbitraje intelectual es la aplicación económica suprema de la Racionalidad Inventiva. En mi estudio sobre Kirzner e Gracián, defino el arbitraje no como la compra barata de bienes físicos, sino como la detección de una **'ignorancia radical'** en el mercado. 

La ignorancia radical no es simplemente "no tener datos"; es no saber que existen hechos que podrían cambiarlo todo. Es una ceguera ontológica: los agentes están tan atrapados en su "método" que ni siquiera conciben que la realidad pueda ser distinta. En el mercado, la mayoría actúa como optimizadores: intentan sacar el máximo provecho de lo que *ya saben*. El estratega del ingenio actúa como un descubridor: su tarea es "darse cuenta" (Alertness) de que hay un recurso subestimado, un lenguaje no traducido o una necesidad mal comprendida que genera una asimetría de valor masiva.

Esta 'Alerta' es un estado de vigilia intelectual. El beneficio puro nace de un acto de agudeza que tiene un **costo nulo de producción**. No necesitas comprar una fábrica para "darte cuenta" de que un desecho industrial es en realidad un fertilizante valioso en otro sector; solo necesitas el ingenio para unir ambos mundos. La asimetría de conocimiento es la brecha entre el precio actual de un recurso (basado en la ignorancia común) y el valor real que tendrá una vez que tú le apliques el concepto correcto.

**Ejemplo procesable de Arbitraje Intelectual y Ventaja Cuantificable:**
Imagina una agencia de marketing que gasta $50,000 anuales en un software complejo de "generación de leads" que utiliza IA para enviar miles de correos fríos. La competencia de esta agencia hace exactamente lo mismo, peleando por la atención en bandejas de entrada saturadas. El estratega observa (Alertness) que los decisores de su nicho (ej. directores de museos) no responden a correos, pero son miembros activos de una pequeña sociedad filantrópica con foros físicos y boletines impresos.

1. **Detección de la Ignorancia Radical**: La competencia ignora que el "método digital masivo" es ruido irrelevante para este nicho. Creen que "más software" es la solución.
2. **Acción de Arbitraje**: El estratega cancela el software de $50,000. Utiliza la 'Tópica de la Circunstancia' para escribir tres artículos profundos en el boletín impreso de la sociedad (Costo material: $0, puro ingenio).
3. **Valor Tangible y Ventaja Competitiva**: 
   - **Beneficio Directo**: El ahorro de $50,000 va directo al margen de beneficio. Mientras la competencia opera con un margen del 10%, tú operas con un 15% adicional solo por este ahorro de costo nulo.
   - **CAC (Costo de Adquisición de Cliente)**: Tu CAC cae de $2,000 (software + tiempo) a casi $0. Esto te permite bajar tus precios un 20% para ganar contratos grandes mientras sigues ganando más dinero que tu competidor.
   - **Barrera de Entrada**: Tu competencia no puede copiarte comprando más software; tendrían que "darse cuenta" de la conexión, algo que su método les impide ver. El arbitraje es la captura de esta renta intelectual antes de que el mercado se "desengañe".`,
    cases: [
      {
        title: "El Arbitraje de la Atención en los Podcast",
        description: "Durante años, el tiempo de conducción era un 'desecho' cognitivo. El arbitraje intelectual de los podcasts fue darse cuenta de que la gente tenía 'hambre de profundidad' en momentos de ocio forzado. No inventaron el audio ni el internet, arbitrajeron el silencio y la aburrición de los traslados diarios, creando un mercado multimillonario de la nada."
      },
      {
        title: "Michael Burry y la Crisis de 2008 (The Big Short)",
        description: "Burry no inventó las finanzas, simplemente leyó los contratos que nadie más quería leer. Detectó una 'ignorancia radical' masiva sobre la calidad real de las hipotecas. Su arbitraje intelectual consistió en apostar contra el consenso ciego, convirtiendo su 'alerta' ante datos públicos pero ignorados en una de las mayores ganancias de la historia."
      }
    ],
    classicalReading: CLASSICAL_READINGS[7],
    exercises: [
      {
        id: "s7-e1",
        type: "arbitrage",
        prompt: "Identifica algo que tu industria considere un 'desecho' o un 'gasto inevitable'. ¿Cómo podrías convertirlo en un activo de valor usando solo un cambio de concepto? ¿Quién pagaría por ello?"
      }
    ],
    closingQuote: "«El saber es el único capital que crece al compartirse con discreción.»"
  },
  {
    id: 8,
    title: "La Fricción Cognitiva y la Paradoja",
    objective: "Abrazar la contradicción como motor de robustez intelectual y estratégica.",
    concepts: ["No complacencia", "Contradicción sabia", "Antifrágil"],
    status: SessionStatus.UNLOCKED,
    content: `En "Ni Magia ni Método", argumento que el pensamiento sin fricción es pensamiento muerto. La comodidad intelectual, la búsqueda de consenso rápido y la evitación del conflicto son las tumbas del ingenio. Necesitamos la fricción: el choque con ideas que nos desafían, con datos que contradicen nuestra teoría favorita. "Sin oposición no hay agudeza", afirmaba Gracián.

La paradoja no es un error de sistema; es a menudo la forma que tiene la verdad de presentarse en un mundo complejo. El estratega debe ser capaz de sostener dos ideas contradictorias en la mente al mismo tiempo sin colapsar. Esta "contradicción sabia" permite una visión estereofónica de la realidad. Como explico en mi obra, la racionalidad inventiva no busca la paz del cementerio metodológico, sino la vitalidad del combate dialéctico.

La Racionalidad Inventiva prospera en la fricción. Debemos actuar como "abogados del diablo" de nuestras propias certezas para que estas se vuelvan antifrágiles. Al abrazar la paradoja, descubrimos que lo que parece ineficiente a corto plazo puede ser la base de una robustez inexpugnable a largo plazo. Aprenderás a desconfiar de las soluciones fáciles y a valorar el esfuerzo intelectual que surge del desacuerdo constructivo. La fricción es lo que pule el diamante de tu juicio estratégico.`,
    cases: [
      {
        title: "La Paradoja de la Innovación en Toyota (Kaizen)",
        description: "Toyota abraza la fricción: detienen la línea de producción ante el menor error. Parece ineficiente (paradoja), pero esa fricción constante es la que genera la calidad suprema a largo plazo. Al forzar el problema a la superficie inmediatamente, evitan la ruina invisible de los errores acumulados."
      },
      {
        title: "Defender lo Indefendible",
        description: "Los grandes estrategas legales a menudo practican defendiendo posturas que detestan. Esta fricción forzada les permite ver las grietas en su propia lógica y entender la 'verdad del otro'. Al abrazar la paradoja de que 'el enemigo puede tener razón', se vuelven invencibles al anticipar todos los ataques posibles."
      }
    ],
    classicalReading: CLASSICAL_READINGS[8],
    exercises: [
      {
        id: "s8-e1",
        type: "arbitrage",
        prompt: "Elige una idea de negocio que consideres 'perfecta'. Ahora, actúa como su peor enemigo e intenta destruirla. ¿Qué debilidades fatales encontraste? ¿Cómo las usaría un competidor ingenioso?"
      }
    ],
    closingQuote: "«Sin oposición no hay agudeza.»"
  },
  {
    id: 9,
    title: "La Racionalidad Inventiva en la Práctica",
    objective: "Integrar todas las facultades en la creación poética de valor económico y social.",
    concepts: ["Poética de la acción", "Semoviencia", "Salida airosa"],
    status: SessionStatus.UNLOCKED,
    content: `Llegamos al momento de la síntesis. La Racionalidad Inventiva no es un ejercicio académico, es una "poética de la acción". El estratega es un creador que utiliza el ingenio para producir resultados tangibles. Hablamos de la "Semoviencia": la capacidad del ingenio para moverse por sí mismo, generando soluciones donde el método solo ve callejones sin salida. El ingenio es semoviente porque su motor es interno, no depende de instrucciones externas.

En esta sesión, aplicamos la "Salida Airosa" de Gracián: la capacidad de resolver una situación difícil con una elegancia que desarma al oponente y genera admiración. Como señalo en mis lecciones, "el estratega no solo gana; gana con agudeza". Esto crea una reputación de invencibilidad y sabiduría que es en sí misma un activo estratégico inmenso. La gestión no es una serie de tareas, sino una milicia del ingenio donde cada decisión es un acto de creación poética.

Aprenderemos a integrar la visión poética con la acción mercantil. El empresario, en su sentido más noble, es un poeta de la necesidad: rima recursos dispersos para crear una nueva realidad social de valor. Tu práctica profesional debe aspirar a ser una "obra de arte" estratégica, donde la eficiencia técnica esté siempre al servicio de una belleza conceptual superior. La racionalidad inventiva en la práctica es el triunfo de la voluntad inteligente sobre la inercia de la materia.`,
    cases: [
      {
        title: "La Salida Airosa de Alejandro Magno y el Nudo Gordiano",
        description: "Frente a un problema irresoluble por el método tradicional (desatar el nudo), Alejandro aplicó una racionalidad inventiva radical: lo cortó con su espada. Redefinió el problema de 'desatar' a 'separar', resolviendo en segundos lo que otros intentaron por siglos. Fue una salida airosa que envió un mensaje de poder e ingenio a todo el mundo."
      },
      {
        title: "Zappos y el Arbitraje de la Cultura",
        description: "Zappos no vendía zapatos, vendía 'felicidad'. Su arbitraje fue darse cuenta de que en un mundo digital frío, el servicio al cliente humano y extremo era un lujo por el que la gente pagaría más. Su salida airosa frente a la competencia de precios de Amazon fue crear una cultura interna tan potente que se convirtió en su principal ventaja competitiva."
      }
    ],
    classicalReading: CLASSICAL_READINGS[9],
    exercises: [
      {
        id: "s9-e1",
        type: "arbitrage",
        prompt: "Toma un problema 'duro' que tengas hoy. Intenta resolverlo no con más fuerza o dinero, sino con una 'Salida Airosa': un cambio de reglas o de marco que haga que el problema desaparezca o se vuelva irrelevante."
      }
    ],
    closingQuote: "«El arte de vivir es el arte de la discreción.»"
  },
  {
    id: 10,
    title: "Cultivando el Ingenio: De Hombre a Persona",
    objective: "Consolidar los hábitos y actitudes que sostienen una mentalidad inventiva de por vida.",
    concepts: ["Llegar a ser persona", "Hábito estratégico", "Plan inventivo"],
    status: SessionStatus.UNLOCKED,
    content: `El curso termina, pero la milicia del ingenio es de por vida. En "El Código Gracián", enfatizo que el fin último de toda esta agudeza es la creación de la "Persona". No nacemos personas; llegamos a serlo mediante el ejercicio de la prudencia, el cultivo del gusto y la disciplina del entendimiento. Como decía Gracián, "no se nace hecho: se va uno cada día perfeccionando en el ser y en el empleo".

Ser persona significa poseer un centro de gravedad propio que no depende del vaivén de la fortuna ni de la opinión del vulgo. El estratega del ingenio es aquel que ha integrado su capacidad de arbitraje con una integridad ética profunda. Como advierto en mis obras, "no basta ser inteligente; hay que ser sabio". La agudeza sin alma es una herramienta peligrosa, pero la virtud sin ingenio es inútil para el mundo.

Esta sesión final es para diseñar tu "Plan Inventivo Personal". ¿Qué lugares visitarás mentalmente? ¿Con quién dialogarás para mantener la fricción cognitiva? Te conviertes en el arquitecto de tu propia prudencia. El objetivo es que la racionalidad inventiva deje de ser un conjunto de técnicas y se convierta en tu forma natural de habitar el mundo. Has dejado de ser un operario del método para convertirte en un estratega de la vida, un "Héroe" o un "Discreto" capaz de dejar un legado de valor y agudeza en cada una de sus obras.`,
    cases: [
      {
        title: "El Caballero Desconocido de la Prudencia",
        description: "Gracián admiraba a aquellos que, teniendo un inmenso poder o saber, sabían 'ocultarlo con arte'. La persona consumada no necesita hacer alarde de su ingenio. Su mayor arbitraje es el de su propia reputación: ser deseado en presencia y admirado en ausencia. Es el triunfo del ser sobre el parecer, o mejor, el uso del parecer para proteger el ser."
      },
      {
        title: "Charlie Munger y el Entramado Mental",
        description: "El socio de Warren Buffett es el ejemplo moderno de 'Persona'. No se limitó a las finanzas; estudió psicología, física, biología e historia. Creó un 'entramado de modelos mentales' (una tópica moderna) que le permitió arbitrar mercados durante décadas con una serenidad absoluta. Su éxito no fue financiero, fue el resultado natural de haber cultivado un ingenio superior."
      }
    ],
    classicalReading: CLASSICAL_READINGS[10],
    exercises: [
      {
        id: "s10-e1",
        type: "arbitrage",
        prompt: "Diseña tu propio Plan Inventivo para los próximos 6 meses. ¿Qué 'lugares' visitarás mentalmente? ¿Qué 'fricciones' buscarás activamente? ¿Cómo medirás tu progreso hacia convertirte en una 'Persona' de agudeza?"
      }
    ],
    closingQuote: "«No basta ser inteligente; hay que ser sabio.» — Moris Polanco"
  }
];
