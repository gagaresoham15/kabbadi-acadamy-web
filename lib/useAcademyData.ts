'use client';

import { useState, useEffect, useCallback } from 'react';
import { getStoredData, setStoredData } from '@/data/mock/academyData';

/**
 * Universal reactive hook for academy data.
 * Keeps UI synchronized across components and tabs when changes happen in Admin or forms.
 */
export function useAcademyData<T>(key: string, initialFallback: T): [T, (data: T) => void, () => void] {
  const [data, setDataState] = useState<T>(() => initialFallback);

  // Load from localStorage on mount (client-side only)
  useEffect(() => {
    setDataState(getStoredData<T>(key, initialFallback));

    const handleUpdate = (e: Event) => {
      const customEvt = e as CustomEvent;
      if (!customEvt.detail || customEvt.detail.key === key || customEvt.detail.key === 'all') {
        setDataState(getStoredData<T>(key, initialFallback));
      }
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === `kabaddi_${key}` || e.key === null) {
        setDataState(getStoredData<T>(key, initialFallback));
      }
    };

    window.addEventListener('kabaddi_data_update', handleUpdate);
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener('kabaddi_data_update', handleUpdate);
      window.removeEventListener('storage', handleStorage);
    };
  }, [key, initialFallback]);

  const updateData = useCallback((newData: T) => {
    setDataState(newData);
    setStoredData(key, newData);
  }, [key]);

  const resetData = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(`kabaddi_${key}`);
      setDataState(initialFallback);
      window.dispatchEvent(new CustomEvent('kabaddi_data_update', { detail: { key } }));
    }
  }, [key, initialFallback]);

  return [data, updateData, resetData];
}
