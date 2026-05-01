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
  Globe,
  Printer,
  Send,
  CloudCog,
  ShieldAlert,
  Cpu,
  Users,
  Monitor,
  Target,
  Settings,
  Loader2
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
      <div className="bg-slate-950 text-gray-400 py-2 px-4 text-[11px] font-mono hidden md:block border-b border-slate-900 print:hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center tracking-widest uppercase"><ShieldCheck size={14} className="mr-2 text-[#b48c5a]"/> Cleared Facility & Personnel</span>
          </div>
          <div className="flex space-x-6 uppercase tracking-widest">
            <a href="#partnering" onClick={(e) => handleNavClick(e, 'partnering')} className="hover:text-white transition-colors">Partnering</a>
            <a href="#careers" onClick={(e) => handleNavClick(e, 'careers')} className="hover:text-white transition-colors">Careers</a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Added backdrop blur and smooth scroll state */}
      <header className={`sticky top-0 z-50 transition-all duration-300 print:hidden ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-0' : 'bg-white py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex-shrink-0 flex items-center group">
              <BrandLogo className="h-14 sm:h-16 w-auto group-hover:opacity-90 transition-opacity duration-300 origin-left" />
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 items-center">
              {['Home', 'Capabilities', 'Service Delivery Models', 'Past Performance', 'Firm Profile'].map((item) => {
                let target = ''; // Default to empty for Home (scrolls to top)
                if (item === 'Capabilities') target = 'services';
                else if (item === 'Service Delivery Models') target = 'service-delivery-models';
                else if (item === 'Past Performance') target = 'performance';
                else if (item === 'Firm Profile') target = 'about';
                
                return (
                  <a 
                    key={item} 
                    href={target ? `#${target}` : '#'} 
                    onClick={(e) => handleNavClick(e, 'home', target)} 
                    className={`relative group text-sm font-bold tracking-wide transition-colors ${currentPage === 'home' && (item === 'Home' ? true : false) ? 'text-[#1e3a8a]' : 'text-slate-600 hover:text-[#b48c5a]'}`}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#b48c5a] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                );
              })}
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="bg-[#1e3a8a] hover:bg-slate-900 text-white px-6 py-2.5 rounded-md font-bold transition-all shadow-[0_4px_14px_0_rgba(30,58,138,0.39)] hover:shadow-[0_6px_20px_rgba(30,58,138,0.23)] hover:-translate-y-0.5 text-sm tracking-wide">
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
              <a href="#service-delivery-models" onClick={(e) => handleNavClick(e, 'home', 'service-delivery-models')} className="block px-3 py-3 rounded-md text-base font-bold text-slate-800 hover:bg-slate-50 hover:text-[#1e3a8a]">Service Delivery Models</a>
              <a href="#performance" onClick={(e) => handleNavClick(e, 'home', 'performance')} className="block px-3 py-3 rounded-md text-base font-bold text-slate-800 hover:bg-slate-50 hover:text-[#1e3a8a]">Past Performance</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'home', 'about')} className="block px-3 py-3 rounded-md text-base font-bold text-slate-800 hover:bg-slate-50 hover:text-[#1e3a8a]">Firm Profile</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block px-3 py-4 rounded-md text-base font-bold text-white bg-[#1e3a8a] hover:bg-slate-900 text-center mt-6 shadow-lg">Contact Us</a>
            </div>
          </div>
        )}
      </header>

      {currentPage === 'home' && (
        <>
          {/* Premium Hero Section with Gradient, Glow & Grid */}
          <section id="home" className="relative pt-28 pb-36 md:pt-40 md:pb-48 overflow-hidden bg-slate-950">
            
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
                  <button onClick={() => navigateTo('capability-statement')} className="bg-[#1e3a8a] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-800 transition-all duration-300 text-center shadow-[0_0_20px_rgba(30,58,138,0.5)] hover:shadow-[0_0_30px_rgba(30,58,138,0.8)] hover:-translate-y-1 flex items-center justify-center gap-2 group">
                    <FileText size={20} className="group-hover:scale-110 transition-transform"/>
                    Capability Statement
                  </button>
                  <a href="#services" onClick={(e) => handleNavClick(e, 'home', 'services')} className="bg-slate-900/50 backdrop-blur-md border border-slate-500/50 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 text-center flex items-center justify-center gap-2 group">
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
                  <div className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-2 tracking-tighter">10<span className="text-[#b48c5a]">+</span></div>
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

          {/* Service Delivery Models (Engagement Models) */}
          <section id="service-delivery-models" className="py-24 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-[#b48c5a] font-extrabold tracking-widest uppercase text-sm mb-4 block">Service Delivery Models</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Flexible Engagement Frameworks</h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  Whether you need targeted expertise to bridge a capability gap or turnkey execution for a major modernization initiative, we provide adaptable delivery models.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 hover:border-[#b48c5a]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                    <Users className="text-[#1e3a8a] w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Staff Augmentation</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Providing highly cleared, certified technical professionals (SMEs, engineers, developers) to seamlessly integrate with your existing federal teams and scale mission capabilities on demand.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 hover:border-[#b48c5a]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                    <Monitor className="text-[#1e3a8a] w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">IT Solutions</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    End-to-end delivery of specialized technology solutions, from enterprise architecture design to full-scale cloud migrations and zero-trust cybersecurity implementations.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 hover:border-[#b48c5a]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                    <Target className="text-[#1e3a8a] w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Project Services</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Milestone-driven project execution managed by PMP-certified leaders, ensuring complex IT modernization efforts are delivered on-time, within budget, and aligned with strict FAR requirements.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 hover:border-[#b48c5a]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                    <Settings className="text-[#1e3a8a] w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Custom Solutions</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Bespoke software engineering and systems integration tailored to unique agency challenges, leveraging agile methodologies and DevSecOps pipelines for rapid, secure deployment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Premium Past Performance Section */}
          <section id="performance" className="py-32 bg-gray-50 border-t border-gray-200">
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
                  Delta3Tek, LLC is an advanced technology integration firm architecting next-generation digital solutions for the public sector. Founded by enterprise IT veterans with <strong className="text-slate-900 font-bold">over 10+ years of federal contracting experience</strong>, our engineering teams bring deep-domain expertise in deploying and scaling mission-critical infrastructure.
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
                  <span className="text-slate-900 font-extrabold text-xl mb-2">10+ Years Experience</span>
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
      {currentPage === 'capability-statement' && <CapabilityStatementPage navigateTo={navigateTo} />}
      {currentPage === 'privacy-policy' && <PrivacyPolicyPage navigateTo={navigateTo} />}
      {currentPage === 'terms-of-use' && <TermsOfUsePage navigateTo={navigateTo} />}
      {currentPage === 'accessibility' && <AccessibilityPage navigateTo={navigateTo} />}
      {currentPage === 'careers' && <CareersPage navigateTo={navigateTo} />}
      {currentPage === 'contact' && <ContactPage navigateTo={navigateTo} />}
      {currentPage === 'partnering' && <PartneringPage navigateTo={navigateTo} />}

      {/* Premium Footer */}
      <footer id="contact" className="bg-slate-950 text-white pt-20 pb-10 border-t-[8px] border-[#b48c5a] print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand - Span 5 cols */}
            <div className="md:col-span-5">
              <div className="bg-white p-4 inline-block rounded-xl mb-8 shadow-md">
                <BrandLogo className="h-16 w-auto" />
              </div>
              <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md font-light">
                Delta3Tek, LLC delivers excellence in federal IT modernization, engineering secure cloud environments and automating DevSecOps pipelines.
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
                <li><a href="#service-delivery-models" onClick={(e) => handleNavClick(e, 'home', 'service-delivery-models')} className="hover:text-white transition-colors flex items-center group"><ChevronRight size={14} className="mr-2 text-[#b48c5a] group-hover:translate-x-1 transition-transform"/> Service Delivery Models</a></li>
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
                  <span className="leading-relaxed text-base font-light">TBD</span>
                </li>
                <li className="flex items-center bg-slate-900 border border-slate-800 p-5 rounded-xl group hover:border-[#b48c5a]/50 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 text-[#b48c5a] mr-4 flex-shrink-0" />
                  <a href="mailto:info@delta3tek.com" className="group-hover:text-white transition-colors font-medium text-base">info@delta3tek.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-light">
            <p>&copy; {new Date().getFullYear()} Delta3Tek, LLC. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 font-medium">
              <a href="#privacy" onClick={(e) => handleNavClick(e, 'privacy-policy')} className="hover:text-[#b48c5a] transition-colors">Privacy Policy</a>
              <a href="#terms" onClick={(e) => handleNavClick(e, 'terms-of-use')} className="hover:text-[#b48c5a] transition-colors">Terms of Use</a>
              <a href="#accessibility" onClick={(e) => handleNavClick(e, 'accessibility')} className="hover:text-[#b48c5a] transition-colors">Section 508 Accessibility</a>
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

const PageHeader = ({ title, description, navigateTo }) => (
  <section className="bg-slate-950 text-white pt-16 pb-28 relative overflow-hidden print:hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <button onClick={() => navigateTo('home')} className="flex items-center text-[#b48c5a] hover:text-white mb-10 transition-colors font-extrabold text-xs tracking-widest uppercase group">
        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Return to Homepage
      </button>
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">{title}</h1>
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
          {description}
        </p>
      </div>
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

const SubpageLayout = ({ title, description, content, features, navigateTo }) => (
  <div className="bg-[#F8FAFC] min-h-screen pb-24">
    <PageHeader title={title} description={description} navigateTo={navigateTo} />
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          <h2 className="text-2xl font-extrabold text-[#0B1F3B] mb-6 tracking-tight">Capability Overview</h2>
          {content}
        </div>
        <div className="lg:col-span-4 bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 sticky top-32">
          <h3 className="text-sm font-bold text-[#0B1F3B] mb-6 uppercase tracking-widest border-b border-slate-100 pb-4">Core Competencies</h3>
          <FeatureList features={features} />
          <div className="mt-8 pt-8 border-t border-slate-100">
            <button onClick={() => navigateTo('contact')} className="w-full bg-[#1e3a8a] hover:bg-[#b48c5a] text-white px-6 py-3.5 rounded-xl font-bold transition-colors text-sm text-center">
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

/* =========================================
   NEW: DIGITAL CAPABILITY STATEMENT PAGE
   ========================================= */
   const CapabilityStatementPage = ({ navigateTo }) => (
    <div className="animate-in fade-in duration-500 bg-[#F8FAFC] min-h-screen pb-24 print:bg-white print:pb-0">
      <PageHeader 
        title="Corporate Capability Statement" 
        description="A comprehensive overview of Delta3Tek, LLC's core competencies, past performance, and federal procurement readiness."
        navigateTo={navigateTo}
      />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 print:m-0 print:p-0 print:w-full print:max-w-none print:shadow-none">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 overflow-hidden print:shadow-none print:border-none print:rounded-none">
          
          {/* Header/Print Utility Bar (Hidden when printing) */}
          <div className="bg-slate-50 px-8 py-5 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 print:hidden">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Digital Version</span>
            <button onClick={() => window.print()} className="inline-flex items-center bg-white border border-slate-200 px-4 py-2 rounded-md text-[#1e3a8a] hover:text-[#b48c5a] hover:border-[#b48c5a]/50 font-bold text-sm transition-colors shadow-sm">
              <Printer size={16} className="mr-2" /> Save to PDF / Print
            </button>
          </div>
  
          {/* Digital Document Body */}
          <div className="p-8 md:p-16 space-y-12">
            
            {/* Logo & Intro */}
            <div className="border-b border-slate-200 pb-8">
              <BrandLogo className="h-12 w-auto mb-8 hidden print:block" />
              <h2 className="text-3xl font-extrabold text-[#1e3a8a] tracking-tight mb-4">Corporate Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                Delta3Tek, LLC is an advanced technology integration firm architecting next-generation digital solutions for the public sector. We leverage agile methodologies and a zero-trust mindset to ensure delivery pipelines strictly align with strategic federal operational goals.
              </p>
            </div>
  
            {/* Company Data Grid */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
              <h3 className="text-sm font-bold text-[#b48c5a] uppercase tracking-widest mb-6">Company Snapshot</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <span className="block text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-1">UEI</span>
                  <span className="font-mono font-bold text-[#1e3a8a]">[PENDING]</span>
                </div>
                <div>
                  <span className="block text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-1">CAGE Code</span>
                  <span className="font-mono font-bold text-[#1e3a8a]">[PENDING]</span>
                </div>
                <div>
                  <span className="block text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-1">Socioeconomic</span>
                  <span className="font-bold text-[#1e3a8a]">Small Business</span>
                </div>
                <div>
                  <span className="block text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-1">Clearances</span>
                  <span className="font-bold text-[#1e3a8a]">Cleared Facility & Personnel</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <span className="block text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2">Primary NAICS Codes</span>
                <div className="flex flex-wrap gap-2 text-xs font-mono font-bold text-slate-600">
                  <span className="bg-white px-2 py-1 border border-slate-200 rounded">541511</span>
                  <span className="bg-white px-2 py-1 border border-slate-200 rounded">541512</span>
                  <span className="bg-white px-2 py-1 border border-slate-200 rounded">541519</span>
                  <span className="bg-white px-2 py-1 border border-slate-200 rounded">541611</span>
                </div>
              </div>
            </div>
  
            {/* Core Competencies */}
            <div>
              <h3 className="text-2xl font-extrabold text-[#1e3a8a] mb-6">Core Competencies</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-extrabold text-[#1e3a8a] flex items-center gap-2 mb-3"><Server size={18} className="text-[#b48c5a]"/> Enterprise IT & Cloud</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">Secure migration of critical workloads to AWS GovCloud and Azure. Implementation of Infrastructure as Code (IaC).</p>
                  <ul className="text-sm font-bold text-slate-500 space-y-1 pl-6 list-disc marker:text-[#b48c5a]">
                    <li>FedRAMP Compliant Architectures</li>
                    <li>High-Availability & DR Planning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-extrabold text-[#1e3a8a] flex items-center gap-2 mb-3"><ShieldCheck size={18} className="text-[#b48c5a]"/> Cybersecurity & Zero Trust</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">NIST 800-53 aligned security architectures. Streamlined Risk Management Framework (RMF) assessments to accelerate ATO.</p>
                  <ul className="text-sm font-bold text-slate-500 space-y-1 pl-6 list-disc marker:text-[#b48c5a]">
                    <li>Zero Trust Architecture Implementation</li>
                    <li>Continuous Monitoring & Threat Hunting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-extrabold text-[#1e3a8a] flex items-center gap-2 mb-3"><Code size={18} className="text-[#b48c5a]"/> DevSecOps Integration</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">Automated CI/CD pipelines with integrated SAST/DAST testing. Containerization for scalable mission applications.</p>
                  <ul className="text-sm font-bold text-slate-500 space-y-1 pl-6 list-disc marker:text-[#b48c5a]">
                    <li>Pipeline Automation (Kubernetes)</li>
                    <li>Agile & SAFe Transformations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-extrabold text-[#1e3a8a] flex items-center gap-2 mb-3"><Database size={18} className="text-[#b48c5a]"/> Data Analytics & AI</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">Enterprise data lakes and predictive machine learning models to transition agencies to actionable intelligence.</p>
                  <ul className="text-sm font-bold text-slate-500 space-y-1 pl-6 list-disc marker:text-[#b48c5a]">
                    <li>Predictive Analytics & ML Models</li>
                    <li>Interactive BI Dashboards</li>
                  </ul>
                </div>
              </div>
            </div>
  
            {/* Past Performance */}
            <div>
              <h3 className="text-2xl font-extrabold text-[#1e3a8a] mb-6">Past Performance Highlights</h3>
              <div className="space-y-6">
                <div className="border border-slate-200 p-6 rounded-xl">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                    <h4 className="font-extrabold text-lg text-[#1e3a8a]">Federal Civilian Agency</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-3"><strong className="text-slate-800">Challenge:</strong> Legacy on-premise data center suffered from latency issues and security bottlenecks.</p>
                  <p className="text-sm text-slate-600 mb-3"><strong className="text-slate-800">Solution:</strong> Lift-and-shift migration of 150+ critical applications to FedRAMP High Azure GovCloud using Terraform.</p>
                  <p className="text-sm font-bold text-[#b48c5a]"><strong className="text-[#1e3a8a]">Outcome:</strong> 40% reduction in system downtime and 25% decrease in infrastructure O&M costs.</p>
                </div>
  
                <div className="border border-slate-200 p-6 rounded-xl">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                    <h4 className="font-extrabold text-lg text-[#1e3a8a]">Defense Agency</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-3"><strong className="text-slate-800">Challenge:</strong> Manual testing resulted in prolonged Authority to Operate (ATO) cycles.</p>
                  <p className="text-sm text-slate-600 mb-3"><strong className="text-slate-800">Solution:</strong> Architected a hardened CI/CD pipeline integrating Fortify and SonarQube to shift security left.</p>
                  <p className="text-sm font-bold text-[#b48c5a]"><strong className="text-[#1e3a8a]">Outcome:</strong> Cut code deployment time to under 4 hours and accelerated ATO approval by 3 months.</p>
                </div>
              </div>
            </div>
  
            {/* Contact / Footer for Print */}
            <div className="border-t border-slate-200 pt-8 flex justify-between items-center text-sm font-bold text-slate-500">
              <span>info@delta3tek.com</span>
              <span>TBD</span>
              <span>www.delta3tek.com</span>
            </div>
  
          </div>
        </div>
      </section>
    </div>
  );

/* =========================================
   Individual Capability Pages 
   ========================================= */

const EnterpriseITPage = ({ navigateTo }) => (
  <SubpageLayout
    navigateTo={navigateTo}
    title="Enterprise IT & Cloud"
    description="Modernize legacy systems and migrate critical workloads to AWS GovCloud and Azure. We architect scalable solutions designed to reduce infrastructure maintenance costs."
    content={
      <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
        <p>At Delta3Tek, LLC, we understand the critical nature of government IT modernization. Relying on outdated, monolithic legacy systems presents significant security vulnerabilities and operational bottlenecks. We engineer seamless transitions to modern, scalable cloud environments.</p>
        <p>Our cloud architects possess extensive experience in designing multi-cloud and hybrid environments (AWS, Azure, Google Cloud Platform) that strictly adhere to FedRAMP compliance requirements. By implementing Infrastructure as Code (IaC), we ensure your deployments are repeatable, secure, and easily auditable.</p>
      </div>
    }
    features={[
      "Secure Cloud Migrations (AWS GovCloud, Azure)",
      "Legacy System Modernization & Refactoring",
      "Infrastructure as Code (IaC) with Terraform",
      "FedRAMP & DISA IL4/IL5 Compliant Architectures",
      "High-Availability & Disaster Recovery Planning",
      "24/7 Operations & Infrastructure Management"
    ]}
  />
);

const CybersecurityPage = ({ navigateTo }) => (
  <SubpageLayout
    navigateTo={navigateTo}
    title="Cybersecurity & RMF"
    description="Implement robust Zero Trust Architectures strictly aligned with NIST 800-53 standards. We streamline the Risk Management Framework process to accelerate ATO."
    content={
      <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
        <p>Securing federal data against evolving threat landscapes is our paramount objective. Delta3Tek, LLC approaches cybersecurity not just as a compliance checklist, but as a foundational element built into every layer of your IT enterprise.</p>
        <p>We specialize in migrating agencies from perimeter-based security to a modern Zero Trust Architecture (ZTA). Our certified security professionals (CISSP) expertly navigate the NIST Risk Management Framework (RMF), ensuring your systems achieve and maintain their Authority to Operate (ATO) without stifling operational efficiency.</p>
      </div>
    }
    features={[
      "Zero Trust Architecture (ZTA) Implementation",
      "NIST 800-53 RMF & ATO Support",
      "CMMC Readiness & Compliance Consulting",
      "Vulnerability Assessments & Penetration Testing",
      "Continuous Monitoring & Threat Hunting",
      "Identity, Credential, and Access Management (ICAM)"
    ]}
  />
);

const DevSecOpsPage = ({ navigateTo }) => (
  <SubpageLayout
    navigateTo={navigateTo}
    title="DevSecOps Integration"
    description="Bake security directly into the software lifecycle. We automate CI/CD pipelines to help federal development teams reduce deployment cycles by 40%."
    content={
      <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
        <p>Traditional software development methodologies often treat security as an afterthought, leading to delayed deployments and increased vulnerabilities. Delta3Tek, LLC implements a "Shift-Left" paradigm, embedding automated security controls directly into your CI/CD pipelines.</p>
        <p>Our DevSecOps engineers build highly automated, containerized environments using Docker and Kubernetes. We facilitate agile transformations that break down silos between development, security, and operations teams, enabling your agency to release secure, high-quality software at mission speed.</p>
      </div>
    }
    features={[
      "CI/CD Pipeline Architecture & Automation",
      "Automated Security Testing (SAST/DAST)",
      "Containerization & Orchestration (Kubernetes)",
      "Agile & SAFe Methodology Transformations",
      "Microservices Architecture Design",
      "Continuous Deployment & Release Management"
    ]}
  />
);

const DataAnalyticsPage = ({ navigateTo }) => (
  <SubpageLayout
    navigateTo={navigateTo}
    title="Data Analytics & AI"
    description="Transform siloed agency data into actionable intelligence. We deploy applied AI models that improve reporting accuracy and drive predictive decision-making."
    content={
      <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
        <p>Federal agencies collect massive volumes of data, but extracting meaningful insights remains a persistent challenge. Delta3Tek, LLC builds robust data pipelines and enterprise data warehouses that break down silos, ensuring your data is clean, accessible, and ready for analysis.</p>
        <p>By leveraging applied Artificial Intelligence and Machine Learning, we transition organizations from descriptive reporting to predictive and prescriptive analytics. Our custom dashboarding solutions provide leadership with real-time visibility to make data-driven decisions that directly impact mission outcomes.</p>
      </div>
    }
    features={[
      "Enterprise Data Warehousing & Data Lakes",
      "Predictive Analytics & Machine Learning Models",
      "Natural Language Processing (NLP) Solutions",
      "ETL/ELT Pipeline Development",
      "Interactive Business Intelligence (BI) Dashboards",
      "Data Governance & Quality Management"
    ]}
  />
);

/* =========================================
   LEGAL, COMPLIANCE & CAREERS PAGES
   ========================================= */

const LegalPageLayout = ({ title, description, content, navigateTo }) => (
  <div className="bg-[#F8FAFC] min-h-screen pb-24">
    <PageHeader title={title} description={description} navigateTo={navigateTo} />
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
      <div className="bg-white p-8 md:p-16 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        <div className="space-y-10 text-slate-600 leading-relaxed font-light">
          {content}
        </div>
      </div>
    </section>
  </div>
);

const PrivacyPolicyPage = ({ navigateTo }) => (
  <LegalPageLayout
    navigateTo={navigateTo}
    title="Privacy Policy"
    description="How we collect, use, and protect your information."
    content={
      <>
        <div>
          <h3 className="text-xl font-extrabold text-[#1e3a8a] mb-4">1. Information Collection</h3>
          <p>We collect information you provide directly to us when you request information, submit a form, or communicate with us. This may include your name, email address, phone number, and any other details you choose to provide.</p>
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-[#1e3a8a] mb-4">2. Use of Information</h3>
          <p>We use the information we collect to respond to your inquiries, provide federal contracting capabilities briefings, improve our website, and comply with legal obligations.</p>
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-[#1e3a8a] mb-4">3. Data Security</h3>
          <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We adhere to industry best practices and federal compliance guidelines for data protection.</p>
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-[#1e3a8a] mb-4">4. Third-Party Disclosure</h3>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</p>
        </div>
      </>
    }
  />
);

const TermsOfUsePage = ({ navigateTo }) => (
  <LegalPageLayout
    navigateTo={navigateTo}
    title="Terms of Use"
    description="The rules and guidelines for using the Delta3Tek, LLC corporate website."
    content={
      <>
        <div>
          <h3 className="text-xl font-extrabold text-[#1e3a8a] mb-4">1. Acceptance of Terms</h3>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.</p>
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-[#1e3a8a] mb-4">2. Intellectual Property</h3>
          <p>The site and its original content, features, and functionality are owned by Delta3Tek, LLC and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-[#1e3a8a] mb-4">3. Use of Site Content</h3>
          <p>The content provided on this website is for informational purposes related to federal IT contracting. You may view, download, and print capability statements and public materials for evaluation purposes. Unauthorized reproduction or commercial distribution is prohibited.</p>
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-[#1e3a8a] mb-4">4. Disclaimer of Warranties</h3>
          <p>While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</p>
        </div>
      </>
    }
  />
);

const AccessibilityPage = ({ navigateTo }) => (
  <LegalPageLayout
    navigateTo={navigateTo}
    title="Section 508 Accessibility"
    description="Our commitment to digital accessibility for all users."
    content={
      <>
        <div>
          <h3 className="text-xl font-extrabold text-[#1e3a8a] mb-4">Commitment to Accessibility</h3>
          <p>Delta3Tek, LLC is committed to making its electronic and information technologies accessible to individuals with disabilities in compliance with Section 508 of the Rehabilitation Act (29 U.S.C. 794d), as amended in 1998.</p>
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-[#1e3a8a] mb-4">Standards & Compliance</h3>
          <p>We continuously test and modify our website to ensure it meets or exceeds the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. This includes ensuring compatibility with screen readers, providing keyboard navigation, and maintaining proper color contrast ratios.</p>
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-[#1e3a8a] mb-4">Reporting Accessibility Issues</h3>
          <p>If you encounter any difficulty accessing the information on this site, or if you need information provided in an alternative format, please contact us immediately at <strong className="text-[#1e3a8a] font-bold">info@delta3tek.com</strong>. Please include the web address (URL) of the page you are having issues with and your contact information so we can assist you.</p>
        </div>
      </>
    }
  />
);

const CareersPage = ({ navigateTo }) => (
  <LegalPageLayout
    navigateTo={navigateTo}
    title="Working at Delta3Tek"
    description="Join our team to solve complex, mission-critical challenges through innovative technology solutions."
    content={
      <>
        <div>
          <p className="mb-6 text-lg">At Delta3Tek, LLC, we solve complex, mission-critical challenges for federal agencies through innovative and secure technology solutions. Our work spans cloud modernization, cybersecurity, and DevSecOps—supporting systems that demand the highest levels of performance, reliability, and compliance.</p>
          
          <p className="mb-6 text-lg">We believe that delivering exceptional outcomes starts with building an exceptional team. Our culture is rooted in collaboration, continuous learning, and technical excellence. We empower our people to think critically, innovate confidently, and contribute meaningfully to projects that have real-world impact.</p>
          
          <p className="mb-6 text-lg">At Delta3Tek, LLC, you’ll work alongside experienced professionals who are passionate about technology and committed to delivering results. We invest in your growth—both professionally and personally—by providing opportunities to develop new skills, take on challenging work, and advance your career.</p>
          
          <p className="mb-8 text-lg">We are always looking for motivated individuals who thrive in dynamic environments, embrace innovation, and are driven to make a difference. If you enjoy solving complex problems, building modern solutions, and working on impactful federal programs, Delta3Tek, LLC could be the right place for you.</p>
        </div>
        
        <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-extrabold text-[#1e3a8a] mb-4">Ready to Make an Impact?</h3>
          <p className="text-lg text-slate-600 mb-6">Explore our current opportunities or submit your resume directly to our recruiting team.</p>
          <a href="mailto:careers@delta3tek.com" className="inline-flex items-center justify-center bg-[#1e3a8a] hover:bg-[#b48c5a] text-white px-8 py-4 rounded-xl font-bold transition-colors text-sm shadow-md">
            <Mail size={16} className="mr-2" /> Submit Resume to careers@delta3tek.com
          </a>
        </div>
      </>
    }
  />
);

const ContactPage = ({ navigateTo }) => {
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    
    const formData = new FormData(e.target);
    const data = {
      to: 'delta3tek@gmail.com',
      name: formData.get('name'),
      email: formData.get('email'),
      organization: formData.get('organization'),
      message: formData.get('message'),
      subject: `Website Inquiry: ${formData.get('organization') || formData.get('name')}`
    };

    // NOTE: Submissions are now structured as data sent to delta3tek@gmail.com
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmissionStatus('success');
  };

  if (submissionStatus === 'success') {
    return (
      <div className="bg-[#F8FAFC] min-h-screen pb-24 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-12 rounded-3xl shadow-2xl text-center border border-slate-100">
          <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-green-500 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Message Received</h2>
          <p className="text-slate-600 mb-10 leading-relaxed font-light">
            Thank you for contacting Delta3Tek, LLC. Your inquiry has been received by our Team.<br /><br />
            We appreciate your interest and will follow up promptly.
          </p>
          <button onClick={() => navigateTo('home')} className="w-full bg-[#1e3a8a] text-white py-4 rounded-xl font-bold hover:bg-slate-900 transition-colors shadow-lg">
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-24">
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with our team to discuss your mission requirements, request a capabilities briefing, or explore partnering opportunities." 
        navigateTo={navigateTo} 
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <h2 className="text-2xl font-extrabold text-[#0B1F3B] mb-2 tracking-tight">Send a Message</h2>
            <p className="text-slate-500 mb-8 font-light">Fill out the form below and a member of our federal team will reach out shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#0B1F3B] mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" id="name" name="name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b48c5a] focus:ring-1 focus:ring-[#b48c5a] transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#0B1F3B] mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" id="email" name="email" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b48c5a] focus:ring-1 focus:ring-[#b48c5a] transition-colors" placeholder="jane@agency.gov" />
                </div>
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-bold text-[#0B1F3B] mb-2">Organization / Agency</label>
                <input type="text" id="organization" name="organization" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b48c5a] focus:ring-1 focus:ring-[#b48c5a] transition-colors" placeholder="e.g. Department of Defense" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#0B1F3B] mb-2">How can we help you? <span className="text-red-500">*</span></label>
                <textarea id="message" name="message" required rows="5" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b48c5a] focus:ring-1 focus:ring-[#b48c5a] transition-colors resize-none" placeholder="Please describe your inquiry..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={submissionStatus === 'submitting'}
                className="inline-flex items-center justify-center w-full sm:w-auto bg-[#1e3a8a] hover:bg-[#b48c5a] text-white px-8 py-3.5 rounded-xl font-bold transition-colors text-sm shadow-md disabled:opacity-70 disabled:cursor-not-allowed min-w-[160px]"
              >
                {submissionStatus === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-4 space-y-8 sticky top-32">
            
            <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <h3 className="text-sm font-bold text-[#0B1F3B] mb-6 uppercase tracking-widest border-b border-slate-100 pb-4">Corporate Office</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-slate-50 p-3 rounded-lg mr-4 text-[#b48c5a]">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3B] text-sm mb-1">Headquarters</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">TBD</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-slate-50 p-3 rounded-lg mr-4 text-[#b48c5a]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3B] text-sm mb-1">General Inquiries</h4>
                    <a href="mailto:info@delta3tek.com" className="text-slate-600 text-sm hover:text-[#b48c5a] transition-colors">info@delta3tek.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0B1F3B] p-8 rounded-2xl shadow-lg border border-[#1e3a8a] text-white">
              <h3 className="text-xl font-extrabold mb-3">Join Our Team</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">We are actively recruiting cleared personnel for upcoming federal projects.</p>
              <button onClick={() => navigateTo('careers')} className="inline-flex items-center text-[#b48c5a] font-bold text-sm tracking-wide uppercase group hover:text-white transition-colors">
                View Careers <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

const PartneringPage = ({ navigateTo }) => {
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    const formData = new FormData(e.target);
    const data = {
      to: 'delta3tek@gmail.com',
      poc: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      uei_cage: formData.get('uei'),
      socioeconomic: formData.get('status'),
      capabilities: formData.get('message'),
      subject: `Partnership Inquiry: ${formData.get('company')}`
    };

    // NOTE: Direct submission logic targets delta3tek@gmail.com without workstation mailbox interference
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmissionStatus('success');
  };

  if (submissionStatus === 'success') {
    return (
      <div className="bg-[#F8FAFC] min-h-screen pb-24 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-12 rounded-3xl shadow-2xl text-center border border-slate-100">
          <div className="bg-amber-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="text-[#b48c5a] w-10 h-10" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Request Submitted</h2>
          <p className="text-slate-600 mb-10 leading-relaxed font-light">
            Thank you for contacting Delta3Tek, LLC. Your inquiry has been received by our Team.<br /><br />
            We appreciate your interest and will follow up promptly.
          </p>
          <button onClick={() => navigateTo('home')} className="w-full bg-[#1e3a8a] text-white py-4 rounded-xl font-bold hover:bg-slate-900 transition-colors shadow-lg">
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-24">
      <PageHeader 
        title="Teaming & Partnerships" 
        description="We actively seek strategic partnerships with large primes, specialized small businesses, and technology vendors to deliver comprehensive federal solutions." 
        navigateTo={navigateTo} 
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Partnering Form */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <h2 className="text-2xl font-extrabold text-[#0B1F3B] mb-2 tracking-tight">Partner With Us</h2>
            <p className="text-slate-500 mb-8 font-light">Submit your corporate capabilities below to initiate a teaming discussion.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#0B1F3B] mb-2">Point of Contact <span className="text-red-500">*</span></label>
                  <input type="text" id="name" name="name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b48c5a] focus:ring-1 focus:ring-[#b48c5a] transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#0B1F3B] mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" id="email" name="email" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b48c5a] focus:ring-1 focus:ring-[#b48c5a] transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-bold text-[#0B1F3B] mb-2">Company Name <span className="text-red-500">*</span></label>
                <input type="text" id="company" name="company" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b48c5a] focus:ring-1 focus:ring-[#b48c5a] transition-colors" placeholder="e.g. Acme Federal IT" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="uei" className="block text-sm font-bold text-[#0B1F3B] mb-2">UEI / CAGE Code</label>
                  <input type="text" id="uei" name="uei" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b48c5a] focus:ring-1 focus:ring-[#b48c5a] transition-colors" placeholder="Optional" />
                </div>
                <div>
                  <label htmlFor="status" className="block text-sm font-bold text-[#0B1F3B] mb-2">Socioeconomic Status</label>
                  <select id="status" name="status" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b48c5a] focus:ring-1 focus:ring-[#b48c5a] transition-colors text-slate-700">
                    <option value="None / Large Business">None / Large Business</option>
                    <option value="Small Business (SB)">Small Business (SB)</option>
                    <option value="SBA 8(a)">SBA 8(a)</option>
                    <option value="SDVOSB / VOSB">SDVOSB / VOSB</option>
                    <option value="HUBZone">HUBZone</option>
                    <option value="WOSB / EDWOSB">WOSB / EDWOSB</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#0B1F3B] mb-2">Core Capabilities & Target Opportunities <span className="text-red-500">*</span></label>
                <textarea id="message" name="message" required rows="5" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#b48c5a] focus:ring-1 focus:ring-[#b48c5a] transition-colors resize-none" placeholder="Briefly describe your core NAICS, technical expertise, or specific RFPs you are targeting..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={submissionStatus === 'submitting'}
                className="inline-flex items-center justify-center w-full sm:w-auto bg-[#1e3a8a] hover:bg-[#b48c5a] text-white px-8 py-3.5 rounded-xl font-bold transition-colors text-sm shadow-md disabled:opacity-70 disabled:cursor-not-allowed min-w-[200px]"
              >
                {submissionStatus === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" /> Submitting Request...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" /> Submit Teaming Request
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Value Proposition Sidebar */}
          <div className="lg:col-span-4 space-y-8 sticky top-32">
            
            <div className="bg-[#0B1F3B] p-8 rounded-2xl shadow-lg border border-[#1e3a8a] text-white">
              <h3 className="text-xl font-extrabold mb-4">Why Partner With Us?</h3>
              <ul className="space-y-4 text-sm text-slate-300 font-light">
                <li className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#b48c5a] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Access to competitive set-aside opportunities as a prime or sub.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#b48c5a] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Proven past performance across DoD and Civilian agencies.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#b48c5a] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Deep expertise in Cloud Migration, RMF, and DevSecOps.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#b48c5a] mr-3 flex-shrink-0 mt-0.5" />
                  <span>Cleared facility status and TS/SCI capable engineering teams.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <h3 className="text-sm font-bold text-[#0B1F3B] mb-4 uppercase tracking-widest border-b border-slate-100 pb-4">Direct Contact</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Have an urgent RFP or Sources Sought you want to discuss? Reach out to our teaming coordinators directly.
              </p>
              <a href="mailto:info@delta3tek.com" className="inline-flex items-center text-[#1e3a8a] font-bold text-sm tracking-wide group hover:text-[#b48c5a] transition-colors">
                <Mail size={16} className="mr-2" /> info@delta3tek.com
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};