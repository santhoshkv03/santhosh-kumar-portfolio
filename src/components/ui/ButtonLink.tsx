import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './ButtonLink.module.scss';

interface ButtonLinkProps extends ComponentPropsWithoutRef<'a'> {
  variant?: 'primary' | 'secondary';
  external?: boolean;
}

export function ButtonLink({
  variant = 'primary',
  external = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a className={clsx(styles.button, styles[variant], className)} {...externalProps} {...rest}>
      {children}
    </a>
  );
}
