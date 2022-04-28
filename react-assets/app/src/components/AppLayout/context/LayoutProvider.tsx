import React from 'react';

import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { getIntialState, persistState } from '../../../utils/local-storage-helpers';
import { ACTIONS_TYPES } from './const';
import { useMediaQuery, useTheme } from '@mui/material';
export { ACTIONS_TYPES };

export type ContextType = {
  dispatch: (params: ActionType) => void;
  isLeftSideOpen: boolean;
  isRightSideOpen: boolean;
};

const LayoutContext = React.createContext<ContextType>({} as ContextType);

export const useLayout = (): ContextType => React.useContext(LayoutContext) as ContextType;

type StateType = {
  isLeftSideOpen: boolean;
  isRightSideOpen: boolean;
};

type ActionType = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: Record<string, any>;
};

function reducer(state: StateType, action: ActionType) {
  let newState;
  switch (action.type) {
    case ACTIONS_TYPES.OPEN_CLOSE_LEFT_SIDE:
      newState = { ...state, isLeftSideOpen: !state.isLeftSideOpen };
      break;
    case ACTIONS_TYPES.OPEN_CLOSE_RIGHT_SIDE:
      newState = { ...state, isRightSideOpen: !state.isRightSideOpen };
      break;
    default:
      throw new Error();
  }
  persistState('layout', newState);
  return newState;
}

const getInitialState = (width: number) => {
  const state = {
    isLeftSideOpen: width <= 768 ? false : true,
    isRightSideOpen: !!getIntialState('layout')?.isRightSideOpen,
  };
  return state;
};

const LayoutProvider: React.FC = ({ children }) => {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up('md'));
  const [state, dispatchFunction] = React.useReducer(reducer, getInitialState(width));
  const dispatch = React.useCallback(dispatchFunction, [dispatchFunction]);

  React.useEffect(() => {
    persistState('layout', state);
  }, [width, state]);

  const layoutObject = React.useMemo(
    () => ({
      dispatch,
      isLeftSideOpen: state.isLeftSideOpen,
      isRightSideOpen: state.isRightSideOpen,
    }),
    [state, dispatch]
  );

  return <LayoutContext.Provider value={layoutObject}>{children}</LayoutContext.Provider>;
};

export default LayoutProvider;
