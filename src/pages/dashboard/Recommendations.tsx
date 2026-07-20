import { Download, Info, CheckCircle2, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export default function Recommendations() {
  return (
    <div className="space-y-6">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-heading font-bold text-gray-900 mb-1">Investment Strategy</h1>
          <Text className="text-sm text-gray-500">Based on your Aggressive risk profile and 10+ year horizon.</Text>
        </div>
        <Button variant="outline" className="flex items-center gap-2 h-10 px-4 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm border-border">
          <Download size={16} />
          <Text>Download PDF Report</Text>
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Asset Allocation */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="rounded-2xl shadow-premium border-border">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-6">Target Asset Allocation</h3>
              
              <div className="space-y-4">
                {[
                  { name: 'Large Cap Equity', value: 40, color: 'bg-primary' },
                  { name: 'Mid Cap Equity', value: 25, color: 'bg-secondary' },
                  { name: 'Small Cap Equity', value: 15, color: 'bg-accent' },
                  { name: 'Debt / Liquid', value: 20, color: 'bg-gray-300' }
                ].map((asset) => (
                  <div key={asset.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium">{asset.name}</span>
                      <span className="font-semibold text-gray-900">{asset.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${asset.color} rounded-full`} style={{ width: `${asset.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border flex items-start gap-3 bg-blue-50/50 p-4 rounded-xl">
                <Info size={16} className="text-secondary shrink-0 mt-0.5" />
                <Text className="text-xs text-gray-600 leading-relaxed">
                  As an aggressive investor, your portfolio is skewed towards equity (80%) to maximize long-term wealth creation, with 20% in debt for stability and rebalancing opportunities.
                </Text>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommended Funds */}
        <div className="lg:col-span-2">
          <Card className="rounded-2xl shadow-premium border-border overflow-hidden">
            <div className="p-6 border-b border-border flex justify-between items-center bg-gray-50/50">
              <h3 className="font-semibold text-gray-900">Recommended Mutual Funds</h3>
              <span className="text-xs font-medium px-2.5 py-1 bg-green-100 text-success rounded-full flex items-center gap-1">
                <CheckCircle2 size={14} /> Active
              </span>
            </div>
            
            <div className="divide-y divide-border">
              {[
                { name: 'Parag Parikh Flexi Cap Fund - Direct Growth', type: 'Flexi Cap', sip: 15000, category: 'Equity' },
                { name: 'UTI Nifty 50 Index Fund - Direct Growth', type: 'Large Cap / Index', sip: 10000, category: 'Equity' },
                { name: 'Quant Mid Cap Fund - Direct Growth', type: 'Mid Cap', sip: 8000, category: 'Equity' },
                { name: 'Nippon India Small Cap Fund - Direct Growth', type: 'Small Cap', sip: 7000, category: 'Equity' },
                { name: 'HDFC Short Term Debt Fund - Direct Growth', type: 'Short Duration', sip: 10000, category: 'Debt' },
              ].map((fund, i) => (
                <div key={i} className="p-6 hover:bg-gray-50/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{fund.name}</h4>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-gray-500 bg-gray-100 px-2 py-1 rounded">{fund.category}</span>
                        <span className="text-gray-500">{fund.type}</span>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Suggested SIP</div>
                      <div className="font-semibold text-gray-900 font-mono">₹{fund.sip.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-border bg-gray-50 flex justify-between items-center">
              <span className="font-semibold text-gray-900">Total Recommended Monthly SIP</span>
              <span className="text-xl font-bold text-primary font-mono">₹50,000</span>
            </div>
          </Card>
          
          <div className="mt-6 flex items-start gap-3 p-4 bg-orange-50 border border-orange-100 rounded-xl">
            <AlertCircle size={20} className="text-warning shrink-0" />
            <div className="text-sm text-gray-700">
              <span className="font-semibold text-gray-900 block mb-1">Execution Note</span>
              <Text>Please ensure you select <strong>"Direct Plan - Growth Option"</strong> while executing these investments on your preferred transaction platform (e.g., AMC Website, Coin, Groww, MFUtility). We do not execute transactions on your behalf.</Text>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
