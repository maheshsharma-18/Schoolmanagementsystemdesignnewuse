import { useEffect, useState } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function InitializeData() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initData = async () => {
      if (initialized) return;

      try {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-2f5f0fc8/init-mock-data`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log('Mock data initialization:', result);
          setInitialized(true);
        }
      } catch (error) {
        console.error('Error initializing mock data:', error);
      }
    };

    initData();
  }, [initialized]);

  return null;
}
