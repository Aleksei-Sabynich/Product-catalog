import type { SVGProps } from 'react';

export type IconName =
  | 'sign-in'
  | 'user'
  | 'logo'
  | 'clock'
  | 'map'
  | 'shopping-cart'
  | 'heart'
  | 'logo-w'
  | 'phone'
  | 'price'
  | 'return'
  | 'original'
  | 'star'
  | 'star_gold'
  | 'heart-red'
  | 'empty_cart'
  | 'basket'
  | 'minus'
  | 'plus'
  | 'in_stock'
  | 'out_stock'
  | 'money'
  | 'home'
  | 'frame'
  | 'basket_menu'
  | 'heart_menu'
  | 'user_menu';

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  width?: number | string;
  height?: number | string;
  className?: string;
}
