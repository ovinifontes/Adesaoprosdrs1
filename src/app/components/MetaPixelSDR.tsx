import { useEffect } from 'react';
import { useLocation } from 'react-router';

/** ID público do pixel; usado se VITE_META_PIXEL_ID não existir no build (ex.: GitHub Pages sem secrets). */
const DEFAULT_META_PIXEL_ID = '3068489500006308';

const SDR_PATHS = new Set(['/sdrv1', '/sdrv2']);

function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

let pixelInited = false;

/** Snippet base da Meta: a fila deve receber `arguments`, não um array spread. */
function bootstrapFbqScript(): void {
  if (typeof window === 'undefined' || window.fbq) {
    return;
  }

  !(function (
    f: Window & { fbq?: unknown; _fbq?: unknown },
    b: Document,
    e: string,
    v: string
  ) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = f as any;
    if (w.fbq) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let n: any;
    n = w.fbq = function () {
      if (n.callMethod) {
        n.callMethod.apply(n, arguments);
      } else {
        n.queue.push(arguments);
      }
    };
    if (!w._fbq) {
      w._fbq = n;
    }
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    const t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    const s = b.getElementsByTagName(e)[0];
    s.parentNode!.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
}

export function MetaPixelSDR() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = normalizePath(pathname);
    if (!SDR_PATHS.has(path)) {
      return;
    }

    const fromEnv = import.meta.env.VITE_META_PIXEL_ID?.trim();
    const pixelId = fromEnv || DEFAULT_META_PIXEL_ID;

    bootstrapFbqScript();
    const fbq = window.fbq;
    if (!fbq) {
      return;
    }

    if (!pixelInited) {
      const testCode = import.meta.env.VITE_META_PIXEL_TEST_CODE?.trim();
      if (testCode) {
        fbq('init', pixelId, {}, { test_event_code: testCode });
      } else {
        fbq('init', pixelId);
      }
      pixelInited = true;
    }

    fbq('track', 'PageView');
  }, [pathname]);

  return null;
}
