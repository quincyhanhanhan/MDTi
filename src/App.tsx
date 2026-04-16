import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Play, RotateCcw, ChevronRight, ChevronLeft, Activity } from 'lucide-react';
import { questions, characters, CharacterResult } from './data';

interface AppResult {
  character: CharacterResult;
  scores: [number, number, number, number];
}

const dimensionsDetail = [
  { id: 'dim0', name: '社交磁场', left: '沉静内敛', right: '热力外放', descL: '独处储能', descR: '人群充电' },
  { id: 'dim1', name: '脑洞宇宙', left: '务实落地', right: '天马行空', descL: '注重现实细节', descR: '仰望浪漫星空' },
  { id: 'dim2', name: '情绪回路', left: '理智主导', right: '共情至上', descL: '逻辑层层解析', descR: '感受永远至上' },
  { id: 'dim3', name: '行动节拍', left: '计划导航', right: '随性盲盒', descL: '追求秩序掌控', descR: '享受灵活自由' },
];

export default function App() {
  const [step, setStep] = useState<'start' | 'quiz' | 'calculating' | 'result'>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<AppResult | null>(null);

  const handleStart = () => {
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResult(null);
  };

  const handleOptionSelect = (value: number) => {
    const newAnswers = { ...answers, [currentQuestionIndex]: value };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateResult = (finalAnswers: Record<number, number>) => {
    setStep('calculating');
    
    // Base score 1 for each dim
    const finalScores: [number, number, number, number] = [1, 1, 1, 1];
    
    questions.forEach((q, idx) => {
      if (finalAnswers[idx] !== undefined) {
        finalScores[q.dimension] += finalAnswers[idx];
      }
    });

    // Find closest character (Euclidean distance)
    let closestChar = characters[0];
    let minDistance = Infinity;

    for (const char of characters) {
      let distance = 0;
      for (let i = 0; i < 4; i++) {
        distance += Math.pow(finalScores[i] - char.vector[i], 2);
      }
      distance = Math.sqrt(distance);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestChar = char;
      }
    }

    setTimeout(() => {
      setResult({ character: closestChar, scores: finalScores });
      setStep('result');
    }, 2000); // 2 second fake calculating delay
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex items-center justify-center p-4 selection:bg-blue-500 selection:text-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[100px] pointer-events-none" />

      <main className="w-full max-w-xl mx-auto relative z-10 py-6">
        <AnimatePresence mode="wait">
          {step === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-8"
            >
              <div className="inline-flex items-center justify-center p-4 bg-blue-500/10 rounded-full mb-4">
                <Music className="w-12 h-12 text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 pb-2">
                五月天系人格测试
              </h1>
              <p className="text-lg text-slate-400 font-light max-w-md mx-auto">
                测测你的灵魂磁场，属于五月天宇宙里的哪个人物？<br />是主场担当，还是最强辅助？
              </p>
              <button
                onClick={handleStart}
                className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center mx-auto gap-2"
              >
                <Play className="w-5 h-5 fill-current" />
                开始探寻宇宙
              </button>
            </motion.div>
          )}

          {step === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-6 md:p-8"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm text-slate-400 mb-4 font-medium">
                  <div className="w-20">
                    {currentQuestionIndex > 0 && (
                      <button
                        onClick={handlePrevious}
                        className="flex items-center text-slate-400 hover:text-blue-400 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        上一题
                      </button>
                    )}
                  </div>
                  <span>Question {currentQuestionIndex + 1} / {questions.length}</span>
                  <div className="w-20" /> {/* Spacer to center the counter */}
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
                    animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentQuestionIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 text-slate-100">
                    {questions[currentQuestionIndex].text}
                  </h2>

                  <div className="space-y-3">
                    {questions[currentQuestionIndex].options.map((option, idx) => {
                      const isSelected = answers[currentQuestionIndex] === option.value;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleOptionSelect(option.value)}
                          className={`w-full text-left p-4 rounded-2xl border transition-all group flex items-center justify-between ${
                            isSelected 
                              ? 'bg-blue-600/20 border-blue-500/50' 
                              : 'bg-slate-800/30 border-slate-700 hover:bg-slate-800 hover:border-blue-500/50'
                          }`}
                        >
                          <span className={`${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'} text-lg`}>
                            {option.text}
                          </span>
                          <ChevronRight className={`w-5 h-5 transition-colors ${isSelected ? 'text-blue-400' : 'text-slate-600 group-hover:text-blue-400'}`} />
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {step === 'calculating' && (
            <motion.div
              key="calculating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="w-16 h-16 border-4 border-slate-800 border-t-blue-500 rounded-full mx-auto"
              />
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-slate-400 text-lg flex items-center justify-center gap-2"
              >
                <Activity className="w-5 h-5" />
                正在为你匹配宇宙磁场...
              </motion.div>
            </motion.div>
          )}

          {step === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`w-full bg-gradient-to-br ${result.character.color} p-1 rounded-3xl shadow-2xl relative overflow-hidden max-w-2xl mx-auto`}
            >
              <div className="bg-slate-950/90 backdrop-blur-xl rounded-[22px] p-6 md:p-8 text-center h-full">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-blue-400 font-mono mb-2 uppercase tracking-widest text-sm">MAYDAY UNIVERSE ID</p>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    {result.character.name}
                  </h2>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm mb-6 font-medium">
                    {result.character.label}
                  </div>
                  
                  <p className="text-slate-300 text-base leading-relaxed mb-10 text-left bg-slate-900/50 p-5 rounded-2xl border border-slate-800 shadow-inner">
                    {result.character.description}
                  </p>

                  <div className="mb-10 text-left">
                    <h3 className="text-lg font-bold text-white text-center mb-6 pb-2 border-b border-white/10 inline-block w-full">【本命宇宙成分分析】</h3>
                    <div className="space-y-6">
                      {dimensionsDetail.map((dim, i) => {
                        const score = result.scores[i]; // Value from 1 to 10
                        // Map score to percentage (score 1 = 0% right, score 10 = 100% right)
                        const percentRight = ((score - 1) / 9) * 100;
                        const percentLeft = 100 - percentRight;

                        return (
                          <div key={dim.id}>
                            <div className="flex justify-between items-end mb-2 text-sm px-1">
                              <span className={`font-medium ${percentLeft >= 50 ? 'text-white' : 'text-slate-500'}`}>{dim.left}</span>
                              <span className="text-slate-300 font-bold px-3 py-0.5 text-[11px] bg-slate-800 rounded-full border border-slate-700/50">{dim.name}</span>
                              <span className={`font-medium ${percentRight >= 50 ? 'text-white' : 'text-slate-500'}`}>{dim.right}</span>
                            </div>
                            <div className="h-4 bg-slate-900 rounded-full overflow-hidden flex shadow-inner border border-slate-800">
                              <div 
                                className="h-full bg-gradient-to-r from-slate-400 to-slate-300 relative transition-all duration-1000 ease-out flex items-center pr-2 justify-end"
                                style={{ width: `${percentLeft}%` }}
                              >
                                {percentLeft > 15 && <span className="text-[10px] font-bold text-slate-800 absolute">{Math.round(percentLeft)}%</span>}
                              </div>
                              <div 
                                className="h-full bg-gradient-to-r from-blue-600 to-purple-500 relative transition-all duration-1000 ease-out flex items-center pl-2 justify-start"
                                style={{ width: `${percentRight}%` }}
                              >
                                {percentRight > 15 && <span className="text-[10px] font-bold text-white absolute">{Math.round(percentRight)}%</span>}
                              </div>
                            </div>
                            <div className="flex justify-between mt-2 text-[11px] text-slate-400 px-1">
                              <span className={percentLeft >= 50 ? 'text-blue-300' : ''}>{dim.descL}</span>
                              <span className={percentRight >= 50 ? 'text-blue-300' : ''}>{dim.descR}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    onClick={handleStart}
                    className="flex items-center justify-center gap-2 mx-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
                  >
                    <RotateCcw className="w-4 h-4" />
                    再测一次
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
