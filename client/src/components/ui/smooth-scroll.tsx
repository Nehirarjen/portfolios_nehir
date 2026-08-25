/* Swiss Editorial Notebook: this wrapper adds the 21st.dev Lenis feel while preserving the portfolio's calm reading rhythm. */
'use client';

import { ReactLenis } from 'lenis/react';
import type { ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        duration: 1.15,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
