import React from 'react';
import { cn } from '@/lib/utils';

type CardAs = 'div' | 'article' | 'section';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  as?: CardAs;
  children: React.ReactNode;
}

export function Card({
  interactive = false,
  as: Component = 'div',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        'card',
        interactive && 'card-interactive cursor-pointer',
        className
      )}
      {...(props as React.HTMLAttributes<HTMLDivElement>)}
    >
      {children}
    </Component>
  );
}
