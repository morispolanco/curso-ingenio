
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
  Coins
} from 'lucide-react';
import { Session, SessionStatus, GlossaryTerm } from './types';
import { COURSE_SESSIONS } from './constants';
import { GLOSSARY } from './glossary';
import { getTutorFeedback } from './services/gemini';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'course' | 'glossary'>('landing');
  const [sessions, setSessions] = useState<Session[]>(COURSE_SESSIONS);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [highlightedTerm, setHighlightedTerm] = useState<string | null>(null);

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

  // Helper para renderizar texto con enlaces al glosario
  const renderWithLinks = (text: string) => {
    const terms = GLOSSARY.map(t => t.term);
    // Sort terms by length descending to match longest terms first (e.g. "Arbitraje Intelectual" before "Arbitraje")
    const sortedTerms = [...terms].sort((a, b) => b.length - a.length);
    
    // Fix: Use React.ReactNode[] instead of the JSX namespace to resolve missing namespace errors
    let parts: React.ReactNode[] = [text];
    
    sortedTerms.forEach(term => {
      // Fix: Use React.ReactNode[] instead of the JSX namespace to resolve missing namespace errors
      const newParts: React.ReactNode[] = [];
      parts.forEach(part => {
        if (typeof part !== 'string') {
          newParts.push(part);
          return;
        }
        
        const regex = new RegExp(`(${term})`, 'gi');
        const split = part.split(regex);
        
        split.forEach((subPart, i) => {
          if (subPart.toLowerCase() === term.toLowerCase()) {
            newParts.push(
              <button
                key={`${term}-${i}`}
                onClick={() => openGlossaryAt(term)}
                className="text-[#4a1414] font-bold underline decoration-[#d4af37]/40 hover:decoration-[#d4af37] transition-all cursor-help"
              >
                {subPart}
              </button>
            );
          } else if (subPart !== "") {
            newParts.push(subPart);
          }
        });
      });
      parts = newParts;
    });
    
    return parts;
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
    if (currentIdx < sessions.length - 1) {
      updatedSessions[currentIdx + 1].status = SessionStatus.UNLOCKED;
    }
    setSessions(updatedSessions);
  };

  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-[#fcfaf7] overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center p-6 baroque-gradient overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none parchment-texture"></div>
          <div className="absolute top-20 left-10 text-[#d4af37]/20 rotate-12 scale-150"><Zap size={400} /></div>
          <div className="relative z-10 max-w-5xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
            <div className="flex justify-center mb-4">
              <div className="bg-[#d4af37] p-3 rounded-xl shadow-2xl">
                <BrainCircuit size={48} className="text-[#1a0808]" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-[#fcfaf7] serif tracking-tight">
              EL ESTRATEGA <span className="text-[#d4af37]">DEL INGENIO</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 font-light italic max-w-3xl mx-auto leading-relaxed serif">
              "Desarrollando la Racionalidad Inventiva para el Siglo XXI. Donde el método falla, el ingenio prevalece."
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-10">
              <button 
                onClick={() => setView('course')}
                className="px-12 py-6 bg-[#d4af37] text-[#1a0808] font-black rounded-full hover:bg-white transition-all hover:scale-105 shadow-2xl flex items-center gap-3 uppercase tracking-widest text-sm"
              >
                Iniciar el Viaje <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => setView('glossary')}
                className="px-12 py-6 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-3 uppercase tracking-widest text-sm"
              >
                Explorar Glosario <BookMarked size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Info Grid */}
        <section className="max-w-7xl mx-auto py-32 px-6 grid md:grid-cols-3 gap-12">
          <div className="space-y-4 p-8 bg-white rounded-3xl shadow-xl border border-[#e2d6c3] transform hover:-translate-y-2 transition-all">
            <div className="text-[#4a1414] mb-4"><ShieldCheck size={40} /></div>
            <h3 className="text-2xl font-bold serif text-[#2d0a0a]">Ni Magia ni Método</h3>
            <p className="text-gray-600 leading-relaxed">Olvídate de las listas de 'pasos para innovar'. Aquí cultivamos una disposición intelectual robusta basada en la filosofía de Moris Polanco.</p>
          </div>
          <div className="space-y-4 p-8 bg-white rounded-3xl shadow-xl border border-[#e2d6c3] transform hover:-translate-y-2 transition-all">
            <div className="text-[#4a1414] mb-4"><Lightbulb size={40} /></div>
            <h3 className="text-2xl font-bold serif text-[#2d0a0a]">Agudeza Barroca</h3>
            <p className="text-gray-600 leading-relaxed">Conecta ideas de Aristóteles con el marketing, a Gracián con la programación. Aprende a ver las correspondencias ocultas en la realidad.</p>
          </div>
          <div className="space-y-4 p-8 bg-white rounded-3xl shadow-xl border border-[#e2d6c3] transform hover:-translate-y-2 transition-all">
            <div className="text-[#4a1414] mb-4"><Coins size={40} /></div>
            <h3 className="text-2xl font-bold serif text-[#2d0a0a]">Arbitraje Intelectual</h3>
            <p className="text-gray-600 leading-relaxed">Transforma tu 'capital intelectual' en valor real. Identifica oportunidades donde otros solo ven caos o rutina.</p>
          </div>
        </section>

        <section className="bg-[#1a0808] text-white py-32 px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold serif text-[#d4af37]">¿Qué es la Racionalidad Inventiva?</h2>
            <p className="text-2xl font-light text-gray-300 leading-loose italic">
              "No es una habilidad innata ni un algoritmo. Es una estrategia para el descubrimiento y la toma de decisiones agudas en un mundo de complejidad creciente. Es el arte de la hipótesis sorprendente."
            </p>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="space-y-4">
                <h4 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm">El Diferenciador</h4>
                <p className="text-gray-400">Fusionamos la sabiduría de Gracián, Peirce y Kirzner para crear un modelo de pensamiento que monetiza la asimetría de información y la agudeza mental.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm">Resultados</h4>
                <p className="text-gray-400">Al finalizar las 10 sesiones, habrás diseñado tu propio 'Plan Inventivo Personal', capaz de detectar 'arbitrajes' en tu campo profesional.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-20 text-center border-t border-[#e2d6c3]">
          <button onClick={() => setView('course')} className="text-[#4a1414] font-black serif text-4xl hover:text-[#d4af37] transition-all">
            Comienza tu Transformación <ArrowRight className="inline ml-2" />
          </button>
        </footer>
      </div>
    );
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
                if (session.status !== SessionStatus.LOCKED) {
                  setCurrentIdx(index);
                  setFeedback(null);
                  setUserInput("");
                  setShowLibrary(false);
                  setView('course');
                }
              }}
              className={`
                w-full text-left p-4 rounded-lg transition-all flex items-start gap-3
                ${(currentIdx === index && view === 'course') ? 'bg-[#5a1a1a] shadow-inner ring-1 ring-[#d4af37]' : 'hover:bg-white/5'}
                ${session.status === SessionStatus.LOCKED ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
              disabled={session.status === SessionStatus.LOCKED}
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
            onClick={() => { setView('glossary'); setHighlightedTerm(null); }}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-sm font-bold uppercase tracking-wider ${view === 'glossary' ? 'bg-[#d4af37] text-[#1a0808]' : 'text-[#d4af37] hover:bg-white/5'}`}
          >
            <BookMarked size={18} />
            Glosario Crítico
          </button>
          <button 
            onClick={() => setView('landing')}
            className="w-full flex items-center gap-3 p-3 rounded-lg text-white/50 hover:text-white transition-all text-sm font-bold uppercase tracking-wider"
          >
            <Compass size={18} />
            Presentación
          </button>
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
          ) : (
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
                  <section className="prose prose-lg max-w-none text-[#2d2d2d] leading-relaxed">
                    <div className="bg-white p-12 rounded-3xl shadow-baroque parchment-texture border border-[#e2d6c3] relative overflow-hidden group hover:border-[#d4af37]/30 transition-all">
                       <div className="absolute top-4 right-4 text-[#4a1414]/5">
                         <BookMarked size={120} />
                       </div>
                       <div className="mb-6 flex items-center gap-3 text-[#4a1414] font-black text-[10px] uppercase tracking-[0.3em]">
                         <div className="w-12 h-[1.5px] bg-[#4a1414]"></div>
                         Voz de Moris Polanco
                       </div>
                       <p className="text-2xl leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:text-[#4a1414] first-letter:serif text-justify text-[#3a3a3a] font-serif italic">
                         {renderWithLinks(currentSession.content)}
                       </p>
                    </div>

                    <div className="mt-16 grid md:grid-cols-3 gap-8">
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
                 <p className="text-4xl italic text-[#4a1414] serif max-w-4xl mx-auto leading-tight">
                   {currentSession.closingQuote}
                 </p>
                 <div className="mt-10 flex justify-center gap-4">
                    {[...Array(3)].map((_, i) => <div key={i} className="w-3 h-3 rounded-full bg-[#d4af37]/40" />)}
                 </div>
              </footer>
            </>
          )}
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-8 flex justify-between items-center pointer-events-none md:left-80 z-50">
          <button
            onClick={handlePrev}
            disabled={currentIdx === 0 || view !== 'course'}
            className={`
              pointer-events-auto p-5 rounded-full bg-white shadow-2xl border border-[#e2d6c3] text-[#4a1414] transition-all
              ${(currentIdx === 0 || view !== 'course') ? 'opacity-0 scale-50' : 'hover:scale-110 active:scale-95 hover:bg-[#f4ece1]'}
            `}
          >
            <ChevronLeft size={36} />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentIdx === sessions.length - 1 || sessions[currentIdx].status !== SessionStatus.COMPLETED || view !== 'course'}
            className={`
              pointer-events-auto px-12 py-6 rounded-full bg-[#4a1414] text-[#d4af37] shadow-2xl flex items-center gap-4 transition-all
              ${(currentIdx === sessions.length - 1 || sessions[currentIdx].status !== SessionStatus.COMPLETED || view !== 'course') ? 'opacity-0 scale-50' : 'hover:scale-110 active:scale-95 hover:bg-[#2d0a0a] ring-4 ring-[#d4af37]/20'}
            `}
          >
            <span className="font-black uppercase tracking-[0.2em] text-sm">Próxima Agudeza</span>
            <ChevronRight size={32} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
