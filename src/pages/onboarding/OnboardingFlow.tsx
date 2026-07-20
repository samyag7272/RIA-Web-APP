import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Check, ArrowRight, ArrowLeft, Upload, FileSignature, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Card, CardContent } from '@/components/ui/card';

export default function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  
  const steps = [
    { id: 1, title: 'Personal Details' },
    { id: 2, title: 'Financial Profile' },
    { id: 3, title: 'Risk Assessment' },
    { id: 4, title: 'Agreement & Payment' }
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else navigate('/dashboard');
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-white border-b border-border py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
            <ShieldCheck size={18} />
          </div>
          <span className="font-heading font-bold text-gray-900">RIA Onboarding</span>
        </div>
        <Button variant="ghost" onClick={() => navigate('/')} className="text-gray-500 hover:text-gray-900">
          <Text className="text-sm font-medium">Cancel</Text>
        </Button>
      </div>

      <div className="flex-1 max-w-3xl w-full mx-auto px-4 py-12 flex flex-col">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full -z-10" />
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full -z-10 transition-all duration-500 ease-in-out" 
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
            
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center gap-2 bg-gray-50">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors border-2 ${
                  step > s.id ? 'bg-primary border-primary text-white' :
                  step === s.id ? 'bg-white border-primary text-primary shadow-premium' :
                  'bg-white border-gray-200 text-gray-400'
                }`}>
                  {step > s.id ? <Check size={18} /> : s.id}
                </div>
                <span className={`text-xs font-medium hidden sm:block ${step >= s.id ? 'text-gray-900' : 'text-gray-400'}`}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <Card className="rounded-2xl shadow-premium border-border flex-1">
          <CardContent className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {step === 1 && <PersonalDetails />}
                {step === 2 && <FinancialProfile />}
                {step === 3 && <RiskAssessment />}
                {step === 4 && <AgreementPayment />}
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>

        {/* Footer Actions */}
        <div className="mt-8 flex justify-between items-center">
          <Button 
            variant="ghost"
            onClick={handleBack}
            className={`flex items-center gap-2 px-6 h-12 text-gray-600 font-medium hover:text-gray-900 ${step === 1 ? 'invisible' : ''}`}
          >
            <ArrowLeft size={18} />
            <Text>Back</Text>
          </Button>
          
          <Button 
            onClick={handleNext}
            className="flex items-center gap-2 px-8 h-12 rounded-xl font-medium shadow-premium"
          >
            <Text>{step === 4 ? 'Complete Payment & Login' : 'Continue'}</Text>
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}

function PersonalDetails() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Personal Details</h2>
        <p className="text-gray-500 text-sm">Please provide your basic information as per your PAN card.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow" placeholder="e.g. John Doe" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">PAN Number</label>
          <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow uppercase font-mono" placeholder="ABCDE1234F" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Date of Birth</label>
          <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow text-gray-700" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Occupation</label>
          <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-white text-gray-700">
            <option>Salaried</option>
            <option>Self-Employed</option>
            <option>Business</option>
            <option>Retired</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function FinancialProfile() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Financial Profile</h2>
        <p className="text-gray-500 text-sm">Help us understand your current financial standing.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Annual Income (₹)</label>
          <input type="number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow font-mono" placeholder="1500000" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Monthly Expenses (₹)</label>
          <input type="number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow font-mono" placeholder="50000" />
        </div>
      </div>
      
      <div className="pt-4 border-t border-border">
        <h3 className="font-semibold text-gray-900 mb-4">Current Investments (Approx Value)</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {['Mutual Funds', 'Stocks', 'Fixed Deposits', 'Real Estate', 'Gold', 'PPF/EPF'].map(item => (
            <div key={item} className="space-y-2">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">{item}</label>
              <input type="number" className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-shadow font-mono text-sm" placeholder="0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RiskAssessment() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Risk Profiling</h2>
        <p className="text-gray-500 text-sm">Answer a few questions to determine your risk appetite.</p>
      </div>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="font-medium text-gray-900">1. What is your primary goal for investing?</p>
          <div className="space-y-3">
            {['Capital preservation (Low Risk)', 'Stable growth with income (Moderate Risk)', 'Aggressive wealth creation (High Risk)'].map((opt, i) => (
              <label key={i} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                <input type="radio" name="q1" className="w-4 h-4 text-primary focus:ring-primary border-gray-300" />
                <span className="text-gray-700">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-medium text-gray-900">2. If your portfolio drops 20% in a month, what would you do?</p>
          <div className="space-y-3">
            {['Sell everything immediately', 'Wait for it to recover', 'Invest more at lower prices'].map((opt, i) => (
              <label key={i} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                <input type="radio" name="q2" className="w-4 h-4 text-primary focus:ring-primary border-gray-300" />
                <span className="text-gray-700">{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AgreementPayment() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Agreement & Payment</h2>
        <p className="text-gray-500 text-sm">Review the advisory agreement and pay the fee to start.</p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl border border-border flex gap-4">
        <FileSignature className="text-primary shrink-0" size={24} />
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">RIA Advisory Agreement</h4>
          <p className="text-sm text-gray-600 mb-4">By proceeding, you agree to our terms of service, fee structure, and consent to receive advisory services.</p>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary" />
            <span className="text-sm text-gray-700 font-medium">I have read and agree to the Advisory Agreement and Disclosures.</span>
          </label>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Fee Payment</h4>
        <div className="bg-white border-2 border-primary rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">ANNUAL PLAN</div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h5 className="font-bold text-lg text-gray-900">Comprehensive Advisory</h5>
              <p className="text-sm text-gray-500">Billed annually</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-gray-900 font-mono">₹15,000</span>
              <span className="text-sm text-gray-500"> + GST</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-gray-50 py-3 px-4 rounded-lg">
            <CreditCard size={18} className="text-gray-400" />
            <span>Secure payment via Razorpay / Stripe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
