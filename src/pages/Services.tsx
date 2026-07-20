import { Target, BarChart3, TrendingUp, RefreshCw, Briefcase, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Text } from '@/components/ui/text';

export default function Services() {
  return (
    <div className="pt-12 pb-32 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Our Advisory Services</h1>
          <p className="text-lg text-slate-500">Comprehensive, research-driven mutual fund advisory tailored to your unique financial goals and risk appetite.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: 'Goal-Based Investing', 
              desc: 'Plan for retirement, child education, or a new house with dedicated portfolios. We align your investments with your specific life milestones.', 
              icon: Target 
            },
            { 
              title: 'Portfolio Review', 
              desc: 'Comprehensive analysis of your existing investments to identify overlaps, underperformers, and misalignment with your current risk profile.', 
              icon: BarChart3 
            },
            { 
              title: 'Tax Planning', 
              desc: 'Optimize your tax liabilities with strategic investments in ELSS and other tax-efficient funds to ensure maximum post-tax returns.', 
              icon: FileText 
            },
            { 
              title: 'Asset Allocation', 
              desc: 'Balance risk and reward by apportioning your portfolio according to your goals, time horizon, and risk tolerance across equity and debt.', 
              icon: Briefcase 
            },
            { 
              title: 'SIP Planning', 
              desc: 'Disciplined wealth creation strategies tailored to your monthly cash flows. Build corpus steadily through Systematic Investment Plans.', 
              icon: TrendingUp 
            },
            { 
              title: 'Annual Reviews', 
              desc: 'Periodic check-ins and portfolio rebalancing to ensure you stay on track, adapting to market conditions or changes in your personal life.', 
              icon: RefreshCw 
            },
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl border-border hover:shadow-md transition-shadow group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-50 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <Text className="text-gray-600 leading-relaxed">{service.desc}</Text>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
