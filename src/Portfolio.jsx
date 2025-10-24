import React, { useState, useEffect } from 'react';
import { Download, Moon, Sun, ArrowRight, Mail, Briefcase, GraduationCap, Folder, X, Wifi, Battery, Volume2, Github, Linkedin, FileText, TrendingUp, Code, BarChart3 } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [stage, setStage] = useState('desk');
  const [isZooming, setIsZooming] = useState(false);
  const [openFolder, setOpenFolder] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showSkills, setShowSkills] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (stage === 'desk') {
        const { clientX, clientY } = event;
        const x = (clientX / window.innerWidth - 0.5) * 2;
        const y = (clientY / window.innerHeight - 0.5) * 2;
        setMousePos({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [stage]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    { id: 'pairs-trading', name: 'Quantitative Pairs Trading Strategy', type: 'Python', icon: TrendingUp, description: 'Achieved a Sharpe Ratio of 1.41 (+168% RoC) with a backtesting engine developed from scratch.', tech: ['Python', 'NumPy', 'Pandas', 'Z-score'], date: 'Oct 2025', color: 'from-blue-500 to-cyan-500', github: 'https://github.com/nadamousteau/pairs-trading-strategy', report: 'https://github.com/nadamousteau/pairs-trading-strategy/blob/main/REPORT.md' },
    { id: 'hsbc-alm', name: 'HSBC ALM Simulator', type: 'Python', icon: BarChart3, description: 'ALM simulator to optimize retirement portfolio strategies under stochastic scenarios.', tech: ['Python', 'Stochastic Calculus', 'Portfolio Optimization'], date: 'Oct 2025', color: 'from-red-500 to-orange-500', github: 'https://github.com/nadamousteau/hsbc-alm-simulator', report: null },
    { id: 'jpmorgan-credit', name: 'J.P. Morgan Credit Risk Model', type: 'Python', icon: Code, description: 'Credit risk model using dynamic programming to estimate PD from FICO scores.', tech: ['Python', 'Dynamic Programming', 'Credit Risk'], date: 'Oct 2025', color: 'from-purple-500 to-pink-500', github: 'https://github.com/nadamousteau/jpmorgan-credit-risk', report: null },
  ];

  const experiences = [
    { title: 'HSBC - Quantitative Research Project', period: 'Oct 2025 - Present', description: 'ALM simulator for retirement portfolio strategies.', icon: TrendingUp, color: 'from-red-500 to-orange-500' },
    { title: 'Assurances Crédit Mutuel - Actuarial Intern', period: 'Jun - Aug 2025', description: 'Developed a life insurance projection model in VBA OOP.', icon: BarChart3, color: 'from-blue-500 to-cyan-500' },
    { title: 'Forum Trium ENSAE - Vice-President', period: 'May 2025 - Present', description: 'Coordinated the 34th edition, managing corporate relations.', icon: Briefcase, color: 'from-purple-500 to-pink-500' }
  ];

  const handleLaptopClick = () => { if (stage === 'desk' && !isZooming) { setIsZooming(true); setTimeout(() => { setStage('lockscreen'); setIsZooming(false); }, 1000); } };
  const handleUnlock = () => setStage('desktop');
  const handleFolderClick = (folderId) => { setOpenFolder(folderId); setSelectedFile(null); setStage('folder'); };
  const handleIconClick = (icon) => { (icon.type === 'mail') ? handleFolderClick('contact') : handleFolderClick(icon.id); };
  const handleBack = () => {
    if (showSkills) setShowSkills(false);
    else if (selectedFile) setSelectedFile(null);
    else if (stage === 'folder') { setOpenFolder(null); setSelectedFile(null); setStage('desktop'); }
    else if (stage === 'desktop') setStage('lockscreen');
    else if (stage === 'lockscreen') setStage('desk');
  };

  const desktopIcons = [
    { id: 'projects', name: 'Projects', icon: Folder, color: 'from-blue-400 to-blue-600', type: 'folder' },
    { id: 'experience', name: 'Experience', icon: Briefcase, color: 'from-purple-400 to-purple-600', type: 'folder' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: 'from-green-400 to-green-600', type: 'folder' },
    { id: 'contact', name: 'Contact', icon: Mail, color: 'from-pink-400 to-pink-600', type: 'mail' },
  ];

  const renderFileContent = (file) => (
    <div className="p-6 h-full overflow-y-auto"><div className="max-w-4xl mx-auto"><div className="mb-8"><div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${file.color} text-white mb-4`}><file.icon size={20} /><span className="font-semibold">{file.type}</span></div><h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{file.name}</h1><p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{file.date}</p><p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>{file.description}</p></div><div className="mb-8"><h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Technologies Used</h3><div className="flex flex-wrap gap-2">{file.tech.map((tech, i) => (<span key={i} className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>{tech}</span>))}</div></div><div className="flex gap-3"><a href={file.github} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}><Github size={16} />View Code</a>{file.report && (<a href={file.report} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${darkMode ? 'bg-purple-700 hover:bg-purple-600 text-white' : 'bg-purple-100 hover:bg-purple-200 text-purple-800'}`}><FileText size={16} />View Report</a>)}</div></div></div>
  );

  return (
<div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 animate-gradient'} transition-all duration-500 overflow-hidden`}>      <div className="fixed top-6 right-6 flex items-center gap-3 z-[100]">
        {(stage !== 'desk' || showSkills) && (<button onClick={handleBack} className={`px-4 py-2 backdrop-blur-xl ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} rounded-full shadow-2xl hover:scale-105 transition-all text-sm font-medium border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>← Back</button>)}
        <button onClick={() => setDarkMode(!darkMode)} className={`p-2 backdrop-blur-xl ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} rounded-full shadow-2xl hover:scale-105 transition-all border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>{darkMode ? <Sun className="text-yellow-500" size={18} /> : <Moon className="text-purple-600" size={18} />}</button>
        <a href="/Resume_Nada_Mousteau.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all flex items-center gap-2 text-sm font-medium"><Download size={14} />CV</a>
      </div>

      {/* ==================================================================== */}
      {/* SECTION MODIFIÉE : DESK VIEW                                        */}
      {/* ==================================================================== */}
      {stage === 'desk' && !showSkills && (
        <div 
          className="w-full h-screen relative flex flex-col items-center justify-center cursor-pointer group"
          onClick={handleLaptopClick}
        >
          {/* Fond animé */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className={`absolute inset-[-200%] animate-spin-slow ${darkMode ? 'opacity-30' : 'opacity-100'}`}>
              <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
            </div>
          </div>
          
          {/* Ordinateur (maintenant de grande taille) */}
          <div className="relative z-10 w-full max-w-4xl group-hover:scale-105 transition-transform duration-300">
            {/* Écran avec effet de verre dépoli */}
            <div className={`aspect-[16/10] ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-t-2xl p-4 shadow-2xl`}>
              <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Flou en arrière-plan */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 blur-md"></div>
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Message de bienvenue */}
                <div className={`text-center transition-opacity duration-300 ${isZooming ? 'opacity-0' : 'opacity-80 group-hover:opacity-100'}`}>
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg">NM</div>
                    <h1 className="text-2xl font-bold text-white">Nada Mousteau</h1>
                    <p className="text-sm text-white/80 mt-1">Click to discover my portfolio</p>
                </div>
              </div>
            </div>
            {/* Base du clavier */}
            <div className={`w-full h-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-b-2xl`}></div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* LE RESTE DU CODE EST INCHANGÉ                                      */}
      {/* ==================================================================== */}
      {(stage === 'lockscreen' || stage === 'desktop' || stage === 'folder') && !showSkills && (
        <div className="fixed inset-0 flex items-center justify-center p-8 z-40">
          <div className={`w-full max-w-4xl ${darkMode ? 'bg-gray-800' : 'bg-gray-300'} rounded-2xl shadow-2xl relative border-8 ${darkMode ? 'border-gray-900' : 'border-gray-400'}`}>
            <div className="rounded-t-xl overflow-hidden" style={{ height: '90vh' }}>
              {stage === 'lockscreen' && (
                <div className="h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center text-white w-full h-full p-4 overflow-y-auto">
                    <div className="text-center mb-6">
                      <h1 className="text-7xl font-light tracking-tight mb-2">{currentTime}</h1>
                      <p className="text-lg font-medium capitalize opacity-95">{currentDate}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/30 w-full max-w-2xl">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl ring-4 ring-white/30">NM</div>
                      <div className="text-center space-y-2 mb-6">
                        <h2 className="text-2xl font-bold">Nada Mousteau</h2>
                        <p className="text-white/95 text-sm font-semibold">Engineering Student • Quantitative Finance</p>
                        <p className="text-white/85 text-xs">ENSAE Paris • 2nd year</p>
                        <div className="pt-2 space-y-2">
                          <p className="text-white/95 font-semibold text-sm">Looking for gap year internship (6 months)</p>
                          <p className="text-white/80 text-xs leading-relaxed">Specializing in stochastic modeling, derivative pricing, and quantitative risk management.</p>
                        </div>
                      </div>
                      <button onClick={handleUnlock} className="mx-auto w-24 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-lg rounded-full font-semibold transition-all border-2 border-white/40 flex items-center justify-center group shadow-xl">
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {stage === 'desktop' && (
                <div className="h-full relative overflow-hidden bg-white/10 backdrop-blur-2xl">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 border-b border-white/20 flex items-center justify-between px-4 text-white text-sm z-20 shadow-lg">
                    <div className="flex items-center gap-4"><span className="text-lg">⭐</span><span className="font-semibold">Nada's Computer</span></div>
                    <div className="flex items-center gap-3"><Wifi size={14} /><Battery size={14} /><Volume2 size={14} /><span className="font-medium">{currentTime}</span></div>
                  </div>
                  <div className="pt-8 h-full">
                    <div className="w-full h-full p-8 grid grid-cols-2 grid-rows-2 gap-8">
                      {desktopIcons.map((icon) => (
                        <div key={icon.id} onClick={() => handleIconClick(icon)} onMouseEnter={() => setHoveredIcon(icon.id)} onMouseLeave={() => setHoveredIcon(null)} className="cursor-pointer group flex flex-col items-center justify-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all shadow-lg">
                          <div className={`w-24 h-24 bg-gradient-to-br ${icon.color} rounded-2xl shadow-2xl flex items-center justify-center ring-2 ring-white/30 transition-transform group-hover:scale-110`}>
                            <icon.icon size={50} className="text-white drop-shadow-lg" />
                          </div>
                          <p className="text-md font-bold text-white drop-shadow-lg text-center">{icon.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {stage === 'folder' && openFolder && (
                <div className="h-full p-4" style={{ backgroundColor: darkMode ? '#0f172a' : '#ddd6fe' }}>
                  {!selectedFile ? (
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-xl h-full overflow-hidden flex flex-col`}>
                      <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} px-4 py-2 flex items-center justify-between border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'} flex-shrink-0`}>
                        <div className="flex items-center gap-2"><Folder className="text-blue-500" size={20} /><h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{desktopIcons.find(i => i.id === openFolder)?.name}</h3></div>
                        <button onClick={handleBack} className="w-6 h-6 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-all"><X size={14} className="text-white" /></button>
                      </div>
                      <div className="p-4 space-y-2 overflow-y-auto">
                        {openFolder === 'projects' && projects.map((project) => (<div key={project.id} onClick={() => setSelectedFile(project)} className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'} p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3`}><div className={`w-8 h-8 bg-gradient-to-br ${project.color} rounded flex items-center justify-center flex-shrink-0`}><project.icon size={20} className="text-white" /></div><div><p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.name}</p><p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.type}</p></div></div>))}
                        {openFolder === 'experience' && experiences.map((exp, i) => (<div key={i} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg shadow-md border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}><div className="flex items-start gap-3 mb-2"><div className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}><exp.icon size={24} className="text-white" /></div><div className="flex-1"><p className={`font-bold text-sm mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{exp.title}</p><p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.period}</p></div></div><p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p></div>))}
                        {openFolder === 'education' && (<div className="space-y-4 pt-2"><div className={`${darkMode ? 'bg-gray-700' : 'bg-indigo-50'} p-6 rounded-xl shadow-md`}><div className="flex items-center gap-4 mb-4"><div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"><GraduationCap size={32} className="text-white" /></div><div><h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>ENSAE Paris</h3><p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Engineering Program • 2024 - Present</p><p className={`text-sm font-semibold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>GPA: 3.9/4.0</p></div></div><div className="flex flex-wrap gap-2">{['Stochastic Calculus', 'Econometrics', 'Financial Economics', 'Machine Learning', 'Time Series', 'Python/C++'].map((course, i) => (<span key={i} className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-gray-600 text-gray-200' : 'bg-white text-gray-700'}`}>{course}</span>))}</div></div></div>)}
                        {openFolder === 'contact' && (<div className="space-y-3 pt-2"><a href="mailto:nada.mousteau@ensae.fr" className={`flex items-center gap-3 p-4 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'} transition-all shadow-md`}><div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center"><Mail size={20} className="text-white" /></div><div><p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</p><p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>nada.mousteau@ensae.fr</p></div></a><a href="https://github.com/nadamousteau" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-4 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'} transition-all shadow-md`}><div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center"><Github size={20} className="text-white" /></div><div><p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</p><p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>github.com/nadamousteau</p></div></a><a href="https://linkedin.com/in/nadamousteau" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-4 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'} transition-all shadow-md`}><div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center"><Linkedin size={20} className="text-white" /></div><div><p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</p><p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>linkedin.com/in/nadamousteau</p></div></a></div>)}
                      </div>
                    </div>
                  ) : (
                    renderFileContent(selectedFile)
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showSkills && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/50 backdrop-blur-sm">
          <div className={`w-full max-w-4xl rounded-2xl shadow-2xl p-8 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'}`}>
            <h1 className={`text-4xl font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>📚 My Skills</h1>
            <p className={`text-lg mb-8 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>ENSAE Paris • Specialization in Quantitative Finance</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-blue-50'} rounded-xl p-6`}>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Programming</h3>
                <div className="space-y-3">{[{ name: 'Python', level: 'Expert' },{ name: 'VBA OOP', level: 'Expert' },{ name: 'R', level: 'Advanced' },{ name: 'SQL', level: 'Advanced' },{ name: 'C++', level: 'Intermediate' }].map((skill, i) => (<div key={i}><span className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span><div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-1"><div className="bg-blue-500 h-2 rounded-full" style={{ width: skill.level === 'Expert' ? '90%' : skill.level === 'Advanced' ? '75%' : '50%' }}></div></div></div>))}</div>
              </div>
              <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-green-50'} rounded-xl p-6`}>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Quantitative Finance</h3>
                <div className="space-y-3">{[{ name: 'Financial Modeling', level: 'Expert' },{ name: 'Risk Management', level: 'Advanced' },{ name: 'Derivatives Pricing', level: 'Advanced' },{ name: 'Portfolio Optimization', level: 'Advanced' },{ name: 'ALM', level: 'Advanced' }].map((skill, i) => (<div key={i}><span className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span><div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-1"><div className="bg-green-500 h-2 rounded-full" style={{ width: skill.level === 'Expert' ? '90%' : '75%' }}></div></div></div>))}</div>
              </div>
              <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-purple-50'} rounded-xl p-6`}>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>Data Science & ML</h3>
                <div className="space-y-3">{[{ name: 'Statistics', level: 'Expert' },{ name: 'Machine Learning', level: 'Advanced' },{ name: 'Econometrics', level: 'Advanced' },{ name: 'Time Series', level: 'Advanced' }].map((skill, i) => (<div key={i}><span className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span><div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-1"><div className="bg-purple-500 h-2 rounded-full" style={{ width: skill.level === 'Expert' ? '90%' : '75%' }}></div></div></div>))}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes zoom-laptop { from { transform: scale(1); } to { transform: scale(1.8); } }
        .animate-zoom-laptop { animation: zoom-laptop 1s ease-in-out forwards; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 40s linear infinite; }
      `}</style>
    </div>
  );
};

export default Portfolio;