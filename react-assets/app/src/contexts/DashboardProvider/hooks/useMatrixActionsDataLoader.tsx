import React from 'react';
// import { useQuery, NetworkStatus } from '@apollo/client';
// import type { MaterialityMatrixActionsResponse } from '../../../graphql/actions/types';
// import ActionsResolver from '../../../graphql/actions/resolver';
// import isDataCached from 'graphql/utils/isDataCached';
// import { ActionType } from '@sustain/dtos';

// /* This hook is used inside DashboardProvider context */
// export type MatrixActionsDataLoaderType = {
//   isInitialLoading: boolean;
//   isLoading: boolean;
//   data: ActionType[] | undefined;
//   refetchData: () => void;
//   isRefetching: boolean;
// };

// export function useMatrixActionsDataLoader(): MatrixActionsDataLoaderType {
//   const [isInitialLoading, setIsInitialLoading] = React.useState(true);

//   /**
//    * https://www.apollographql.com/docs/react/data/queries/#supported-fetch-policies
//    */
//   const { data: matrixActions, loading, refetch, networkStatus } = useQuery<MaterialityMatrixActionsResponse>(
//     ActionsResolver.queries.GET_MATERIALITY_MATRIX_ACTIONS,
//     {
//       notifyOnNetworkStatusChange: true,
//     }
//   );

//   const allQueriesFinishLoading = loading;

//   React.useEffect(() => {
//     if (
//       (isInitialLoading && !allQueriesFinishLoading) ||
//       isDataCached<MaterialityMatrixActionsResponse, 'getMaterialityMatrixActions'>(
//         matrixActions,
//         'getMaterialityMatrixActions'
//       )
//     ) {
//       setIsInitialLoading(false);
//     }
//   }, [matrixActions, isInitialLoading, allQueriesFinishLoading]);

//   const refetchData = React.useCallback(() => {
//     return refetch();
//   }, [refetch]);

//   return React.useMemo(() => {
//     return {
//       /* isInitialLoading can be used initial loads for more agresive UI waiting message,
//       /* it updates only once when first query is loaded*/
//       isInitialLoading,
//       /* isLoading can be used when query is loading to to mutation update,
//       /* it updates on every query execution*/
//       isLoading: allQueriesFinishLoading,
//       data: matrixActions?.getMaterialityMatrixActions,
//       refetchData,
//       isRefetching: networkStatus === NetworkStatus.refetch,
//     };
//   }, [isInitialLoading, refetchData, networkStatus, matrixActions, allQueriesFinishLoading]);
// }
