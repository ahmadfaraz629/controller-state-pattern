import { createStore } from 'jotai';
import { Provider } from 'jotai/react';
import { ReactNode } from 'react';

// Create a singleton store instance
export const store = createStore();

// Create a provider component
interface JotaiProviderProps {
  children: ReactNode;
}

export const JotaiProvider = ({ children }: JotaiProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};