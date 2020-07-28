import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <div className="inline-block p-4 m-auto bg-black bg-opacity-25 center backdrop-blur">{children}</div>
);
