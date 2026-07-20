import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isDashboard = location.pathname.startsWith('/dashboard');
  if (isDashboard) return null; // Dashboard has its own layout

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Calculators', path: '/calculators' },
    { name: 'Compliance', path: '/compliance' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-premium transition-transform group-hover:scale-105">
                <ShieldCheck size={24} />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-primary tracking-tight block leading-tight">RIA</span>
                <span className="text-[10px] uppercase tracking-wider text-secondary font-semibold block">Advisory Services</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 border-l border-border pl-8">
              <Link to="/onboarding" className={buttonVariants({ variant: "outline", className: "rounded-full h-10 px-5 text-slate-600 hover:bg-slate-50 border-border" })}>
                <Text className="text-sm font-medium">Client Login</Text>
              </Link>
              <Link to="/onboarding" className={buttonVariants({ className: "rounded-full h-10 px-5" })}>
                <Text className="text-sm font-medium">Become a Client</Text>
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
              <Link to="/onboarding" onClick={() => setIsOpen(false)} className={buttonVariants({ variant: "outline", className: "w-full justify-center h-10 border-primary text-primary hover:bg-primary/5" })}>
                <Text className="text-base font-medium">Client Login</Text>
              </Link>
              <Link to="/onboarding" onClick={() => setIsOpen(false)} className={buttonVariants({ className: "w-full justify-center h-10" })}>
                <Text className="text-base font-medium">Become a Client</Text>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
