'use client';

import { User } from '@prisma/client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type initialState = {
  user: User | null;
};

type SessionProviderProps = {
  children: React.ReactNode;
  user: User | null;
};

const SessionContext = createContext<initialState | undefined>(undefined);

export const SessionProvider: React.FC<SessionProviderProps> = ({
  children,
  user,
}) => {
  return (
    <SessionContext.Provider value={{ user }}>
      {children}
    </SessionContext.Provider>
  );
};

// Custom hook to use the session context
export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};