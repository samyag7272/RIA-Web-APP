import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  
  if (isDashboard) return null;

  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <ShieldCheck size={18} />
              </div>
              <span className="font-heading font-bold text-lg text-primary tracking-tight">RIA Advisory</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              SEBI Registered Investment Adviser providing fee-only, conflict-free, and personalized mutual fund advisory services.
            </p>
            <div className="text-sm text-gray-500 font-mono bg-gray-50 p-3 rounded-lg border border-border inline-block">
              SEBI Reg No: INA0000XXXXX
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Calculators', path: '/calculators' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm text-gray-500 hover:text-primary transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-gray-900 mb-6">Compliance</h4>
            <ul className="space-y-4">
              {[
                { name: 'Investor Charter', path: '/compliance#charter' },
                { name: 'Grievance Redressal', path: '/compliance#grievance' },
                { name: 'Privacy Policy', path: '/compliance' },
                { name: 'Terms & Disclosures', path: '/compliance' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm text-gray-500 hover:text-primary transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-gray-900 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin size={18} className="text-gray-400 shrink-0 mt-0.5" />
                <span>123 Financial District, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <Phone size={18} className="text-gray-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <Mail size={18} className="text-gray-400 shrink-0" />
                <span>contact@riaadvisory.in</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} RIA Advisory Services. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 max-w-2xl text-center md:text-right">
            Investments in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
          </p>
        </div>
      </div>
    </footer>
  );
}
