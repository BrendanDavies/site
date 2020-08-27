import { ReactNode } from 'react';
import classNames from 'classnames'

interface CardProps {
  children: ReactNode;
  className: string
}

export const Card = ({ children, className: parentClassName }: CardProps) => (
  <div className={classNames(parentClassName, "inline-block p-12 m-auto text-center bg-orange bg-opacity-25 center backdrop-blur")}>{children}</div>
);
