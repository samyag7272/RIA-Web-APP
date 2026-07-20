import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, buttonVariants } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Card, CardContent } from '@/components/ui/card';

export default function Pricing() {
  return (
    <div className="pt-12 pb-32 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Transparent Pricing</h1>
          <p className="text-lg text-slate-500">Zero hidden charges. Zero commissions. You only pay for unbiased advice directly to us.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Plan 1 */}
          <Card className="rounded-3xl border-border flex flex-col hover:border-primary/50 transition-colors">
            <CardContent className="p-8 flex flex-col h-full">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Portfolio Review</h3>
              <Text className="text-slate-500 text-sm mb-6 h-10">One-time detailed analysis of your existing mutual fund investments.</Text>
              <div className="mb-8">
                <span className="text-4xl font-bold font-numbers text-gray-900">₹5,000</span>
                <span className="text-slate-500 text-sm"> / one-time</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Current portfolio analysis', 'Overlap & risk assessment', 'Fund exit recommendations', 'No ongoing monitoring'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-success shrink-0" size={20} />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/onboarding" className={buttonVariants({ variant: "outline", className: "w-full h-12 rounded-xl text-primary font-semibold hover:bg-primary/5 transition-colors border-primary" })}>
                <Text>Get Started</Text>
              </Link>
            </CardContent>
          </Card>

          {/* Plan 2 */}
          <Card className="bg-primary text-white rounded-3xl shadow-premium relative flex flex-col transform md:-translate-y-4">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">Comprehensive Advisory</h3>
              <Text className="text-white/80 text-sm mb-6 h-10">Ideal for long-term wealth creation and goal-based planning.</Text>
              <div className="mb-8">
                <span className="text-4xl font-bold font-numbers text-white">₹15,000</span>
                <span className="text-white/70 text-sm"> / year</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Detailed risk profiling', 'Goal-based financial plan', 'Customized MF recommendations', 'Quarterly portfolio reviews', 'Tax optimization strategies', 'Unlimited email support'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-white shrink-0" size={20} />
                    <span className="text-white/90 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/onboarding" className={buttonVariants({ className: "w-full h-12 rounded-xl bg-white text-primary font-semibold hover:bg-gray-50 transition-colors shadow-sm" })}>
                <Text>Start Onboarding</Text>
              </Link>
            </CardContent>
          </Card>

          {/* Plan 3 */}
          <Card className="rounded-3xl border-border flex flex-col hover:border-primary/50 transition-colors">
            <CardContent className="p-8 flex flex-col h-full">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">HNI Wealth</h3>
              <Text className="text-slate-500 text-sm mb-6 h-10">Dedicated advisory for portfolios exceeding ₹1 Crore.</Text>
              <div className="mb-8">
                <span className="text-4xl font-bold font-numbers text-gray-900">₹25,000</span>
                <span className="text-slate-500 text-sm"> / year</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Everything in Comprehensive', 'Direct equity recommendations', 'Monthly portfolio monitoring', 'Priority call support', 'Estate planning guidance'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-success shrink-0" size={20} />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/onboarding" className={buttonVariants({ variant: "outline", className: "w-full h-12 rounded-xl text-primary font-semibold hover:bg-primary/5 transition-colors border-primary" })}>
                <Text>Contact Us</Text>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
