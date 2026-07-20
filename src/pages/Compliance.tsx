import { ShieldCheck, FileText, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Text } from '@/components/ui/text';

export default function Compliance() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Card className="rounded-2xl shadow-premium border-border mb-8">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <ShieldCheck size={28} />
              </div>
              <h1 className="text-3xl font-heading font-bold text-gray-900">Regulatory & Compliance</h1>
            </div>
            <Text className="text-gray-600 text-lg mb-8 leading-relaxed">
              As a SEBI Registered Investment Adviser (RIA), we are committed to maintaining the highest standards of transparency, integrity, and compliance. Below are our mandatory disclosures and investor resources.
            </Text>

            <div className="grid md:grid-cols-2 gap-8 p-6 bg-gray-50 rounded-xl border border-border mb-12">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Adviser Details</h3>
                <ul className="space-y-4">
                  <li>
                    <span className="block text-xs text-gray-500 mb-1">Registration Name</span>
                    <span className="font-medium text-gray-900">RIA Advisory Services</span>
                  </li>
                  <li>
                    <span className="block text-xs text-gray-500 mb-1">SEBI Registration Number</span>
                    <span className="font-mono font-semibold text-primary">INA0000XXXXX</span>
                  </li>
                  <li>
                    <span className="block text-xs text-gray-500 mb-1">BASL Membership ID</span>
                    <span className="font-mono font-medium text-gray-900">BASLXXXX</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Contact Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-gray-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-900">123 Financial District, Mumbai, Maharashtra 400001</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-gray-400 shrink-0" />
                    <span className="text-sm text-gray-900">+91 98765 43210</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-gray-400 shrink-0" />
                    <span className="text-sm text-gray-900">compliance@riaadvisory.in</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-12">
              <section id="charter">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="text-primary" size={24} />
                  <h2 className="text-2xl font-heading font-bold text-gray-900">Investor Charter</h2>
                </div>
                <div className="prose prose-blue max-w-none text-gray-600">
                  <p><strong>Vision:</strong> Invest with knowledge & safety.</p>
                  <p><strong>Mission:</strong> Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.</p>
                  <h4 className="font-medium text-gray-900 mt-6 mb-2">Details of business transacted:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Preparation of financial plan & investment strategy.</li>
                    <li>Analyzing and recommending mutual fund portfolios.</li>
                    <li>Periodic review and rebalancing.</li>
                  </ul>
                </div>
              </section>

              <section id="disclosures">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="text-primary" size={24} />
                  <h2 className="text-2xl font-heading font-bold text-gray-900">Mandatory Disclosures</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p><strong>Conflict of Interest:</strong> We are a fee-only advisory firm. We do not earn any commissions, brokerages, or referral fees from product manufacturers. We recommend direct plans of mutual funds.</p>
                  <p><strong>Risk Disclosure:</strong> Investments in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.</p>
                </div>
              </section>

              <section id="grievance">
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="text-primary" size={24} />
                  <h2 className="text-2xl font-heading font-bold text-gray-900">Grievance Redressal</h2>
                </div>
                <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100 text-gray-600">
                  <p className="mb-4">If you have any grievances or complaints, please reach out to our grievance officer:</p>
                  <ul className="space-y-2 mb-6">
                    <li><strong>Name:</strong> Compliance Officer</li>
                    <li><strong>Email:</strong> grievances@riaadvisory.in</li>
                    <li><strong>Phone:</strong> +91 98765 43211</li>
                  </ul>
                  <p className="text-sm">
                    If the complaint is not resolved, you may lodge your complaint on the SEBI SCORES platform (scores.gov.in) or SMART ODR portal (smartodr.in).
                  </p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
