import React from 'react';
import { MDXRemote } from 'next-mdx-remote';

import CodeHighlighter from '@/components/articles/code-highlighter';
import { Article } from '@/models/article.model';

interface MDXRenderProps {
  article: Article;
}

function MDXRender({ article }: MDXRenderProps) {
  return (
    <article
      className={
        'prose max-w-none prose-slate dark:prose-invert ' +
        'prose-headings:text-dracula-purple-600 dark:prose-headings:text-dracula-purple ' +
        'prose-a:text-dracula-pink dark:prose-a:text-dracula-pink ' +
        'prose-a:no-underline prose-a:duration-200 ' +
        'hover:prose-a:text-dracula-pink-500 dark:hover:prose-a:text-dracula-pink-500 ' +
        'prose-li:marker:text-dracula-dark-500 ' +
        'prose-pre:rounded-xl ' +
        'prose-img:rounded-xl ' +
        "prose-code:before:content-[''] prose-code:after:content-['']"
      }
    >
      <MDXRemote
        {...article.content}
        components={{
          pre: (props: any) => {
            const code = props?.children?.props as React.DetailedHTMLProps<
              React.HTMLAttributes<HTMLPreElement>,
              HTMLPreElement
            >;
            const { className, children, ...rest } = code;
            const match = /language-(\w+)/.exec(className || '');

            return !!match ? (
              <CodeHighlighter language={match![1]}>{children}</CodeHighlighter>
            ) : (
              <pre>
                <code className={code.className} {...rest}>
                  {children}
                </code>
              </pre>
            );
          },
        }}
      />
    </article>
  );
}

export default MDXRender;
