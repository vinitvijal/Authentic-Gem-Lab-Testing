'use client';

import React, { useEffect } from 'react';
import { setupIonicReact } from '@ionic/react';

// Disabling global Ionic structural CSS because it forces html/body to be 'overflow: hidden' and 'position: fixed', blocking normal page scrolling.
// Uncomment these imports in the future if you transition to native IonApp/IonContent layout wrappers.
/*
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
*/

export default function IonicProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    setupIonicReact();
  }, []);

  return <>{children}</>;
}
