
import type { HTMLAttributes, ReactNode } from 'react';

type ArticleProps = HTMLAttributes<HTMLElement> & {
    children?: ReactNode;
};

export const Article = ({ children, ...rest }: ArticleProps) => {
    return (
        <article {...rest} className="min-h-screen bg-gray-100">
            {children}
        </article>
    );
};
