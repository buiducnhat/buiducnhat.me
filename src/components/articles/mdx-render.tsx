import React from 'react';
import { MDXRemote } from 'next-mdx-remote';

import CodeHighlighter from '@/components/articles/code-highlighter';
import { Article } from '@/models/article.model';

interface MDXRenderProps {
  article: Article;
}

function MDXRender({ article }: MDXRenderProps) {
  return (
    <div
      className={
        'prose prose-slate dark:prose-invert ' +
        'prose-headings:text-dracula-pink-700 dark:prose-headings:text-dracula-pink-400 ' +
        'prose-a:text-dracula-pink-600 ' +
        'prose-pre:rounded-xl ' +
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
    </div>
  );
}

export default MDXRender;
