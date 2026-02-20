import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './app/pages/Home';
import { SDRv1Page } from './app/pages/SDRv1Page';
import { SDRv2Page } from './app/pages/SDRv2Page';
import './styles/index.css';

const base = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '') || '/';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={base}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sdrv1" element={<SDRv1Page />} />
      <Route path="/sdrv2" element={<SDRv2Page />} />
    </Routes>
  </BrowserRouter>
);
