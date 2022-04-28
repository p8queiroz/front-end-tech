/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
//import { NetworkStatus, useQuery } from '@apollo/client';
import { Redirect } from 'react-router-dom';
//import ROUTE_PATHS from 'router/paths';
//import SIGNUP_ROUTE_PATHS from 'pages/NewSignup/paths';
//import { UserResolver, UserById } from 'graphql/users';
//import { CustomerLocationType, UserType } from '@sustain/dtos';
//import { propOr } from 'ramda';
//import { Spinner } from '@4sided/material-ui-context';
//import { useFlags } from 'launchdarkly-react-client-sdk';
//import { CustomerType } from '@sustain/dtos';
//import { persistState } from 'utils/local-storage-helpers';
//import useCustomerLocationDataLoader from 'hooks/useCustLocDataLoader';
//import { useSignUpSession } from 'hooks/useSignUpSession';
//import { usePendoContext } from 'contexts/Pendo';
//import { useAdb2cDataAdapter } from 'contexts/UserProfileInformation';
//import usePreloadImages from 'hooks/usePreloadImages';

const SIGN_UP_COMPLETE_STATES = [
  'PAYMENT_SUCCESSFUL_SIGN_UP_COMPLETE',
  'PAYMENT_SUBMITTED_SIGN_UP_COMPLETE',
  'NO_PAYMENT_REQUIRED_SIGN_UP_COMPLETE',
];
const redirectToSignUpFlow = (state: string) => {
  if (SIGN_UP_COMPLETE_STATES.includes(state)) {
    return false;
  }
  return true;
};

export type ContextType = {
  user: null; //UserType | null;
  customer: null; //CustomerType | null;
  customerLocations: null; //CustomerLocationType[];
  refetchProfile: null; //() => void;
  isRefetching: boolean;
};

const ProfileContext = React.createContext<ContextType>({} as ContextType);

export const useProfile: () => ContextType = () => React.useContext(ProfileContext);

type ProfileProviderType = {
  userData: {
    userOid: string;
    familyName: string | undefined;
    givenName: string | undefined;
  };
};

const ProfileProvider: React.FC<ProfileProviderType> = ({ userData, children }) => {
  //   const { enableNewSignUp } = useFlags();
  //   const { isLoaded: isPendoLoaded, isReady: isPendoReady } = usePendoContext();

  //   const { setProfileImage } = useAdb2cDataAdapter();
  //   const { preloadImages } = usePreloadImages();
  //   const {
  //     data: dataFromQuery,
  //     loading,
  //     error,
  //     refetch,
  //     networkStatus,
  //   } = useQuery<UserById>(UserResolver.queries.GET_USER_BY_OID, {
  //     variables: { oId: userData.userOid },
  //   });

  //   React.useEffect(() => {
  //     if (dataFromQuery?.userByID.thumbnailImage && dataFromQuery?.userByID.webImage) {
  //       // preloading profile images on browser cache
  //       preloadImages([dataFromQuery?.userByID.thumbnailImage, dataFromQuery?.userByID.webImage]);
  //       setProfileImage({
  //         thumbnailImage: dataFromQuery?.userByID.thumbnailImage,
  //         webImage: dataFromQuery?.userByID.webImage,
  //       });
  //     }
  //   }, [dataFromQuery]);
  // get signup session to check sign up state and payment
  //   const { data: signUpSession, loading: loadingSignUpSession } = useSignUpSession({
  //     userId: Number(dataFromQuery?.userByID.userId),
  //     skip: !dataFromQuery?.userByID.userId,
  //   });

  //   const data = React.useMemo(() => {
  //     if (loading || error) {
  //       return undefined;
  //     }
  //     return dataFromQuery;
  //   }, [dataFromQuery, loading, error]);

  //   const refetchProfile = React.useCallback(refetch, [refetch]);

  //   const userById = propOr({}, 'userByID', data) as UserType;

  //   const customersByUser = propOr([], 'customers', userById) as CustomerType[];

  //   /** @todo: fix this to select correct customer */
  //   const selectedCustomerByDefault = React.useMemo(() => customersByUser[0], [customersByUser]);

  //   if (selectedCustomerByDefault?.customerId) {
  //     persistState('customerData', {
  //       customerId: selectedCustomerByDefault?.customerId,
  //     });
  //   }

  // send data to Pendo
  //   React.useEffect(() => {
  //     if (isPendoLoaded && isPendoReady && userData.userOid && selectedCustomerByDefault) {
  //       // once we have a customerid send it to pendo
  //       pendo.identify({
  //         visitor: {
  //           id: String(userData.userOid),
  //         },
  //         account: {
  //           id: String(selectedCustomerByDefault.customerId),
  //           customerName: selectedCustomerByDefault.name,
  //           subscriptionTierId: String(
  //             selectedCustomerByDefault.subscriptionTier?.subscriptionTierId
  //           ),
  //         },
  //       });
  //     }
  //   }, [isPendoLoaded, isPendoReady, userData.userOid, selectedCustomerByDefault]);

  //   const { data: customerLocations } = useCustomerLocationDataLoader({
  //     skip: !selectedCustomerByDefault?.customerId,
  //   });

  // const custLocations = React.useMemo(() => customerLocations, [customerLocations]);

  //   const profileObject = React.useMemo(
  //     () => ({
  //       user: data?.userByID
  //         ? {
  //             role: data?.userByID.role,
  //             roles: data?.userByID.roles,
  //             userId: data?.userByID.userId,
  //             userOId: data?.userByID.userOId,
  //           }
  //         : null,
  //       customer: selectedCustomerByDefault || null,
  //       customerLocations: custLocations || [],
  //       refetchProfile,
  //       isRefetching: networkStatus === NetworkStatus.refetch,
  //     }),
  //     [data, refetchProfile, selectedCustomerByDefault, custLocations, networkStatus]
  //   );

  // TODO: handle error for query
  //   if (error) {
  //     // @fixme: this needs to be handled with an error
  //     console.log('Error while loading profile', error);
  //     return <Spinner isModuleLoader={true} />;
  //   }
  //   if (loading || loadingSignUpSession) {
  //     return <Spinner isModuleLoader={true} />;
  //   }

  //   // redirect to new sign up flow
  //   /** @todo update this with the last step on the state machine */
  //   if (enableNewSignUp && signUpSession && redirectToSignUpFlow(signUpSession.state)) {
  //     return (
  //       <Redirect
  //         to={{
  //           pathname: `${ROUTE_PATHS.USER_SIGNUP_PATH}${SIGNUP_ROUTE_PATHS.PAYMENT_PATH}`,
  //         }}
  //       />
  //     );
  //   }

  //   if (!selectedCustomerByDefault || !selectedCustomerByDefault.customerId) {
  //     console.warn('Customer ID not available: is user profile valid?');
  //   }

  const profileObject = {
    user: null,
    customer: null,
    customerLocations: null,
    refetchProfile: null,
    isRefetching: false,
  };

  return <ProfileContext.Provider value={profileObject}>{children}</ProfileContext.Provider>;
};

export default ProfileProvider;
