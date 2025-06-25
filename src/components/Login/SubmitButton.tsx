import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

const SubmitButton: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <Button
      type="submit"
      className={cn(
        'w-full h-12 text-base font-semibold',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
SubmitButton.displayName = 'SubmitButton';

export default SubmitButton;
