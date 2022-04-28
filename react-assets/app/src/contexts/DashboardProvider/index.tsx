import React from 'react';
//import { useMatrixActionsDataLoader } from './hooks/useMatrixActionsDataLoader';
//import { ActionType } from '@sustain/dtos';

export type ContextType = {
  isInitialLoading: boolean;
  isLoading: boolean;
  isRefetching: boolean;
};

const DataLoaderContext = React.createContext<ContextType>({} as ContextType);

export const useDashboardDataLoader = (): ContextType => React.useContext(DataLoaderContext);

const DataLoaderProvider: React.FC = ({ children }) => {
  const isInitialLoading: boolean = false,
    isLoading: boolean = false,
    isRefetching: boolean = false;

  const dataLoaderObject = React.useMemo(
    () => ({
      isInitialLoading,
      isLoading,
      isRefetching,
    }),
    [isInitialLoading, isLoading, isRefetching]
  );
  return (
    <DataLoaderContext.Provider value={dataLoaderObject}>{children}</DataLoaderContext.Provider>
  );
};

export default DataLoaderProvider;
