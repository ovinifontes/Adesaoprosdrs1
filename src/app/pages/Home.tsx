import { Link } from 'react-router';

const BASE_URL = import.meta.env.BASE_URL;

export function Home() {
  return (
    <div className="min-h-screen bg-[#010101] flex flex-col items-center justify-center px-4 py-12">
      <img
        src={`${BASE_URL}logo-adesaopro.png`}
        alt="Adesão Pro"
        className="w-64 md:w-80 h-auto mb-12 object-contain"
        width={320}
        height={120}
      />
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/sdrv1"
          className="px-8 py-4 rounded-xl bg-[#03c355] text-white font-semibold text-lg hover:bg-[#03c355]/90 transition-colors text-center"
        >
          SDR1
        </Link>
        <Link
          to="/sdrv2"
          className="px-8 py-4 rounded-xl border-2 border-[#03c355] text-[#03c355] font-semibold text-lg hover:bg-[#03c355]/10 transition-colors text-center"
        >
          SDR2
        </Link>
      </div>
    </div>
  );
}
