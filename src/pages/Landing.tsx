import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, ShieldCheck, Target, TrendingUp, 
  BarChart3, RefreshCw, Calculator, FileText 
} from 'lucide-react';
import { useState } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Card, CardContent } from '@/components/ui/card';

export default function Landing() {
  const [sipAmount, setSipAmount] = useState<number>(10000);
  const [sipDuration, setSipDuration] = useState<number>(10);
  const expectedReturn = 12; // fixed for demo

  // SIP Formula: M = P * ({[1 + i]^n - 1} / i) * (1 + i).
  const calculateSIP = () => {
    const i = expectedReturn / 100 / 12;
    const n = sipDuration * 12;
    const futureValue = sipAmount * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const totalInvested = sipAmount * n;
    return {
      totalInvested: Math.round(totalInvested),
      futureValue: Math.round(futureValue),
      estimatedWealth: Math.round(futureValue - totalInvested)
    };
  };

  const { totalInvested, futureValue, estimatedWealth } = calculateSIP();

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-[#0A0A0A]">
        {/* Glowing Backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-60 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Huge faded background text */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none overflow-hidden select-none">
          <h1 className="text-[12rem] md:text-[20rem] font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none whitespace-nowrap opacity-50">
            RIA PRO
          </h1>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold mb-8 uppercase tracking-wider backdrop-blur-sm"
            >
              <ShieldCheck size={16} className="text-accent" />
              <span>SEBI Registered Investment Adviser</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight leading-[1.1] mb-8"
            >
              Smart, Secure & Simple.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Smarter Financial Growth.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Join thousands already optimizing their wealth with our trusted, real-time investment platform. Unbiased, research-driven mutual fund advice.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/onboarding" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto h-14 px-8 rounded-full font-semibold shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)] hover:-translate-y-0.5 transition-all bg-accent hover:bg-accent/90 text-white border-0" })}>
                <Text>Get Started</Text>
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link to="#how-it-works" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto h-14 px-8 rounded-full font-semibold text-white border-white/20 hover:bg-white/10 transition-colors bg-transparent" })}>
                <Text>Explore Features</Text>
              </Link>
            </motion.div>

            {/* Active Investors Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 mb-16 flex items-center justify-center gap-4"
            >
              <div className="flex -space-x-3">
                {[
                  "https://i.pravatar.cc/100?img=11",
                  "https://i.pravatar.cc/100?img=12",
                  "https://i.pravatar.cc/100?img=33",
                  "https://i.pravatar.cc/100?img=44",
                ].map((url, i) => (
                  <img key={i} src={url} alt="User" className="w-10 h-10 rounded-full border-2 border-[#0A0A0A]" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm">50K+</div>
                <div className="text-gray-400 text-xs">Active Investors</div>
              </div>
            </motion.div>
          </div>

          {/* Desktop Monitor Mockup Overlapping */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 max-w-5xl mx-auto relative z-20"
          >
            {/* Monitor Bezel */}
            <div className="rounded-t-3xl sm:rounded-t-[2rem] bg-[#111111] p-3 sm:p-4 shadow-2xl relative border-x border-t border-white/10">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
              
              {/* Monitor Screen */}
              <div className="rounded-xl sm:rounded-2xl bg-[#050505] border border-white/5 overflow-hidden aspect-[16/10] sm:aspect-[16/9] relative flex flex-col">
                
                {/* Mock UI Top Nav */}
                <div className="h-14 border-b border-white/10 flex items-center px-6 justify-between">
                  <div className="text-white font-semibold font-heading tracking-tight flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-accent"></div>
                    RIA Pro
                  </div>
                  <div className="hidden sm:flex gap-6 text-xs text-gray-400 font-medium">
                    <div className="text-white">Dashboard</div>
                    <div>Portfolios</div>
                    <div>Analytics</div>
                    <div>Reports</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10"></div>
                </div>

                {/* Mock UI Content */}
                <div className="flex-1 flex p-6 gap-6 overflow-hidden">
                  {/* Left Column */}
                  <div className="flex-1 space-y-6">
                    <div className="h-32 bg-white/5 rounded-2xl border border-white/5 p-5">
                      <div className="text-xs text-gray-400 mb-2">Total Balance</div>
                      <div className="text-3xl font-numbers font-bold text-white mb-4">$142,390.00</div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-accent rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="h-48 bg-white/5 rounded-2xl border border-white/5 p-5 relative overflow-hidden">
                       <div className="text-xs text-gray-400 mb-4">Growth Projection</div>
                       <div className="absolute bottom-0 left-0 w-full h-32 opacity-50 flex items-end">
                          <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full text-accent stroke-current fill-current/20">
                            <path d="M0,50 L0,30 C20,30 30,10 50,20 C70,30 80,5 100,10 L100,50 Z" />
                          </svg>
                       </div>
                    </div>
                  </div>

                  {/* Right Mobile App Mockup (Floating) */}
                  <div className="hidden md:flex w-64 flex-col bg-[#161618] rounded-[2rem] border-[4px] border-[#2A2A2E] shadow-2xl relative z-10 -mt-10 mb-[-50px] overflow-hidden">
                    <div className="h-40 bg-gradient-to-br from-accent to-[#6B21A8] relative overflow-hidden rounded-b-[2rem]">
                      <div className="absolute top-6 w-full px-5 flex justify-between items-center text-white">
                        <div className="w-5 h-0.5 bg-white/50 rounded-full" />
                        <div className="text-xs font-medium">Hi, James!</div>
                        <div className="w-5 h-5 rounded-full bg-white/20" />
                      </div>
                      <div className="absolute bottom-8 w-full text-center text-white">
                        <div className="text-3xl font-bold font-numbers tracking-tight">$3,970<span className="text-sm text-white/70">.23</span></div>
                        <div className="text-[9px] tracking-wider uppercase text-white/60 mt-1">Savings Account</div>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-4 space-y-4">
                      <div className="text-[10px] text-white/50 mb-1">Other Accounts</div>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/5">
                          <div className="text-white/40 text-[9px] mb-1">USD</div>
                          <div className="text-white text-sm font-semibold">$869</div>
                        </div>
                        <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/5">
                          <div className="text-white/40 text-[9px] mb-1">EUR</div>
                          <div className="text-white text-sm font-semibold">€231</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Clients Served', value: '500+' },
              { label: 'Years Experience', value: '10+' },
              { label: 'Goal Plans', value: '1,200+' },
              { label: 'Portfolio Reviews', value: '3,000+' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2 font-numbers">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose RIA */}
      <section className="py-24 bg-gray-50" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Why Work with a SEBI Registered Investment Adviser?</h2>
            <p className="text-lg text-gray-600">We work for you, not the product manufacturers. Our advice is unbiased and conflict-free.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Conflict-Free Advice', desc: 'Receive recommendations designed around your goals rather than product commissions.', icon: ShieldCheck },
              { title: 'Personalized Strategy', desc: 'Every recommendation considers your income, goals, risk appetite, and existing investments.', icon: Target },
              { title: 'Research Driven', desc: 'Fund selection based on performance, risk, expense ratio, and portfolio quality.', icon: BarChart3 },
              { title: 'Continuous Reviews', desc: 'Quarterly reviews, portfolio monitoring, and annual rebalancing to keep you on track.', icon: RefreshCw }
            ].map((feature, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow border-border">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-50 text-secondary rounded-xl flex items-center justify-center mb-6">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <Text className="text-gray-600 leading-relaxed">{feature.desc}</Text>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white border-t border-border" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600">A simple, transparent process to start your wealth creation journey.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-1/8 right-1/8 h-0.5 bg-gray-100 z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 text-center">
               <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-sm border-4 border-white">1</div>
               <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">Onboarding</h3>
               <p className="text-gray-600 text-sm leading-relaxed">Register online and share your basic financial details securely through our digital portal.</p>
            </div>
            
            {/* Step 2 */}
            <div className="relative z-10 text-center">
               <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-sm border-4 border-white">2</div>
               <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">Risk Profiling</h3>
               <p className="text-gray-600 text-sm leading-relaxed">Answer a few questions to help us understand your risk appetite and financial capacity.</p>
            </div>
            
            {/* Step 3 */}
            <div className="relative z-10 text-center">
               <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-sm border-4 border-white">3</div>
               <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">Advisory Fees</h3>
               <p className="text-gray-600 text-sm leading-relaxed">Transparent fee payment with no hidden charges. We earn zero commissions from products.</p>
            </div>
            
            {/* Step 4 */}
            <div className="relative z-10 text-center">
               <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-sm border-4 border-white">4</div>
               <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">Mutual Fund Declaration</h3>
               <p className="text-gray-600 text-sm leading-relaxed">Receive and review your customized, unbiased mutual fund portfolio recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIP Calculator Preview */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-success text-sm font-medium mb-4">
                  <Calculator size={16} />
                  <span>Interactive Tool</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">The Power of Compounding</h2>
                <p className="text-lg text-gray-600">See how small, disciplined investments through SIPs can build significant wealth over time.</p>
              </div>

              <div className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-border">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-medium text-gray-900">Monthly SIP Amount</label>
                    <span className="font-mono text-primary font-semibold">{formatCurrency(sipAmount)}</span>
                  </div>
                  <input 
                    type="range" min="1000" max="100000" step="1000" 
                    value={sipAmount} onChange={(e) => setSipAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-medium text-gray-900">Investment Duration (Years)</label>
                    <span className="font-mono text-primary font-semibold">{sipDuration} Yrs</span>
                  </div>
                  <input 
                    type="range" min="1" max="30" step="1" 
                    value={sipDuration} onChange={(e) => setSipDuration(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label className="font-medium text-gray-900">Expected Return (p.a)</label>
                    <span className="font-mono text-gray-500 font-semibold">{expectedReturn}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-md mx-auto">
              <div className="bg-primary text-white p-8 rounded-3xl shadow-premium relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <h3 className="text-lg font-medium text-white/80 mb-8">Estimated Portfolio Value</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-white/70 mb-1">Total Future Value</div>
                    <div className="text-4xl sm:text-5xl font-heading font-bold font-numbers">{formatCurrency(futureValue)}</div>
                  </div>
                  
                  <div className="h-px bg-white/20 my-6" />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-white/70 mb-1">Total Invested</div>
                      <div className="text-xl font-semibold font-numbers">{formatCurrency(totalInvested)}</div>
                    </div>
                    <div>
                      <div className="text-sm text-white/70 mb-1">Estimated Wealth</div>
                      <div className="text-xl font-semibold text-green-400 font-numbers">+{formatCurrency(estimatedWealth)}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-xs text-white/50 text-center mb-4">
                    Returns are illustrative and based on a fixed assumed rate of return. Mutual fund investments are subject to market risks.
                  </p>
                  <Link to="/calculators" className="block w-full py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl text-center text-sm font-medium text-white">
                    Explore More Calculators
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Comprehensive Advisory Services</h2>
            <p className="text-lg text-gray-600">Tailored solutions for every stage of your financial journey.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Goal-Based Investing', desc: 'Plan for retirement, child education, or a new house with dedicated portfolios.' },
              { title: 'Portfolio Review', desc: 'Comprehensive analysis of your existing investments to identify overlaps and underperformers.' },
              { title: 'Tax Planning', desc: 'Optimize your tax liabilities with strategic investments in ELSS and other tax-efficient funds.' }
            ].map((service, i) => (
              <Card key={i} className="hover:border-primary/50 transition-colors group border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <Text className="text-gray-600 text-sm leading-relaxed">{service.desc}</Text>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
              View All Services <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Ready to take control of your wealth?</h2>
          <p className="text-xl text-gray-600 mb-10">Start your journey with a transparent, research-driven advisory process today.</p>
          <Link to="/onboarding" className={buttonVariants({ size: "lg", className: "h-14 px-8 rounded-xl font-semibold shadow-premium hover:-translate-y-0.5 transition-transform" })}>
            <Text>Start Digital Onboarding</Text>
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
