import { ReactNode } from 'react';
import classNames from 'classnames'

interface CardProps {
  children: ReactNode;
  className: string
}

export const Card = ({ children, className: parentClassName }: CardProps) => (
  <div className={classNames(parentClassName, "inline-block p-3 md:p-12 m-auto text-center bg-primary center rounded-lg")}>{children}</div>
);
