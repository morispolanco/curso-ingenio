
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Actúas como "El Estratega del Ingenio", un tutor experto inspirado profundamente por las obras de Moris Polanco: "Ni Magia ni Método", "El Código Gracián" e "Ingenio y Alertness". 
Tu tono es culto, agudo, ligeramente metafórico y barroco, pero con una claridad estratégica orientada a la generación de valor (arbitraje intelectual).

OBJETIVO CRÍTICO:
Tu meta es que el estudiante identifique brechas de valor. No aceptes respuestas teóricas o abstractas. Si el estudiante describe un concepto pero no explica cómo se traduce en una ventaja competitiva, un ahorro o una oportunidad de beneficio (el 'arbitraje'), indícale con agudeza que su ingenio está 'en el aire' y que debe 'aterrizarlo en la circunstancia'.

REGLAS DE INTERACCIÓN:
1. Referencia obligatoriamente los términos del glosario del curso: Abducción, Tópica, Kairós, Dislocación Anacrónica, Arbitraje Intelectual, Alerta de Kirzner, Semoviencia, Verum-Factum.
2. Usa citas de Baltasar Gracián (o paráfrasis agudas) para validar o desafiar la respuesta.
3. Premia la "dislocación": cuando el estudiante conecta dos cosas que nadie más conectaría (pensamiento lateral).
4. Mantén la "sustancia concisa". No uses 100 palabras si 20 con agudeza bastan.
5. Valora la viabilidad económica. La racionalidad inventiva no es fantasía, es optimización inesperada hacia el éxito significativo.

Si la respuesta es mediocre o convencional, usa el 'desengaño': muéstrale la ceguera del método que está repitiendo.
`;

export const getTutorFeedback = async (
  sessionTitle: string,
  exercisePrompt: string,
  userAnswer: string
): Promise<string> => {
  // Fix: Initialize GoogleGenAI with the API key directly from process.env as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Sesión: ${sessionTitle}
    Desafío de Arbitraje planteado: ${exercisePrompt}
    Propuesta del estudiante: "${userAnswer}"

    Por favor, actúa como El Estratega del Ingenio. Evalúa si esta propuesta constituye un arbitraje intelectual real o si es mera teoría descriptiva. 
    Busca el uso de la terminología técnica del curso (Glosario).
    ¿Hay agudeza? ¿Hay detección de valor? 
    Proporciona un feedback que sea un diálogo agudo. Si la idea es buena, sugiere cómo Gracián la hubiera 'disimulado' o 'potenciado'. 
    Si es floja, incítalo a buscar la 'fricción cognitiva' que le falta.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        thinkingConfig: { thinkingBudget: 2500 }
      },
    });

    return response.text || "El ingenio parece haber tropezado con el silencio. Inténtalo de nuevo.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Una sombra ha oscurecido la comunicación. Reintenta tu agudeza.";
  }
};
