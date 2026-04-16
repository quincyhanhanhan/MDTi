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
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex items-center justify-center p-4 selection:bg-blue-200 selection:text-blue-900 overflow-hidden relative">
      {/* Soft Bright Background decorations */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-100/50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-100/50 blur-[100px] pointer-events-none" />

      <main className="w-full max-w-xl mx-auto relative z-10 py-6 md:py-10">
        <AnimatePresence mode="wait">
          {step === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-8 bg-white/60 backdrop-blur-3xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-white"
            >
              <div className="inline-flex items-center justify-center p-4 bg-blue-50 text-blue-500 rounded-2xl mb-2 shadow-sm">
                <Music className="w-10 h-10" />
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 pb-2">
                五月天系人格测试
              </h1>
              <p className="text-base md:text-lg text-gray-500 font-medium max-w-sm mx-auto leading-relaxed">
                测测你的灵魂磁场，属于五月天宇宙里的哪个人物？是主场担当，还是最强辅助？
              </p>
              <button
                onClick={handleStart}
                className="mt-8 px-10 py-4 bg-gray-900 hover:bg-black text-white rounded-full font-medium text-lg transition-all hover:-translate-y-1 active:translate-y-0 shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center justify-center mx-auto gap-2"
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
              transition={{ duration: 0.4 }}
              className="w-full bg-white shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100 rounded-[2.5rem] p-6 md:p-10"
            >
              <div className="mb-8">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4 font-semibold px-2">
                  <div className="w-20">
                    {currentQuestionIndex > 0 && (
                      <button
                        onClick={handlePrevious}
                        className="flex items-center text-gray-400 hover:text-gray-800 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4 mr-0.5" />
                        上一题
                      </button>
                    )}
                  </div>
                  <span className="tracking-widest uppercase text-xs">Question {currentQuestionIndex + 1} / {questions.length}</span>
                  <div className="w-20" /> {/* Spacer to center the counter */}
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
                    initial={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
                    animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              </div>

              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentQuestionIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl md:text-2xl font-bold leading-relaxed mb-8 text-gray-800 px-2">
                    {questions[currentQuestionIndex].text}
                  </h2>

                  <div className="space-y-3">
                    {questions[currentQuestionIndex].options.map((option, idx) => {
                      const isSelected = answers[currentQuestionIndex] === option.value;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleOptionSelect(option.value)}
                          className={`w-full text-left p-4 md:p-5 rounded-2xl border-2 transition-all group flex items-center justify-between ${
                            isSelected 
                              ? 'bg-blue-50/50 border-blue-500 shadow-[0_4px_20px_rgba(59,130,246,0.1)]' 
                              : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-sm'
                          }`}
                        >
                          <span className={`text-base md:text-lg font-medium transition-colors ${isSelected ? 'text-blue-700' : 'text-gray-600 group-hover:text-gray-900'}`}>
                            {option.text}
                          </span>
                          <span className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${
                            isSelected ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-200 text-gray-300 group-hover:border-gray-400 group-hover:text-gray-400'
                          }`}>
                            <ChevronRight className="w-5 h-5" />
                          </span>
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
              className="text-center space-y-8 bg-white/60 backdrop-blur-3xl p-12 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-white"
            >
              <div className="relative w-20 h-20 mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute inset-0 border-4 border-gray-100 border-t-blue-500 rounded-full"
                />
                <Activity className="w-8 h-8 text-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-gray-500 font-medium text-lg"
              >
                正在为你匹配宇宙磁场...
              </motion.div>
            </motion.div>
          )}

          {step === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="w-full bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 rounded-[2.5rem] relative overflow-hidden max-w-2xl mx-auto"
            >
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 w-full h-3 bg-gradient-to-r ${result.character.color}`} />
              
              <div className="p-6 md:p-10 text-center h-full pt-12 md:pt-16">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-400 font-bold mb-3 uppercase tracking-widest text-xs">MAYDAY UNIVERSE ID</p>
                  
                  <h2 className={`text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r ${result.character.color}`}>
                    {result.character.name}
                  </h2>
                  
                  <div className={`inline-block px-5 py-2 rounded-full border mb-8 font-bold text-sm bg-gray-50 text-gray-700 border-gray-200`}>
                    {result.character.label}
                  </div>
                  
                  <div className="text-gray-600 text-base leading-relaxed mb-10 text-left bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-inner">
                    {result.character.description}
                  </div>

                  <div className="mb-10 text-left px-2">
                    <h3 className="text-lg font-bold text-gray-800 text-center mb-8 pb-3 border-b border-gray-100 flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                      本命宇宙成分分析
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    </h3>
                    <div className="space-y-7">
                      {dimensionsDetail.map((dim, i) => {
                        const score = result.scores[i]; // Value from 1 to 10
                        // Map score to percentage (score 1 = 0% right, score 10 = 100% right)
                        const percentRight = ((score - 1) / 9) * 100;
                        const percentLeft = 100 - percentRight;

                        return (
                          <div key={dim.id} className="relative">
                            <div className="flex justify-between items-end mb-2 text-sm">
                              <span className={`font-bold ${percentLeft >= 50 ? 'text-gray-800' : 'text-gray-400'}`}>{dim.left}</span>
                              <span className="text-gray-500 font-bold px-3 py-1 text-[10px] uppercase tracking-wider bg-white rounded-full border border-gray-200 shadow-sm z-10 absolute left-1/2 -translate-x-1/2 -top-1">
                                {dim.name}
                              </span>
                              <span className={`font-bold ${percentRight >= 50 ? 'text-gray-800' : 'text-gray-400'}`}>{dim.right}</span>
                            </div>
                            
                            <div className="h-4 bg-gray-100 rounded-full overflow-hidden flex shadow-inner border border-gray-200 relative mb-1.5">
                              <div 
                                className="h-full bg-gray-300 relative transition-all duration-1000 ease-out flex items-center pr-2 justify-end"
                                style={{ width: `${percentLeft}%` }}
                              >
                                {percentLeft > 15 && <span className="text-[10px] font-bold text-gray-600 absolute mr-1">{Math.round(percentLeft)}%</span>}
                              </div>
                              <div 
                                className={`h-full bg-gradient-to-r ${result.character.color} relative transition-all duration-1000 ease-out flex items-center pl-2 justify-start`}
                                style={{ width: `${percentRight}%`, opacity: 0.85 }}
                              >
                                {percentRight > 15 && <span className="text-[10px] font-bold text-white absolute ml-1">{Math.round(percentRight)}%</span>}
                              </div>
                            </div>
                            
                            <div className="flex justify-between text-[11px] font-medium text-gray-400">
                              <span className={percentLeft >= 50 ? 'text-gray-600' : ''}>{dim.descL}</span>
                              <span className={percentRight >= 50 ? 'text-gray-600' : ''}>{dim.descR}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    onClick={handleStart}
                    className="flex items-center justify-center gap-2 mx-auto px-8 py-4 rounded-full bg-gray-900 hover:bg-black text-white font-medium transition-all shadow-md hover:-translate-y-1 active:translate-y-0"
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
