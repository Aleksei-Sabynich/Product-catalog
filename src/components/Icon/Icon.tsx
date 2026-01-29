import clsx from 'clsx';

import type { IconProps } from './model/types';

import style from './Icon.module.scss';
import type { FC, SVGProps } from 'react';

interface IconModule {
  ReactComponent: FC<SVGProps<SVGSVGElement>>;
}

const iconModules = import.meta.glob<IconModule>('@/shared/icons/*.svg', { eager: true });

export const Icon = ({ name, width = 24, height = 24, className, ...props }: IconProps) => {
  const iconModule = iconModules[`/src/shared/icons/${name}.svg`];

  if (!iconModule) return null;

  const IconComponent = iconModule.ReactComponent;
  return (
    <IconComponent
      className={clsx(style.icon, className)}
      width={width}
      height={height}
      {...props}
    />
  );
};
