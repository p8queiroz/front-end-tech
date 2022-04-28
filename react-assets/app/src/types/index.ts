import { ApolloQueryResult } from '@apollo/client';

export type RequireOne<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  {
    [P in K]-?: T[P];
  };

export type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

export type WithWildcards<T> = T & { [key: string]: unknown };

export type UseQueryType<TData, ResponseDataType, TVariables, HookParams = any> = (
  params?: HookParams
) => {
  loading: boolean;
  data: ResponseDataType | undefined;
  refetch: (variables?: Partial<TVariables> | undefined) => Promise<ApolloQueryResult<TData>>;
  isRefetching: boolean;
};

export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> };

export type GatedType = 'Allow' | 'Deny' | 'Restricted';
