import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';

export type IconType = OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;

export type MenuItemProp = {
  text: string;
  icon?: IconType;
  defaultAvatar?: string;
  keyValue: string;
  path: string;
  isLocked?: boolean;
  selected?: boolean;
};

export type MenuItemPropWithItems = MenuItemProp & { items?: MenuItemProp[] };
