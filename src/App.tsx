import { MotionConfig } from 'motion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import EnterpriseCrmDemo from './pages/EnterpriseCrmDemo';
import Home from './pages/Home';
import IronPulseDemo from './pages/IronPulseDemo';
import NotFound from './pages/NotFound';
import StoreFlowDemo from './pages/StoreFlowDemo';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Loader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storeflow-demo" element={<StoreFlowDemo />} />
          <Route path="/enterprise-crm-demo" element={<EnterpriseCrmDemo />} />
          <Route path="/ironpulse-demo" element={<IronPulseDemo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}
