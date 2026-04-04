import { useEffect } from 'react';
import { useLocation } from 'react-router';

const SDR_PATHS = new Set(['/sdrv1', '/sdrv2']);

let pixelInited = false;

function bootstrapFbqScript(): void {
  if (typeof window === 'undefined' || window.fbq) {
    return;
  }
  const f = window as Window & { fbq?: unknown; _fbq?: unknown };
  const n = (f.fbq = function (
    this: unknown,
    ...cmdArgs: unknown[]
  ) {
    const fbqFn = f.fbq as {
      callMethod?: (...a: unknown[]) => void;
      queue: unknown[][];
    };
    if (fbqFn.callMethod) {
      fbqFn.callMethod.apply(fbqFn, cmdArgs);
    } else {
      fbqFn.queue.push(cmdArgs);
    }
  }) as typeof f.fbq & {
    push: unknown;
    loaded: boolean;
    version: string;
    queue: unknown[][];
    callMethod?: (...a: unknown[]) => void;
  };
  if (!f._fbq) {
    f._fbq = n;
  }
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];
  const t = document.createElement('script');
  t.async = true;
  t.src = 'https://connect.facebook.net/en_US/fbevents.js';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode!.insertBefore(t, s);
}

export function MetaPixelSDR() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!SDR_PATHS.has(pathname)) {
      return;
    }

    const pixelId = import.meta.env.VITE_META_PIXEL_ID?.trim();
    if (!pixelId) {
      return;
    }

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
