import * as React from 'react';

import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface FormContainerProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

/**
 * A container component for forms, built using Shadcn's Card component.
 * It provides a consistent layout with a fixed width, padding, and vertical spacing for form elements.
 * It forwards a ref to the underlying <form> element and accepts all standard form attributes.
 */
const FormContainer = React.forwardRef<HTMLFormElement, FormContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Card className={cn('w-96', className)}>
        <CardContent className="p-8">
          {/* The form element wraps the children, applying vertical spacing between them */}
          {/* as per the layout requirements (mainContent.container: 'space-y-4'). */}
          <form ref={ref} className="space-y-4" noValidate {...props}>
            {children}
          </form>
        </CardContent>
      </Card>
    );
  }
);

FormContainer.displayName = 'FormContainer';

export default FormContainer;
