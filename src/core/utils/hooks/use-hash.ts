// Updated use-hash hook
'use client';

import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

const useHash = () => {
  const pathname = usePathname();
  
  return useSyncExternalStore(
    // Subscribe function
    (callback) => {
      window.addEventListener('hashchange', callback);
      window.addEventListener('popstate', callback); // Also listen to browser navigation
      return () => {
        window.removeEventListener('hashchange', callback);
        window.removeEventListener('popstate', callback);
      };
    },
    // Get snapshot function (synchronous)
    () => {
      return window.location.hash.replace('#', '');
    },
    // Get server snapshot
    () => ''
  );
};

export default useHash;