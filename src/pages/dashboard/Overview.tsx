import { TrendingUp, AlertTriangle, FileText, ArrowUpRight, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';

export default function Overview() {
  return (
    <div className="space-y-6">
      
      {/* Welcome Banner */}
      <div className="bg-primary text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">Welcome back, John!</h1>
          <p className="text-white/80">Your personalized mutual fund recommendation report is ready for review.</p>
        </div>
        <Button variant="secondary" className="relative z-10 shrink-0 px-6 h-12 rounded-xl font-semibold shadow-sm">
          View Recommendations
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Risk Profile Card */}
        <Card className="rounded-2xl shadow-premium border-border">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-gray-900">Risk Profile</h3>
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-warning flex items-center justify-center">
                <Activity size={18} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 font-heading mb-1">Aggressive</div>
            <Text className="text-sm text-gray-500 mb-4">Suitable for high growth potential over long term.</Text>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-warning w-3/4 rounded-full"></div>
            </div>
          </CardContent>
        </Card>

        {/* Current Plan Card */}
        <Card className="rounded-2xl shadow-premium border-border">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-gray-900">Advisory Plan</h3>
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-secondary flex items-center justify-center">
                <TrendingUp size={18} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 font-heading mb-1">Comprehensive</div>
            <Text className="text-sm text-gray-500 mb-4">Active till 24 Oct 2024</Text>
            <div className="flex items-center gap-2 text-sm font-medium text-primary cursor-pointer">
              <span>Renew Plan</span>
              <ArrowUpRight size={16} />
            </div>
          </CardContent>
        </Card>

        {/* Next Review */}
        <Card className="rounded-2xl shadow-premium border-border">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-gray-900">Next Review</h3>
              <div className="w-8 h-8 rounded-lg bg-green-50 text-success flex items-center justify-center">
                <FileText size={18} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 font-heading mb-1">Q4 2023</div>
            <Text className="text-sm text-gray-500 mb-4">Scheduled for Jan 15, 2024</Text>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
              <span>Awaiting Quarter End</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="rounded-2xl shadow-premium border-border overflow-hidden">
          <div className="p-6 border-b border-border flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="divide-y divide-border">
            {[
              { title: 'Recommendation Report Generated', date: 'Today, 10:30 AM', icon: FileText, color: 'text-primary bg-primary/10' },
              { title: 'Fee Payment Successful', date: 'Yesterday, 04:15 PM', icon: TrendingUp, color: 'text-success bg-success/10' },
              { title: 'Risk Profiling Completed', date: 'Yesterday, 04:00 PM', icon: Activity, color: 'text-warning bg-warning/10' }
            ].map((activity, i) => (
              <div key={i} className="p-6 flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.color}`}>
                  <activity.icon size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{activity.title}</h4>
                  <Text className="text-xs text-gray-500 mt-1">{activity.date}</Text>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Important Notice */}
        <Card className="bg-orange-50/50 rounded-2xl border-orange-100 shadow-none">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-warning">
                <AlertTriangle size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Action Required</h3>
                <Text className="text-sm text-gray-600 leading-relaxed mb-4">
                  Please review the latest mutual fund recommendations and confirm your execution plan. We have identified high portfolio overlap in your existing investments.
                </Text>
                <button className="text-sm font-medium text-warning hover:text-orange-600 transition-colors">
                  Review Now &rarr;
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
