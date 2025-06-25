import * as React from 'react';
import { cn } from '@/lib/utils';

interface SecondaryLinkProps {
  prefixText: string;
  linkText: string;
  href: string;
  className?: string;
}

const SecondaryLink: React.FC<SecondaryLinkProps> = ({
  prefixText,
  linkText,
  href,
  className,
}) => {
  return (
    <p className={cn('text-center text-sm text-muted-foreground', className)}>
      {prefixText}{' '}
      <a
        href={href}
        className="font-medium text-card-foreground/90 underline-offset-4 hover:text-card-foreground hover:underline"
      >
        {linkText}
      </a>
    </p>
  );
};

SecondaryLink.displayName = 'SecondaryLink';

export default SecondaryLink;
