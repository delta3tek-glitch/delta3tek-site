import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Server, 
  ShieldCheck, 
  Code, 
  Database,
  Building2,
  Mail,
  ArrowLeft,
  CheckCircle2,
  Download,
  FileText,
  Briefcase,
  Lock,
  Award,
  BarChart3,
  Globe
} from 'lucide-react';

/* --- CUSTOM SVG LOGO COMPONENT --- */
const BrandLogo = ({ className }) => (
  <svg viewBox="0 0 360 80" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(10, 10)">
      <path d="M 30 0 L 0 55 L 15 55 L 38 12 Z" fill="#1e3a8a" />
      <path d="M 30 0 L 60 55 L 45 55 L 22 12 Z" fill="#b48c5a" />
      <path d="M 5 45 L 55 45 L 48 55 L 12 55 Z" fill="#334155" />
      <circle cx="30" cy="30" r="9" fill="none" stroke="#475569" strokeWidth="2.5" strokeDasharray="4 2"/>
      <circle cx="30" cy="30" r="5" fill="none" stroke="#475569" strokeWidth="1.5" />
      <text x="30" y="34" fontSize="11" fontWeight="bold" fill="#475569" textAnchor="middle" fontFamily="sans-serif">3</text>
    </g>
    <text x="85" y="48" fontSize="38" fontWeight="900" fontFamily="sans-serif" letterSpacing="-1">
      <tspan fill="#1e3a8a">Delta</tspan>
      <tspan fill="#b48c5a">3</tspan>
      <tspan fill="#334155">Tek</tspan>
    </text>
    <text x="88" y="65" fontSize="10" fontWeight="bold" fill="#1e3a8a" fontFamily="sans-serif" letterSpacing="1.2">
      INTEGRATED TECHNOLOGY SOLUTIONS
    </text>
  </svg>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle subtle nav shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavClick = (e, page, hashId) => {
    e.preventDefault();
    if (currentPage !== page) setCurrentPage(page);
    if (hashId) {
      setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
    setIsMobileMenuOpen(false);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-[#b48c5a] selection:text-white">
      
      {/* Top Bar - Sleeker & More Refined */}
      <div className="bg-slate-950 text-gray-400 py-2 px-4 text-[11px] font-mono hidden md:block border-b border-slate-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center tracking-widest uppercase"><ShieldCheck size={14} className="mr-2 text-[#b48c5a]"/> Cleared Facility & Personnel</span>
          </div>
          <div className="flex space-x-6 uppercase tracking-widest">
            <a href="#contact" onClick={(e) => handleNavClick(e, 'home', 'contact')} className="hover:text-white transition-colors">Partnering</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'home', 'contact')} className="hover:text-white transition-colors">Careers</a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Added backdrop blur and smooth scroll state */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-0' : 'bg-white py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex-shrink-0 flex items-center group">
              <BrandLogo className="h-14 sm:h-16 w-auto group-hover:opacity-90 transition-opacity duration-300 origin-left" />
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#" onClick={(e) => handleNavClick(e, 'home')} className={`font-bold transition-colors text-sm tracking-wide ${currentPage === 'home' ? 'text-[#1e3a8a]' : 'text-slate-600 hover:text-[#b48c5a]'}`}>Home</a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'home', 'services')} className="text-slate-600 hover:text-[#b48c5a] font-bold transition-colors text-sm tracking-wide">Capabilities</a>
              <a href="#performance" onClick={(e) => handleNavClick(e, 'home', 'performance')} className="text-slate-600 hover:text-[#b48c5a] font-bold transition-colors text-sm tracking-wide">Past Performance</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'home', 'about')} className="text-slate-600 hover:text-[#b48c5a] font-bold transition-colors text-sm tracking-wide">Firm Profile</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'home', 'contact')} className="bg-[#1e3a8a] hover:bg-slate-900 text-white px-6 py-2.5 rounded-md font-bold transition-all shadow-[0_4px_14px_0_rgba(30,58,138,0.39)] hover:shadow-[0_6px_20px_rgba(30,58,138,0.23)] hover:-translate-y-0.5 text-sm tracking-wide">
                Contact Us
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-[#1e3a8a] focus:outline-none p-2">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl">
            <div className="px-4 pt-4 pb-8 space-y-3 bg-white">
              <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="block px-3 py-3 rounded-md text-base font-bold text-slate-800 hover:bg-slate-50 hover:text-[#1e3a8a]">Home</a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'home', 'services')} className="block px-3 py-3 rounded-md text-base font-bold text-slate-800 hover:bg-slate-50 hover:text-[#1e3a8a]">Capabilities</a>
              <a href="#performance" onClick={(e) => handleNavClick(e, 'home', 'performance')} className="block px-3 py-3 rounded-md text-base font-bold text-slate-800 hover:bg-slate-50 hover:text-[#1e3a8a]">Past Performance</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'home', 'about')} className="block px-3 py-3 rounded-md text-base font-bold text-slate-800 hover:bg-slate-50 hover:text-[#1e3a8a]">Firm Profile</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'home', 'contact')} className="block px-3 py-4 rounded-md text-base font-bold text-white bg-[#1e3a8a] hover:bg-slate-900 text-center mt-6 shadow-lg">Contact Us</a>
            </div>
          </div>
        )}
      </header>

      {currentPage === 'home' && (
        <>
          {/* Premium Hero Section with Gradient, Glow & Grid */}
          <section className="relative pt-28 pb-36 md:pt-40 md:pb-48 overflow-hidden bg-slate-950">
            {/* Architectural Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
            
            {/* Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/20 via-transparent to-slate-950"></div>
            
            {/* Center Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#1e3a8a] opacity-30 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-[#b48c5a]/30 text-[#b48c5a] text-xs font-bold uppercase tracking-widest mb-10 shadow-lg backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#b48c5a] animate-pulse"></span>
                  Federal IT Solutions Partner
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
                  Azure Cloud, Cybersecurity, and DevSecOps Solutions for Federal Agencies
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                  Supporting mission-critical systems with secure, scalable, and compliant architectures. We modernize legacy infrastructure to accelerate federal missions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <a href="#capability-statement" className="bg-[#1e3a8a] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-800 transition-all duration-300 text-center shadow-[0_0_20px_rgba(30,58,138,0.5)] hover:shadow-[0_0_30px_rgba(30,58,138,0.8)] hover:-translate-y-1 flex items-center justify-center gap-2 group">
                    <Download size={20} className="group-hover:scale-110 transition-transform"/>
                    Capability Statement
                  </a>
                  <a href="#services" onClick={(e) => handleNavClick(e, 'home', 'services')} className="bg-transparent border border-slate-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 text-center flex items-center justify-center gap-2 group">
                    Explore Services <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Federal Credibility Strip (Visual & Trust Building) */}
          <section className="bg-white border-b border-gray-200 py-6 relative z-20 shadow-xl -mt-8 mx-4 sm:mx-6 lg:mx-8 rounded-xl max-w-7xl xl:mx-auto">
            <div className="flex flex-wrap justify-center md:justify-around items-center gap-6 text-sm">
              <div className="flex flex-col items-center">
                <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-1">Entity UEI</span>
                <span className="text-slate-800 font-mono font-bold tracking-wider">[PENDING_UEI]</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-200"></div>
              <div className="flex flex-col items-center">
                <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-1">CAGE Code</span>
                <span className="text-slate-800 font-mono font-bold tracking-wider">[PENDING]</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-200"></div>
              <div className="flex flex-col items-center">
                <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-1">Top NAICS</span>
                <span className="text-[#1e3a8a] font-mono font-bold tracking-wider">541511, 541512, 541519</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-200"></div>
              <div className="flex flex-col items-center">
                <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-1">Designation</span>
                <span className="bg-amber-50 text-[#b48c5a] border border-[#b48c5a]/30 px-3 py-1 rounded text-xs font-extrabold uppercase tracking-widest shadow-sm">Small Business</span>
              </div>
            </div>
          </section>

          {/* Visual Data / Stats Elements Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                <div className="p-4">
                  <div className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-2 tracking-tighter">20<span className="text-[#b48c5a]">+</span></div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years Experience</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-2 tracking-tighter">150<span className="text-[#b48c5a]">+</span></div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Cloud Migrations</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-2 tracking-tighter">100<span className="text-[#b48c5a]">%</span></div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">NIST Compliant</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-2 tracking-tighter">99.9<span className="text-[#b48c5a]">%</span></div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">System Uptime</div>
                </div>
              </div>
            </div>
          </section>

          {/* Premium Core Capabilities (Card Style) */}
          <section id="services" className="py-32 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20 max-w-3xl mx-auto">
                <span className="text-[#b48c5a] font-extrabold tracking-widest uppercase text-sm mb-4 block">Core Competencies</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Engineering Solutions for the Federal Enterprise</h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  We don't just maintain systems; we optimize them. Our engineering teams align deeply with agency missions to deliver measurable improvements.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#b48c5a]/30 transition-all duration-300 group flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="bg-slate-50 p-4 rounded-xl mr-5 group-hover:bg-[#1e3a8a] transition-colors duration-300">
                      <Server className="w-8 h-8 text-[#1e3a8a] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Enterprise IT & Cloud</h3>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg flex-grow">
                    Modernize legacy systems and migrate critical workloads to <strong className="text-slate-900 font-semibold">AWS GovCloud and Azure</strong>. Our scalable cloud architectures are designed to <strong className="text-[#b48c5a] font-semibold">reduce infrastructure costs by up to 30%</strong> while guaranteeing 99.99% availability.
                  </p>
                  <button onClick={() => navigateTo('enterprise-it')} className="inline-flex items-center text-[#1e3a8a] font-bold text-sm tracking-wide uppercase group-hover:text-[#b48c5a] transition-colors w-max">
                    Explore Capability <ArrowLeft size={16} className="ml-2 rotate-180 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#b48c5a]/30 transition-all duration-300 group flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="bg-slate-50 p-4 rounded-xl mr-5 group-hover:bg-[#1e3a8a] transition-colors duration-300">
                      <ShieldCheck className="w-8 h-8 text-[#1e3a8a] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Cybersecurity & RMF</h3>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg flex-grow">
                    Implement robust <strong className="text-slate-900 font-semibold">Zero Trust Architectures</strong> strictly aligned with NIST 800-53 standards. We streamline the Risk Management Framework (RMF) process to <strong className="text-[#b48c5a] font-semibold">accelerate ATO timelines</strong> without compromising security.
                  </p>
                  <button onClick={() => navigateTo('cybersecurity')} className="inline-flex items-center text-[#1e3a8a] font-bold text-sm tracking-wide uppercase group-hover:text-[#b48c5a] transition-colors w-max">
                    Explore Capability <ArrowLeft size={16} className="ml-2 rotate-180 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#b48c5a]/30 transition-all duration-300 group flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="bg-slate-50 p-4 rounded-xl mr-5 group-hover:bg-[#1e3a8a] transition-colors duration-300">
                      <Code className="w-8 h-8 text-[#1e3a8a] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">DevSecOps Integration</h3>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg flex-grow">
                    Bake security directly into the software lifecycle. By automating CI/CD pipelines and integrating SAST/DAST testing, we help federal development teams <strong className="text-[#b48c5a] font-semibold">reduce deployment cycles by 40%</strong> while eliminating critical vulnerabilities.
                  </p>
                  <button onClick={() => navigateTo('devsecops')} className="inline-flex items-center text-[#1e3a8a] font-bold text-sm tracking-wide uppercase group-hover:text-[#b48c5a] transition-colors w-max">
                    Explore Capability <ArrowLeft size={16} className="ml-2 rotate-180 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#b48c5a]/30 transition-all duration-300 group flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="bg-slate-50 p-4 rounded-xl mr-5 group-hover:bg-[#1e3a8a] transition-colors duration-300">
                      <Database className="w-8 h-8 text-[#1e3a8a] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Data Analytics & AI</h3>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg flex-grow">
                    Transform siloed agency data into actionable intelligence. We architect enterprise data lakes and deploy applied AI/ML models that <strong className="text-[#b48c5a] font-semibold">improve reporting accuracy and drive predictive decision-making</strong> for mission leaders.
                  </p>
                  <button onClick={() => navigateTo('data-analytics')} className="inline-flex items-center text-[#1e3a8a] font-bold text-sm tracking-wide uppercase group-hover:text-[#b48c5a] transition-colors w-max">
                    Explore Capability <ArrowLeft size={16} className="ml-2 rotate-180 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Premium Past Performance Section */}
          <section id="performance" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20 max-w-3xl mx-auto">
                <span className="text-[#b48c5a] font-extrabold tracking-widest uppercase text-sm mb-4 block">Proven Results</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Past Performance Highlights</h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  We measure our success by the outcomes we deliver for the federal government. Here are examples of how we solve complex modernization challenges.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {/* Case Study 1 */}
                <div className="bg-slate-50 rounded-2xl border border-gray-200 overflow-hidden flex flex-col h-full group hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-[#1e3a8a] px-8 py-5 flex justify-between items-center relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 pointer-events-none transform group-hover:scale-150 transition-transform duration-700"></div>
                    <span className="text-white font-bold tracking-wide uppercase text-sm relative z-10">Federal Civilian Agency</span>
                    <span className="bg-[#b48c5a] text-white px-3 py-1 text-xs rounded font-bold uppercase tracking-widest shadow-sm relative z-10">Cloud Migration</span>
                  </div>
                  <div className="p-10 flex-grow flex flex-col">
                    <div className="mb-8">
                      <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">The Challenge</h4>
                      <p className="text-slate-700 leading-relaxed text-lg">The agency relied on a costly, legacy on-premise data center that suffered from frequent latency issues and security bottlenecks, hindering citizen services.</p>
                    </div>
                    <div className="mb-8">
                      <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">Our Solution</h4>
                      <p className="text-slate-700 leading-relaxed text-lg">Architected and executed a seamless lift-and-shift migration of 150+ critical applications to a FedRAMP High Azure GovCloud environment, implementing Infrastructure as Code (IaC).</p>
                    </div>
                    <div className="mt-auto bg-white p-6 rounded-xl border border-slate-100 shadow-sm border-l-4 border-l-[#b48c5a]">
                      <h4 className="text-xs font-extrabold text-[#b48c5a] uppercase tracking-widest mb-2 flex items-center gap-2">
                         The Result
                      </h4>
                      <p className="text-slate-900 font-semibold text-lg leading-snug">Achieved a 40% reduction in system downtime and reduced annual infrastructure overhead by 25%.</p>
                    </div>
                  </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-slate-50 rounded-2xl border border-gray-200 overflow-hidden flex flex-col h-full group hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-[#1e3a8a] px-8 py-5 flex justify-between items-center relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 pointer-events-none transform group-hover:scale-150 transition-transform duration-700"></div>
                    <span className="text-white font-bold tracking-wide uppercase text-sm relative z-10">Defense Agency</span>
                    <span className="bg-[#b48c5a] text-white px-3 py-1 text-xs rounded font-bold uppercase tracking-widest shadow-sm relative z-10">DevSecOps</span>
                  </div>
                  <div className="p-10 flex-grow flex flex-col">
                    <div className="mb-8">
                      <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">The Challenge</h4>
                      <p className="text-slate-700 leading-relaxed text-lg">Manual security testing and fragmented development workflows resulted in delayed software releases and prolonged ATO (Authority to Operate) cycles.</p>
                    </div>
                    <div className="mb-8">
                      <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">Our Solution</h4>
                      <p className="text-slate-700 leading-relaxed text-lg">Designed and deployed an automated CI/CD pipeline integrated with Fortify and SonarQube, shifting security left to catch vulnerabilities during the coding phase.</p>
                    </div>
                    <div className="mt-auto bg-white p-6 rounded-xl border border-slate-100 shadow-sm border-l-4 border-l-[#b48c5a]">
                      <h4 className="text-xs font-extrabold text-[#b48c5a] uppercase tracking-widest mb-2 flex items-center gap-2">
                         The Result
                      </h4>
                      <p className="text-slate-900 font-semibold text-lg leading-snug">Reduced code deployment times from weeks to hours and accelerated the ATO process by 3 months.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Banner - Sleeker design */}
          <section className="bg-slate-900 py-16 border-y border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="text-white lg:w-1/3 text-center lg:text-left">
                  <h3 className="text-3xl font-extrabold tracking-tight mb-2">Built on Strict Standards</h3>
                  <p className="text-slate-400 font-light text-lg">We align all architecture and engineering efforts with federal mandates.</p>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-end gap-5 lg:w-2/3">
                  <div className="bg-slate-950 text-slate-300 border border-slate-800 px-6 py-4 rounded-lg shadow-inner flex items-center gap-3 font-mono text-sm font-bold tracking-wide hover:border-[#b48c5a]/50 transition-colors">
                    <Lock size={18} className="text-[#b48c5a]"/> NIST 800-53 Rev 5
                  </div>
                  <div className="bg-slate-950 text-slate-300 border border-slate-800 px-6 py-4 rounded-lg shadow-inner flex items-center gap-3 font-mono text-sm font-bold tracking-wide hover:border-[#b48c5a]/50 transition-colors">
                    <Globe size={18} className="text-[#b48c5a]"/> FedRAMP Security
                  </div>
                  <div className="bg-slate-950 text-slate-300 border border-slate-800 px-6 py-4 rounded-lg shadow-inner flex items-center gap-3 font-mono text-sm font-bold tracking-wide hover:border-[#b48c5a]/50 transition-colors">
                    <ShieldCheck size={18} className="text-[#b48c5a]"/> Zero Trust Architecture
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Firm Profile (Authority Upgrade) */}
          <section id="about" className="py-32 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[#b48c5a] font-extrabold tracking-widest uppercase text-sm mb-4 block">Firm Profile</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">About Delta3Tek</h2>
                <div className="w-20 h-1 bg-[#b48c5a] mx-auto rounded-full"></div>
              </div>
              
              <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-gray-100 mb-16">
                <p className="text-slate-700 mb-8 leading-relaxed text-xl font-light">
                  Delta3Tek LLC is an advanced technology integration firm architecting next-generation digital solutions for the public sector. Founded by enterprise IT veterans with <strong className="text-slate-900 font-bold">over 20+ years of federal contracting experience</strong>, our engineering teams bring deep-domain expertise in deploying and scaling mission-critical infrastructure.
                </p>
                <p className="text-slate-700 leading-relaxed text-xl font-light">
                  We understand that federal agencies must navigate the complex intersection of strict security compliance, continuous modernization, and legacy technical debt. Our leadership comprises <strong className="text-slate-900 font-bold">PMP-certified managers, CISSP security professionals, and AWS/Azure Certified Cloud Architects</strong>. By leveraging agile methodologies and a zero-trust mindset, our DevSecOps-driven approach ensures transparent delivery pipelines directly aligned with your strategic operational goals.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                  <div className="bg-amber-50 text-[#b48c5a] p-5 rounded-2xl mb-6">
                    <Award size={36} />
                  </div>
                  <span className="text-slate-900 font-extrabold text-xl mb-2">20+ Years Experience</span>
                  <span className="text-slate-500 text-sm font-medium">Deep federal IT domain knowledge</span>
                </div>
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                  <div className="bg-amber-50 text-[#b48c5a] p-5 rounded-2xl mb-6">
                    <Building2 size={36} />
                  </div>
                  <span className="text-slate-900 font-extrabold text-xl mb-2">Cleared Personnel</span>
                  <span className="text-slate-500 text-sm font-medium">Ready for secure environment tasks</span>
                </div>
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                  <div className="bg-amber-50 text-[#b48c5a] p-5 rounded-2xl mb-6">
                    <FileText size={36} />
                  </div>
                  <span className="text-slate-900 font-extrabold text-xl mb-2">Certified Experts</span>
                  <span className="text-slate-500 text-sm font-medium">CISSP, PMP, AWS & Azure Certified</span>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Subpages Content */}
      {currentPage === 'enterprise-it' && <EnterpriseITPage navigateTo={navigateTo} />}
      {currentPage === 'cybersecurity' && <CybersecurityPage navigateTo={navigateTo} />}
      {currentPage === 'devsecops' && <DevSecOpsPage navigateTo={navigateTo} />}
      {currentPage === 'data-analytics' && <DataAnalyticsPage navigateTo={navigateTo} />}

      {/* Premium Footer */}
      <footer id="contact" className="bg-slate-950 text-white pt-20 pb-10 border-t-[8px] border-[#b48c5a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand - Span 5 cols */}
            <div className="md:col-span-5">
              <div className="bg-white p-4 inline-block rounded-xl mb-8 shadow-md">
                <BrandLogo className="h-16 w-auto" />
              </div>
              <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md font-light">
                Delta3Tek LLC delivers excellence in federal IT modernization, engineering secure cloud environments and automating DevSecOps pipelines.
              </p>
              <div className="text-sm font-mono text-slate-500 space-y-2 bg-slate-900 inline-block p-4 rounded-lg border border-slate-800">
                <p><span className="text-slate-600 uppercase tracking-widest text-[10px] block mb-1">Entity UEI</span> <span className="font-bold text-white">[PENDING]</span></p>
                <div className="w-full h-px bg-slate-800 my-2"></div>
                <p><span className="text-slate-600 uppercase tracking-widest text-[10px] block mb-1">CAGE Code</span> <span className="font-bold text-white">[PENDING]</span></p>
              </div>
            </div>

            {/* Quick Links - Span 3 cols */}
            <div className="md:col-span-3">
              <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest text-sm border-b border-slate-800 pb-4">Quick Links</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                <li><a href="#" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-white transition-colors flex items-center group"><ChevronRight size={14} className="mr-2 text-[#b48c5a] group-hover:translate-x-1 transition-transform"/> Home</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, 'home', 'services')} className="hover:text-white transition-colors flex items-center group"><ChevronRight size={14} className="mr-2 text-[#b48c5a] group-hover:translate-x-1 transition-transform"/> Core Capabilities</a></li>
                <li><a href="#performance" onClick={(e) => handleNavClick(e, 'home', 'performance')} className="hover:text-white transition-colors flex items-center group"><ChevronRight size={14} className="mr-2 text-[#b48c5a] group-hover:translate-x-1 transition-transform"/> Past Performance</a></li>
                <li><a href="#about" onClick={(e) => handleNavClick(e, 'home', 'about')} className="hover:text-white transition-colors flex items-center group"><ChevronRight size={14} className="mr-2 text-[#b48c5a] group-hover:translate-x-1 transition-transform"/> Firm Profile</a></li>
              </ul>
            </div>

            {/* Contact Info - Span 4 cols */}
            <div className="md:col-span-4">
              <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest text-sm border-b border-slate-800 pb-4">Contact Us</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start bg-slate-900 border border-slate-800 p-5 rounded-xl">
                  <Building2 className="w-5 h-5 text-[#b48c5a] mr-4 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-base font-light">Arcola, Virginia<br/>United States</span>
                </li>
                <li className="flex items-center bg-slate-900 border border-slate-800 p-5 rounded-xl group hover:border-[#b48c5a]/50 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 text-[#b48c5a] mr-4 flex-shrink-0" />
                  <a href="mailto:info@delta3tek.com" className="group-hover:text-white transition-colors font-medium text-base">info@delta3tek.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-light">
            <p>&copy; {new Date().getFullYear()} Delta3Tek LLC. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 font-medium">
              <a href="#" className="hover:text-[#b48c5a] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#b48c5a] transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-[#b48c5a] transition-colors">Section 508 Accessibility</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

/* =========================================
   SUBPAGE COMPONENTS & HELPERS
   ========================================= */

const PageHeader = ({ title, description, icon: Icon, navigateTo }) => (
  <section className="bg-slate-950 text-white pt-16 pb-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <button onClick={() => navigateTo('home')} className="flex items-center text-[#b48c5a] hover:text-white mb-10 transition-colors font-extrabold text-xs tracking-widest uppercase group">
        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Return to Homepage
      </button>
      <div className="flex items-center gap-6 mb-8">
        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-inner">
          <Icon size={40} className="text-[#b48c5a]" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">{title}</h1>
      </div>
      <p className="text-xl md:text-2xl text-slate-300 max-w-4xl leading-relaxed font-light">
        {description}
      </p>
    </div>
  </section>
);

const FeatureList = ({ features }) => (
  <ul className="space-y-5">
    {features.map((feature, idx) => (
      <li key={idx} className="flex items-start">
        <CheckCircle2 className="w-6 h-6 text-[#b48c5a] mr-4 flex-shrink-0 mt-0.5" />
        <span className="text-slate-800 text-lg font-medium leading-snug">{feature}</span>
      </li>
    ))}
  </ul>
);

const EnterpriseITPage = ({ navigateTo }) => (
  <div className="animate-in fade-in duration-500 bg-gray-50 min-h-[60vh]">
    <PageHeader 
      title="Enterprise IT & Cloud" 
      description="Modernize legacy systems and migrate critical workloads to AWS GovCloud and Azure. We architect scalable solutions designed to reduce infrastructure maintenance costs."
      icon={Server}
      navigateTo={navigateTo}
    />
    <section className="py-24 -mt-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Next-Generation Infrastructure</h2>
            <p className="text-slate-700 text-xl leading-relaxed mb-8 font-light">
              At Delta3Tek, we understand the critical nature of government IT modernization. Relying on outdated, monolithic legacy systems presents significant security vulnerabilities and operational bottlenecks. We engineer seamless transitions to modern, scalable cloud environments.
            </p>
            <p className="text-slate-700 text-xl leading-relaxed mb-8 font-light">
              Our cloud architects possess extensive experience in designing multi-cloud and hybrid environments (AWS, Azure, Google Cloud Platform) that strictly adhere to FedRAMP compliance requirements. By implementing Infrastructure as Code (IaC), we ensure your deployments are repeatable, secure, and easily auditable.
            </p>
          </div>
          <div className="lg:w-1/2 bg-slate-100 p-12 rounded-3xl border border-slate-200 mt-10 lg:mt-0 shadow-inner">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-10 border-b border-slate-200 pb-5 uppercase tracking-widest text-sm">Key Capabilities</h3>
            <FeatureList features={[
              "Secure Cloud Migrations (AWS GovCloud, Azure)",
              "Legacy System Modernization & Refactoring",
              "Infrastructure as Code (IaC) with Terraform",
              "FedRAMP & DISA IL4/IL5 Compliant Architectures",
              "High-Availability & Disaster Recovery Planning",
              "24/7 Operations & Infrastructure Management"
            ]} />
          </div>
        </div>
      </div>
    </section>
  </div>
);

const CybersecurityPage = ({ navigateTo }) => (
  <div className="animate-in fade-in duration-500 bg-gray-50 min-h-[60vh]">
    <PageHeader 
      title="Cybersecurity & RMF" 
      description="Implement robust Zero Trust Architectures strictly aligned with NIST 800-53 standards. We streamline the Risk Management Framework process to accelerate ATO."
      icon={ShieldCheck}
      navigateTo={navigateTo}
    />
    <section className="py-24 -mt-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Information Assurance & Defense</h2>
            <p className="text-slate-700 text-xl leading-relaxed mb-8 font-light">
              Securing federal data against evolving threat landscapes is our paramount objective. Delta3Tek approaches cybersecurity not just as a compliance checklist, but as a foundational element built into every layer of your IT enterprise.
            </p>
            <p className="text-slate-700 text-xl leading-relaxed mb-8 font-light">
              We specialize in migrating agencies from perimeter-based security to a modern Zero Trust Architecture (ZTA). Our certified security professionals (CISSP) expertly navigate the NIST Risk Management Framework (RMF), ensuring your systems achieve and maintain their Authority to Operate (ATO) without stifling operational efficiency.
            </p>
          </div>
          <div className="lg:w-1/2 bg-slate-100 p-12 rounded-3xl border border-slate-200 mt-10 lg:mt-0 shadow-inner">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-10 border-b border-slate-200 pb-5 uppercase tracking-widest text-sm">Key Capabilities</h3>
            <FeatureList features={[
              "Zero Trust Architecture (ZTA) Implementation",
              "NIST 800-53 RMF & ATO Support",
              "CMMC Readiness & Compliance Consulting",
              "Vulnerability Assessments & Penetration Testing",
              "Continuous Monitoring & Threat Hunting",
              "Identity, Credential, and Access Management (ICAM)"
            ]} />
          </div>
        </div>
      </div>
    </section>
  </div>
);

const DevSecOpsPage = ({ navigateTo }) => (
  <div className="animate-in fade-in duration-500 bg-gray-50 min-h-[60vh]">
    <PageHeader 
      title="DevSecOps Integration" 
      description="Bake security directly into the software lifecycle. We automate CI/CD pipelines to help federal development teams reduce deployment cycles by 40%."
      icon={Code}
      navigateTo={navigateTo}
    />
    <section className="py-24 -mt-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Secure, Rapid Delivery Pipelines</h2>
            <p className="text-slate-700 text-xl leading-relaxed mb-8 font-light">
              Traditional software development methodologies often treat security as an afterthought, leading to delayed deployments and increased vulnerabilities. Delta3Tek implements a "Shift-Left" paradigm, embedding automated security controls directly into your CI/CD pipelines.
            </p>
            <p className="text-slate-700 text-xl leading-relaxed mb-8 font-light">
              Our DevSecOps engineers build highly automated, containerized environments using Docker and Kubernetes. We facilitate agile transformations that break down silos between development, security, and operations teams, enabling your agency to release secure, high-quality software at mission speed.
            </p>
          </div>
          <div className="lg:w-1/2 bg-slate-100 p-12 rounded-3xl border border-slate-200 mt-10 lg:mt-0 shadow-inner">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-10 border-b border-slate-200 pb-5 uppercase tracking-widest text-sm">Key Capabilities</h3>
            <FeatureList features={[
              "CI/CD Pipeline Architecture & Automation",
              "Automated Security Testing (SAST/DAST)",
              "Containerization & Orchestration (Kubernetes)",
              "Agile & SAFe Methodology Transformations",
              "Microservices Architecture Design",
              "Continuous Deployment & Release Management"
            ]} />
          </div>
        </div>
      </div>
    </section>
  </div>
);

const DataAnalyticsPage = ({ navigateTo }) => (
  <div className="animate-in fade-in duration-500 bg-gray-50 min-h-[60vh]">
    <PageHeader 
      title="Data Analytics & AI" 
      description="Transform siloed agency data into actionable intelligence. We deploy applied AI models that improve reporting accuracy and drive predictive decision-making."
      icon={Database}
      navigateTo={navigateTo}
    />
    <section className="py-24 -mt-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Actionable Mission Intelligence</h2>
            <p className="text-slate-700 text-xl leading-relaxed mb-8 font-light">
              Federal agencies collect massive volumes of data, but extracting meaningful insights remains a persistent challenge. Delta3Tek builds robust data pipelines and enterprise data warehouses that break down silos, ensuring your data is clean, accessible, and ready for analysis.
            </p>
            <p className="text-slate-700 text-xl leading-relaxed mb-8 font-light">
              By leveraging applied Artificial Intelligence and Machine Learning, we transition organizations from descriptive reporting to predictive and prescriptive analytics. Our custom dashboarding solutions provide leadership with real-time visibility to make data-driven decisions that directly impact mission outcomes.
            </p>
          </div>
          <div className="lg:w-1/2 bg-slate-100 p-12 rounded-3xl border border-slate-200 mt-10 lg:mt-0 shadow-inner">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-10 border-b border-slate-200 pb-5 uppercase tracking-widest text-sm">Key Capabilities</h3>
            <FeatureList features={[
              "Enterprise Data Warehousing & Data Lakes",
              "Predictive Analytics & Machine Learning Models",
              "Natural Language Processing (NLP) Solutions",
              "ETL/ELT Pipeline Development",
              "Interactive Business Intelligence (BI) Dashboards",
              "Data Governance & Quality Management"
            ]} />
          </div>
        </div>
      </div>
    </section>
  </div>
);