
import type { HTMLAttributes, ReactNode } from 'react';

type MainProps = HTMLAttributes<HTMLElement> & {
    children?: ReactNode;
};

export const Section = ({ children, ...rest }: MainProps) => {
    return (
        <section {...rest} className="max-w-7xl mx-auto py-6">
            {children}
        </section>
    );
};
