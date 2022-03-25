import React from 'react';
import { MDXRemote } from 'next-mdx-remote';

import CodeHighlighter from '@/components/articles/code-highlighter';
import { Article } from '@/models/article.model';
import { PreProps } from 'react-html-props';

interface MDXRenderProps {
  article: Article;
}

function MDXRender({ article }: MDXRenderProps) {
  return (
    <article
      className="prose max-w-none p-3 pb-5 pt-0
        prose-slate dark:prose-invert
        prose-headings:text-dracula-purple-600 dark:prose-headings:text-dracula-purple
        prose-a:text-dracula-pink dark:prose-a:text-dracula-pink
        prose-a:no-underline prose-a:duration-200
        hover:prose-a:text-dracula-pink-500 dark:hover:prose-a:text-dracula-pink-500
        prose-li:marker:text-dracula-dark-500
        prose-pre:rounded-xl
        prose-img:rounded-xl
        prose-h2:scroll-mt-20
        prose-h3:scroll-mt-20
        prose-code:before:content-[''] prose-code:after:content-['']"
    >
      <MDXRemote
        {...article?.content}
        components={{
          pre: (props: PreProps & { children: { props: PreProps } }) => {
            const code = props?.children?.props as PreProps;
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
          code: ({ className, children, ...rest }) => {
            return (
              <code
                className={
                  className +
                  ' text-dracula-orange-600 dark:text-dracula-orange-300'
                }
                {...rest}
              >
                {children}
              </code>
            );
          },
        }}
      />
    </article>
  );
}

export default MDXRender;
