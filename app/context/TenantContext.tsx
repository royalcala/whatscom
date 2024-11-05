// app/context/TenantContext.js
import { createContext, useContext } from 'react';

// Create the context
const TenantContext = createContext({ tenantID: null });

// TenantProvider component to provide tenant data to children components
export function TenantProvider({ tenantID, children }) {
  return (
    <TenantContext.Provider value={{ tenantID }}>
      {children}
    </TenantContext.Provider>
  );
}

// Custom hook to access the tenant context easily
export function useTenant() {
  return useContext(TenantContext);
}
