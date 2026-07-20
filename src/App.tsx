import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './pages/Landing';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Calculators from './pages/Calculators';
import Compliance from './pages/Compliance';
import OnboardingFlow from './pages/onboarding/OnboardingFlow';
import DashboardLayout from './components/layout/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import Recommendations from './pages/dashboard/Recommendations';

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/compliance" element={<Compliance />} />
        </Route>
        
        <Route path="/onboarding" element={<OnboardingFlow />} />
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="recommendations" element={<Recommendations />} />
          <Route path="reports" element={<div className="p-8 text-gray-500">Reports module coming soon.</div>} />
          <Route path="documents" element={<div className="p-8 text-gray-500">Documents module coming soon.</div>} />
          <Route path="support" element={<div className="p-8 text-gray-500">Support module coming soon.</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
