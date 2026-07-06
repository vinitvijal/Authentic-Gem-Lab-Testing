'use client';

import React, { useEffect } from 'react';
import { setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

export default function IonicProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    setupIonicReact();
  }, []);

  return <>{children}</>;
}
