import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Text } from '@/components/ui/text';

export default function Calculators() {
  const [activeTab, setActiveTab] = useState<'SIP' | 'LUMPSUM' | 'SWP'>('SIP');

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  // SIP
  const [sipAmount, setSipAmount] = useState<number>(10000);
  const [sipDuration, setSipDuration] = useState<number>(10);
  const [sipReturn, setSipReturn] = useState<number>(12);

  const calcSIP = () => {
    const i = sipReturn / 100 / 12;
    const n = sipDuration * 12;
    const futureValue = sipAmount * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const totalInvested = sipAmount * n;
    return {
      invested: Math.round(totalInvested),
      value: Math.round(futureValue),
      wealth: Math.round(futureValue - totalInvested)
    };
  };

  // LUMPSUM
  const [lumpAmount, setLumpAmount] = useState<number>(100000);
  const [lumpDuration, setLumpDuration] = useState<number>(10);
  const [lumpReturn, setLumpReturn] = useState<number>(12);

  const calcLumpsum = () => {
    const r = lumpReturn / 100;
    const n = lumpDuration;
    const futureValue = lumpAmount * Math.pow(1 + r, n);
    return {
      invested: Math.round(lumpAmount),
      value: Math.round(futureValue),
      wealth: Math.round(futureValue - lumpAmount)
    };
  };

  // SWP
  const [swpPrincipal, setSwpPrincipal] = useState<number>(5000000);
  const [swpWithdrawal, setSwpWithdrawal] = useState<number>(30000);
  const [swpDuration, setSwpDuration] = useState<number>(10);
  const [swpReturn, setSwpReturn] = useState<number>(8);

  const calcSWP = () => {
    const P = swpPrincipal;
    const W = swpWithdrawal;
    const i = swpReturn / 100 / 12;
    const n = swpDuration * 12;
    
    let balance = P;
    let totalWithdrawn = 0;
    
    for (let m = 1; m <= n; m++) {
      balance = balance * (1 + i) - W;
      totalWithdrawn += W;
      if (balance < 0) {
        balance = 0;
        break;
      }
    }

    return {
      invested: P,
      withdrawn: totalWithdrawn,
      value: Math.round(balance),
    };
  };

  return (
    <div className="pt-12 pb-32 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-secondary text-xs font-semibold mb-6 uppercase tracking-wider">
            <Calculator size={16} />
            <span>Interactive Tools</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Financial Calculators</h1>
          <p className="text-lg text-slate-500">Plan your investments and withdrawals with our easy-to-use calculators.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-xl p-1 border border-border shadow-sm">
            {(['SIP', 'LUMPSUM', 'SWP'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === tab 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab === 'LUMPSUM' ? 'Lumpsum' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Cards */}
        <Card className="max-w-5xl mx-auto rounded-3xl shadow-sm border-border">
          <CardContent className="p-8 lg:p-12">
            
            {/* SIP Calculator */}
          {activeTab === 'SIP' && (() => {
            const result = calcSIP();
            return (
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1 space-y-8 w-full">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-medium text-gray-900">Monthly Investment</label>
                      <span className="font-mono text-primary font-semibold">{formatCurrency(sipAmount)}</span>
                    </div>
                    <input type="range" min="500" max="100000" step="500" value={sipAmount} onChange={(e) => setSipAmount(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-medium text-gray-900">Duration (Years)</label>
                      <span className="font-mono text-primary font-semibold">{sipDuration} Yrs</span>
                    </div>
                    <input type="range" min="1" max="30" step="1" value={sipDuration} onChange={(e) => setSipDuration(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-medium text-gray-900">Expected Return (p.a)</label>
                      <span className="font-mono text-primary font-semibold">{sipReturn}%</span>
                    </div>
                    <input type="range" min="1" max="30" step="1" value={sipReturn} onChange={(e) => setSipReturn(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-primary text-white p-8 rounded-2xl shadow-premium relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                    <h3 className="text-lg font-medium text-white/80 mb-6">SIP Portfolio Value</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm text-white/70 mb-1">Total Future Value</div>
                        <div className="text-4xl font-heading font-bold font-numbers">{formatCurrency(result.value)}</div>
                      </div>
                      <div className="h-px bg-white/20" />
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-white/70 mb-1">Total Invested</div>
                          <div className="text-lg font-semibold font-numbers">{formatCurrency(result.invested)}</div>
                        </div>
                        <div>
                          <div className="text-sm text-white/70 mb-1">Estimated Wealth</div>
                          <div className="text-lg font-semibold text-green-400 font-numbers">+{formatCurrency(result.wealth)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Lumpsum Calculator */}
          {activeTab === 'LUMPSUM' && (() => {
            const result = calcLumpsum();
            return (
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1 space-y-8 w-full">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-medium text-gray-900">Total Investment</label>
                      <span className="font-mono text-primary font-semibold">{formatCurrency(lumpAmount)}</span>
                    </div>
                    <input type="range" min="10000" max="10000000" step="10000" value={lumpAmount} onChange={(e) => setLumpAmount(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-medium text-gray-900">Duration (Years)</label>
                      <span className="font-mono text-primary font-semibold">{lumpDuration} Yrs</span>
                    </div>
                    <input type="range" min="1" max="30" step="1" value={lumpDuration} onChange={(e) => setLumpDuration(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-medium text-gray-900">Expected Return (p.a)</label>
                      <span className="font-mono text-primary font-semibold">{lumpReturn}%</span>
                    </div>
                    <input type="range" min="1" max="30" step="1" value={lumpReturn} onChange={(e) => setLumpReturn(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-primary text-white p-8 rounded-2xl shadow-premium relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                    <h3 className="text-lg font-medium text-white/80 mb-6">Lumpsum Portfolio Value</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm text-white/70 mb-1">Total Future Value</div>
                        <div className="text-4xl font-heading font-bold font-numbers">{formatCurrency(result.value)}</div>
                      </div>
                      <div className="h-px bg-white/20" />
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-white/70 mb-1">Total Invested</div>
                          <div className="text-lg font-semibold font-numbers">{formatCurrency(result.invested)}</div>
                        </div>
                        <div>
                          <div className="text-sm text-white/70 mb-1">Estimated Wealth</div>
                          <div className="text-lg font-semibold text-green-400 font-numbers">+{formatCurrency(result.wealth)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* SWP Calculator */}
          {activeTab === 'SWP' && (() => {
            const result = calcSWP();
            return (
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1 space-y-8 w-full">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-medium text-gray-900">Initial Investment</label>
                      <span className="font-mono text-primary font-semibold">{formatCurrency(swpPrincipal)}</span>
                    </div>
                    <input type="range" min="100000" max="50000000" step="100000" value={swpPrincipal} onChange={(e) => setSwpPrincipal(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-medium text-gray-900">Monthly Withdrawal</label>
                      <span className="font-mono text-primary font-semibold">{formatCurrency(swpWithdrawal)}</span>
                    </div>
                    <input type="range" min="1000" max="500000" step="1000" value={swpWithdrawal} onChange={(e) => setSwpWithdrawal(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-medium text-gray-900">Duration (Years)</label>
                      <span className="font-mono text-primary font-semibold">{swpDuration} Yrs</span>
                    </div>
                    <input type="range" min="1" max="30" step="1" value={swpDuration} onChange={(e) => setSwpDuration(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-medium text-gray-900">Expected Return (p.a)</label>
                      <span className="font-mono text-primary font-semibold">{swpReturn}%</span>
                    </div>
                    <input type="range" min="1" max="30" step="1" value={swpReturn} onChange={(e) => setSwpReturn(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-primary text-white p-8 rounded-2xl shadow-premium relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                    <h3 className="text-lg font-medium text-white/80 mb-6">SWP Final Value</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm text-white/70 mb-1">Final Portfolio Balance</div>
                        <div className="text-4xl font-heading font-bold font-numbers">{formatCurrency(result.value)}</div>
                      </div>
                      <div className="h-px bg-white/20" />
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-white/70 mb-1">Initial Investment</div>
                          <div className="text-lg font-semibold font-numbers">{formatCurrency(result.invested)}</div>
                        </div>
                        <div>
                          <div className="text-sm text-white/70 mb-1">Total Withdrawn</div>
                          <div className="text-lg font-semibold text-warning font-numbers">{formatCurrency(result.withdrawn)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
