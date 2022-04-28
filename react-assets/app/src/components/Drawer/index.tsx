import React, { useMemo } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import HouseIcon from '@material-ui/icons/House';
import CommentIcon from '@material-ui/icons/Comment';
import ListIcon from '@material-ui/icons/List';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EcoIcon from '@material-ui/icons/Eco';
import { useLocation } from 'react-router-dom';
import { useLayout } from '../AppLayout/context/LayoutProvider';
import useStyles from './styles';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GroupIcon from '@material-ui/icons/Group';
import PaymentIcon from '@material-ui/icons/Payment';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import WorkIcon from '@material-ui/icons/Work';
//import { useFlags } from 'launchdarkly-react-client-sdk';
//import useCustomerDataLoader from 'hooks/useCustomerDataLoader';
import type { MenuItemPropWithItems } from './types';
//import defaultCompanyAvatar from 'assets/company-avatar.svg';
import { useProfile } from '../../contexts/ProfileProvider';
import classnames from 'classnames';

const actionManagenet: MenuItemPropWithItems = {
  text: 'Discover',
  icon: ListIcon,
  keyValue: 'action-management',
  path: '/action-management',
};
const resourses = {
  text: 'Resources',
  icon: MenuBookIcon,
  keyValue: 'blog',
  path: '/external-blog-sustainability',
};
const contactUs = {
  text: 'Contact Us',
  icon: CommentIcon,
  keyValue: 'contact-us',
  path: '/contact-us',
};

const logout = {
  text: 'Sign out',
  icon: PowerSettingsNewIcon,
  keyValue: 'logout',
  path: '/logout',
};

const home = {
  text: 'Home',
  icon: HouseIcon,
  keyValue: 'our-dashboard',
  path: '/dashboard',
};
const actionPlan = {
  text: 'Build',
  icon: LineStyleIcon,
  keyValue: 'action-plan',
  path: '/action-plan',
};
const progressTracker = {
  text: 'Roadmap',
  icon: ViewColumnIcon,
  keyValue: 'progress-tracker',
  path: '/progress-tracker',
};
const carbonManagement = {
  text: 'Carbon Management',
  icon: EcoIcon,
  keyValue: 'carbon-management',
  path: '',
};
const suppliers = {
  text: 'Suppliers',
  icon: LocalShippingIcon,
  keyValue: 'suppliers',
  path: '',
};
const reporting = {
  text: 'Reports',
  icon: EqualizerIcon,
  keyValue: 'reporting',
  path: '/reporting',
};
const policyBuilder = {
  text: 'Policy Handbook',
  icon: WorkIcon,
  keyValue: 'policyBuilder',
  path: '/policy-builder',
  isLocked: false,
};
const calculators = {
  text: 'Impact Calculators',
  icon: ViewComfyIcon,
  keyValue: 'calculator',
  path: '/calculator',
};

const DrawerComponent: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const { isLeftSideOpen } = useLayout();
  const { user } = useProfile();

  // Todo: fix this from the backend
  // Role management is still under development
  const roles = ['admin'];
  const isAdmin = roles.includes('admin');

  // TODO: Get rid of these when flags are no longer needed for the links
  // const {
  //   enableLeftNavCarbonManagement,
  //   enableLeftNavSuppliers,
  //   enableLeftNavCalculators,
  //   enablePolicyBuilder,
  //   enableLogoutOnMenu,
  //   enableCompanyProfile,
  // } = useFlags();

  // //Determine what should be locked
  // const { isLoading: _isCustomerDataLoading, data: customerData } = useCustomerDataLoader();

  // if (
  //   customerData &&
  //   customerData.subscriptionTier &&
  //   customerData.subscriptionTier.moduleAccesses
  // ) {
  //   customerData.subscriptionTier.moduleAccesses.forEach((ma) => {
  //     if (ma.moduleAccess?.toLowerCase() === 'deny') {
  //       switch (ma.moduleName) {
  //         case 'PolicyBuilder':
  //           policyBuilder.isLocked = true; //TODO: SubscriptionTierType.POLICY_MODULE
  //           break;
  //         default:
  //           break;
  //       }
  //     }
  //   });
  // }

  // items will have fixed order based on this object below
  // and will be enabled or not if they are depending on a feature flag value
  // const listItems: MenuItemPropWithItems[] = useMemo(() => {
  //   return Object.values({
  //     home,
  //     actionPlan,
  //     actionManagenet,
  //     ...(enableLeftNavCalculators ? { calculators } : undefined),
  //     progressTracker,
  //     ...(enableLeftNavCarbonManagement ? { carbonManagement } : undefined),
  //     ...(enableLeftNavSuppliers ? { suppliers } : undefined),
  //     ...(enablePolicyBuilder ? { policyBuilder } : undefined),
  //     reporting,
  //     resourses,
  //     contactUs,
  //     ...(!enableLogoutOnMenu ? { logout } : undefined),
  //   });
  // }, [
  //   enableLeftNavCalculators,
  //   enableLeftNavCarbonManagement,
  //   enableLeftNavSuppliers,
  //   enablePolicyBuilder,
  //   enableLogoutOnMenu,
  //   customerData,
  //   enableCompanyProfile,
  // ]);

  // const memoListItems = useMemo(() => {
  //   return listItems.map((item) => {
  //     const newItems =
  //       item.items && item.items.length > 0
  //         ? item.items.map((subItem) => ({
  //             ...subItem,
  //             selected: location.pathname.includes(`${item.path}${subItem.path}`),
  //           }))
  //         : undefined;

  //     return {
  //       ...item,
  //       items: newItems,
  //       selected: newItems ? false : location.pathname.includes(item.path),
  //     };
  //   });
  // }, [location.pathname, listItems]);

  //window.dispatchEvent(new Event('searchCleared'));
  const callResize = () => {
    window.dispatchEvent(new Event('resize'));
  };
  return (
    <Drawer
      data-testid="left-nav"
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isLeftSideOpen,
        [classes.drawerClose]: !isLeftSideOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isLeftSideOpen,
          [classes.drawerClose]: !isLeftSideOpen,
          [classes.drawerPaper]: true,
        }),
      }}
      onAnimationEnd={callResize}
    >
      {/* smallSeparator adds spacing between image and start of the menu items */}
      <Box className={classnames(classes.boxSeparator, { smallSeparator: isAdmin })} />
      <List>
        {/* {memoListItems.map((item, index) => {
          return (
            <div key={`dashboard-item-${index}`}>{'item'}</div>
            // <DashboardListItem
            //   key={`dashboard-item-${index}`}
            //   {...item}
            //   isLeftSideOpen={isLeftSideOpen}
            // />
          );
        })} */}
        elementos do menu aqui
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
