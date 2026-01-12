
import React, { useState, useMemo } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  BrainCircuit,
  Award,
  Menu,
  X,
  Send,
  Zap,
  BookMarked,
  Library,
  ScrollText,
  Compass,
  ArrowRight,
  ShieldCheck,
  Lightbulb,
  Coins,
  Puzzle,
  ExternalLink,
  Bot,
  Scale,
  Maximize2,
  Minimize2,
  ChevronDown,
  PenTool,
  Flame,
  Sword,
  ShieldAlert,
  Dna
} from 'lucide-react';
import { Session, SessionStatus, GlossaryTerm } from './types';
import { COURSE_SESSIONS } from './constants';
import { GLOSSARY } from './glossary';
import { PRESENTATION_SLIDES } from './presentation';
import { getTutorFeedback } from './services/gemini';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'course' | 'glossary' | 'presentation' | 'manifesto'>('landing');
  const [sessions, setSessions] = useState<Session[]>(COURSE_SESSIONS);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [highlightedTerm, setHighlightedTerm] = useState<string | null>(null);
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const currentSession = sessions[currentIdx];

  const handleNext = () => {
    if (currentIdx < sessions.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setFeedback(null);
      setUserInput("");
      setShowLibrary(false);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
      setFeedback(null);
      setUserInput("");
      setShowLibrary(false);
    }
  };

  const openGlossaryAt = (term: string) => {
    setHighlightedTerm(term);
    setView('glossary');
  };

  // Helper para renderizar texto con enlaces al glosario y formato básico
  const renderWithLinks = (text: string): React.ReactNode[] => {
    // 1. Procesar etiquetas HTML básicas (b, i) primero
    const processFormatTags = (input: string): React.ReactNode[] => {
      const parts: React.ReactNode[] = [];
      const tagRegex = /<(b|i)>(.*?)<\/\1>/gi;
      let lastIndex = 0;
      let match;

      while ((match = tagRegex.exec(input)) !== null) {
        // Texto previo al tag
        if (match.index > lastIndex) {
          parts.push(input.substring(lastIndex, match.index));
        }
        // Contenido del tag
        const tag = match[1].toLowerCase();
        const content = match[2];
        if (tag === 'b') {
          parts.push(<b key={`b-${match.index}`}>{content}</b>);
        } else if (tag === 'i') {
          parts.push(<i key={`i-${match.index}`}>{content}</i>);
        }
        lastIndex = tagRegex.lastIndex;
      }
      if (lastIndex < input.length) {
        parts.push(input.substring(lastIndex));
      }
      return parts;
    };

    // 2. Procesar términos del glosario en los nodos de texto resultantes
    const processGlossary = (nodes: React.ReactNode[]): React.ReactNode[] => {
      const terms = GLOSSARY.map(t => t.term);
      const sortedTerms = [...terms].sort((a, b) => b.length - a.length);
      
      let currentNodes = [...nodes];
      
      sortedTerms.forEach(term => {
        const nextNodes: React.ReactNode[] = [];
        currentNodes.forEach(node => {
          if (typeof node !== 'string') {
            nextNodes.push(node);
            return;
          }
          
          const regex = new RegExp(`(${term})`, 'gi');
          const split = node.split(regex);
          
          split.forEach((subPart, i) => {
            if (subPart.toLowerCase() === term.toLowerCase()) {
              nextNodes.push(
                <button
                  key={`${term}-${i}`}
                  onClick={() => openGlossaryAt(term)}
                  className="text-[#4a1414] font-bold underline decoration-[#d4af37]/40 hover:decoration-[#d4af37] transition-all cursor-help"
                >
                  {subPart}
                </button>
              );
            } else if (subPart !== "") {
              nextNodes.push(subPart);
            }
          });
        });
        currentNodes = nextNodes;
      });
      return currentNodes;
    };

    // Primero manejamos el formato, luego el glosario
    const formattedNodes = processFormatTags(text);
    // Para cada nodo de texto plano dentro de los nodos formateados, buscamos términos del glosario
    return formattedNodes.map((node, index) => {
      if (typeof node === 'string') {
        return processGlossary([node]);
      }
      // Si ya es un elemento (como <b> o <i>), procesamos su contenido si es string
      if (React.isValidElement(node) && typeof node.props.children === 'string') {
        const processedChildren = processGlossary([node.props.children]);
        return React.cloneElement(node as React.ReactElement, { key: index, children: processedChildren });
      }
      return node;
    }).flat();
  };

  const submitAnswer = async () => {
    if (!userInput.trim()) return;
    setIsAnalyzing(true);
    const result = await getTutorFeedback(
      currentSession.title,
      currentSession.exercises[0].prompt,
      userInput
    );
    setFeedback(result);
    setIsAnalyzing(false);

    const updatedSessions = [...sessions];
    updatedSessions[currentIdx].status = SessionStatus.COMPLETED;
    setSessions(updatedSessions);
  };

  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-[#0a0505] overflow-x-hidden relative">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 transition-opacity duration-1000"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=2071&auto=format&fit=crop')",
            filter: 'brightness(0.3) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />

        {/* Hero Section Content */}
        <section className="relative z-10 h-screen flex flex-col items-center justify-center text-center p-6 select-none">
          <div className="max-w-5xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
            <div className="space-y-2">
              <span className="text-[#d4af37] uppercase tracking-[0.6em] text-sm font-semibold opacity-80 serif">CURSO</span>
              <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight serif">
                El Estratega del Ingenio <br />
                <span className="text-[#d4af37]">y el Código Gracián</span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-2xl md:text-4xl text-gray-200 font-light italic serif tracking-tight">
                Forjando la Sagacidad para el Siglo XXI
              </p>
              <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed serif opacity-80">
                Un viaje a través de la racionalidad inventiva y los principios estratégicos de la sabiduría clásica.
              </p>
            </div>

            <div className="pt-20 flex flex-col md:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => setView('manifesto')}
                className="group px-10 py-4 bg-white/5 border border-[#d4af37]/30 text-[#d4af37] rounded-full hover:bg-[#d4af37] hover:text-[#0a0505] transition-all duration-300 font-black uppercase tracking-[0.3em] text-xs flex items-center gap-3"
              >
                <Flame size={18} className="group-hover:animate-pulse" />
                Leer Manifiesto
              </button>
              <button 
                onClick={() => setView('presentation')}
                className="group flex flex-col items-center gap-4 text-[#d4af37] hover:text-white transition-all duration-500"
              >
                <span className="uppercase tracking-[0.4em] text-xs font-bold border-b border-transparent group-hover:border-[#d4af37] pb-1 transition-all">DESCUBRIR</span>
                <ChevronDown className="animate-bounce group-hover:scale-125 transition-transform" size={24} />
              </button>
            </div>
          </div>
        </section>

        {/* Floating Accents */}
        <div className="absolute top-12 left-12 border-l border-t border-[#d4af37]/20 w-32 h-32 z-10 hidden md:block" />
        <div className="absolute bottom-12 right-12 border-r border-b border-[#d4af37]/20 w-32 h-32 z-10 hidden md:block" />

        {/* Additional Info Grid */}
        <section className="relative z-10 max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-12 border-t border-white/5 bg-black/40 backdrop-blur-sm">
          <div className="space-y-4 p-8 border-r border-white/5">
            <div className="text-[#d4af37] mb-2 opacity-60"><ShieldCheck size={32} /></div>
            <h3 className="text-xl font-bold serif text-white">Ni Magia ni Método</h3>
            <p className="text-gray-400 text-sm leading-relaxed serif italic">La disposición intelectual robusta de Moris Polanco frente a la automatización del pensamiento.</p>
          </div>
          <div className="space-y-4 p-8 border-r border-white/5">
            <div className="text-[#d4af37] mb-2 opacity-60"><Lightbulb size={32} /></div>
            <h3 className="text-xl font-bold serif text-white">Agudeza Barroca</h3>
            <p className="text-gray-400 text-sm leading-relaxed serif italic">Conecta la sabiduría de Aristóteles y Gracián con la estrategia empresarial contemporánea.</p>
          </div>
          <div className="space-y-4 p-8">
            <div className="text-[#d4af37] mb-2 opacity-60"><Coins size={32} /></div>
            <h3 className="text-xl font-bold serif text-white">Arbitraje de Ideas</h3>
            <p className="text-gray-400 text-sm leading-relaxed serif italic">Transforma tu capital intelectual en valor real. Identifica brechas donde otros ven rutina.</p>
          </div>
        </section>

        {/* Ecosistema de Ingenio */}
        <section className="py-32 bg-[#fcfaf7] relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold serif text-[#2d0a0a] mb-4">Ecosistema de Pensamiento</h2>
              <p className="text-gray-600 italic">Expande tu racionalidad inventiva con nuestros recursos complementarios.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <a href="https://ingenio-estrategico.lovable.app/" target="_blank" rel="noopener noreferrer" className="group p-10 bg-white rounded-3xl shadow-xl border border-[#e2d6c3] hover:border-[#d4af37] transition-all transform hover:-translate-y-2">
                <Zap className="text-[#d4af37] mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold serif text-[#2d0a0a] mb-3">El Ingenio Estratégico</h3>
                <p className="text-gray-600 mb-6">Herramientas tácticas para la aplicación inmediata de la agudeza en entornos corporativos.</p>
                <div className="flex items-center gap-2 text-[#4a1414] font-bold text-sm uppercase tracking-widest">Visitar Recurso <ExternalLink size={16} /></div>
              </a>
              <a href="https://el-oraculo.lovable.app" target="_blank" rel="noopener noreferrer" className="group p-10 bg-white rounded-3xl shadow-xl border border-[#e2d6c3] hover:border-[#d4af37] transition-all transform hover:-translate-y-2">
                <Bot className="text-[#d4af37] mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold serif text-[#2d0a0a] mb-3">El Chatbot de Agudeza</h3>
                <p className="text-gray-600 mb-6">Consulta directa con la IA entrenada en el pensamiento de Moris Polanco.</p>
                <div className="flex items-center gap-2 text-[#4a1414] font-bold text-sm uppercase tracking-widest">Dialogar <ExternalLink size={16} /></div>
              </a>
              <a href="https://portico-logico.lovable.app/" target="_blank" rel="noopener noreferrer" className="group p-10 bg-white rounded-3xl shadow-xl border border-[#e2d6c3] hover:border-[#d4af37] transition-all transform hover:-translate-y-2">
                <Scale className="text-[#d4af37] mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold serif text-[#2d0a0a] mb-3">El Pórtico Lógico</h3>
                <p className="text-gray-600 mb-6">Fundamentos de lógica y dialéctica para fortalecer el andamiaje de tu ingenio.</p>
                <div className="flex items-center gap-2 text-[#4a1414] font-bold text-sm uppercase tracking-widest">Explorar <ExternalLink size={16} /></div>
              </a>
              <a href="https://bloguero-estilita.lovable.app/" target="_blank" rel="noopener noreferrer" className="group p-10 bg-white rounded-3xl shadow-xl border border-[#e2d6c3] hover:border-[#d4af37] transition-all transform hover:-translate-y-2">
                <ScrollText className="text-[#d4af37] mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold serif text-[#2d0a0a] mb-3">El Bloguero Estilita</h3>
                <p className="text-gray-600 mb-6">Reflexiones agudas y dislocaciones anacrónicas desde la columna del pensamiento digital.</p>
                <div className="flex items-center gap-2 text-[#4a1414] font-bold text-sm uppercase tracking-widest">Leer Bitácora <ExternalLink size={16} /></div>
              </a>
            </div>
          </div>
        </section>

        <footer className="relative z-10 py-20 text-center border-t border-[#e2d6c3] bg-white">
          <button onClick={() => setView('presentation')} className="text-[#4a1414] font-black serif text-4xl hover:text-[#d4af37] transition-all">
            Comienza tu Transformación <ArrowRight className="inline ml-2" />
          </button>
        </footer>
      </div>
    );
  }

  const renderManifesto = () => (
    <div className="min-h-screen bg-[#0a0505] p-6 md:p-16 lg:p-24 relative overflow-hidden animate-in fade-in duration-1000">
      {/* Decorative background icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#d4af37]/5 pointer-events-none">
        <Sword size={800} strokeWidth={0.5} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-24">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <span className="text-[#d4af37] font-black uppercase tracking-[0.6em] text-xs">Posición Editorial</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white serif leading-tight">
              MANIFIESTO: <br />
              <span className="text-[#d4af37]">LA SOBERANÍA DEL INGENIO</span>
            </h2>
          </div>
          <button 
            onClick={() => setView('landing')}
            className="p-4 bg-white/5 text-[#d4af37] rounded-full hover:bg-[#d4af37] hover:text-[#0a0505] transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-12">
          <div className="p-10 border-l-4 border-[#d4af37] bg-white/5 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white serif italic mb-6">Contra la Tiranía del Método, la Rebelión de la Agudeza</h3>
            <div className="prose prose-invert prose-xl font-serif text-gray-300 leading-relaxed text-justify space-y-6">
              <p>Vivimos bajo el asedio de la <b>Ratio</b>. La Inteligencia Artificial, en su estado actual, es el triunfo absoluto de la lógica bruta: una máquina estadística formidable capaz de procesar el pasado, pero ciega al futuro. Nos venden "Inteligencia", pero nos entregan Automatización. Nos prometen creatividad, pero nos dan Mímesis.</p>
              <p>El mercado se inunda de herramientas que te invitan a dejar de pensar. "Escribe con un clic", "Diseña sin saber", "Decide sin dudar". Esta comodidad tiene un precio oculto y terrible: la <b>Atrofia de la Imaginación</b>.</p>
              <p className="text-[#d4af37] font-black">Nos negamos a ser siervos del algoritmo. Nos negamos a que la máquina sea el arquitecto y el humano el albañil.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 group">
              <div className="flex items-center gap-4 text-[#d4af37]">
                <ShieldAlert size={32} />
                <h4 className="text-xl font-black uppercase tracking-widest">I. EL DIAGNÓSTICO: LA CEGUERA ALGORÍTMICA</h4>
              </div>
              <div className="prose prose-invert prose-lg font-serif text-gray-400 leading-relaxed">
                <p>La IA es una Esponja Digital. Absorbe datos, promedios y patrones. Pero carece de <b>Ingenium</b> (Ingenio): la facultad biológica y filosófica de ver lo invisible, de conectar lo inconexo, de encontrar la excepción que rompe la regla.</p>
                <ul className="space-y-2 border-l border-white/10 pl-6 mt-4">
                  <li>La máquina tiene datos; el humano tiene criterio.</li>
                  <li>La máquina tiene velocidad; el humano tiene oportunidad (<b>Kairos</b>).</li>
                  <li>La máquina ofrece respuestas; el humano debe plantear las preguntas.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 group">
              <div className="flex items-center gap-4 text-[#d4af37]">
                <Dna size={32} />
                <h4 className="text-xl font-black uppercase tracking-widest">II. NUESTRA MISIÓN: PRÓTESIS, NO MULETAS</h4>
              </div>
              <div className="prose prose-invert prose-lg font-serif text-gray-400 leading-relaxed">
                <p>No creamos software para que trabajes menos. Creamos software para que pienses mejor. Nuestras aplicaciones no son "pilotos automáticos"; son <b>Prótesis de Agudeza</b>. Están diseñadas bajo una Simbiosis Jerárquica:</p>
                <p className="mt-4"><b>Tú pones el Ingenio:</b> La intuición, la dirección, el "concepto" barroco.<br /><b>La IA pone la Ratio:</b> El procesamiento, la combinatoria, la fuerza bruta.</p>
                <p className="italic text-[#d4af37]/80 mt-4">Rechazamos la IA que adormece. Abrazamos la IA Adversarial.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a0808] p-12 border border-[#d4af37]/20 rounded-3xl relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 text-[#d4af37]/5 group-hover:scale-110 transition-transform duration-700">
               <Award size={400} />
            </div>
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4 text-[#d4af37]">
                <Scale size={32} />
                <h4 className="text-2xl font-black uppercase tracking-widest">III. LA PROMESA: RACIONALIDAD INGENIOSA</h4>
              </div>
              <p className="text-3xl text-white font-serif italic border-b border-white/10 pb-8">"En un mundo de respuestas baratas, el valor se refugia en la pregunta cara."</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-[#d4af37] font-bold uppercase tracking-widest text-xs mb-2">Ni Magia</h5>
                  <p className="text-gray-400">No creemos en la "caja negra" que lo resuelve todo por arte de magia. Exigimos explicabilidad y control.</p>
                </div>
                <div>
                  <h5 className="text-[#d4af37] font-bold uppercase tracking-widest text-xs mb-2">Ni Método</h5>
                  <p className="text-gray-400">No creemos en recetas rígidas ni frameworks estandarizados que matan la innovación. Creemos en la heurística.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-8 pt-12">
            <h4 className="text-4xl md:text-5xl font-bold text-white serif">EL LLAMADO</h4>
            <p className="text-xl text-gray-400 font-serif max-w-2xl mx-auto italic">
              Este no es un camino para todos. Es para el Arquitecto de Decisiones. Para aquel que entiende que la tecnología no es un sustituto del carácter, sino su amplificador definitivo.
            </p>
            <div className="flex flex-col items-center gap-6">
              <p className="text-[#d4af37] font-black uppercase tracking-[0.4em]">Atrévete a pensar con la IA</p>
              <button 
                onClick={() => setView('course')}
                className="px-16 py-6 bg-[#d4af37] text-[#0a0505] font-black uppercase tracking-[0.5em] text-sm hover:scale-110 hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] transition-all rounded-sm"
              >
                Ejercer Soberanía
              </button>
            </div>
          </div>
        </div>

        <footer className="text-center pt-24 opacity-30">
          <p className="text-[10px] text-white uppercase tracking-[1em]">Techno-Baroque Manifesto / MMXXV</p>
        </footer>
      </div>
    </div>
  );

  const renderPresentation = () => {
    const slide = PRESENTATION_SLIDES[currentSlideIdx];
    return (
      <section className="min-h-[80vh] flex flex-col justify-center animate-in fade-in zoom-in-95 duration-700">
        <div className="bg-white p-12 md:p-16 rounded-[2.5rem] shadow-baroque border border-[#e2d6c3] relative overflow-hidden parchment-texture">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
             <ScrollText size={500} />
          </div>
          <div className="absolute -bottom-24 -left-24 text-[#d4af37]/10 rotate-12">
            <BrainCircuit size={400} />
          </div>

          <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
             <div className="flex items-center justify-between border-b border-[#e2d6c3] pb-6 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d4af37]">Manifiesto del Ingenio / Diapositiva {slide.id} de {PRESENTATION_SLIDES.length}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4a1414]">Techno-Baroque Editorial</span>
             </div>

             <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold serif text-[#1a0808] leading-tight">{slide.title}</h2>
                {slide.subtitle && <p className="text-xl md:text-2xl text-[#d4af37] font-black serif italic tracking-tight">{slide.subtitle}</p>}
             </div>

             {slide.quote && (
                <div className="p-8 bg-[#f4ece1] rounded-2xl border-l-8 border-[#d4af37] italic font-serif text-2xl text-[#5a4632] leading-relaxed">
                   "{slide.quote}"
                </div>
             )}

             <div className="grid gap-8">
                {slide.content.map((para, i) => (
                  <div key={i} className="prose prose-stone prose-xl text-[#3a3a3a] font-serif leading-relaxed text-justify">
                    {renderWithLinks(para)}
                  </div>
                ))}
             </div>

             <div className="flex items-center justify-between pt-12 border-t border-[#e2d6c3]">
                <button 
                  onClick={() => setCurrentSlideIdx(Math.max(0, currentSlideIdx - 1))}
                  disabled={currentSlideIdx === 0}
                  className="flex items-center gap-2 p-4 text-[#4a1414] hover:bg-[#f4ece1] rounded-full transition-all disabled:opacity-20"
                >
                  <ChevronLeft size={32} />
                  <span className="text-xs font-bold uppercase tracking-widest">Anterior</span>
                </button>

                <div className="flex gap-2">
                  {PRESENTATION_SLIDES.map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === currentSlideIdx ? 'bg-[#d4af37] w-6' : 'bg-[#e2d6c3]'}`} />
                  ))}
                </div>

                {currentSlideIdx === PRESENTATION_SLIDES.length - 1 ? (
                  <button 
                    onClick={() => setView('course')}
                    className="px-10 py-5 bg-[#4a1414] text-[#d4af37] font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-3 text-xs uppercase tracking-[0.2em]"
                  >
                    Iniciar Sesión 1 <ArrowRight size={18} />
                  </button>
                ) : (
                  <button 
                    onClick={() => setCurrentSlideIdx(currentSlideIdx + 1)}
                    className="flex items-center gap-2 p-4 text-[#4a1414] hover:bg-[#f4ece1] rounded-full transition-all"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest">Siguiente</span>
                    <ChevronRight size={32} />
                  </button>
                )}
             </div>
          </div>
        </div>
      </section>
    );
  };

  if (view === 'manifesto') {
    return renderManifesto();
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#fcfaf7]">
      <aside className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        fixed inset-y-0 left-0 z-40 w-80 baroque-gradient text-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        flex flex-col border-r border-[#2d0a0a]
      `}>
        <div className="p-6 flex items-center justify-between border-b border-[#5a1a1a]">
          <button onClick={() => setView('landing')} className="flex items-center gap-3 group">
            <BrainCircuit className="text-[#d4af37] group-hover:rotate-12 transition-all" />
            <h1 className="text-xl font-bold tracking-tight uppercase serif">El Estratega</h1>
          </button>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {sessions.map((session, index) => (
            <button
              key={session.id}
              onClick={() => {
                setCurrentIdx(index);
                setFeedback(null);
                setUserInput("");
                setShowLibrary(false);
                setView('course');
              }}
              className={`
                w-full text-left p-4 rounded-lg transition-all flex items-start gap-3 cursor-pointer
                ${(currentIdx === index && view === 'course') ? 'bg-[#5a1a1a] shadow-inner ring-1 ring-[#d4af37]' : 'hover:bg-white/5'}
              `}
            >
              <div className="mt-1">
                {session.status === SessionStatus.COMPLETED ? (
                  <CheckCircle2 size={18} className="text-green-400" />
                ) : session.status === SessionStatus.LOCKED ? (
                  <Lock size={18} className="text-gray-400" />
                ) : (
                  <div className="w-[18px] h-[18px] rounded-full border-2 border-[#d4af37]" />
                )}
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold opacity-70">Sesión {session.id}</span>
                <p className="text-sm font-medium line-clamp-2 mt-1">{session.title}</p>
              </div>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[#5a1a1a] space-y-2 bg-[#2d0a0a]/50">
          <button 
            onClick={() => { setView('manifesto'); }}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-sm font-bold uppercase tracking-wider ${view === 'manifesto' ? 'bg-red-900 text-[#d4af37] border border-[#d4af37]/40' : 'text-[#d4af37] hover:bg-white/5'}`}
          >
            <Flame size={18} />
            Manifiesto
          </button>
          <button 
            onClick={() => { setView('presentation'); setCurrentSlideIdx(0); }}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-sm font-bold uppercase tracking-wider ${view === 'presentation' ? 'bg-[#d4af37] text-[#1a0808]' : 'text-[#d4af37] hover:bg-white/5'}`}
          >
            <Compass size={18} />
            Presentación
          </button>
          <button 
            onClick={() => { setView('glossary'); setHighlightedTerm(null); }}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-sm font-bold uppercase tracking-wider ${view === 'glossary' ? 'bg-[#d4af37] text-[#1a0808]' : 'text-[#d4af37] hover:bg-white/5'}`}
          >
            <BookMarked size={18} />
            Glosario Crítico
          </button>

          {/* Links Ecosistema Sidebar */}
          <div className="pt-4 mt-2 border-t border-white/10 space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-2 ml-3">Ecosistema de Ingenio</p>
            <a href="https://ingenio-estrategico.lovable.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full px-3 py-2 text-[11px] text-white/60 hover:text-[#d4af37] hover:bg-white/5 rounded transition-all font-medium">
              Ingenio Estratégico <ExternalLink size={12} />
            </a>
            <a href="https://el-oraculo.lovable.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full px-3 py-2 text-[11px] text-white/60 hover:text-[#d4af37] hover:bg-white/5 rounded transition-all font-medium">
              El Chatbot IA <ExternalLink size={12} />
            </a>
            <a href="https://portico-logico.lovable.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full px-3 py-2 text-[11px] text-white/60 hover:text-[#d4af37] hover:bg-white/5 rounded transition-all font-medium">
              Pórtico Lógico <ExternalLink size={12} />
            </a>
            <a href="https://bloguero-estilita.lovable.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full px-3 py-2 text-[11px] text-white/60 hover:text-[#d4af37] hover:bg-white/5 rounded transition-all font-medium">
              El Bloguero Estilita <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto relative p-6 md:p-12 lg:p-16">
        {!isSidebarOpen && (
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="fixed top-6 left-6 z-50 p-3 bg-[#4a1414] text-white rounded-full shadow-lg"
          >
            <Menu size={20} />
          </button>
        )}

        <div className="max-w-4xl mx-auto space-y-12 pb-24">
          {view === 'glossary' ? (
            <section className="animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex items-center justify-between mb-12">
                <div className="space-y-1">
                  <h2 className="text-5xl font-bold text-[#2d0a0a] serif">Glosario Crítico</h2>
                  <p className="text-gray-500 italic">"Los conceptos son las llaves del arbitraje intelectual."</p>
                </div>
                <button onClick={() => setView('course')} className="p-3 bg-[#f4ece1] hover:bg-[#e2d6c3] rounded-full transition-colors text-[#4a1414]">
                  <X size={24} />
                </button>
              </div>
              <div className="grid gap-10">
                {GLOSSARY.sort((a, b) => a.term.localeCompare(b.term)).map((item, idx) => (
                  <div 
                    key={idx} 
                    id={`term-${item.term}`}
                    className={`
                      p-10 rounded-3xl shadow-baroque border transition-all relative overflow-hidden group
                      ${highlightedTerm === item.term ? 'bg-[#fcf7e6] border-[#d4af37] ring-4 ring-[#d4af37]/10' : 'bg-white border-[#e2d6c3] parchment-texture'}
                    `}
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <BookMarked size={100} />
                    </div>
                    <div className="relative z-10 space-y-6">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <h3 className="text-4xl font-black text-[#4a1414] serif">{item.term}</h3>
                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#d4af37] bg-[#1a0808] px-4 py-2 rounded-lg">
                          Fuente: {item.source}
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-[#e2d6c3]/50">
                        <div className="space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-[#4a1414] opacity-50">Definición Concisa</h4>
                          <p className="text-xl leading-relaxed text-[#2d2d2d] font-serif italic">{item.definition}</p>
                        </div>
                        <div className="space-y-3 p-6 bg-[#f4ece1]/30 rounded-2xl border border-[#d4af37]/10">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-[#4a1414]">Conexión Estratégica (Polanco)</h4>
                          <p className="text-lg leading-relaxed text-[#5a4632]">{item.connection}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : view === 'presentation' ? (
            renderPresentation()
          ) : view === 'course' ? (
            <>
              <header className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#4a1414]">
                    <Sparkles size={20} />
                    <span className="text-sm font-bold tracking-widest uppercase">Módulo de Ingenio</span>
                  </div>
                  <button 
                    onClick={() => setShowLibrary(!showLibrary)}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all ${showLibrary ? 'bg-[#4a1414] text-[#d4af37] border-[#4a1414]' : 'bg-white text-[#4a1414] border-[#e2d6c3] hover:bg-[#f4ece1]'}`}
                  >
                    <Library size={18} />
                    <span className="text-xs font-black uppercase tracking-wider">Biblioteca Clásica</span>
                  </button>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#2d0a0a] leading-tight serif">
                  {currentSession.title}
                </h2>
                <div className="flex items-center gap-4 py-2 border-y border-[#e2d6c3]">
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-bold mb-1">Horizonte de Descubrimiento</p>
                    <p className="text-xl text-[#5a4632] italic font-serif leading-relaxed">{currentSession.objective}</p>
                  </div>
                </div>
              </header>

              {showLibrary ? (
                <section className="animate-in fade-in zoom-in-95 duration-500">
                  <div className="bg-[#fef9f3] p-12 rounded-3xl shadow-2xl border-2 border-[#d4af37]/20 relative overflow-hidden shadow-baroque">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                      <ScrollText size={400} />
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                      <div className="text-center space-y-3">
                        <span className="text-[#4a1414] font-black uppercase tracking-[0.4em] text-[10px]">Documento de Autoridad</span>
                        <h3 className="text-4xl font-bold serif text-[#2d0a0a]">{currentSession.classicalReading.title}</h3>
                        <p className="text-[#d4af37] font-black serif text-2xl">{currentSession.classicalReading.author}</p>
                      </div>
                      <div className="w-32 h-[1px] bg-[#d4af37] mx-auto"></div>
                      <div className="prose prose-stone prose-xl leading-relaxed text-[#2d2d2d] text-justify whitespace-pre-wrap font-serif italic first-letter:text-8xl first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:text-[#4a1414] first-letter:mt-2">
                        {renderWithLinks(currentSession.classicalReading.excerpt)}
                      </div>
                      <div className="flex justify-center pt-10">
                        <button 
                          onClick={() => setShowLibrary(false)}
                          className="px-8 py-3 bg-[#4a1414] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-110 transition-all shadow-xl"
                        >
                          Regresar a la Sesión
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              ) : (
                <>
                  <section className="space-y-12">
                    {/* Teoría Extendida */}
                    <div className="bg-white p-12 rounded-3xl shadow-baroque parchment-texture border border-[#e2d6c3] relative overflow-hidden group hover:border-[#d4af37]/30 transition-all">
                       <div className="absolute top-4 right-4 text-[#4a1414]/5">
                         <BookMarked size={120} />
                       </div>
                       <div className="mb-6 flex items-center gap-3 text-[#4a1414] font-black text-[10px] uppercase tracking-[0.3em]">
                         <div className="w-12 h-[1.5px] bg-[#4a1414]"></div>
                         Teoría de la Racionalidad Inventiva
                       </div>
                       <div className="prose prose-stone prose-xl text-[#3a3a3a] font-serif leading-relaxed text-justify space-y-6">
                         {currentSession.content.split('\n\n').map((para, i) => (
                           <div key={i} className={i === 0 ? "first-letter:text-7xl first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:text-[#4a1414] first-letter:mt-2" : ""}>
                             {renderWithLinks(para)}
                           </div>
                         ))}
                       </div>
                    </div>

                    {/* Casos Ilustrativos */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-[#4a1414] font-black text-[10px] uppercase tracking-[0.3em]">
                        <Puzzle size={20} />
                        Casos Ilustrativos
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        {currentSession.cases.map((c, i) => (
                          <div key={i} className="bg-[#f4ece1] p-8 rounded-3xl border border-[#d4af37]/20 hover:shadow-xl transition-all h-full flex flex-col">
                            <h4 className="text-2xl font-bold serif text-[#4a1414] mb-4">{c.title}</h4>
                            <div className="text-lg text-[#5a4632] leading-relaxed italic flex-1">{renderWithLinks(c.description)}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      {currentSession.concepts.map((concept, i) => (
                        <div key={i} className="p-6 bg-[#f4ece1] rounded-2xl border-l-4 border-[#4a1414] hover:shadow-xl hover:scale-105 transition-all cursor-default">
                          <span className="text-[10px] text-[#4a1414] font-black uppercase tracking-[0.2em] opacity-60">Axioma Clave</span>
                          <p className="font-bold text-xl text-[#2d0a0a] serif mt-1">{concept}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-6 pt-16">
                    <div className="bg-[#1a0808] text-white p-12 rounded-3xl shadow-2xl relative border-2 border-[#d4af37]/30 overflow-hidden shadow-baroque">
                      <div className="absolute -top-20 -right-20 text-[#d4af37]/5 rotate-12">
                        <Zap size={350} strokeWidth={1} />
                      </div>
                      
                      <div className="flex items-center gap-4 mb-10 relative z-10">
                        <div className="p-3 bg-[#d4af37] rounded-2xl shadow-2xl">
                          <Award size={32} className="text-[#1a0808]" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold serif uppercase tracking-wider text-[#d4af37]">Arbitraje Intelectual</h3>
                          <p className="text-[10px] opacity-50 uppercase tracking-[0.4em] font-black">Fricción Cognitiva Aplicada</p>
                        </div>
                      </div>

                      <div className="relative z-10">
                        <p className="text-3xl mb-12 leading-snug font-medium italic border-l-4 border-[#d4af37] pl-8 text-gray-100 serif">
                          {currentSession.exercises[0].prompt}
                        </p>

                        {!feedback ? (
                          <div className="space-y-8">
                            <textarea
                              value={userInput}
                              onChange={(e) => setUserInput(e.target.value)}
                              placeholder="Describe aquí tu concepto de arbitraje..."
                              className="w-full h-64 bg-white/5 border border-white/10 rounded-2xl p-8 text-2xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:bg-white/10 transition-all shadow-inner serif"
                            />
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                              <p className="text-sm text-gray-400 italic font-serif max-w-md">"La agudeza consiste en percibir lo que otros ignoran."</p>
                              <button
                                onClick={submitAnswer}
                                disabled={isAnalyzing || !userInput.trim()}
                                className="w-full md:w-auto px-12 py-6 bg-[#d4af37] text-[#1a0808] font-black rounded-xl hover:bg-[#eec643] hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-4 uppercase tracking-tighter shadow-2xl"
                              >
                                {isAnalyzing ? (
                                  <>
                                    <div className="animate-spin h-6 w-6 border-4 border-[#1a0808] border-t-transparent rounded-full" />
                                    Pesando Agudeza...
                                  </>
                                ) : (
                                  <>
                                    <Send size={24} />
                                    Someter a Juicio
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                            <div className="p-10 bg-white/5 rounded-3xl border border-[#d4af37]/30 backdrop-blur-xl shadow-2xl">
                              <div className="flex items-center gap-4 mb-8 text-[#d4af37]">
                                <BrainCircuit size={32} />
                                <span className="text-xl font-black uppercase tracking-[0.3em] serif">Resonancia del Estratega</span>
                              </div>
                              <div className="text-2xl leading-relaxed text-gray-200 whitespace-pre-wrap font-light italic text-justify serif">
                                {feedback}
                              </div>
                            </div>
                            <div className="flex justify-center">
                              <button
                                onClick={() => { setFeedback(null); setUserInput(""); }}
                                className="px-10 py-4 border-2 border-[#d4af37]/40 text-[#d4af37] rounded-full hover:bg-[#d4af37]/10 transition-all text-xs uppercase tracking-[0.3em] font-black"
                              >
                                Refinar Propuesta
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </section>
                </>
              )}

              <footer className="text-center py-24 border-t border-[#e2d6c3] mt-24">
                 <div className="text-4xl italic text-[#4a1414] serif max-w-4xl mx-auto leading-tight">
                   {renderWithLinks(currentSession.closingQuote)}
                 </div>
                 <div className="mt-10 flex justify-center gap-4">
                    {[...Array(3)].map((_, i) => <div key={i} className="w-3 h-3 rounded-full bg-[#d4af37]/40" />)}
                 </div>
              </footer>
            </>
          ) : null}
        </div>

        {view === 'course' && (
          <div className="fixed bottom-0 left-0 right-0 p-8 flex justify-between items-center pointer-events-none md:left-80 z-50">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className={`
                pointer-events-auto p-5 rounded-full bg-white shadow-2xl border border-[#e2d6c3] text-[#4a1414] transition-all
                ${(currentIdx === 0) ? 'opacity-0 scale-50' : 'hover:scale-110 active:scale-95 hover:bg-[#f4ece1]'}
              `}
            >
              <ChevronLeft size={36} />
            </button>
            
            <button
              onClick={handleNext}
              disabled={currentIdx === sessions.length - 1}
              className={`
                pointer-events-auto px-12 py-6 rounded-full bg-[#4a1414] text-[#d4af37] shadow-2xl flex items-center gap-4 transition-all
                ${(currentIdx === sessions.length - 1) ? 'opacity-0 scale-50' : 'hover:scale-110 active:scale-95 hover:bg-[#2d0a0a] ring-4 ring-[#d4af37]/20'}
              `}
            >
              <span className="font-black uppercase tracking-[0.2em] text-sm">Próxima Agudeza</span>
              <ChevronRight size={32} />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
